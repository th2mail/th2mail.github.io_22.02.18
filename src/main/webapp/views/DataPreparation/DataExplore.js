/***************************************************
 * 데이터 탐험 (Pandas Profiler & SweetViz)
 **************************************************/
export default class DataExplore {

  constructor(root, category) {    
    this.root = root;
    this.root.innerHTML = this.getCSS() + this.getJS() + this.getHTML();
    this.category = category;
    this.aIframe = this.initIFrame();
    this.group_id = "";
    this.columns = "";
      
    this.initControl();
    this.initEvent();
  }

  initIFrame() {
    var aIframe = document.createElement("iframe");
    aIframe.setAttribute("id", "iframe");
    aIframe.setAttribute("name", "iframe");
    aIframe.style.width = "100%";
    aIframe.style.height = "100%"; 
    return aIframe;
  }

  // 컨트롤 초기화
  initControl() {  
    const _this = this;

    $("#mainTitle").text(this.category);

    // 제목 : Pandas Profiler 또는 SweetViz
    $("#head-title").text(this.category);

    // 실행 버튼 클릭 이벤트
    $("#btnRun").click(function () {     
      _this.check_checkbox("run");      
    });

    // 고객 목록 조회 (selectBox)    
    this.selectCustomerList(); 
  }

  // 이벤트 초기화
  initEvent() {
    const _this = this;

    // 고객 목록 selectBox change 이벤트 등록
    $('#customer-sb').change(function () {
      var customerId = $(this).val(); // 선택한 고객의 value를 가져온다.      
      
      if (customerId == "") {
        $(`#group-sb option`).remove();
        $(`#group-sb`).append(`<option value="">선택</option>`);

        $("#sensorItem-ul").children().remove();
        $("#sensorList").text("선택");
      } else {
        _this.selectGroupList(customerId); // 그룹 목록 조회 (selectBox)
      }

      const sensorList = document.getElementById('sensorList');
      sensorList.classList.remove('active');
    });

    // 그룹 목록 selectBox change 이벤트 등록
    $('#group-sb').change(function () {
      var groupId = $(this).val(); // 선택한 그룹의 value를 가져온다.

      if (groupId == "") {
        $("#sensorItem-ul").children().remove();
        $("#sensorList").text("선택");
      } else {
        _this.group_id = groupId;
        _this.selectSensorList(groupId, _this); // 그룹 센서 목록 조회 (selectBox)
      }

      const sensorList = document.getElementById('sensorList');
      sensorList.classList.remove('active');
    });

    // 센서 목록 selectBox change 이벤트 등록
    $("#sensorList").click(function () {
      let sensorItem_count = $('input[name="sensorItem"]').length;

      if (sensorItem_count != 0) {
        const sensorItem = document.querySelector('#sensorItem');
        sensorItem.classList.toggle('active');
      }
    });

    // 센서 목록 선택 후 이벤트 등록
    $("#data-explore").click(function (e) {
      if (!$(e.target).hasClass('sensor')) {
        const sensorItem = document.querySelector('#sensorItem');
        sensorItem.classList.remove('active');

        _this.check_checkbox();
      }   
    });    

    $("#btnConfirm").click(function () {
      _this.check_checkbox("confirm");
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e) {
      var LayerPopup = $(".layer-popup");
      var ModalDialog = $(".modal-dialog");
      if (LayerPopup.has(e.target).length === 0) {
        LayerPopup.removeClass("show");
        ModalDialog.removeClass("show");
        
        // const dimmed = document.querySelector('.dimmed');
        // dimmed.classList.remove('active');
      } 
    });
  }

  // 고객 목록 조회 (selectBox)
  selectCustomerList() {
    var param = { "group_user": "animal5127" };

    $.ajax({
      url: "http://localhost:1234/explorer/customer",
      data: JSON.stringify(param),
      method: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) { 
      $(`#customer-sb option`).remove();
      $(`#customer-sb`).append(`<option value="">선택</option>`);
        
      JSON.parse(json).response.body.customers.forEach(customer => {
        $(`#customer-sb`).append(`<option value="${customer.customer_id}">${customer.customer_id}</option>`);
      });
    })
    .fail(function(xhr, status, errorThrown) {
      // console.log("오류가 발생하였습니다.");
      // console.log("오류명: " + errorThrown);
      // console.log("상태: " + status);
    })
    .always(function(xhr, status) {
      // console.log("고객 목록 조회 요청이 완료되었습니다");
    });
  }

  // 그룹 목록 조회 (selectBox)
  selectGroupList(customerId) {    
    var param = {
      "group_user": "animal5127",
      "customer_id": customerId
    };

    $.ajax({
      url: "http://localhost:1234/explorer/group",
      data: JSON.stringify(param),
      method: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) { 
      $(`#group-sb option`).remove();
      $(`#group-sb`).append(`<option value="">선택</option>`);

      JSON.parse(json).response.body.groups.forEach(group => {
        $(`#group-sb`).append(`<option value="${group.group_id}">${group.group_name}</option>`);
      });
    })
    .fail(function(xhr, status, errorThrown) {
      // console.log("오류가 발생하였습니다.");
      // console.log("오류명: " + errorThrown);
      // console.log("상태: " + status);
    })
    .always(function(xhr, status) { 
      // console.log("그룹 목록 조회 요청이 완료되었습니다");
    });
  }  

  // 그룹 센서 목록 조회
  selectSensorList(groupId, _this) {
    var param = { "group_id": groupId };    
    
    $.ajax({
      type: "POST",
      url: "http://localhost:1234/explorer/column_list",
      data: JSON.stringify(param),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) {
      $("#sensorItem-ul").append(`<li class="sensor"><input type="checkbox" name="sensorItem" class="sensor" id="all" checked>전체</li>`);
      $("#all").click(function() {
        _this.check_all(this);
      });

      let column_count = JSON.parse(json).response.body.columns.length;
      if (column_count > 0) {
        const sensorList = document.getElementById('sensorList');
        sensorList.classList.add('active');
      }
        
      JSON.parse(json).response.body.columns.forEach(column => {
        $("#sensorItem-ul").append(`
          <li class="sensor">
            <input type="checkbox" name="sensorItem" id="${column.column_name}" class="sensor" checked>${column.column_name}
          </li>`
        );
      });

      _this.columns = "";
      let selectedCount = 0;
      $('input:checkbox[name="sensorItem"]').each(function() {
        if (this.checked) { // checked 처리된 항목의 값
          if (this.id != "all") {
            _this.columns += this.id + ",";
            selectedCount += 1;
          }
        }
      });
      _this.columns = _this.columns.slice(0, -1);
      $("#sensorList").text(`센서 ${selectedCount}개`);
    })
    .fail(function(xhr, status, errorThrown) {
      // console.log("오류가 발생하였습니다.");
      // console.log("오류명: " + errorThrown);
      // console.log("상태: " + status);
    })
    .always(function(xhr, status) {
      // console.log("그룹 센서 목록 조회 요청이 완료되었습니다");
    });
  }

  check_checkbox(order) {
    const _this = this;
    this.columns = "";
    let selectedCount = 0;

    $('input:checkbox[name="sensorItem"]').each(function() {
      if (this.checked) { // checked 처리된 항목의 값
        if (this.id != "all") {
          _this.columns += this.id + ",";
          selectedCount += 1;
        }
      }
    });
    this.columns = this.columns.slice(0, -1);
    if ($("#sensorList").text() != "선택") {
      $("#sensorList").text(`센서 ${selectedCount}개`);
    }

    if (order != undefined && order == "confirm") {
      this.check_confirm();
    } else if (order != undefined && order == "run") {
      this.check_run();
    }
  }

  check_confirm() {
    let sensor_count = $("#sensorList").text();

    if (sensor_count != "선택" && sensor_count != "센서 0개") {
      let layer_popup = document.getElementById('layer-popup');
      let modal_dialog = document.querySelector('.modal-dialog');
      console.log(`modal_dialog = ${modal_dialog}`);
      layer_popup.classList.add('show');
      modal_dialog.classList.add('show');

      let arr_column = this.columns.split(",");
      let print_column = ``;
      let count = 1;

      arr_column.forEach(column => {
        print_column += `
          <div>
            <span>${count}.</span>
            <span>${column}</span>
          </div>
        `;
        count += 1;
      });

      $(".modal-content").html(print_column);

      // const dimmed = document.querySelector('.dimmed');
      // dimmed.classList.toggle('active');
    } else {
      alert(`센서를 선택해주세요.`);
    }
  }

  check_run() {
    if (this.group_id.length > 0 && this.columns.length > 0) {
      this.aIframe.src = `src/main/webapp/views/DataPreparation/DataExplore.html?page=${this.category}&group_id=${this.group_id}&columns=${this.columns}`;
      document.getElementById("result").append(this.aIframe);

      $(".blocking-popup").addClass("show");
      $("#loading").addClass("spinner");
    } else {
      alert(`그룹명과 센서명을 선택해주세요.`);
    }
  }

  check_all($this) {
    if ($this.checked) {
      $('input:checkbox[name="sensorItem"]').each(function () {
        this.checked = true;
      });
    } else {
      $('input:checkbox[name="sensorItem"]').each(function () {
        this.checked = false;
      });
    }    
  }

  getJS() { 
    return `
      <script type="text/javascript">
        function example(item) {
          console.log(item);
        }
      <\/script>
    `;
  }
  
  getCSS() {
    return `
      
    `;
  }

  getHTML() {
    return `
      <section id="data-explore">    

        <div class="title">
          <i></i>
          <span>센서 선택 및 실행</span>
        </div>

        <div id="condition">
          <div class="article">
            <label>고객명</label>
            <select id="customer-sb" class="sel"><option value="">선택</option></select>
            <div class="select-arrow one"></div>
          </div>
          <div class="article">
            <label>그룹명</label>
            <select id="group-sb" class="sel"><option value="">선택</option></select>
            <div class="select-arrow two"></div>
          </div>
          <div class="article">
            <label>센서명</label>
            <div id="sensorContainer">
              <div id="sensorList" class="sel sensor">선택</div>
              <div class="select-arrow three"></div>
              <div id="sensorItem" class="sensor">
                <ul id="sensorItem-ul" class="sensor"></ul>                  
              </div>
            </div>
            <input type="button" id="btnConfirm" value="확인"/>  
          </div>
          <div class="article">    
            <input type="button" id="btnRun" class="run" value="실행" />
          </div>            
        </div>

        <div class="title">
          <i></i>
          <span>실행 결과</span>
        </div>

        <div id="result">
          <div id="pandas"></div>
        </div> 

        <div class="layer-container">
          <div class="layer-popup" id="layer-popup">
            <div class="modal-dialog">
              <h1>선택 센서 정보</h1>
              <div class="modal-content">
                팝업 내용입니다.
              </div>
            </div>
          </div>
        </div>

        <div class="blocking-popup"></div>

      </section>      
    `;
  }
}

// 메시지 수신 이벤트 등록
window.addEventListener('message', handleDocHeightMsg, false); 

// 메시지 수신 처리를 위한 함수
function handleDocHeightMsg(eventObj) { 
  if (eventObj.data == 'finished') {
    $(".blocking-popup").removeClass("show");
    $("#loading").removeClass("spinner");
  }
}
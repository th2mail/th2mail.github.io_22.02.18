/***************************************************
 * 센서 데이터 선택
 **************************************************/
export default class DataSelect {

  constructor(root) {    
    const strJS = this.getJS();
    const strCSS = this.getCSS();

    this.root = root;
    this.root.innerHTML = this.getCSS() + this.getJS() + this.getHTML();
    this.detachItems = new Map();

    this.initCSS();
    this.initControl();
    this.initEvent();
  }

  initList() {
    $("#selection-result").html("");
    $("#list").html("");

    $('.listStyle-one').removeClass('active');
    $('.listStyle-other').addClass('active');

    $('.battery-full').removeClass('active');
    $('.battery-empty').addClass('active');
  }

  initCSS() {

  }

  // 컨트롤 초기화
  initControl() {  
    $("#mainTitle").text(`센서 데이터 선택`);

    // 그룹 목록 조회 (selectBox)
    this.selectGroupList();

    // 고객 목록 조회 (selectBox)    
    this.selectCustomerList(); 
  }

  // 이벤트 초기화
  initEvent() {
    const _this = this;

    // 그룹 목록 selectBox change 이벤트 등록
    $('#group-sb').change(function () {
      _this.initList();
      
      var groupId = $(this).val();                 // 선택한 그룹의 value를 가져온다.
      _this.selectGroupSensorList(groupId, _this); // 그룹 센서 목록 조회 (selectBox)
    });

    // 고객 목록 selectBox change 이벤트 등록
    $('#customer-sb').change(function () {
      _this.initList();
      $("#group-sb").val("").prop("selected", true);
      
      var customerId = $(this).val();    // 선택한 고객의 value를 가져온다.
      _this.selectSiteList(customerId);  // 사이트 목록 조회 (selectBox)
    });

    // 사이트 목록 selectBox change 이벤트 등록
    $('#site-sb').change(function () {
      _this.initList();
      $("#group-sb").val("").prop("selected", true);

      var siteId = $(this).val();             // 선택한 사이트의 value를 가져온다. 
      _this.selectSensorList(siteId, _this);  // 센서 목록 조회 (Grid)
    });
    
    /**
     * 한줄 또는 3개씩 보여주기
     */
    $('.listStyle-one').off('click').on('click', function () { // 한 줄로 보여주기
      $('.listStyle-one').removeClass('active');
      $('.listStyle-other').addClass('active');

      let sensor_items = document.querySelectorAll('#selection-result .sensor');
      sensor_items.forEach((sensor_item) => {
        sensor_item.classList.toggle('change');
      });
    });
    $('.listStyle-other').off('click').on('click', function () { // 3개씩 보여주기
      $('.listStyle-other').removeClass('active');
      $('.listStyle-one').addClass('active');

      let sensor_items = document.querySelectorAll('#selection-result .sensor');
      sensor_items.forEach((sensor_item) => {
        sensor_item.classList.toggle('change');
      });
    });

    /**
     * 전체 선택 또는 해제
     */
    $('.battery-full').click(function () { // 전체 선택 해제
      $('.battery-full').removeClass('active');
      $('.battery-empty').addClass('active');

      let sensor_items = document.querySelectorAll('#selection-result .sensor');
      sensor_items.forEach((sensor_item) => {
        sensor_item.classList.remove('active');
      });
    });
    $('.battery-empty').click(function () { // 전체 선택
      $('.battery-empty').removeClass('active');
      $('.battery-full').addClass('active');

      let sensor_items = document.querySelectorAll('#selection-result .sensor');
      sensor_items.forEach((sensor_item) => {
        sensor_item.classList.remove('active');
        sensor_item.classList.add('active');
      });
    });

    // 더하기 버튼을 클릭했을 때 발생하는 이벤트
    $('.plus').click(function () {
      let sensor_items = document.querySelectorAll('#selection-result .sensor.active');

      sensor_items.forEach((sensor_item) => {
        let id = sensor_item.id;

        // 센서 아이템을 이동시킨다.
        let count = sensor_item.children[0].innerText;
        let sensor_alias = sensor_item.children[1].innerText;
        let sensor_model = sensor_item.children[2].innerText;
        let sensor_id = sensor_item.children[3].innerText;
        let sensor_type = sensor_item.children[4].innerText;

        let html = `
          <div class='item'>
            <div id='${id}' class='garbage'>     
              <i class="fas fa-trash-alt"></i>       
            </div>
            <div id='${id}' class='sensor'>  
              <span>${count}</span>          
              <span>${sensor_alias}</span>
              <span>${sensor_model}</span>
              <span>${sensor_id}</span>
              <span>${sensor_type}</span>
            </div>
          </div>
        `;
        $('#registration #list').append(html);

        let content = $('#selection-result #' + id).detach();
        _this.detachItems.set(id, content);
        
        _this.initRegisterEvent();
      });
    });

    $("#trash").click(function () {
      var html = ``;

      let sensor_items = document.querySelectorAll('#list .sensor');
      sensor_items.forEach((sensor_item) => {
        let id = sensor_item.id;

        $(`.item #${id}`).parent().remove();
        $("#selection-result").append(_this.detachItems.get(id));

        if (document.getElementById(id) == null) {
          html =
            `<div id='${sensor_item.children[3].innerText}' class='sensor'>
              <span>${sensor_item.children[0].innerText}</span>
              <span>${sensor_item.children[1].innerText}</span>
              <span>${sensor_item.children[2].innerText}</span>
              <span>${sensor_item.children[3].innerText}</span>
              <span>${sensor_item.children[4].innerText}</span>
            </div>`;

          $(`#selection-result`).append(html);
        } else {
          document.getElementById(id).classList.remove('active');
        }
      });
    });

    $("#btnSave").click(function () {
      if ($("#group-title").val() == null
       || $("#group-title").val() == undefined
       || $("#group-title").val().trim() == '') {
        alert(`그룹명을 입력해주세요.`);
        return false;
      }
      
      let ids = [];
      let sensor_items = document.querySelectorAll('#list .sensor');
      sensor_items.forEach((sensor_item) => {
        let id = sensor_item.id;
        let sensor_id = sensor_item.children[3].innerText;
        ids.push({'sensor_id': `${sensor_id}`});
      });   

      let group_user = "animal5127";
      let group_name = $("#group-title").val();
      let customer_id = $("#customer-sb").val();
      let site_id = $("#site-sb").val();      
      
      var param = {
        "group_user": group_user,
        "group_name": group_name,
        "customer_id": customer_id,
        "site_id": site_id,
        "columns": ids
      }

      $.ajax({
        url: "http://localhost:1234/prepare/group_create",
        data: JSON.stringify(param),
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      })
      .done(function (json) {    
        _this.selectGroupList();
      })
      .fail(function(xhr, status, errorThrown) {
        // console.log("오류가 발생하였습니다.");
        // console.log("오류명: " + errorThrown);
        // console.log("상태: " + status);
      })
      .always(function(xhr, status) {
        // console.log("센서 그룹 저장 요청이 완료되었습니다");
      });
    });
  }

  initRegisterEvent() { 
    let _this = this;

    // 등록 목록에서 휴지통을 클릭했을 때 발생하는 이벤트
    $('.item .garbage').click(function () {
      let id = $(this).attr("id");
      $(`.item #${id}`).parent().remove();

      $("#selection-result").append(_this.detachItems.get(id));
      document.getElementById(id).classList.remove('active');
    });
  }

  initGridEvent() {
    let _this = this;

    // 센서 목록을 한번 클릭했을 때 발생하는 이벤트
    $('#selection-result .sensor').click(function() {            
      const id = $(this).attr("id");        
      let selectedSensor = document.getElementById(id);
      selectedSensor.classList.toggle("active");
    });

    // 센서 목록을 더블 클릭했을 때 발생하는 이벤트
    $("#selection-result .sensor").dblclick(function () {
      const id = this.id;        
      let selectedSensor = document.getElementById(id);
      selectedSensor.classList.add("active");

      // 선택한 센서 아이템을 이동시킨다.
      let count        = this.children[0].innerText;
      let sensor_alias = this.children[1].innerText;
      let sensor_model = this.children[2].innerText;
      let sensor_id    = this.children[3].innerText;
      let sensor_type  = this.children[4].innerText;

      let html = `
        <div class='item'> 
          <div id='${id}' class='garbage'>     
            <i class="fas fa-trash-alt"></i>       
          </div>
          <div id='${id}' class='sensor'>            
            <span>${count}</span>
            <span>${sensor_alias}</span>
            <span>${sensor_model}</span>
            <span>${sensor_id}</span>
            <span>${sensor_type}</span>
          </div>
        </div>
      `;
      
      $('#registration #list').append(html);

      let content = $('#selection-result #' + id).detach();
      _this.detachItems.set(id, content);    

      _this.initRegisterEvent();
    });
  }

  // 그룹 목록 조회 (selectBox)
  selectGroupList() {    
    var param = { "group_user": "animal5127" };

    $.ajax({
      url: "http://localhost:1234/prepare/group_list",
      data: JSON.stringify(param),
      method: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) { 
      $(`#group-sb option`).remove();
      $(`#group-sb`).append(`<option value="">선택</option>`);
        
      JSON.parse(json).response.body.sites.forEach(site => {
        $(`#group-sb`).append(`<option value="${site.group_id}">${site.group_name}</option>`);
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

  // 고객 목록 조회 (selectBox)
  selectCustomerList() {
    $.ajax({
      url: "http://localhost:1234/prepare/orders",
      method: "POST",
      dataType: "json"
    })
    .done(function (json) {      
      JSON.parse(json).response.body.orders.forEach(item => {
        $(`#customer-sb`).append(`<option value="${item.customer_id}">${item.customer_id}</option>`);
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

  // 그룹 센서 목록 조회
  selectGroupSensorList(groupId, _this) {
    var param = { "group_id": groupId };    
    
    $.ajax({
      type: "POST",
      url: "http://localhost:1234/prepare/group_select",
      data: JSON.stringify(param),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) {
      const groupId = JSON.parse(json).response.body.df_group[0].group_id;
      const groupName = JSON.parse(json).response.body.df_group[0].group_name;
      const customerId = JSON.parse(json).response.body.df_group[0].customer_id;
      const siteId = JSON.parse(json).response.body.df_group[0].site_id;
        
      // 그룹명 입력
      $("#registration #title").val(groupName);

      // 고객 selectbox 선택
      $("#customer-sb").val(customerId).prop("selected", true);
      _this.selectSiteList(customerId, siteId, JSON.parse(json).response.body.df_sensor_list, _this);  // 사이트 목록 조회 
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

  // 사이트 목록 조회 (selectBox)
  selectSiteList(customerId, siteId, group_sensor_list, _this) {
    var param = { "customer_id": customerId };    
    
    $.ajax({
      type: "POST",
      url: "http://localhost:1234/prepare/sites",
      data: JSON.stringify(param),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) {      
      $(`#site-sb option`).remove();
      $(`#site-sb`).append(`<option value="">선택</option>`);

      JSON.parse(json).response.body.sites.forEach(item => { 
        $(`#site-sb`).append(`<option value="${item.site_id}">${item.fac_nm}</option>`);
      });

      if (siteId != undefined) {
        $("#site-sb").val(siteId).prop("selected", true);         // 사이트 selectbox 선택
        _this.selectSensorList(siteId, _this, group_sensor_list); // 센서 목록 조회 (Grid)
      }
    })
    .fail(function(xhr, status, errorThrown) {
      // console.log("오류가 발생하였습니다.");
      // console.log("오류명: " + errorThrown);
      // console.log("상태: " + status);
    })
    .always(function(xhr, status) {
      // console.log("사이트 목록 조회 요청이 완료되었습니다");
    });
  }

  // 센서 목록 조회 (selectBox)
  selectSensorList(siteId, _this, group_sensor_list) {
    var param = { "site_id": siteId };

    $.ajax({
      type: "POST",
      url: "http://localhost:1234/prepare/sensors",
      data: JSON.stringify(param),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
    .done(function (json) {
      let result_html = ``;
      let list_html = ``;

      let list_count = 1;
      let result_count = 1;
      
      JSON.parse(json).response.body.sites.forEach(item => { // item 변수는 배열 각각의 요소들을 순환한다.
        if (group_sensor_list != undefined) {
          let isExist = false;

          group_sensor_list.forEach(sensor => {            
            if (sensor.sensor_id == item.sensor_id) {
              isExist = true;
            } 
          });

          if (isExist) {
            let content = `
              <div id='${item.sensor_id}' class='sensor'>
                <span>` + list_count + `</span>
                <span>${item.sensor_alias}</span>
                <span>${item.sensor_model}</span>
                <span>${item.sensor_id}</span>
                <span>${item.sensor_type}</span>
              </div>`;
            _this.detachItems.set(`${item.sensor_id}`, content); 

            list_html += `
              <div class='item'> 
                <div id='${item.sensor_id}' class='garbage'>     
                  <i class="fas fa-trash-alt"></i>       
                </div>
                <div id='${item.sensor_id}' class='sensor'>   
                  <span>` + list_count + `</span>
                  <span>${item.sensor_alias}</span>
                  <span>${item.sensor_model}</span>
                  <span>${item.sensor_id}</span>
                  <span>${item.sensor_type}</span>
                </div>
              </div>`;      
            list_count = list_count + 1;
          } else {
            result_html += `  
              <div id='${item.sensor_id}' class='sensor'>
                <span>` + result_count + `</span>
                <span>${item.sensor_alias}</span>
                <span>${item.sensor_model}</span>
                <span>${item.sensor_id}</span>
                <span>${item.sensor_type}</span>
              </div>`;
            result_count = result_count + 1;
          }
        } else {
          let sensor_flag = ``;
          if (item.sensor_flag == 'O') {
            sensor_flag = '광센서'
          } else {
            sensor_flag = '무선';
          }

          result_html += `  
            <div id='${item.sensor_id}' class='sensor'>
              <span>` + result_count + `</span>
              <span>${item.sensor_alias}</span>
              <span>${item.sensor_model}</span>
              <span>${item.sensor_id}</span>
              <span>${item.sensor_type} (${sensor_flag})</span>
            </div>`;
          result_count = result_count + 1;
        }        
      });

      $(`#selection-result`).html(result_html);
      $('#registration #list').html(list_html);

      _this.initGridEvent();
      _this.initRegisterEvent();
    })
    .fail(function(xhr, status, errorThrown) {
      // console.log("오류가 발생하였습니다.");
      // console.log("오류명: " + errorThrown);
      // console.log("상태: " + status);
    })
    .always(function(xhr, status) {
      // console.log("센서 목록 조회 요청이 완료되었습니다");
    });
  }

  getJS() { 
    return `
      <script type="text/javascript">
        function example(item) {
          console.log(item);
        }
      </script>
    `;
  }
  
  getCSS() {
    return `
      <style>
        
      </style>
    `;
  }

  getHTML() {
    return `
      <section id="data-select">
        
        <div id="selection">          
          <div class="title">
            <i></i>
            <span>센서 정보 조회</span>
          </div>

          <div class="search-condition">            
            <label>고객명</label>
            <select id="customer-sb"><option value="">선택</option></select>
            <div class="select-arrow one"></div>
            <label>사이트명</label>
            <select id="site-sb"><option value="">선택</option></select>
            <div class="select-arrow two"></div>
          </div>

          <div class="toolbar">
            <div class="title">
              <i></i>
              <span>센서 조회 결과</span>
            </div>

            <div>
              <span class="listStyle-one"><i class="fas fa-bars"></i></span>
              <span class="listStyle-other active"><i class="fas fa-th"></i></span>
              <span class="battery-full"><i class="fas fa-battery-full"></i></span>
              <span class="battery-empty active"><i class="fas fa-battery-empty"></i></span> 
              <span class="plus"><i class="fas fa-plus"></i></span>
            </div>
          </div>  

          <div id="selection-result"></div>
        </div> 
        <!--// end selection -->          
        
        <div id="registration">
          <div class="title">
            <i></i>
            <span>센서 그룹 조회</span>
          </div>

          <div class="search-condition">
            <label>그룹명</label>
            <select id="group-sb"><option value="">선택</option></select>
            <div class="select-arrow three"></div>
          </div>

          <div class="toolbar"> 
            <div class="title">
              <i></i>
              <span>그룹 조회 결과</span>
            </div>

            <i id="trash" class="fas fa-trash-alt"></i>
          </div>

          <div id="list"></div>

          <div id="register-btn">  
          
            <div class="title">
              <i></i>
              <span>센서 그룹 저장</span>
            </div>

            <div class="btn">        
              <label>그룹명</label>
              <input type="text" id="group-title" />
              <input type="button" id="btnSave" value="저장" />
            </div>
          </div>
          </div>
        </div>
        <!--// end registration -->

      </section>
    `;
  }
}
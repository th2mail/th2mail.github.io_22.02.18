/***************************************************
 * 센서 데이터 로딩 & 프리뷰
 **************************************************/
export default class LoadingPreview {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = this.getHTML();

    this.initCSS();
    this.initEvent();
  }

  initControl() {
    
  }

  initEvent() {

  }

  getHTML() {
    return `
      <section id="loading-preview">

        <div class="title">
          <i></i>
          <span>센서 및 리셈플링 선택</span>
        </div>

        <div id="condition">
          <div>

          </div>
          <div>

          </div>
        </div>

        <div class="title">
          <i></i>
          <span>실행 결과</span>
        </div>

        <div id="result">
          bbb
        </div>

      </section>
    `;
  }

}
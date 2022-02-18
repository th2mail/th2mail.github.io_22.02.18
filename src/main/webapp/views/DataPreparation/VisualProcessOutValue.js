/***************************************************
 * 이상치 시각화 및 처리
 **************************************************/
export default class VisualProcessOutValue {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="visual-process-out-value">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>이상치 시각화 및 처리</h3>
        </div>
        <div class="body">
        </div>
      </section>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}
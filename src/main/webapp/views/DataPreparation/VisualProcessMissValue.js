/***************************************************
 * 결측치 시각화 및 처리
 **************************************************/
export default class VisualProcessMissValue {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="visual-process-miss-value">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>결측치 시각화 및 처리</h3>
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
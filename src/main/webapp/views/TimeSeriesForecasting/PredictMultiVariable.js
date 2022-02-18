/***************************************************
 * 시계열 예측 with 다중 변수
 **************************************************/
export default class PredictMultiVariable {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="predict-multi-variable">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>다변수 예측</h3>
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
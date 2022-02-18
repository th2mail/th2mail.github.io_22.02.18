/***************************************************
 * 시계열 예측 결과 분석
 **************************************************/
export default class PredictResultAnalysis {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="predict-result-analysis">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>시계열 예측 분석</h3>
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
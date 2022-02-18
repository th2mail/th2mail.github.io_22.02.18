/***************************************************
 * 센서 데이터 상관관계 그래프
 **************************************************/
export default class CorrelateGraph {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="correlate-graph">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>상관관계 시각화</h3>
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
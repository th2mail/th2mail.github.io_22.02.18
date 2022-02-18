/***************************************************
 * 시계열 데이터 분해
 **************************************************/
export default class Decompose {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="decompose">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>시계열 데이터 분해</h3>
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
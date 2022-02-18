/***************************************************
 * 헤더
 **************************************************/
export default class Header {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = this.getCSS() + `
      <hgroup>
        <h2>Time Series Sensor Data Forecasting UI</h2>
      </hgroup>      
      <div class="account"> 
        <div id="search-btn" class="las la-search"></div>
        <div id="register-btn" class="las la-registered"></div>       
        <div id="login-btn" class="las la-user-circle"></div>
      </div>
    `;

    this.initCSS();
  }

  initCSS() {
    const searchBtn = document.querySelector('#search-btn');
    const searchFrm = document.querySelector('.search-frm');
    const loginBtn = document.querySelector('#login-btn');
    const loginFrm = document.querySelector('.login-frm');
    const dimmed = document.querySelector('.dimmed');
    
    searchBtn.addEventListener('click', (event) => {
      searchFrm.classList.toggle('active');

      dimmed.classList.remove('active');
      loginFrm.classList.remove('active');
    });

    loginBtn.addEventListener('click', (event) => {
      searchFrm.classList.remove('active');

      dimmed.classList.toggle('active');
      loginFrm.classList.toggle('active');
    });
  }

  getCSS() {
    return `

    `;
  }

}

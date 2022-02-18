import Header from "./Layout/Header.js";
import Nav                    from "./Layout/Nav.js";
import Introduce              from "./Education/Introduce.js";
import DataExplore            from "./DataPreparation/DataExplore.js";

/***************************************************
 * main 클래스
 **************************************************/
export default class Main {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <div id="alianMinWidth"></div>

      <div id="alianWrap">
        <header id="alianHeader"></header>        
        <nav id="alianNav"></nav>
        <div id="alianContent">          
          <div id="alianMain"></div>   
        </div>
      </div>

      <form class="search-frm">
        <label for="search-box" class="las la-search"></label>
        <input type="search" id="search-box" placeholder="Search">
        <i class="las la-arrow-right"></i>
      </form>

      <div class="dimmed"></div>

      <form class="login-frm">
        <div class="title">
          <h2>ALIAN 로그인</h2>
          <i class="las la-times"></i>
        </div>
        <div class="box">
          <input type="text" placeholder="아이디를 입력해 주세요." />
          <input type="password" placeholder="비밀번호를 입력해 주세요." />
        </div>
        <input type="submit" class="btn" value="Enter">
      </form>

      <div id="loading"></div>
    `;

    this.initControl();
    this.initEvent();
  }

  initControl() {
    new Header(document.getElementById("alianHeader"));
    new Nav(document.getElementById("alianNav"));
    new Introduce(document.getElementById("alianMain")); // 처음 로딩 시, 소개 화면을 화면에 출력합니다.
  }

  initEvent() {
    const loginForm = document.querySelector('.login-frm');    
    const loginCloseBtn = document.querySelector('.login-frm i');
    const dimmed = document.querySelector('.dimmed');
    
    // 로그인 창의 "X" 버튼을 클릭하면, 로그인 창과 Dimmed를 Close한다.
    loginCloseBtn.addEventListener('click', (event) => {
      loginForm.classList.remove('active');
      dimmed.classList.remove('active');
    });
  }
}

// 웹 프로그램 시작점
const root = document.getElementById("alian");
new Main(root); // const main = new Main(root);
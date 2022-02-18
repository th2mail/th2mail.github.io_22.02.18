import Introduce from "./../../views/Education/Introduce.js";
import Dashboard              from "./../../views/Education/Dashboard.js";
import DataStatus             from "./../../views/DataPreparation/DataStatus.js";
import DataSelect             from "../DataPreparation/DataSelect.js";
import DataExplore            from "./../../views/DataPreparation/DataExplore.js";
import LoadingPreview         from "./../../views/DataPreparation/LoadingPreview.js"; 
import CorrelateGraph         from "./../../views/DataPreparation/CorrelateGraph.js"; 
import VisualProcessMissValue from "./../../views/DataPreparation/VisualProcessMissValue.js";
import VisualProcessOutValue  from "./../../views/DataPreparation/VisualProcessOutValue.js"; 
import ResampleNormalize      from "./../../views/DataPreparation/ResampleNormalize.js";
import Decompose              from "./../../views/TimeSeriesPreparation/Decompose.js";
import SanityCheckTransform   from "./../../views/TimeSeriesPreparation/SanityCheckTransform.js";
import PredictSingleVariable  from "./../../views/TimeSeriesForecasting/PredictSingleVariable.js";
import PredictMultiVariable   from "./../../views/TimeSeriesForecasting/PredictMultiVariable.js";
import PredictResultAnalysis  from "./../../views/PerformanceAnalysis/PredictResultAnalysis.js";

/***************************************************
 * 네비게이션
 **************************************************/
export default class Navigation {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <ul class="nav_list">

        <li class="menu active" data-title="소개" data-menuid="nav_introduce">
          <a id="nav_introduce">
            <span>소개</span>
          </a>          
        </li>

        <li class="menu" title="대쉬보드" data-menuid="nav_dashboard">
          <a id="nav_dashboard">
            <span>대쉬보드</span>
          </a>
        </li>

        <li class="menu" data-title="센서 데이터 현황" data-menuid="nav_data-status">
          <a id="nav_data-status">
            <span>센서 데이터 현황</span>
          </a>
        </li>

        <li class="menu" data-title="센서 데이터 선택" data-menuid="nav_data-select">
          <a id="nav_data-select">
            <span>센서 데이터 선택</span>
          </a>
        </li>

        <li class="menu" data-title="Pandas Profiler" data-menuid="nav_explore-pandas-profiler">
          <a id="nav_explore-pandas-profiler">
            <span>EDA</span>
          </a>
        </li>

        <li class="menu" data-title="Sweetviz" data-menuid="nav_explore-sweetviz">
          <a id="nav_explore-sweetviz">
            <span>SweetViz (없어질 예정)</span>
          </a>
        </li>

        <li class="menu" data-title="데이터 로딩 & 프리뷰" data-menuid="nav_loading-preview">
          <a id="nav_loading-preview">
            <span>데이터 로딩 & 프리뷰</span>
          </a>
        </li>

        <li class="menu" data-title="상관관계 시각화" data-menuid="nav_correlate-graph">
          <a id="nav_correlate-graph">
            <span>상관관계 시각화</span>
          </a>
        </li>

        <li class="menu" data-title="결측치 시각화 및 처리" data-menuid="nav_visual-process-miss-value">
          <a id="nav_visual-process-miss-value">
            <span>결측치 시각화 및 처리</span>
          </a>
        </li>

        <li class="menu" data-title="이상치 시각화 및 처리" data-menuid="nav_visual-process-out-value">
          <a id="nav_visual-process-out-value">
            <span>이상치 시각화 및 처리</span>
          </a>
        </li>

        <li class="menu" data-title="데이터 전처리" data-menuid="nav_resample-normalize">
          <a id="nav_resample-normalize">
            <span>데이터 전처리</span>
          </a>
        </li>

        <li class="menu" data-title="시계열 데이터 분해" data-menuid="nav_decompose">
          <a id="nav_decompose">
            <span>시계열 데이터 분해</span>
          </a>
        </li>

        <li class="menu" data-title="시계열 정상성 검사 및 변환" data-menuid="nav_sanity-check-Transform">
          <a id="nav_sanity-check-Transform">
            <span>시계열 정상성 검사 및 변환</span>
          </a>
        </li>

        <li class="menu" data-title="단변수 예측" data-menuid="nav_predict-single-variable">
          <a id="nav_predict-single-variable">
            <span>단변수 예측</span>
          </a>
        </li>

        <li class="menu" data-title="다변수 예측" data-menuid="nav_predict-multi-variable">
          <a id="nav_predict-multi-variable">
            <span>다변수 예측</span>
          </a>
        </li>

        <li class="menu" data-title="시계열 예측 분석" data-menuId="nav_predict-result-analysis">
          <a id="nav_predict-result-analysis">
            <span>시계열 예측 분석</span>
          </a>
        </li>
      </ul>
    `;

    this.initEvent();
  }

  initEvent() {
    const _this = this;

    const nav_list = document.querySelector('.nav_list');
    const menus = document.querySelectorAll('.menu');

    // 메뉴를 클릭했을 때 실행되는 이벤트 함수
    nav_list.addEventListener('click', (event) => {
      // 메뉴가 선택됐다는 표시를 지운다.
      menus.forEach((menu) => {
        menu.classList.remove('active');
      });

      // 사용자가 클릭한 메뉴를 선택한다.
      let target = event.target;

      if (target.nodeName == 'SPAN') {
        target = target.parentNode.parentNode;
      } else if (target.nodeName == 'A') {
        target = target.parentNode;
      } else if (target.nodeName == 'LI') {
        
      } else {
        return;
      }

      target.classList.add('active');
      let menu_id = target.dataset.menuid;

      switch (menu_id) {
        case "nav_introduce": // 소개화면
          new Introduce(document.getElementById("alianMain"));
          break;
        case "nav_dashboard": // 대쉬보드
          new Dashboard(document.getElementById("alianMain"));     
          break;
        case "nav_data-status": // 센서 데이터 현황
          new DataStatus(document.getElementById("alianMain"));
          break;
        case "nav_data-select": // 센서 데이터 선택
          new DataSelect(document.getElementById("alianMain"));
          break;
        case "nav_explore-pandas-profiler": // 데이터 탐험 (Pandas Profiler)
          new DataExplore(document.getElementById("alianMain"), "Pandas Profiler");
          break;
        case "nav_explore-sweetviz": // 데이터 탐험 (Sweetviz)
          new DataExplore(document.getElementById("alianMain"), "SweetViz");
          break;
        case "nav_loading-preview": // 데이터 로딩 & 프리뷰
          new LoadingPreview(document.getElementById("alianMain"));
          break;
        case "nav_correlate-graph": // 상관관계 시각화
          new CorrelateGraph(document.getElementById("alianMain"));
          break;
        case "nav_visual-process-miss-value": // 결측치 시각화 및 처리
          new VisualProcessMissValue(document.getElementById("alianMain"));
          break;
        case "nav_visual-process-out-value": // 이상치 시각화 및 처리
          new VisualProcessOutValue(document.getElementById("alianMain"));
          break;
        case "nav_resample-normalize": // 데이터 전처리
          new ResampleNormalize(document.getElementById("alianMain")); 
          break;
        case "nav_decompose": // 시계열 데이터 분해
          new Decompose(document.getElementById("alianMain"));
          break;
        case "nav_sanity-check-Transform": // 시계열 정상성 검사 및 변환
          new SanityCheckTransform(document.getElementById("alianMain"));
          break;
        case "nav_predict-single-variable": // 단변수 예측
          new PredictSingleVariable(document.getElementById("alianMain")); 
          break;
        case "nav_predict-multi-variable": // 다변수 예측
          new PredictMultiVariable(document.getElementById("alianMain"));
          break;
        case "nav_predict-result-analysis": // 시계열 예측 분석
          new PredictResultAnalysis(document.getElementById("alianMain"));
          break;
        default:
      }
    });

    let search_frm = document.querySelector('.search-frm');
    let search_arrow = document.querySelector('.la-arrow-right');

    search_arrow.addEventListener('click', (event) => {
      search_frm.classList.remove('active');
    });
  }
}
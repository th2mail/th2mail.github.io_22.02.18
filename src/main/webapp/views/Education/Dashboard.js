/***************************************************
 * 대쉬보드
 **************************************************/
export default class Dashboard {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="dashboard">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>Dashboard</h3>
        </div>
        <div class="body">
          <table>
            <tr class="cards first">
              <td class="card one">
                <div class="item">
                  <div class="circle">데이터 준비</div>
                </div>
              </td>
              <td class="card two">
                <div class="item">
                  <div class="square">1</div>
                  <div class="title">센서 데이터 현황</div>
                </div>
              </td>
              <td class="card three">
                <div class="item">
                  <div class="square">2</div>
                  <div class="title">센서 데이터 선택</div>
                </div>
              </td>
              <td class="card four">
                <div class="item">
                  <div class="square">3</div>
                  <div class="title">데이터 탐험</div>
                  <div class="content">
                    <a href="#">Pandas Profiler</a>
                    <a href="#">Sweetviz</a>
                  </div>
                </div>
              </td>
              <td class="card five">
                <div class="item">
                  <div class="square">4</div>
                  <div class="title">데이터 로딩 & 프리뷰</div>
                </div>
              </td>
              <td class="card six">
                <div class="item">
                  <div class="square">5</div>
                  <div class="title">상관관계 시각화</div>
                </div>
              </td>
              <td class="card seven">
                <div class="item">
                  <div class="square">6</div>
                  <div class="title">데이터 전처리</div>
                </div>
              </td>
            </tr>
            <tr class="cards second">
              <td class="card one">
                <div class="item">
                  <div class="circle">시계열 준비</div>
                </div>
              </td>
              <td class="card two">
                <div class="item">
                  <div class="square">7</div>
                  <div class="title">시계열 데이터 분해</div>
                  <div class="content">
                    <a href="">레벨</a>
                    <a href="">트렌드</a>
                    <a href="">계절성</a>
                    <a href="">잡음</a>
                  </div>
                </div>
              </td>
              <td class="card three">
                <div class="item">
                  <div class="square">8</div>
                  <div class="title">시계열 정상성 검사 및 변환</div>
                  <div class="content">
                    <div class="first">
                      <div class="title">정상성 검사</div>
                      <div class="desc">
                        <a href="">Augmented Dicker-Fuller test</a>
                        <a href="">Auto Correlation</a>
                        <a href="">Partial Auto Correlation</a>
                      </div>
                    </div>
                    <div class="second">
                      <div class="title">변환</div>
                      <div class="desc">
                        <a href="">Difference</a>
                        <a href="">Log Scale</a>
                        <a href="">Smoothing</a>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="card four" colspan="4">
                <div class="item">
                  <div class="circle">시계열 예측</div>
                  <div class="square">9</div>
                  <div class="title">단변수 예측</div>
                  <div class="content">
                    <a href="">Navie Mean<br>(Yesterday, Value)</a>
                    <a href="">SES</a>
                    <a href="">HWES</a>
                    <a href="">AR</a>
                    <a href="">MA</a>
                    <a href="">ARMA</a>
                    <a href="">ARIMA</a>
                    <a href="">Auto ARIMA</a>
                    <a href="">Seasonal ARIMA</a>
                    <a href="">Auto SARIMA</a>
                    <a href="">Prophet</a>
                  </div>
                  <div class="square">10</div>
                  <div class="title">다변수 예측</div>
                  <div>
                    <!-- Linear Models -->
                    <a href="">Baysian Regression</a>
                    <a href="">Lasso</a>
                  </div>
                  <div>
                    <!-- Tree Model -->
                    <a href="">Random Forest</a>
                    <a href="">Support Vector Machines</a>
                    <a href="">XGBoost</a>
                    <a href="">Nearest neighbors</a>
                    <a href="">Lightgbm</a>
                    <a href="">Prophet multivariate</a>
                  </div>
                  <div>
                    <!-- Deep Learning -->
                    <a href="">Tensorflow LSTM</a>
                    <a href="">DeepAR</a>
                  </div>
                  <div>
                    <!-- Hyperparameter Optimization -->
                    <a href="">Grid Search</a>
                    <a href="">SVM</a>
                    <a href="">Baysian Process</a>
                    <a href="">XGBoost</a>
                  </div>
                  <div>
                    <!-- Ensenbling -->
                    <a href="">XGBoost + Tensorflow</a>
                    <a href="">XGBoost + Lightgbm</a>
                    <a href="">Lightgbm + Tensorflow</a>
                    <a href="">XGBoost + Lightgbm + Tensorflow</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="cards third">
              <td class="card one">
                <div class="item"></div>
              </td>
              <td class="card two">
                <div class="item"></div>
              </td>
              <td class="card three">
                <div class="item"></div>
              </td>
              <td class="card four">
                <div class="item"></div>
              </td>
              <td class="card five">
                <div class="item"></div>
              </td>
              <td class="card six">
                <div class="item"></div>
              </td>
              <td class="card seven">
                <div class="item"></div>
              </td>
            </tr>
            <tr class="cards fourth">
              <td class="card one">
                <div class="item">
                  <div class="circle">성능 분석</div>
                  <div class="square">11</div>
                  <div class="title">수치메트릭</div>
                  <div class="square">12</div>
                  <div class="title">차트</div>
                  <div>
                    <a href="">수치메트릭</a>
                  </div>
                  <div>
                    <a href="">MAE</a>
                    <a href="">MAPE</a>
                    <a href="">RMSE</a>
                    <a href="">R2</a>
                  </div>
                </div>
              </td>
              <td class="card two">
                <div class="item"></div>
              </td>
              <td class="card three">
                <div class="item"></div>
              </td>
              <td class="card four">
                <div class="item"></div>
              </td>
              <td class="card five">
                <div class="item"></div>
              </td>
              <td class="card six">
                <div class="item"></div>
              </td>
              <td class="card seven">
                <div class="item"></div>
              </td>
            </tr>
          </table>
        </div>
      </section>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}
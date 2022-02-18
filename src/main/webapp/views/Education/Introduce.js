/***************************************************
 * 소개화면
 **************************************************/
export default class Introduce {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="introduce">
        <div class="container">
          <table>
            <tr>
              <td>
                <div class="box-wrap one">
                  <div class="box"></div>
                  <div class="square">01</div>
                  <div class="title">데이터 준비</div>
                  <div class="description">
                    원시 상태의 정리되지 않은 이질적인 데이터를 일관되고 정리된 뷰로 변환하는 셀프 서비스 활동이다
                  </div>
                  <div class="detail">
                    <div class="circle">
                      <div class="big">
                        <div class="small">1</div>
                      </div>
                      <div class="detail-title">센서 데이터 현황</div>
                      <div class="deatil-description"></div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">2</div>
                      </div>
                      <div class="detail-title">센서 데이터 선택</div>
                      <div class="deatil-description"></div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">3</div>
                      </div>
                      <div class="detail-title">데이터 탐험</div>
                      <div class="deatil-description">
                        <div>Pandas Profiler</div>
                        <div>SweetViz</div>
                      </div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">4</div>
                      </div>
                      <div class="detail-title">데이터 로딩  & 프리뷰</div>
                      <div class="deatil-description"></div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">5</div>
                      </div>
                      <div class="detail-title">상관관계 시각화</div>
                      <div class="deatil-description"></div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">6</div>
                      </div>
                      <div class="detail-title">데이터 전처리</div>
                      <div class="deatil-description"></div>
                    </div>
                    <div class="close">
                      <i class="far fa-times-circle"></i>
                    </div>
                    <div class="arrow">
                      <i class="fas fa-angle-double-right"></i>
                    </div>              
                  </div>
                </div>
              </td>
              <td>
                <div class="box-wrap two">
                  <div class="box"></div>
                  <div class="square">02</div>
                  <div class="title">시계열 준비</div>
                  <div class="description">
                    원시 상태의 정리되지 않은 이질적인 데이터를 일관되고 정리된 뷰로 변환하는 셀프 서비스 활동이다
                  </div>
                  <div class="detail">
                    <div class="circle">
                      <div class="big">
                        <div class="small">7</div>
                      </div>
                      <div class="detail-title">시계열 데이터 분해</div>
                      <div class="deatil-description">
                        <div>레벨</div>
                        <div>트렌드</div>
                        <div>계절성</div>
                        <div>잡음</div>
                      </div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">8</div>
                      </div>
                      <div class="detail-title one">시계열 정상성 검사 및 변환</div>
                      <div class="deatil-description one">
                        <div>Augmented Dicker-Fuller test</div>
                        <div>Auto Correlation</div>
                        <div>Partial Auto Correlation</div>
                      </div>
                      <div class="detail-title two">변환</div>
                      <div class="deatil-description two">
                        <div>Difference</div>
                        <div>Log Scale</div>
                        <div>Smoothing</div>
                      </div>
                    </div>
                    <div class="close">
                      <i class="far fa-times-circle"></i>
                    </div>
                    <div class="arrow start">
                      <i class="fas fa-angle-double-left"></i>
                    </div> 
                    <div class="arrow end">
                      <i class="fas fa-angle-double-right"></i>
                    </div>   
                  </div>
                </div>
              </td>
              <td>
                <div class="box-wrap three">
                  <div class="box"></div>
                  <div class="square">03</div>
                  <div class="title">시계열 예측</div>
                  <div class="description">
                    원시 상태의 정리되지 않은 이질적인 데이터를 일관되고 정리된 뷰로 변환하는 셀프 서비스 활동이다
                  </div>
                  <div class="detail">
                    <div class="circle">
                      <div class="big">
                        <div class="small">9</div>
                      </div>
                      <div class="detail-title">단변수 예측</div>
                      <div class="deatil-description">
                        <div>Navie Mean<br />(Yesterday, Value)</div>
                        <div>SES</div>
                        <div>HWES</div>
                        <div>AR</div>
                        <div>MA</div>
                        <div>ARMA</div>
                        <div>ARIMA</div>
                        <div>Auto<br />ARIMA</div>
                        <div>Seasonal<br />ARIMA</div>
                        <div>Auto<br />SARIMA</div>
                        <div>Prophet</div>
                      </div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">10</div>
                      </div>
                      <div class="detail-title">다변수 예측</div>
                      <div class="deatil-description">
                        <div class="subject">
                          <div class="subject-title">Linear Models</div>
                          <div class="subject-description">
                            <div>Baysian Regression</div>
                            <div>Lasso</div>
                          </div>
                        </div>
                        <div class="subject">
                          <div class="subject-title">Tree Model</div>
                          <div class="subject-description">
                            <div>Random Forest</div>
                            <div>Support Vector Machines</div>
                            <div>XGBoost</div>
                            <div>Nearest neighbors</div>
                            <div>Lightgbm</div>
                            <div>Prophet multivariate</div>
                          </div>
                        </div>
                        <div class="subject">
                          <div class="subject-title">Deep Learning</div>
                          <div class="subject-description">
                            <div>Tensorflow LSTM</div>
                            <div>DeepAR</div>
                          </div>
                        </div>
                        <div class="subject">
                          <div class="subject-title">Hyperparameter Optimization</div>
                          <div class="subject-description">
                            <div>Grid Search</div>
                            <div>SVM</div>
                            <div>Baysian Process</div>
                            <div>XGBoost</div>
                          </div>
                        </div>
                        <div class="subject">
                          <div class="subject-title">Ensenbling</div>
                          <div class="subject-description">
                            <div>XGBoost + Tensorflow</div>
                            <div>XGBoost + Lightgbm</div>
                            <div>Lightgbm + Tensorflow</div>
                            <div>XGBoost + Lightgbm + Tensorflow</div>
                          </div>
                        </div>
                      </div>              
                    </div>
                    <div class="close">
                      <i class="far fa-times-circle"></i>
                    </div>
                    <div class="arrow start">
                      <i class="fas fa-angle-double-left"></i>
                    </div> 
                    <div class="arrow end">
                      <i class="fas fa-angle-double-right"></i>
                    </div> 
                    <div class="square"></div>  
                  </div>
                </div>
              </td>
              <td>
                <div class="box-wrap four">
                  <div class="box"></div>
                  <div class="square">04</div>
                  <div class="title">성능 분석</div>
                  <div class="description">
                    원시 상태의 정리되지 않은 이질적인 데이터를 일관되고 정리된 뷰로 변환하는 셀프 서비스 활동이다
                  </div>
                  <div class="detail">
                    <div class="circle">
                      <div class="big">
                        <div class="small">11</div>
                      </div>
                      <div class="detail-title">수치 메트릭</div>
                      <div class="deatil-description">
                        <div>수치 메트릭</div>
                      </div>
                    </div>
                    <div class="circle">
                      <div class="big">
                        <div class="small">12</div>
                      </div>
                      <div class="detail-title">차트</div>
                      <div class="deatil-description">
                        <div>MAE</div>
                        <div>MAPE</div>
                        <div>RMSE</div>
                        <div>R2</div>
                      </div>
                    </div>
                    <div class="close">
                      <i class="far fa-times-circle"></i>
                    </div>
                    <div class="arrow">
                      <i class="fas fa-angle-double-left"></i>
                    </div>         
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </section>
    `;

    this.initCSS();
  }

  initCSS() {
    // 타이틀 마우스 오버 이벤트
    $('#introduce .box-wrap.one .title').hover(function() { 
      $('#introduce .box-wrap.one .title').addClass('active'); 
    }, function() {
      $('#introduce .box-wrap.one .title').removeClass('active'); 
    });
    $('#introduce .box-wrap.two .title').hover(function() { 
      $('#introduce .box-wrap.two .title').addClass('active'); 
    }, function() { 
      $('#introduce .box-wrap.two .title').removeClass('active'); 
    });
    $('#introduce .box-wrap.three .title').hover(function() { 
      $('#introduce .box-wrap.three .title').addClass('active'); 
    }, function() {
      $('#introduce .box-wrap.three .title').removeClass('active'); 
    });
    $('#introduce .box-wrap.four .title').hover(function() { 
      $('#introduce .box-wrap.four .title').addClass('active'); 
    }, function() { 
      $('#introduce .box-wrap.four .title').removeClass('active'); 
    });

    // 타이틀 클릭 이벤트 : 클릭한 항목의 상세화면을 OPEN
    $('#introduce .box-wrap.one .title').click(function() { 
      $('#introduce .box-wrap.one .box').addClass('active'); 
      $('#introduce .box-wrap.one .detail').addClass('active');
    });
    $('#introduce .box-wrap.two .title').click(function() { 
      $('#introduce .box-wrap.two .box').addClass('active'); 
      $('#introduce .box-wrap.two .detail').addClass('active');
    });
    $('#introduce .box-wrap.three .title').click(function() { 
      $('#introduce .box-wrap.three .box').addClass('active'); 
      $('#introduce .box-wrap.three .detail').addClass('active');
    });
    $('#introduce .box-wrap.four .title').click(function() { 
      $('#introduce .box-wrap.four .box').addClass('active'); 
      $('#introduce .box-wrap.four .detail').addClass('active');
    });

    // 닫기(X) 버튼 : 데이터준비 상세화면
    $('#introduce .box-wrap.one .close i').click(function() { 
      $('#introduce .box-wrap.one .box').removeClass('active'); 
      $('#introduce .box-wrap.one .detail').removeClass('active');
    });
    // 닫기(X) 버튼 : 시계열준비 상세화면
    $('#introduce .box-wrap.two .close i').click(function() { 
      $('#introduce .box-wrap.two .box').removeClass('active'); 
      $('#introduce .box-wrap.two .detail').removeClass('active');
    });
    // 닫기(X) 버튼 : 시계열예측 상세화면
    $('#introduce .box-wrap.three .close i').click(function() { 
      $('#introduce .box-wrap.three .box').removeClass('active'); 
      $('#introduce .box-wrap.three .detail').removeClass('active');
    });
    // 닫기(X) 버튼 : 성능분석 상세화면
    $('#introduce .box-wrap.four .close i').click(function() { 
      $('#introduce .box-wrap.four .box').removeClass('active'); 
      $('#introduce .box-wrap.four .detail').removeClass('active');
    });

    // 01 -> 02 페이지로 이동
    $('#introduce .box-wrap.one .arrow i').click(function() { 
      $('#introduce .box-wrap.two .box').addClass('active'); 
      $('#introduce .box-wrap.two .detail').addClass('active');
      $('#introduce .box-wrap.one .box').removeClass('active'); 
      $('#introduce .box-wrap.one .detail').removeClass('active');
    });
    // 02 -> 01 페이지로 이동
    $('#introduce .box-wrap.two .arrow.start i').click(function() { 
      $('#introduce .box-wrap.one .box').addClass('active'); 
      $('#introduce .box-wrap.one .detail').addClass('active');
      $('#introduce .box-wrap.two .box').removeClass('active'); 
      $('#introduce .box-wrap.two .detail').removeClass('active');
    });
    // 02 -> 03 페이지로 이동
    $('#introduce .box-wrap.two .arrow.end i').click(function() { 
      $('#introduce .box-wrap.three .box').addClass('active'); 
      $('#introduce .box-wrap.three .detail').addClass('active');
      $('#introduce .box-wrap.two .box').removeClass('active'); 
      $('#introduce .box-wrap.two .detail').removeClass('active');
    });
    // 03 -> 02 페이지로 이동
    $('#introduce .box-wrap.three .arrow.start i').click(function() { 
      $('#introduce .box-wrap.two .box').addClass('active'); 
      $('#introduce .box-wrap.two .detail').addClass('active');
      $('#introduce .box-wrap.three .box').removeClass('active'); 
      $('#introduce .box-wrap.three .detail').removeClass('active');
    });
    // 03 -> 04 페이지로 이동
    $('#introduce .box-wrap.three .arrow.end i').click(function() { 
      $('#introduce .box-wrap.four .box').addClass('active'); 
      $('#introduce .box-wrap.four .detail').addClass('active');
      $('#introduce .box-wrap.three .box').removeClass('active'); 
      $('#introduce .box-wrap.three .detail').removeClass('active');
    });
    // 04 -> 03 페이지로 이동
    $('#introduce .box-wrap.four .arrow i').click(function() { 
      $('#introduce .box-wrap.three .box').addClass('active'); 
      $('#introduce .box-wrap.three .detail').addClass('active');
      $('#introduce .box-wrap.four .box').removeClass('active'); 
      $('#introduce .box-wrap.four .detail').removeClass('active');
    });
  }

}
/***************************************************
 * 센서 데이터 현황
 **************************************************/
export default class DataStatus {

  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
      <section id="data-status">
        <div class="head">
          <i class="fab fa-microsoft"></i>
          <h3>센서 데이터 현황</h3>
        </div>
        <div class="body">
          <div class="card">
            <div class="card__head">
              <i class="far fa-building building"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">3</div>
                  <div class="circle__title">고객수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">4</div>
                  <div class="circle__title">건물수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">20</div>
                  <div class="circle__title">센서종류</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">270</div>
                  <div class="circle__title">센서수</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__head">
              <i class="icon-bridge bridge"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">3</div>
                  <div class="circle__title">고객수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">4</div>
                  <div class="circle__title">건물수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">20</div>
                  <div class="circle__title">센서종류</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">270</div>
                  <div class="circle__title">센서수</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__head">
              <i class="icon-incline incline"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__title">고객수</div>
                  <div class="circle__count">3</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__title">건물수</div>
                  <div class="circle__count">4</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__title">센서종류</div>
                  <div class="circle__count">20</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__title">센서수</div>
                  <div class="circle__count">270</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
          </div>
          <div class="card">
            <div class="card__head">
              <i class="las la-building"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">3</div>
                  <div class="circle__title">고객수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">4</div>
                  <div class="circle__title">건물수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">20</div>
                  <div class="circle__title">센서종류</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">270</div>
                  <div class="circle__title">센서수</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__head">
              <i class="las la-building"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">3</div>
                  <div class="circle__title">고객수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">4</div>
                  <div class="circle__title">건물수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">20</div>
                  <div class="circle__title">센서종류</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">270</div>
                  <div class="circle__title">센서수</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <p>센서수</p>
            <ul class="graph">
              <li>
                <div>
                  <span style="height: 50%;"><i>50</i></span>
                </div>
                <p>1년</p>
              </li>
              <li>
                <div>
                  <span style="height: 20%;"><i>20</i></span>
                </div>
                <p>2년</p>
              </li>
              <li>
                <div>
                  <span style="height: 88%;"><i>88</i></span>
                </div>
                <p>3년</p>
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card__head">
              <i class="las la-building"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">3</div>
                  <div class="circle__title">고객수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">4</div>
                  <div class="circle__title">건물수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">20</div>
                  <div class="circle__title">센서종류</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">270</div>
                  <div class="circle__title">센서수</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__head">
              <i class="las la-building"></i>
            </div>
            <div class="card__body">
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">3</div>
                  <div class="circle__title">고객수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">4</div>
                  <div class="circle__title">건물수</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">20</div>
                  <div class="circle__title">센서종류</div>
                </div>
              </div>
              <div class="item">
                <div class="item__circle">
                  <div class="circle__count">270</div>
                  <div class="circle__title">센서수</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this.initCSS();
  }

  initCSS() {
    
  }

}
import React from 'react'
import "./css/Home.css"


function Home() {
  return (
    <div className="container ">
      <div classsName="d-flex justify-content-center">
        <div id="carouselExampleControls" className="carousel slide w-100 " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/bilgi.png" className="d-block w-100" alt="bilgilendirme" />
            </div>

            <div className="carousel-item">
              <img src="img/covid.png" className="d-block w-100" alt="covid-bilgi" />
            </div>
            <div className="carousel-item">
              <img src="img/covid2.png" className="d-block w-100" alt="covid-bilgi2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row mx-4 my-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sağlık Merkezlerimiz </h5>
              <p className="card-saglik">
                <ul>
                  <li>Ankara Sağlık Merkezi</li>
                  <li>Bakırköy Sağlık Merkezi</li>
                  <li>İzmir Sağlık Merkezi</li>
                  <li>Kadıköy Sağlık Merkezi</li>
                  <li>Şişli Sağlık Merkezi</li>
                </ul>
                <p> Tüm Sağlık Merkezlerimiz </p>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Anlaşmalı Kurumlar</h5>
              <input type="text" className="form-control" placeholder="Kurum Arama" />

              <select class="form-select" name="Konu">
                <option value="kurum seciniz">Kurum Seçiniz</option>
                <option value="devlet hastanesi">Devlet Hastanesi</option>
                <option value="eczane">Eczane</option>
                <option value="diyaliz merkezi">Diyaliz Merkezi</option>
              </select>
              <select class="form-select" name="Konu">
                <option value="Sehir Seciniz">Şehir Seçiniz</option>
                <option value="Adana">Adana</option>
                <option value="Bursa">Bursa</option>
                <option value="Mus">Muş</option>
              </select>
              <select class="form-select" name="Konu">
                <option value="ilce seciniz">İlçe Seçiniz</option>
                <option value="ceyhan">Ceyhan</option>
                <option value="nilüfer">Nilüfer</option>
                <option value="hasköy">Hasköy</option>
              </select>
              <button className="btn">Listele</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-4 my-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Duyuru ve Haberler </h5>
              <p className="card-saglik">
                <ul>
                  <li>Bunları Biliyor Musunuz? </li>
                  <li>Covid-19 Testi Ödemesi</li>
                  <li>Bakmakla Yükümlülük İşlemleri</li>
                  <li>Tıbbi Maske Kullanımı</li>
                  <li>Raporlu İlaç Alımı</li>
                </ul>
                <p>Tüm Duyurular</p>
              </p>
            </div>
          </div>
        </div>



        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title baslik">Acil Haller </h5>
              <p className="card-saglik doctor ">
                <img src="img/acil.png" alt="..." />
                <h5>Acil Hallerde Sandığımızdan Nasıl Faydalanırsınız?</h5>
                <p>İncele</p>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title baslik">Yeşil Çerçeve Emekliler Bülteni </h5>
              <p className="card-saglik doctor ">
                <img src="img/yesil.png" alt="..." />
                <h5> Son Güncellenme: 25/02/2020</h5>
                <p>Yakında Sizlerle!</p>
              </p>
            </div>
          </div>
        </div>



      </div>

    </div >
  )
}

export default Home

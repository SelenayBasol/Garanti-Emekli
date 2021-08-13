import React from 'react'
import "./css/Footer.css"
function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="container">
        <div className="row container">
          <div className="col-md-3 ">

            <h4> Hızlı Menü</h4>
            <ul>
              <li>Site Haritası</li>
              <li>Yasal Uyarı</li>
              <li>Güvenlik</li>
              <li>Gizlilik Politikamız</li>
              <li>Kişisel Verilerin Korunması</li>

            </ul>

          </div>
          <div className="col-md-3">
            <h4> Faydalı Linkler</h4>
            <ul>
              <li>Garanti BBVA</li>
              <li>SGK</li>
              <li>E-Devlet</li>

            </ul>
          </div>

          <div className="col-md-3">
            <h4> Görüş Ve Öneriler</h4>
            <ul>
              <li>Düşünceleriniz Bizim İçin Değerli</li>

            </ul>

          </div>
          <div className="col-md-3 ">
            <h4>İletişim </h4>
            <ul>
              <li>Genel Müdürlük</li>
              <li>Halaskargazi Caddesi no:162 Şişli/İstanbul</li>
              <li>0 (212) 315 13 50</li>
              <li>0 (212) 315 13 41</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footerImage mt-5 mb-4 d-flex justify-content-center">
        <img src="img/garanti_logo.png" alt="" />
        <h4>Türkiye Garanti Bankası A.Ş. Emekli ve Yardım Sandığı Vakfı</h4>
      </div>
      <div className="d-flex justify-content-center"><p className="text-muted">Copyright © 2021, T. Garanti Bankası A.Ş</p></div>
    </div >
  )
}

export default Footer

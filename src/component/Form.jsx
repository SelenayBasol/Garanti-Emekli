import React from 'react'
import "./css/Form.css"

function Form() {
  return (
    <div className="form">
      <div className="container px-5 py-3 my-2">
        <div className="row border rounded ">
          <div className="col-md-5 col-sm-12">
            <img src="img/gorus_ve_oneriler.png" alt="gorus" className="img-fluid" />
          </div>
          <div className="col-md-7 col-sm-12 my-4">
            <div className="form-group w-100 px-3 ">
              <h4 className="mb-3 text-primary">
                Düşünceleriniz Bizim İçin Değerli
              </h4>
              <select className="form-select w-100 my-4 mt-5 bg-light shadow-none" name="Konu">
                <option value="konu seciniz">Konu Seçiniz</option>
                <option value="saglik">Sağlık</option>
                <option value="Emeklilik">Emeklilik</option>
                <option value="diger">Diğer</option>
              </select>

              <textarea className="form-control" placeholder="Düşünceleriniz" rows="5"></textarea>

              <input type="text" className="form-control" placeholder="Adınız Soyadınız" />

              <input type="text" className="form-control " placeholder="Telefon Numaranız" />

              <input type="text" className="form-control" placeholder="E-mail Adresiniz" />

              <input type="text" className="form-control" placeholder="Resimdeki Metni Giriniz" />

              <div className="text-end">
                <button type="submit " className="btn btn-primary">
                  <p className="mx-2 my-auto">Gönder</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Form

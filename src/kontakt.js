import React from "react";
import Bar from "./components/Bar";
import "./kontakt.css";


function Kontakt() {
  return (
    <div>
      <Bar title={"Kontakt"} />
      <div className="kontakt">
        <div className="kontakt-container">
        <div className="kontakt-info">
            <div className="kontakt-infowrap">
              <div className="info-title">
                <h2>DANE KONTAKTOWE</h2>
                <h3>Udzielimy wszystkich niezbędnych informacji</h3>
              </div>
              <div className="info-item">
                <div className="item-icon">
                  <i class="fa fa-home" aria-hidden="true"></i>
                </div>
                <div className="item-text">
                  <p>Adres</p>
                  <p>Sokołów Podlaski 08-300, ul. Prosta 53</p>
                </div>
              </div>
              <div className="info-item">
                <div className="item-icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="item-text">
                  <p>Email</p>
                  <p>info@przedszkoleania.pl</p>
                </div>
              </div>
              <div className="info-item">
                <div className="item-icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="item-text">
                  <p>Numer telefonu</p>
                  <p>728 858 838</p>
                </div>
              </div>
              <div className="info-item">
                <div className="item-icon">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="item-text">
                  <p>Godziny otwarcia</p>
                  <p>Poniedziałek - Piątek : 7 - 18</p>
                </div>
                
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/profile.php?id=100092726312673" target="_blank" rel="noreferrer"><i class="fa fa-facebook-official" aria-hidden="true"></i> </a>
                </div>
            </div>
          </div>
          <div className="kontakt-form">
            <div className="form-title">
              <h2>SKONTAKTUJ SIE Z NAMI</h2>
              <h3>Bądź na bieżąco</h3>
            </div>
            <div className="form-form">
              <form action="" method="POST" accept-charset="UTF-8">
                <div class="form-group">
                  <div class="form-row">
                    <div class="col input-control">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Imię i Nazwisko"
                        required
                      />
                    </div>
                    <div class="col input-control">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="Adres Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group input-control">
                  <textarea
                    placeholder="Treść Wiadomości"
                    class="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div classname="main-button">
                  <button type="submit" className="btn">
                    
                    WYŚLIJ
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
        <div className="kontakt-container2">
        <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.5217698348143!2d22.261357829255985!3d52.40509799873704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f6eae7855308f%3A0x5d0f61dcccd11758!2sProsta%2053%2C%2008-300%20Soko%C5%82%C3%B3w%20Podlaski!5e0!3m2!1sen!2spl!4v1679500482157!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const [shouldScrollTop, setShouldScrollTop] = useState(false);

  function handleClick() {
    setShouldScrollTop(true);
  }

  useEffect(() => {
    if (shouldScrollTop) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setShouldScrollTop(false);
    }
  }, [shouldScrollTop]);

  return (
    <div>
      <section class="footer">
        <div class="footer-container">
          <div class="row1">
            <div class="item">
              <div class="item-container">
                <div class="item-title">
                  <h3>Skontaktuj się</h3>
                </div>
                <ul class="item-list">
                  <li><i class="fa fa-phone" aria-hidden="true"></i>  Telefon: 728 858 838 <p>Sekretariat: 506 664 080</p></li>
                  <li><i class="fa fa-envelope" aria-hidden="true"></i>  E-Mail: info@przedszkoleania.pl</li>
                  <li><i class="fa fa-home" aria-hidden="true"></i>  Adres: ul. Prosta 53, 08-300 Sokołów Podlaski </li>
                  <li><i class="fa fa-calendar" aria-hidden="true"></i>  Godziny otwarcia: Poniedziałek - Piątek<p>w godzinach 7 - 18 </p> </li>
                </ul>
                <ul class="item-social">
                  
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="item-container">
                <div class="item-title">
                  <h3>Informacje</h3>
                </div>
                <ul class="item-list">
                  <li>
                    <Link onClick={() => handleClick()} to="/">
                      Strona Główna
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/onas">
                      O nas
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/oferta">
                      Oferta
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/przedszkole">
                      Przedszkole
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/aktualnosci">
                      Aktualności
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/rekrutacja">
                      Rekrutacja
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/galeria">
                      Galeria
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleClick()} to="/kontakt">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="item-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.0503776515416!2d22.259169515803276!3d52.4057631797928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f6f6a0842267f%3A0x12246e17cedda7f7!2sNiepubliczne%20Przedszkole%20Integracyjne%20Ania%20z%20Zielonego%20Wzg%C3%B3rza!5e0!3m2!1spl!2spl!4v1687949063436!5m2!1spl!2spl"
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
          <div class="row2">
            <div class="row2-text">
              <p class="copy_footer">
                ©2023 Przedszkole Ania z Zielonego Wzgórza - Created By Szymeck
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";


function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

  return (
    <div>
      <section class="footer">
        <div class="footer-container">
          <div class="row1">
            <div class="item">
              <div class="item-container">
                <div class="item-title">
                  <h3>Skontkaktuj się</h3>
                </div>
                <ul class="item-list">
                  <li>Phone: +1 516 231 1313</li>
                  <li>Mail: 0devdesign.studio@gmail.com</li>
                  <li>Address: 3366 Jefferson Street, NEW HAMPTON, IA</li>
                  <li>Working day: 9am - 5pm EST, Monday - Friday</li>
                </ul>
                <ul class="item-social">
                  <il></il>
                  <il></il>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="item-container">
                <div class="item-title">
                  <h3>Informacje</h3>
                </div>
                <ul class="item-list">
                  <li onClick={()=>scrollTop()} >
                    <Link to="/">Strona Główna</Link>
                  </li>
                  <li onClick={()=>scrollTop()} >
                    <Link to="/onas">O nas</Link>
                  </li>
                  <li onClick={()=>scrollTop()} >
                    <Link to="/oferta">Oferta</Link>
                  </li>
                  <li onClick={()=>scrollTop()} >
                    <Link to="/przedszkle">Przedszkole</Link>
                  </li>
                  <li onClick={()=>scrollTop()} >
                    <Link to="/aktualnosci">Aktualności</Link>
                  </li>
                  <li onClick={()=>scrollTop()} >
                    <Link to="/rekrutacja">Rekrutacja</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="item-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.5217698348143!2d22.261357829255985!3d52.40509799873704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f6eae7855308f%3A0x5d0f61dcccd11758!2sProsta%2053%2C%2008-300%20Soko%C5%82%C3%B3w%20Podlaski!5e0!3m2!1sen!2spl!4v1679500482157!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{border:'0'}}
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

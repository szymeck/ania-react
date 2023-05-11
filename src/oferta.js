import React from "react";
import Bar from "./components/Bar";
import Heading from "./components/Heading";
import { Link } from "react-router-dom";


import "./oferta.css";

const Oferta = () => {

  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Bar title={"Oferta"} />
      <div className="oferta1">
        <Heading title={"Zajęcia dzieci"} />
        <div className="oferta1-text">
          <p>
            Poprzez profesjonalnie dopracowany program zajęć w przedszkolu
            gwarantujemy wszystkim dzieciom wyjątkowy zakres doświadczeń.
            Uczęszczając na zajęcia w przedszkolu dzieci rozwijają się w
            odpowiednim dla siebie tempie, a także mają możliwość odkrycia
            nowych pasji. Oferujemy szereg ćwiczeń gimnastycznych, angażujące
            gry zespołowe oraz rozwijanie indywidualnych umiejętności.
          </p>
        </div>
        <div className="container-title">
          <h2>
            ZAPEWNIAMY dla wszystkich dzieci w ramach czesnego zajęcia dodatkowe
          </h2>
        </div>

        <div className="oferta1-container">
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-1.jpg" alt="icon"></img>

              <div className="text">
                <h2>Język angielski</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-2.jpg" alt="icon"></img>

              <div className="text">
                <h2>Rytmika</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-3.jpg" alt="icon"></img>

              <div className="text">
                <h2>Gimnastyka z fizjoterapeutą</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-4.jpg" alt="icon"></img>

              <div className="text">
                <h2>Zajęcia logopedyczne</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-5.jpg" alt="icon"></img>

              <div className="text">
                <h2>Warsztaty sensoryczne</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-6.jpg" alt="icon"></img>

              <div className="text">
                <h2>Warsztaty artystyczne</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-7.jpg" alt="icon"></img>

              <div className="text">
                <h2>Sensoplastyka</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-8.jpg" alt="icon"></img>

              <div className="text">
                <h2>Zajęcia w sali doświadczania świata</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-9.jpg" alt="icon"></img>

              <div className="text">
                <h2>Zajęcia przy magicznej ścianie multimedialnej</h2>
              </div>
            </div>
          </div>
          <div className="oferta1-item">
            <div className="item-content">
              <img src="./oferta-10.jpg" alt="icon"></img>

              <div className="text">
                <h2>
                  Indywidualną terapię przez specjalistów dla dzieci ze
                  specjalnymi potrzebami edukacyjnymi
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oferta2">
        <div className="oferta2-container">
          <div className="oferta2-img">
            <img src="./logo22.png" alt="img"></img>
          </div>
          <div className="oferta2-text">
            <h3>
              <i class="fa fa-check-circle" aria-hidden="true"></i> Pracujemy
              również w ferie zimowe i wakacje
            </h3>
            <h3>
              <i class="fa fa-check-circle" aria-hidden="true"></i> Przedszkole
              jest otwarte dla dzieci od godz 7.00 do godz 18.00
            </h3>
            <h3>
              {" "}
              <i class="fa fa-check-circle" aria-hidden="true"></i> Dzieci z
              orzeczeniem o potrzebie kształcenia specjalnego zwolnione są z
              opłaty czesnego
            </h3>
            <h3>
              {" "}
              <i class="fa fa-check-circle" aria-hidden="true"></i> Przyjmujemy
              dzieci od 2,5 lat do 6 lat
            </h3>
            <h3>
              {" "}
              <i class="fa fa-check-circle" aria-hidden="true"></i> Realizujemy
              Wczesne Wspomaganie Rozwoju
            </h3>
            <h3>
              {" "}
              Czesne wynosi miesięcznie 290 zł + dzienna stawka żywieniowa
            </h3>
          </div>
        </div>
      </div>
      <div className="oferta3">
        <Heading title={"Wczesne Wspomaganie Rozwoju"} />
        <div className="oferta3-container">
          <div className="oferta3-text">
            <div className="oferta3-text1">
              <p>
                Obejmujemy swoją pomocą dzieci od urodzenia do ukończenia
                edukacji w szkole. Prowadzimy bezpłatną terapię w ramach
                wczesnego wspomagania rozwoju dla dzieci, które posiadają
                stosowną opinię o potrzebie wczesnego wspomagania. Ponadto
                organizujemy zajęcia rewalidacyjno-wychowawcze dla dzieci i
                młodzieży z niepełnosprawnością intelektualną w stopni głębokim.
                Stale poszerzamy naszą ofertę, by zaspokoić potrzeby i
                oczekiwania naszych obecnych i przyszłych podopiecznych.
              </p>
            </div>
            <div className="oferta3-text2">
              <h3> W celu zgłoszenia dziecka
              <Link onClick={() => handleClick()} to="/kontakt">
              <a class="start__free" href="/"
                >skontakuj sie z nami</a></Link></h3>
              
            </div>
          </div>

          <div className="oferta3-items">
            <div className="oferta3-item1">
              <h3>Warsztaty umiejętności społecznych</h3>
            </div>
            <div className="oferta3-item2">
              <h3>Integracja Sensoryczna</h3>
            </div>
            <div className="oferta3-item3">
              <h3>Logopedia</h3>
            </div>
            <div className="oferta3-item4">
              <h3>Rehabilitacja</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;

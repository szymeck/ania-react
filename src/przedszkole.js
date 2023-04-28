import React from "react";
import Bar from "./components/Bar";
import Heading from "./components/Heading";
import "./przedszkole.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Przedszkole() {
  const images = [
    {
      original: "/gallery-17.jpg",
      thumbnail: "/gallery-17.jpg",
    },
    {
      original: "/gallery.jpg",
      thumbnail: "/gallery.jpg",
    },
    {
      original: "/gallery-1.jpg",
      thumbnail: "/gallery-1.jpg",
    },
    {
      original: "/gallery-2.jpg",
      thumbnail: "/gallery-2.jpg",
    },
    {
      original: "/gallery-3.jpg",
      thumbnail: "/gallery-3.jpg",
    },
    {
      original: "/gallery-4.jpg",
      thumbnail: "/gallery-4.jpg",
    },
    {
      original: "/gallery-5.jpg",
      thumbnail: "/gallery-5.jpg",
    },
    {
      original: "/gallery-6.jpg",
      thumbnail: "/gallery-6.jpg",
    },
    {
      original: "/gallery-7.jpg",
      thumbnail: "/gallery-7.jpg",
    },
    {
      original: "/gallery-8.jpg",
      thumbnail: "/gallery-8.jpg",
    },
    {
      original: "/gallery-9.jpg",
      thumbnail: "/gallery-9.jpg",
    },
    {
      original: "/gallery-10.jpg",
      thumbnail: "/gallery-10.jpg",
    },
    {
      original: "/gallery-11.jpg",
      thumbnail: "/gallery-11.jpg",
    },
    {
      original: "/gallery-12.jpg",
      thumbnail: "/gallery-12.jpg",
    },
    {
      original: "/gallery-13.jpg",
      thumbnail: "/gallery-13.jpg",
    },
    {
      original: "/gallery-14.jpg",
      thumbnail: "/gallery-14.jpg",
    },
    {
      original: "/gallery-15.jpg",
      thumbnail: "/gallery-15.jpg",
    },
    {
      original: "/gallery-16.jpg",
      thumbnail: "/gallery-16.jpg",
    },
    {
      original: "/gallery-17.jpg",
      thumbnail: "/gallery-17.jpg",
    },
    {
      original: "/gallery-18.jpg",
      thumbnail: "/gallery-18.jpg",
    },
    {
      original: "/gallery-19.jpg",
      thumbnail: "/gallery-19.jpg",
    },
    {
      original: "/gallery-20.jpg",
      thumbnail: "/gallery-20.jpg",
    },
  ];

  return (
    <div>
      <Bar title={"Przedszkole"} />
      <div class="przedszkole1">
        <Heading title={"Grupy"} />
        
        <div className="grupy">
          <div className="grupa-1">
            <div className="grupa-col1">
              <div className="grupa-img">
                <div className="img-title">Motylki</div>
                <img src="./grupa-1.jpg" alt="motyl img"></img>
              </div>
            </div>
            <div className="grupa-col2">
              <div className="grupa-text">
                <p>
                  Dzieci uczęszczające do tej grupy (najmłodsze) uczą się
                  komunikacji i współpracy z rówieśnikami w grupie. W trakcie
                  zajęć doskonalimy czynności samoobsługowe oraz higieniczne.
                  Poznajemy rozwój emocjonalny oraz sposoby jego ich wyrażania.
                  Dzieci rozwijają się integralnie.
                </p>
              </div>
            </div>
          </div>
          <div className="grupa-2">
            <div className="grupa-col1">
              <div className="grupa-img">
                <div className="img-title">Fiołki</div>
                <img src="./grupa-2.jpg" alt="motyl img"></img>
              </div>
            </div>
            <div className="grupa-col2">
              <div className="grupa-text">
                <p>
                  Do grupy uczęszczają dzieci w przedziale wiekowym 4-5 lat.
                  Podczas pracy z dziećmi skupiamy się na doskonaleniu
                  umiejętności manualnych. Dbamy o prawidłowy rozwój motoryki
                  małej oraz sprawności koordynacyjnej (równowagi, Orientacji
                  wzrokowo-ruchowej). Kształtujemy pozytywne odczucia w
                  kontakcie z innymi dziećmi w trakcie zabaw ruchowych.
                  Pogłębiamy wiedzę o otaczającym świecie poprzez interakcje ze
                  środowiskiem społeczno-przyrodniczym. Rozwijamy kreatywność,
                  spostrzegawczość i pamięć słuchową dzieci.
                </p>
              </div>
            </div>
          </div>
          <div className="grupa-3">
            <div className="grupa-col1">
              <div className="grupa-img">
                <div className="img-title">Słowiki</div>
                <img src="./grupa-3.jpg" alt="motyl img"></img>
              </div>
            </div>
            <div className="grupa-col2">
              <div className="grupa-text">
                <p>
                  Grupa obejmuje dzieci w przedziale wiekowym 5-6 lat. Dbamy o
                  rozwój i doskonalenie umiejętności dzieci we wszystkich
                  dziedzinach, zgodnie z podstawą programową i wybranymi
                  programami edukacyjnymi, które wpływają na osiągnięcie przez
                  dziecko dojrzałości szkolnej. Wspieramy rozwój dzieci
                  umożliwiając im twórcze wyrażanie siebie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="przedszkole2">
      <Heading title={"Plan dnia"} />
        <div className="plan">
          <div className="plan-img">
            <img src="./plan.jpg" alt="plan img"></img>
            <div className="plan-title">
              <h3>Ramowy rozkład dnia</h3>
            </div>
          </div>
          <table>
            <tr>
              <td>7.00 - 8.00</td>
              <td>
                Schodzenie się dzieci, indywidualne kontakty wynikające z
                potrzeb dzieci, spontaniczna aktywność dzieci w zakresie zabaw
                swobodnych.
              </td>
            </tr>
            <tr>
              <td>8.00 - 8.30</td>
              <td>
                Poranne ćwiczenia ruchowe. Przygotowanie do śniadania –
                czynności porządkowe, higieniczne i samoobsługowe w łazience.
              </td>
            </tr>
            <tr>
              <td>8.30 - 9.00</td>
              <td>Śniadanie.</td>
            </tr>
            <tr>
              <td>9.00 - 10.30</td>
              <td>
                Zintegrowana działalność edukacyjna w oparciu o podstawę
                programową, zajęcia, zabawy edukacyjne, zajęcia dydaktyczne
                różnego typu (zgodnie z rozkładem tygodniowym zajęć)
              </td>
            </tr>
            <tr>
              <td>10.30 - 11.00</td>
              <td>
                Grupy młodsze: zabawy w ogrodzie przedszkolnym, spacery, zabawy
                podejmowane z inicjatywy dzieci, doskonalenie czynności
                samoobsługowych.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Grupa starsza: Stwarzanie dziecku sytuacji wymagających
                twórczego myślenia oraz bycia inicjatorem w zdobywaniu wiedzy i
                jej utrwalaniu. Rozwijanie koordynacji wzrokowo – ruchowej
                (układanie puzzli, kolorowanie, lepienie, cięcie).
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Czynności higieniczno – porządkowe. Przygotowanie do obiadu.
              </td>
            </tr>
            <tr>
              <td>11.00 - 11.30</td>
              <td>Obiad (II danie)</td>
            </tr>
            <tr>
              <td>11.30 - 13.00</td>
              <td>Odpoczynek poobiedni</td>
            </tr>
            <tr>
              <td></td>
              <td>
                Grupy młodsze - leżakowanie, relaksacja, słuchanie muzyki,
                bajek, audycji edukacyjnych, ćwiczenia wyciszające.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Grupa starsza – relaks, słuchanie literatury dziecięcej, muzyki
                – wyciszenie. Zabawy edukacyjne i wychowawcze organizowane przez
                nauczyciela oraz podejmowane z inicjatywy dzieci. Zajęcia i
                zabawy rytmiczno-ruchowe i umuzykalniające.
              </td>
            </tr>
            <tr>
              <td>13.00 - 13.30</td>
              <td>
                Zabawy w sali lub na świeżym powietrzu ( w zależności od
                pogody). Prace tematyczne oraz czynności porządkowo –
                higieniczne przed obiadem.
              </td>
            </tr>
            <tr>
              <td>13.30 - 14.00</td>
              <td>Obiad – zupa</td>
            </tr>
            <tr>
              <td>14.00 - 14.30</td>
              <td>
                Zabawy ruchowe, zabawy swobodne, zabawy inspirowane zajęciami
                przedpołudniowymi lub wynikające z potrzeb, zainteresowań
                dzieci, zabawy w ogrodzie przedszkolnym. Zabawy utrwalające
                poznane treści, uzupełnianie ćwiczeń.
              </td>
            </tr>
            <tr>
              <td>14.30 - 15.00</td>
              <td>
                Czynności samoobsługowe i porządkowe przygotowujące do posiłku.
              </td>
            </tr>
            <tr>
              <td>15.00 - 15.30</td>
              <td>Podwieczorek.</td>
            </tr>
            <tr>
              <td>15.30 – 18.00</td>
              <td>
                Zabawy edukacyjne i wychowawcze organizowane przez nauczyciela
                oraz zabawy wg inicjatywy dzieci w kącikach tematycznych. Zabawy
                integracyjne, gry planszowe, konstrukcyjne, plastyczno –
                techniczne, obserwacja pedagogiczna, praca indywidualna z
                dzieckiem zdolnym oraz dydaktyczno -wyrównawcza.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Kontakty z rodzicami – rozmowy, informacje o postępach i
                zachowaniu dzieci, rozchodzenie się dzieci.
              </td>
            </tr>
          </table>
          <div className="foot"></div>
        </div>
      </div>
      <div className="przedszkole3">
      <Heading title={"Kadra"} />
        <div className="przedszkole3-container">
        
          <div className="przedszkole3-item">
            <div className="przedszkole3-text1">
              <p>
                Posiadamy dyplomy uczelni wyższych. Ukończyliśmy studia
                magisterskie w zakresie:
              </p>
              <ul>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Pedagogiki przedszkolenj i wczesnoszkolnej
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Pedagogiki opiekuńczo-wychowawczej
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Pedagogiki specjalnej
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Pedagogiki szkolnej i opiekuńczej
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Oligofrenopedagogiki
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Logopedii
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Psychologii
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Fizjoterapii
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Integracji Sensorycznej
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Terapii zajęciowej
                </li>
              </ul>
            </div>
            <div className="przedszkole3-text2">
              <p>Jak również kursy, szkolenia i warsztaty, m.in.:</p>

              <ul>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Trening umiejętności społecznych – wsparcie dla dzieci z
                  autyzem
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Wykorzystanie metody integracji sensorycznej w pracy z dziećmi
                  z trudnościami rozwojowymi i edukacyjnymi
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Terapia ręki
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Wczesne wspomaganie rozwoju
                </li>
                <li>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Szkolenie SIguma Muzyczno – Sensoryczne 'Inspiracja Krainy
                  Muzycznej'
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="przedszkole5">
      <Heading title={"Galeria"} />
      <ReactImageGallery items={images} />
      </div>
      
      <div className="przedszkole4">
      <Heading title={"Kalendarz imprez"} />
        <div className="przedszkole4-container">
          <table>
            <tr>
              <td>RODZAJ UROCZYSTOŚCI</td>
              <td>TERMIN</td>
            </tr>
            <tr>
              <td>Dzień Przedszkolaka</td>
              <td></td>
            </tr>
            <tr>
              <td>Powitanie jesieni – Święto Dyni – dzień pomarańczowy</td>
              <td></td>
            </tr>
            <tr>
              <td>Światowy Dzień Uśmiechu</td>
              <td></td>
            </tr>
            <tr>
              <td>Pasowanie przedszkolaków</td>
              <td>X/XI 2023</td>
            </tr>
            <tr>
              <td>Święto Niepodległości</td>
              <td>10.XI.2023</td>
            </tr>
            <tr>
              <td>Dzień Pluszowego Misia</td>
              <td></td>
            </tr>
            <tr>
              <td>Andrzejki</td>
              <td>30.XI.2023</td>
            </tr>
            <tr>
              <td>Światowy dzień Osób z Niepełnosprawnością</td>
              <td>02.XII.2023</td>
            </tr>
            <tr>
              <td>Mikołajki</td>
              <td>06.XII.2023</td>
            </tr>
            <tr>
              <td>Jasełka – grupy starsze</td>
              <td>XII 2023</td>
            </tr>
            <tr>
              <td>Powitanie Zimy - dzień biały</td>
              <td>22.XII.2023</td>
            </tr>
            <tr>
              <td>Dzień Babci i Dziadka</td>
              <td>I.2024</td>
            </tr>
            <tr>
              <td>Bal karnawałowy</td>
              <td>I.2024</td>
            </tr>
            <tr>
              <td>Walentynki</td>
              <td>14.II.2024</td>
            </tr>
            <tr>
              <td>Święto Marchewki – dzień pomarańczowy</td>
              <td>10.III.2024</td>
            </tr>
            <tr>
              <td>Powitanie Wiosny - dzień zielony</td>
              <td>21.III.2024</td>
            </tr>
            <tr>
              <td>Międzynarodowy Dzień Teatru</td>
              <td>28.III.2024</td>
            </tr>
            <tr>
              <td>
                Międzynarodowy Dzień Świadomości Autyzmu - dzień niebieski
              </td>
              <td>04.IV.2024</td>
            </tr>
            <tr>
              <td>Międzynarodowy Dzień Ziemi</td>
              <td>21.IV.2024</td>
            </tr>
            <tr>
              <td>Dzień Mamy i Taty</td>
              <td>V .2024</td>
            </tr>
            <tr>
              <td>Dni otwarte w przedszkolu</td>
              <td>VI .2024</td>
            </tr>
            <tr>
              <td>Dzień Dziecka</td>
              <td>VI. 2024</td>
            </tr>
            <tr>
              <td>Powitanie Lata – dzień żółty</td>
              <td>VI. 2024</td>
            </tr>
            <tr>
              <td>
                Uroczyste zakończenie roku szkolnego – pożegnanie starszaków
              </td>
              <td>VI. 2024</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Przedszkole;

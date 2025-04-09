import React from "react";
import Bar from "./components/Bar";
import Heading from "./components/Heading";
import "./przedszkole.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Collaps from "./components/Collaps";

import "react-image-gallery/styles/css/image-gallery.css";

function Przedszkole() {
  

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
                  Poznajemy rozwój emocjonalny oraz sposoby jego wyrażania.
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
              <td> 20 września</td>
            </tr>
            <tr>
              <td>Powitanie jesieni – Święto Dyni – dzień pomarańczowy</td>
              <td>październik</td>
            </tr>
            <tr>
              <td>Światowy Dzień Uśmiechu</td>
              <td>październik</td>
            </tr>
            <tr>
              <td>Pasowanie przedszkolaków</td>
              <td>listopad</td>
            </tr>
            <tr>
              <td>Święto Niepodległości</td>
              <td>10 listopada</td>
            </tr>
            <tr>
              <td>Dzień Pluszowego Misia</td>
              <td>25 listopada</td>
            </tr>
            <tr>
              <td>Andrzejki</td>
              <td>30 listopada</td>
            </tr>
            <tr>
              <td>Światowy dzień Osób z Niepełnosprawnością</td>
              <td>02 grudnia</td>
            </tr>
            <tr>
              <td>Mikołajki</td>
              <td>06 grudnia</td>
            </tr>
            <tr>
              <td>Jasełka – grupy starsze</td>
              <td>grudzień</td>
            </tr>
            <tr>
              <td>Powitanie Zimy - dzień biały</td>
              <td>22 grudnia</td>
            </tr>
            <tr>
              <td>Dzień Babci i Dziadka</td>
              <td>styczeń</td>
            </tr>
            <tr>
              <td>Bal karnawałowy</td>
              <td>styczeń</td>
            </tr>
            <tr>
              <td>Walentynki</td>
              <td>14 luty</td>
            </tr>
            <tr>
              <td>Święto Marchewki – dzień pomarańczowy</td>
              <td>10 marca</td>
            </tr>
            <tr>
              <td>Powitanie Wiosny - dzień zielony</td>
              <td>21 marca</td>
            </tr>
            <tr>
              <td>Międzynarodowy Dzień Teatru</td>
              <td>28 marca</td>
            </tr>
            <tr>
              <td>
                Międzynarodowy Dzień Świadomości Autyzmu - dzień niebieski
              </td>
              <td>02 kwietnia</td>
            </tr>
            <tr>
              <td>Międzynarodowy Dzień Ziemi</td>
              <td>21 maja</td>
            </tr>
            <tr>
              <td>Dzień Mamy i Taty</td>
              <td>maj</td>
            </tr>
            <tr>
              <td>Dni otwarte w przedszkolu</td>
              <td>czerwiec</td>
            </tr>
            <tr>
              <td>Dzień Dziecka</td>
              <td>czerwiec</td>
            </tr>
            <tr>
              <td>Powitanie Lata – dzień żółty</td>
              <td>czerwiec</td>
            </tr>
            <tr>
              <td>
                Uroczyste zakończenie roku szkolnego – pożegnanie starszaków
              </td>
              <td>czerwiec</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="przedszkole5">
      <Heading title={"Deklaracja dostępności"} />
        <div className="przedszkole5-container">
        <Collaps label="Deklaracja dostępności" icon="/deklaracja.jpg">
              <p>
              Zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i
aplikacji mobilnych podmiotów publicznych Niepubliczne Przedszkole Integracyjne Ania z
Zielonego Wzgórza zobowiązuje się do zapewnienia dostępności swojej strony internetowej.
Oświadczenie dotyczy strony pod adresem www.przedszkoleania.pl i jest ona częściowo
zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i
aplikacji mobilnych podmiotów publicznych.<br/>
Ułatwienia na stronie:<br/>
- Zmiana kontrastu,<br/>
- Możliwość zmiany rozmiaru tekstu,<br/>
- Podane wielkości plików do pobrania,<br/>
- Możliwość ustawienia fokusu wokół elementów nawigacyjnych.<br/>
<a
            href="./Tabela-podsumowująca-badanie-dostępności-cyfrowej.docx"
            target="_blank"
          >Tabela podsumowująca badanie dostępności cyfrowej</a><br/>

Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony
internetowej. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie strony
internetowej oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania
informacji w formie alternatywnej, powinna także określić formę tej informacji.<br/>

Podmiot publiczny powinien zrealizować żądanie niezwłocznie i nie później, niż w ciągu 7
dni. Jeżeli dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie
informuje o tym, kiedy realizacja żądania będzie możliwa, przy czym termin ten nie może być
dłuższy niż 2 miesiące. Jeżeli zapewnienie dostępności nie jest możliwe, podmiot publiczny
może zaproponować alternatywny sposób dostępu do informacji.
W przypadku, gdy podmiot odmówi realizacji żądania zapewnienia dostępności lub
alternatywnego dostępu do informacji, można złożyć skargę na takie działanie. Po
wyczerpaniu wszystkich możliwości skargę można przesłać także do Rzecznika Praw
Obywatelskich.<br/>
Żądanie należy kierować na adres:<br/>

Niepubliczne Przedszkole Integracyjne<br/>
Ania z Zielonego Wzgórza<br/>
ul. Prosta 53<br/>
08-300 Sokołów Podlaski<br/>

Tel. 728 858 838<br/>
e-mail: info@przedszkoleania.pl<br/>

Dostępność architektoniczna:<br/>
- Na parkingu zostało wydzielone i oznakowane miejsce przeznaczone dla osób z
niepełnosprawnościami<br/>
- Na teren placówki można wejść z psem przewodnikiem<br/>
- Wejście do przedszkola znajduje się od strony ulicy Prostej, nie występują
przewyższenia, możliwy jest wjazd wózkiem inwalidzkim<br/>
- Przy wejściu do przedszkola jest możliwość skorzystania z dzwonka celem
przywołania pracownika placówki<br/>
- Przedszkole znajduje się w budynku parterowym, nie występują schody w budynku a
korytarz umożliwia swobodne przemieszczanie się w jego obrębie<br/>
- Sale zabaw są przestronne, a łazienki przy salach dostosowane do potrzeb osób z
niepełnosprawnościami<br/>
- Na miejscu dostępna jest łazienka dostosowana do potrzeb osób z
niepełnosprawnościami<br/>
              </p>
            </Collaps>
          </div>
      </div>
    </div>
  );
}

export default Przedszkole;

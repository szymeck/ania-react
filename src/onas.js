import React from "react";
import Bar from "./components/Bar";
import Heading from "./components/Heading";
import Collaps from "./components/Collaps";
import "./onas.css";

const Onas = () => {
  return (
    <div>
      <Bar title={"O nas"} />
      <div class="onas1">
        <Heading title={"Nasze atuty"} />

        <div class="onas1-text">
          Naszym celem jest zapewnienie wszystkim dzieciom wyjątkowych warunków,
          sprzyjających bezpiecznej oraz twórczej zabawie i nauce.
          Przygotowujemy dzieci do dalszego rozwoju i kolejnego etapu edukacji,
          jakim jest szkoła. Pragniemy przekazywać dzieciom zasady tolerancji i
          akceptacji, kształtując dobre nawyki oraz zachowania oparte na
          współpracy z rówieśnikami. Zachęcamy do podejmowania działań poprzez
          kreatywne zabawy i inspirujące metody nauczania.
        </div>
      </div>
     
      
      <div class="onas3">
        <div class="onas3-container">
          <div class="onas3-text-container">
            <Collaps label="Kameralne Grupy" icon="/onas-5.jpg">
              <p>
                Mniej dzieci oznacza bardziej komfortowe warunki do zabawy i
                nauki. Kameralna grupa oznacza również mniej infekcji. Początek
                jesieni oznacza zazwyczaj początek okresu chorób, zwłaszcza
                jeśli dziecko dopiero zaczyna przygodę z przedszkolem, lub z
                jakichś względów ma obniżoną odporność.
              </p>
            </Collaps>
            <Collaps label="Adaptacja" icon="/onas-6.jpg">
              <p>
                W kameralnej grupie dziecku łatwiej się odnaleźć wśród mniejszej
                liczby przedszkolaków, nie czuje się przytłoczone hałasem, a
                nauczyciel może mu poświęcić więcej uwagi. Podczas wszystkich
                aktywności, nauczyciele mogą zapewnić każdemu dziecku
                odpowiednią ilość uwagi. Wesprzeć, gdy coś sprawia trudność,
                przytulić, kiedy tęskni się za mamą, poczekać, jeśli jakieś
                zadanie zajmie dziecku więcej czasu.
              </p>
            </Collaps>
            <Collaps label="Komfort każdego dziecka" icon="/onas-7.jpg">
              <p>
                Komfort każdego dziecka jest dla nas priorytetem, dlatego dużą
                wagę przywiązujemy do procesu adaptacji. W grupie integracyjnej,
                dzieci uczą się tego, że każdy ma prawo do swojego tempa pracy,
                własnego sposobu działania, innego pomysłu na rozwiązanie
                jakiegoś problemu.
              </p>
            </Collaps>
            <Collaps label="Specjaliści" icon="/onas-9.jpg">
              <p>
                W naszym przedszkolu pracują specjaliści m.in logopeda,
                fizjoterapeuta , terapeuta SI, pedagog specjalny, psycholog,
                neurologopeda - wszystkie dzieci są pod ich stałą kontrolą.
                Zajęcia grupowe takie jak gimnastyka czy logorytmika, oprócz
                frajdy dla dzieci, są również czasem obserwacji przez
                specjalistę od rozwoju mowy czy prawidłowej postawy. Również dla
                rodziców jest to duża zaleta, jeśli mają Państwo jakiekolwiek
                pytania lub wątpliwości możecie w każdej chwili na miejscu
                skonsultować się i poradzić. Dzięki współpracy całego zespołu ,
                Wasze dzieci mają możliwość wszechstronnego rozwoju.
              </p>
            </Collaps>
            <Collaps label="Nowoczesne wyposażenie" icon="/onas-10.jpg">
              <p>
                Nasze Przedszkole to również przestronne -nowocześnie wyposażone
                sale do zajęć, sala światła , gabinety do zajęć indywidualnych (
                logopedyczny, integracji sensorycznej) oraz nowoczesny Plac
                Zabaw na terenie Przedszkola.
              </p>
            </Collaps>
            <Collaps label="Uczymy tolerancji i akceptacji" icon="/onas-11.jpg">
              <p>
                Przedszkole integracyjne uczy dzieci tolerancji i akceptacji.
                Każdy maluch jest inny, ale jest akceptowany przez grupę takim
                jakim jest. Nie chodzi tylko o dzieci z trudnościami rozwojowymi
                - przecież każdemu przedszkolakowi czasem jest trudno sobie z
                czymś poradzić, boi się czegoś, potrzebuje większego wsparcia,
                ma gorszy dzień, nie wie jak coś zrobić, bo nigdy nie miał z tym
                styczności etc. W grupie integracyjnej, dzieci uczą się tego, że
                każdy ma prawo do swojego tempa pracy, własnego sposobu
                działania, innego pomysłu na rozwiązanie jakiegoś problemu,
                wyglądania inaczej, porozumiewania się w mniej standardowy
                sposób, okazywania emocji bardziej lub mniej ekspresyjnie etc.
                Jeśli przedszkolak akceptuje innych takimi, jakimi są, łatwiej
                mu jest również zaakceptować siebie i budować pozytywną
                samoocenę. Kończąc przedszkole wie, że nie wszyscy są doskonali.
                Nie boi się inności, jest otwarty i empatyczny.
              </p>
            </Collaps>
            <Collaps
              label="Dodatkowe zajęcia w ramach czesnego"
              icon="/onas-12.jpg"
            >
              <p>
                Oferujemy: dodatkowe godziny języka angielskiego, zajęcia
                logopedyczne, sensoryczne, rytmikę, warsztaty artystyczne oraz
                sensoplastykę. Posiadamy sprzęt oraz przestrzeń do zajęć
                ruchowych, gimnastycznych zarówno w przedszkolu jak i na
                zewnątrz. Dużą wagę przywiązujemy do realizacji zajęć z ABC
                dobrego wychowania.
              </p>
            </Collaps>
            <Collaps
              label="Stały kontakt Nauczyciel - Rodzic"
              icon="/onas-13.jpg"
            >
              <p>
                Jesteśmy dla Państwa i Waszych dzieci, dlatego gorąco zachęcamy
                Rodziców i zapraszamy do rozmowy z Nauczycielami , Specjalistami
                oraz Dyrektorem naszej placówki. Na bieżąco przekazujemy
                informacje o postępach rozwojowych dzieci, jak również bardzo
                chętnie przyjmujemy opinie- które są dla nas bardzo ważne. To
                dzięki wspólnej rozmowie i współpracy możemy ulepszać nasze
                działania.
              </p>
            </Collaps>
            <Collaps label="Zajęcia indywidualne" icon="/onas-14.jpg">
              <p>
                W naszym przedszkolu oferujemy kompleksową i codzienną terapię
                opartą o zajęcia indywidualne z naszymi specjalistami.
                Realizujemy zajęcia logopedyczne, integracji sensorycznej,
                rehabilitacji, terapię ręki, zajęcia z psychologiem, trening
                umiejętności społecznych, Terapię metodą Tomatisa oraz inne wg
                zaleceń .
              </p>
            </Collaps>
          </div>
        </div>
      </div>
      
    
      <div class="onas5">
        <Heading title={"Misja, wizja, cele"} />
        <div class="onas5-container">
          <div class="onas5-title-text">
            <p>
              {" "}
              Niepubliczne Przedszkole Integracyjne „ Ania z Zielonego Wzgórza”
              powstało z myślą o Was i waszych potrzebach. Chcemy abyście byli
              pewni , że Wasze dziecko jest pod opieką wykwalifikowanej kadry,
              ma zapewnioną potrzebną terapię oraz zajęcia zgodne z jego
              potrzebami. Aby każde dziecko i rodzic mógł u nas znaleźć
              wsparcie, oraz zajęcia prowadzone przez zespół specjalistów.
              Zdecydowaliśmy się na integrację, gdyż uważamy, że jest to
              najlepsza forma nauki w wieku przedszkolnym. Grupy są małe, a
              opieka indywidualnie dobrana do wymagań danego dziecka.{" "}
            </p>
          </div>

          <div class="container-3">
            <div class="row-1">
              <div class="row-1-item1">
                <div class="row-1-item1-img">
                  <img src="./onas-8.jpg" alt="" />
                </div>
              </div>
              <div class="row-1-item2">
                <div class="row-1-item2-content">
                  <div class="row-1-item2-list">
                    <div class="list-item">
                      <div class="list-item-icon">
                        <img src="./icon.png" alt="" />
                      </div>
                      <div class="list-item-text">
                        <p>
                          Naszą misją jest zapewnienie każdemu dziecku jak
                          najlepszych warunków do wszechstronnego rozwoju,
                          wspieranie rozwoju sfery emocjonalnej oraz stworzenie
                          warunków do rozwoju kreatywności w różnych obszarach
                          działalności dziecka.
                        </p>
                      </div>
                    </div>
                    <div class="list-item">
                      <div class="list-item-icon">
                        <img src="./icon.png" alt="" />
                      </div>
                      <div class="list-item-text">
                        <p>
                          Nasze Przedszkole powstało z wizją by zapewnić
                          harmonijny rozwój poznawczy i społeczny wszystkim
                          dzieciom oraz umożliwić łączenie w sposób
                          edukacyjno-wychowawczy dzieci ze specjalnymi
                          potrzebami edukacyjnymi.
                        </p>
                      </div>
                    </div>
                    <div class="list-item">
                      <div class="list-item-icon">
                        <img src="./icon.png" alt="" />
                      </div>
                      <div class="list-item-text">
                        <p>
                          Nasze cele to dostrzeganie specjalnych potrzeb
                          edukacyjnych dzieci, a następnie pomoc w ich
                          niwelowaniu dzięki pracy ze specjalistami.
                        </p>
                      </div>
                    </div>
                    <div class="list-item">
                      <div class="list-item-icon">
                        <img src="./icon.png" alt="" />
                      </div>
                      <div class="list-item-text">
                        <p>
                          Ponadto naszym celem jest udzielanie wsparcia rodzicom
                          w rozwiązywaniu problemów wychowawczych i
                          dydaktycznych oraz rozwijaniu ich umiejętności
                          wychowawczych w celu zwiększenia efektywności pomocy
                          udzielanej dzieciom.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading title={"Kadra"} />
      <div className="przedszkole3">
      
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
    </div>
  );
};

export default Onas;

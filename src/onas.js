import React from 'react';
import Bar from './components/Bar';
import Collaps from './components/Collaps';
import './onas.css';

  
const Onas = () => {
  return (
    <div>
      <Bar title={'O nas'}/>
      <div class="onas1">
      
<div class="onas1-title">
  <h2>Nasze atuty </h2>
</div>
  
  <div class="onas1-text">Naszym celem jest zapewnienie wszystkim dzieciom wyjątkowych warunków, sprzyjających bezpiecznej oraz twórczej zabawie i nauce. Przygotowujemy dzieci do dalszego rozwoju i kolejnego etapu edukacji, jakim jest szkoła.
    Pragniemy przekazywać dzieciom zasady tolerancji i akceptacji, kształtując dobre nawyki oraz zachowania oparte na współpracy z rówieśnikami. Zachęcamy do podejmowania działań poprzez kreatywne zabawy i inspirujące metody nauczania.</div>


    </div>
    <div class="onas2">
      {/* <div class="onas2-container">
        <div class="onas2-item">
          <div class="onas2-item-img">
            <img src="./onas-5.jpg" alt=""></img>
          </div>
          <div class="onas2-item-text">
            <h3>Kameralne Grupy</h3>
            <p>Mniej dzieci oznacza bardziej komfortowe warunki do zabawy i nauki.  Kameralna grupa oznacza również mniej infekcji. Początek jesieni oznacza zazwyczaj początek okresu chorób, zwłaszcza jeśli dziecko dopiero zaczyna przygodę z przedszkolem, lub z jakichś względów ma obniżoną odporność. </p>
          </div>
        </div>
        <div class="onas2-item">
          <div class="onas2-item-img">
          <img src="./onas-6.jpg" alt=""></img>
          </div>
          <div class="onas2-item-text">
            <h3>Adaptacja</h3>
            <p> W kameralnej grupie dziecku łatwiej się odnaleźć wśród mniejszej liczby przedszkolaków, nie czuje się przytłoczone hałasem, a nauczyciel może mu poświęcić więcej uwagi. Podczas wszystkich aktywności, nauczyciele mogą zapewnić każdemu dziecku odpowiednią ilość uwagi. Wesprzeć, gdy coś sprawia trudność, przytulić, kiedy tęskni się za mamą, poczekać, jeśli jakieś zadanie zajmie dziecku więcej czasu.</p>
          </div>
        </div>
        <div class="onas2-item">
          <div class="onas2-item-img">
          <img src="./onas-7.jpg" alt=""></img>
          </div>
          <div class="onas2-item-text">
            <h3>Komfort każdego dziecka</h3>
            <p>Komfort każdego dziecka jest dla nas priorytetem, dlatego dużą wagę przywiązujemy do procesu adaptacji. W grupie integracyjnej, dzieci uczą się tego, że każdy ma prawo do swojego tempa pracy, własnego sposobu działania, innego pomysłu na rozwiązanie jakiegoś problemu.</p>
          </div>
        </div>
      </div> */}
    </div>
    <div class="onas3">
      <div class="onas3-container">
        <div class="onas3-text-container">

          <Collaps label="Kameralne Grupy" icon="/onas-5.jpg" >
          <p>Mniej dzieci oznacza bardziej komfortowe warunki do zabawy i nauki.  Kameralna grupa oznacza również mniej infekcji. Początek jesieni oznacza zazwyczaj początek okresu chorób, zwłaszcza jeśli dziecko dopiero zaczyna przygodę z przedszkolem, lub z jakichś względów ma obniżoną odporność.</p>
          </Collaps>
          <Collaps label="Adaptacja" icon="/onas-6.jpg" >
          <p>W kameralnej grupie dziecku łatwiej się odnaleźć wśród mniejszej liczby przedszkolaków, nie czuje się przytłoczone hałasem, a nauczyciel może mu poświęcić więcej uwagi. Podczas wszystkich aktywności, nauczyciele mogą zapewnić każdemu dziecku odpowiednią ilość uwagi. Wesprzeć, gdy coś sprawia trudność, przytulić, kiedy tęskni się za mamą, poczekać, jeśli jakieś zadanie zajmie dziecku więcej czasu.</p>
          </Collaps>
          <Collaps label="Komfort każdego dziecka" icon="/onas-7.jpg" >
          <p>Komfort każdego dziecka jest dla nas priorytetem, dlatego dużą wagę przywiązujemy do procesu adaptacji. W grupie integracyjnej, dzieci uczą się tego, że każdy ma prawo do swojego tempa pracy, własnego sposobu działania, innego pomysłu na rozwiązanie jakiegoś problemu.</p>
          </Collaps>
          <Collaps label="Specjaliści" icon="/onas-9.jpg" >
          <p>W naszym  przedszkolu  pracują specjaliści m.in logopeda, fizjoterapeuta , terapeuta SI, pedagog specjalny, psycholog, neurologopeda - wszystkie dzieci są pod ich stałą kontrolą. Zajęcia grupowe takie jak gimnastyka czy logorytmika, oprócz frajdy dla dzieci, są również czasem obserwacji przez specjalistę od rozwoju mowy czy prawidłowej postawy. Również dla rodziców jest to duża zaleta, jeśli mają  Państwo jakiekolwiek pytania lub wątpliwości możecie w każdej chwili  na miejscu skonsultować się i poradzić. Dzięki współpracy całego zespołu , Wasze dzieci mają możliwość wszechstronnego rozwoju.</p>
          </Collaps>
          <Collaps label="Nowoczesne wyposażenie"  icon="/onas-10.jpg">
            <p>Nasze Przedszkole to również przestronne -nowocześnie wyposażone sale do zajęć, sala światła  , gabinety do zajęć indywidualnych ( logopedyczny, integracji sensorycznej) oraz nowoczesny Plac Zabaw na terenie Przedszkola. </p>
          </Collaps>
          <Collaps label="Uczymy tolerancji i akceptacji"  icon="/onas-11.jpg" >
          <p>Przedszkole  integracyjne uczy dzieci tolerancji i akceptacji. Każdy maluch jest inny, ale jest akceptowany przez grupę takim jakim jest. Nie chodzi tylko o dzieci z trudnościami rozwojowymi - przecież  każdemu przedszkolakowi czasem jest trudno sobie z czymś poradzić, boi się czegoś, potrzebuje większego wsparcia, ma gorszy dzień, nie wie jak coś zrobić, bo nigdy nie miał z tym styczności etc. W grupie integracyjnej, dzieci uczą się tego, że każdy ma prawo do swojego tempa pracy, własnego sposobu działania, innego pomysłu na rozwiązanie jakiegoś problemu, wyglądania inaczej, porozumiewania się w mniej standardowy sposób, okazywania emocji bardziej lub mniej ekspresyjnie etc. Jeśli przedszkolak akceptuje innych takimi, jakimi są, łatwiej mu jest również zaakceptować siebie i budować pozytywną samoocenę. Kończąc przedszkole wie, że nie wszyscy są doskonali. Nie boi się inności, jest otwarty i empatyczny. </p>
          </Collaps>
          <Collaps label="Dodatkowe zajęcia w ramach czesnego"  icon="/onas-12.jpg" >
          <p> </p>
          </Collaps>
          <Collaps label="Stały kontakt Nauczyciel - Rodzic"  icon="/onas-13.jpg" >
          <p></p>
          </Collaps>
          <Collaps label="Zajęcia indywidualne"  icon="/onas-14.jpg" >
          <p> </p>
          </Collaps>
          
        </div>
        
      </div>
    </div>
    <div class="onas4">
      {/* <div class="onas4-container">
        <div class="onas4-text-container">
          <div class="onas4-title">
            <div class="onas4-title-text">
              <h2>Co nas wyróżnia</h2>
              <p>Jesteśmy nowoczesną placówką integracyjną w Sokołowie Podlaskim w pełni przystosowaną do realizacji zadań edukacyjno-wychowawczych dla wszystkich dzieci, również tych ze specjalnymi potrzebami edukacyjnymi. Wszystkie zajęcia w naszym Przedszkolu są realizowane w ramach czesnego (m.in język angielski, zajęcia logopedyczne, integracja sensoryczna, rehabilitacja itp. ). </p>
            </div>
           
          </div>
          <div class="onas4-text">
            <p>Wszystkie zajęcia, prowadzone w przedszkolu integracyjnym, są dostępne dla wszystkich dzieci z  grupy. Nie tworzy się dla dzieci sytuacji, podczas których rywalizują, ktoś wygrywa bo zrobi coś szybciej, dostaje nagrodę, bo udało mu się coś zrobić najlepiej etc. Zadania dla przedszkolaków, oczywiście, mają na celu sprawdzenie i ewaluowanie umiejętności dziecka, ale stawia się nacisk na docenienie starań dziecka, a niekoniecznie efektowność ostatecznego efektu pracy. Dzięki większej ilości nauczycieli w grupie i nieco wolniejszemu rytmowi pracy, wszystkie dzieci mogą brać aktywny udział w zajęciach, udzielać się, podzielić się jakąś uwagą, zaproponować coś lub poprosić o wsparcie. Jeśli coś sprawia maluchowi trudność nauczyciele i specjaliści ustalają z rodzicami jak można pomóc przedszkolakowi, co można razem ćwiczyć, jakie elementy są już opanowane, więc można ich wymagać etc. - wspólne działania wszystkich w najbliższym środowisku dziecka, mogą pomóc mu w osiągnięciu danej umiejętności.</p>
            <p>Dużą wagę przywiązujemy do procesu adaptacji.
              Dzieci wprowadzane są do naszej placówki stopniowo, nie wszystkie w jednym czasie. Adaptację rozpoczynamy już w miesiącach wakacyjnych tak, aby na początku września już cała grupa czuła się świetnie. </p>
              <p>Jesteśmy dla Państwa i Waszych dzieci, dlatego gorąco zachęcamy Rodziców i zapraszamy do rozmowy z Nauczycielami , Opiekunami oraz Dyrektorem naszej placówki. Na bieżąco przekazujemy informacje o postępach rozwojowych dzieci, jak również bardzo chętnie przyjmujemy opinie- które są dla nas bardzo ważne. 
                To dzięki wspólnej rozmowie i współpracy możemy ulepszać nasze działania. </p>
                <h4>Jesteśmy tu dla Państwa także pomagajmy sobie, aby nasi najmłodsi dostali najlepsze na co zasługują. </h4>
          </div>
        </div>
      </div> */}
    </div>
    <div class="onas5">
      <div class="onas5-container">
        <div class="onas5-title">
          <div class="onas5-title-text">
<h2>Misja, wizja, cele</h2>
<p> Niepubliczne Przedszkole Integracyjne „ Ania z Zielonego Wzgórza” powstało z myślą o Was i waszych potrzebach. Chcemy abyście byli pewni , że Wasze dziecko jest pod opieką wykwalifikowanej kadry, ma zapewnioną potrzebną terapię oraz zajęcia zgodne z jego potrzebami. Aby każde dziecko i rodzic mógł u nas znaleźć wsparcie, oraz zajęcia prowadzone przez zespół specjalistów.
  Zdecydowaliśmy się na integrację, gdyż uważamy, że jest to najlepsza forma nauki w wieku przedszkolnym. 
  Grupy są małe, a opieka indywidualnie  dobrana do wymagań danego dziecka. </p>
          </div>
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
                        Naszą misją jest zapewnienie każdemu dziecku jak najlepszych warunków do wszechstronnego rozwoju, wspieranie rozwoju  sfery emocjonalnej oraz stworzenie warunków do rozwoju kreatywności w różnych obszarach działalności dziecka. 
                      </p>
                    </div>
                  </div>
                  <div class="list-item">
                    <div class="list-item-icon">
                      <img src="./icon.png" alt="" />
                    </div>
                    <div class="list-item-text">
                      
                      <p>
                        Nasze Przedszkole powstało z wizją by zapewnić harmonijny rozwój poznawczy i społeczny wszystkim dzieciom oraz umożliwić łączenie w sposób edukacyjno-wychowawczy dzieci ze specjalnymi potrzebami edukacyjnymi. 
                      </p>
                    </div>
                  </div>
                  <div class="list-item">
                    <div class="list-item-icon">
                      <img src="./icon.png" alt="" />
                    </div>
                    <div class="list-item-text">
                      
                      <p>
                        Nasze cele to dostrzeganie specjalnych potrzeb edukacyjnych dzieci,  a następnie pomoc w ich niwelowaniu dzięki pracy ze specjalistami.
                      </p>
                    </div>
                  </div>
                  <div class="list-item">
                    <div class="list-item-icon">
                      <img src="./icon.png" alt="" />
                    </div>
                    <div class="list-item-text">
                      
                      <p>
                        Ponadto naszym celem jest  udzielanie wsparcia rodzicom w rozwiązywaniu problemów wychowawczych i dydaktycznych oraz rozwijaniu ich umiejętności wychowawczych w celu zwiększenia efektywności pomocy udzielanej dzieciom.
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
    </div>
  );
};
  
export default Onas;
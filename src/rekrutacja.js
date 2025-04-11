import React from "react";
import Bar from "./components/Bar";
import "./rekrutacja.css";
import Heading from "./components/Heading";
import { Link } from "react-router-dom";

const Rekrutacja = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Bar title={"Rekrutacja"} />

      <div className="rekrutacja1">
        <Heading title={"Zapisz swoje dziecko"} />
        <div className="rekrutacja1-container">
          <div className="rekrutacja1-item">
            <div className="item-text">
              <h2>Umów się na spotkanie</h2>
              <p>
                Umów się na spotkanie z Dyrektorem Przedszkola, podczas
                spotkania dowiesz się o naszej misji i wartościach.
              </p>
            </div>
            <img src="./rekrutacja-1.jpg" alt=""></img>
          </div>
          <div className="rekrutacja1-item">
            <div className="item-text">
              <h2>Spotkajmy się</h2>
              <p>
                Zapraszamy Rodziców na spotkanie wraz z dziećmi w celu
                zaprezentowania naszego nowego Przedszkola,oraz warunków jakimi
                dysponujemy.
              </p>
            </div>
            <img src="./rekrutacja-2.jpg" alt=""></img>
          </div>
          <div className="rekrutacja1-item">
            <div className="item-text">
              <h2>Witaj Przedszkole !</h2>
              <p>
                Podpisanie umowy - po wspólnej akceptacji warunków podpisujemy
                umowę.
              </p>
            </div>
            <img src="./rekrutacja-3.jpg" alt=""></img>
          </div>
        </div>
        <div className="karta-button">
          <a
            href="./Karta-Zapisu-Dziecka-do-Przedszkola-Ania-z-Zielonego-Wzgórza-w-Sokolowie-Podlaskim.doc"
            target="_blank"
          >
            <button class="learn-more">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">POBIERZ KARTĘ ZAPISU DZIECKA</span>
            </button>
          </a>
        </div>
        <div className="karta-text">
          <h3>W celu zgłoszenia dziecka wyślij uzupełnioną kartę zgłoszeniową na <span>info@przedszkoleania.pl</span> lub przynieś ją do sekretariatu Przedszkola</h3><h3><Link onClick={() => handleClick()} to="/kontakt">
              <a class="start__free" href="/"
                >skontaktuj sie z nami</a></Link> </h3>
        </div>
      </div>
      <div className="rekrutacja2">
        <div className="rekrutacja2-container">
          <div className="rekrutacja2-text1">
            <h2>Rekrutacja do naszego Przedszkola prowadzona jest w trakcie całego roku szkolnego !</h2>
          </div>
          <div className="rekrutacja2-text2">
            <h3>Aktualnie prowadzimy rekrutację do trzech grup :</h3>
            <p><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Grupy najmłodszej- dla dzieci od 2,5 -3 lat</p>
            <p><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Grupy 4 latków</p>
            <p><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Grupy 5-6 latków</p>
          </div>
          <div className="rekrutacja2-text3">
            <h3>Przypominamy, że realizujemy obowiązkowe roczne
przygotowanie przedszkolne (tzw. zerówkę).</h3>
          </div>
          <div className="rekrutacja2-text4">
            <h2>OPŁATY</h2>
            <p><i class="fa fa-info-circle" aria-hidden="true"></i> Opłata za przedszkole to stała opłata miesięczna (350 zł) wraz z opłatą wpisową (200 zł), która
jest jednorazowa.</p>
<p><i class="fa fa-info-circle" aria-hidden="true"></i> Dodatkowo doliczana jest stawka żywieniowa- za każdy dzień obecności dziecka.</p>
<p><i class="fa fa-info-circle" aria-hidden="true"></i> Dla rodzeństwa zniżka, czesne -50% na drugie dziecko.</p>

          </div>
          <div className="rekrutacja2-text5">
            <h2>Drodzy Rodzice!</h2>
            <p><span>1.</span> W celu zapisania dziecka do Niepublicznego Przedszkola Integracyjnego Ania z Zielonego 
Wzgórza w Sokołowie Podlaskim prosimy o pobranie i wypełnienie karty zapisu, a następnie
przesłanie jej na adres email: info@przedszkoleania.pl lub złożenie jej w sekretariacie
Przedszkola,
przy ul. Prostej 53.</p>
<p><span>2.</span> Złożony formularz jest jednocześnie wyrażeniem zgody na uczestniczenie w postępowaniu
rekrutacyjnym/kwalifikacyjnym dziecka.</p>
<p><span>3.</span> Po otrzymaniu zgłoszenia, Dyrektor przedszkola nawiąże z Państwem bezpośredni kontakt,
celem omówienia warunków przyjęcia dziecka.</p>
<p><span>4.</span> Przedszkole zastrzega sobie prawo do nieprzyjęcia dziecka, jeśli Dyrekcja uzna, że przedszkole
nie jest w stanie zapewnić dziecku optymalnej opieki lub terapii.</p>
<p><span>5.</span> Przyjęcie dziecka następuje pod warunkiem dostarczenia podpisanych dokumentów
rekrutacyjnych, zakwalifikowania dziecka do przedszkola i zawarcia przez Rodzica umowy z
Przedszkolem.</p>
<p><span>6.</span> Rodzice/opiekunowie są zobowiązani podpisać Umowę o kształcenie dziecka oraz wpłacić
opłatę wpisową ( 200 zł ) w ciągu 7 dni od uzyskania informacji o przyjęciu dziecka.</p>
<h3>ZAPRASZAMY</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekrutacja;

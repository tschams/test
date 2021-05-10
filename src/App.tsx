import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIceCream,
  faHamburger,
  faLemon,
  faWater,
  faUmbrellaBeach,
  faCity
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [selected, setSelected] = React.useState("things");
  const icons =
    selected === "things"
      ? [faIceCream, faHamburger, faLemon]
      : [faWater, faUmbrellaBeach, faCity];
  return (
    <>
      <div className="top">
        <div
          className="image"
          style={{ backgroundImage: "url('/restaurant.jpg')" }}
        >
          <div className="title-bar">
            <span className="title capitalize margin-left align-center">
              A Restaurant Like No Other
            </span>
          </div>
          <div className="promo-single no-shake">
            <div className="title white margin-left no-shake">
              <div className="title-line no-shake">We Offer Catering</div>
              <div className="title-line no-shake">For Up To 150 People</div>
            </div>
            <div className="white margin-left lato no-shake">
              Our 2000 square foot dining room is perfect
              <br />
              for your next occasion!
            </div>
            <div className="no-shake">
              <button className="button book-button margin-left white lato">
                book it!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <span className="title margin-left">
          Enjoy 10% Off With Your Next Visit
        </span>
        <div className="margin-right">
          <button className="button sign-up-button lato">sign up now</button>
        </div>
      </div>
      <div className="bottom">
        <div className="button-container">
          <button
            className={`button bottom-button lato ${selected === "things" &&
              "selected"}`}
            onClick={() => setSelected("things")}
          >
            things to do
          </button>
          <button
            onClick={() => setSelected("places")}
            className={`button bottom-button lato ${selected === "places" &&
              "selected"}`}
          >
            places to eat
          </button>
        </div>
        <div className="cards">
          {icons.map((e, i) => (
            <div key={i} className={`card lato ${i === 1 && "bigger"}`}>
              <div className={`card-top ${i === 1 ? "smaller-card-top" : ""}`}>
                <div className="semi-circle">
                  <FontAwesomeIcon className="margin-top" icon={e} />
                </div>
              </div>

              <div className="card-title title title-line align-end margin-top">
                Lorem ipsum dolor sit amet, consectetur adioiscin elit
              </div>

              <div className="lato align-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent accccc accumsan tellus. Sed iaculis Donec at.
              </div>

              <button
                className={`button card-button ${
                  i === 1 ? "smaller-button" : ""
                }`}
              >
                book it!
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import Navigation from "./components/Navbar/MyNavbar";
import FallingImages from "./components/FallingImages";

class App extends React.Component {
  render() {
    return (
      <div className="background">
        <FallingImages />

        <div>
          <Navigation />
        </div>

        <div className="d-flex justify-content-center rotating-image">
          {" "}
          {/* Add the rotating-image class */}
          <img
            src={process.env.PUBLIC_URL + "/images/circleLogo.png"}
            style={{ width: "90%", height: "auto" }}
          />
        </div>
        <div className="access">
          <div className="access">
            The official page of Free Base Red Pill ($Coinbase)
          </div>
        </div>
        <div className="square">
          <p className="textMain">
            <div className="warning">WARNING</div>
            <div className="warningSub">
              Before prodceeding please make sure you:{" "}
            </div>
            <ul>
              <li> quit your job </li>
              <li> dump your girl </li>
              <li> litter in public </li>
              <li> go fuck yourself </li>
            </ul>
          </p>
        </div>
        <br />
        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              How to Buy
            </div>
            <ul>
              <li> Download metamask and create an account </li>
              <li>
                {" "}
                Connect metamask to uniswap or dexView and aquire some @Coinbase{" "}
              </li>
              <li>
                {" "}
                CONTRACT ADDRESS: 0x367cC5042E8eb850fE0e78a84b2f0df2A6aa027a
              </li>
              <li> become a free thinker</li>
            </ul>
          </p>
        </div>
        <br />

        <div className="image-container">
          <div className="center-img">
            <img
              src={process.env.PUBLIC_URL + "/images/pepe-red-pill.gif"}
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="center-img">
            <img
              src={process.env.PUBLIC_URL + "/images/pepered.jpg"}
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
        <br></br>
        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              The core team
            </div>
            <ul>
              <li> kanye west </li>
              <li> elon musk </li>
              <li> jeff bezo$ </li>
              <li> topG </li>

              <li>
                {" "}
                donald trump{" "}
                <audio controls autoPlay>
                  <source
                    src={process.env.PUBLIC_URL + "/really-rich.mp3"}
                    type="audio/mpeg"
                  />
                </audio>
              </li>
            </ul>
          </p>
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/thread.png"}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <br></br>
        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              Our Story
            </div>
            In the world of shit coins and memes, nothing is guaranteed other
            than 0. but within the madness there is a slimmer of hope. the hope
            that a shitcoin, a shitcoin not like the rest, will send so hard
            that you can stop wage cucking and staring at charts. a shitcoin
            coin that will allow you to stop your dastardly habits of edging to
            cartoon porn and rage trading after eating goyslop and playing video
            games. Coinbase.
          </p>
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/erectile.gif"}
            style={{ width: "85%", height: "auto" }}
          />
        </div>
        <br />
        <br />
        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              Testimonials
            </div>

            <audio controls>
              <source
                src={process.env.PUBLIC_URL + "/getsmegoing.mp3"}
                type="audio/mpeg"
              />
            </audio>
            <audio controls>
              <source
                src={process.env.PUBLIC_URL + "/vaxed.mp3"}
                type="audio/mpeg"
              />
            </audio>
            <audio controls>
              <source
                src={process.env.PUBLIC_URL + "/oldfree.mp3"}
                type="audio/mpeg"
              />
            </audio>
          </p>
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/loogo.png"}
            style={{ width: "85%", height: "auto" }}
          />
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/emmit.png"}
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <br />
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/nba.png"}
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <br />
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/wolf.png"}
            style={{ width: "60%", height: "auto" }}
          />
        </div>
        <br />
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/peter1.jpg"}
            style={{ width: "60%", height: "auto" }}
          />
        </div>
        <br />
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/peter2.jpg"}
            style={{ width: "60%", height: "auto" }}
          />
        </div>
        {/* floating ponies */}
        <div className="parent">
          <div className="floating-img top-left">
            <img
              src={process.env.PUBLIC_URL + "/images/pony.gif"}
              style={{ width: "100px", height: "auto", opacity: 0.8 }}
            />
          </div>
          <div className="floating-img top-right">
            <img
              src={process.env.PUBLIC_URL + "/images/pony.gif"}
              style={{ width: "100px", height: "auto", opacity: 0.8 }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

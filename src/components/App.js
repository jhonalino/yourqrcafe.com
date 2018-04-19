import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import qs from "qs";
import FormContainer from "./FormContainer";
import Results from "./Results";
import qrTypes from "./qrTypes";
import ReturnPolicy from "../legal/ReturnPolicy";
import Disclaimer from "../legal/Disclaimer";
import PrivacyPolicy from "../legal/PrivacyPolicy";
import TermsCondition from "../legal/TermsCondition";
import CookiePolicy from "../legal/CookiePolicy";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <h1>Yourqrcafe</h1>
    </Link>
  </nav>
);

const QrMenu = ({ location, match }) => (
  <div className="box">
    <ul className="qr-menu">
      {qrTypes.map(qrType => (
        <li key={qrType.name} className="qr-menu-item">
          <NavLink
            className="link"
            activeClassName="active"
            to={{
              search: `type=${qrType.name}`
            }}
            isActive={() =>
              qs.parse(location.search.slice(1)).type === qrType.name
            }
          >
            <i className="material-icons">{qrType.icon}</i>
            {qrType.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Faq = () => (
  <section className="section section-banner faq">
    <div className="container">
      <h1 className="title">F.A.Q</h1>
      <h2 className="subtitle">What is QR code?</h2>
      <p className="">
        The letters Q and R stand for a quick response. This code was so named
        because the purpose of the development was to create a code that could
        be read quickly.
      </p>
      <h2 className="subtitle">
        Can I put my social media links in the URL section?
      </h2>
      <p className="">
        Absolutely! You can put any website links in the URL section. Make sure
        that the URL leads to a mobile-friendly website because most of the
        scans will come from a smartphone
      </p>
      <h2 className="subtitle">
        How easy is it to utilize the power of QR CODE?
      </h2>
      <ul>
        <li> it's easy as</li>
        <li>1. choose a QR type and encode an info</li>
        <li>2. generate and download the code</li>
        <li>3. print and scan</li>
      </ul>
      <p> three little steps :)</p>
      <h2 className="subtitle">Is there a fee for generating QR Code?</h2>
      <p className="">
        <i style={{ fontFamily: ["'Handlee'", "cursive"] }}>Yourqrcafe</i> lets
        you generate unlimited static QR code for FREE
      </p>
      <h2 className="subtitle">
        Where can I find more information about QR Code?
      </h2>
      <p className=" ">
        You can find more info from{" "}
        <a href="http://www.qrcode.com/en/faq.html">qrcode.com</a>
      </p>
    </div>
  </section>
);

const Tips = () => (
  <section className="section section-banner shaded">
    <div className="container">
      <h1 className="title">TIP</h1>
      <h2 className="subtitle">
        Make sure to test your QR code if you've encoded the right data and
        ensure its scannable. And since most users will scan with their mobile
        device, for them to have a great experience the URL your encoding should
        take them to a mobile-friendly page
      </h2>
    </div>
  </section>
);

const About = () => (
  <section className="section section-banner shaded">
    <div className="container">
      <h1 className="title">ABOUT</h1>
      <h2 className="subtitle">
        <i style={{ fontFamily: ["'Handlee'", "cursive"] }}>Yourqrcafe</i> is
        your one-stop shop for generating 100% free static QR code.
      </h2>
    </div>
  </section>
);

const Contact = () => (
  <section className="section section-banner">
    <div className="container">
      <h1 className="title">CONTACT</h1>
      <h2 className="subtitle">
        if you have any inquiries email me at hello@jhonalino.com
      </h2>
    </div>
  </section>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <div>
                  {props.location.search !== "" ? (
                    <div>
                      <div className="main-container">
                        <div className="main">
                          <div className="main-left">
                            <QrMenu {...props} />
                            <FormContainer {...props} />
                          </div>
                          <Results {...props} />
                        </div>
                      </div>
                      <About />
                      <Faq />
                      <Tips />
                      <Contact />
                    </div>
                  ) : (
                    <Redirect
                      to={{
                        pathname: "./",
                        search: "type=url"
                      }}
                    />
                  )}
                </div>
              )}
            />
            <Route path="/us/cookie-policy" component={CookiePolicy} />
            <Route path="/us/disclaimer" component={Disclaimer} />
            <Route path="/us/privacy-policy" component={PrivacyPolicy} />
            <Route path="/us/terms-of-use" component={TermsCondition} />
            {/* uncomment after implementing subscription */}
            {/* <Route path='/us/return-policy' component={ReturnPolicy} /> */}
          </Switch>
          <footer>
            <div className="container">
              <div className="content has-text-centered">
                <i style={{ fontFamily: ["Handlee", "cursive"] }}>Yourqrcafe</i>{" "}
                by <a href="https://jhonalino.com/">Jhon Alino</a>
                <h6>RESOURCES</h6>
                <ul>
                  <li>
                    <Link to="/us/disclaimer">Disclaimer</Link>
                  </li>
                  <li>
                    <Link to="/us/cookie-policy">Cookie</Link>
                  </li>
                  <li>
                    <Link to="/us/privacy-policy">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/us/terms-of-use">Terms</Link>
                  </li>
                </ul>
                <p className="credit">
                  QR Code is a registered trademark of denso wave incorporated
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

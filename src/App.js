import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <h1>Font awesome</h1>
      <h2>How to use font awesome Icons!</h2>
      <br />
      <br />
      <div className="contact">
        <FontAwesomeIcon icon={faPhone} /> &nbsp;123 45 453
        <br />
        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;123@gmail.com
      </div>
      <br />
      <br />
      <div className="socials">
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
      </div>
    </div>
  );
}

import "./style.css";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import twitter from "./../../img/icons/twitter.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/bogdanvasilliev/">
                <img src={instagram} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/BohdanPopovychenko">
                <img src={gitHub} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/bohdan-popovychenko-078759289/">
                <img src={linkedIn} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-junior.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

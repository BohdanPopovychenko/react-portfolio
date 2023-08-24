import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hello, my name is <em>Bogdan</em>,
          </strong>
          <br />
          i'am beginner frontend developer
        </h1>
        <div className="header__text">
          <p>
            active to study anything new, that will needed for work in future
          </p>
        </div>
        <a href="https://github.com/BohdanPopovychenko" className="btn">
          Look Git
        </a>
      </div>
    </header>
  );
};

export default Header;

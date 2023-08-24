const Contacts = () => {
  return (
    <main className="sections">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kyiv/Cherkasy, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+380677167819">+380 (67) 716 78 19</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:bogdanpopovichenko@icloud.com">
                bogdanpopovichenko@icloud.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;

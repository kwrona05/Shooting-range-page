import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container">
  <header>
    <img src="" alt="logo" />
    <Link to="About">O nas</Link>
    <Link to="Calendar">Kalendarz</Link>
    <Link to="News">Zapowiedzi</Link>
    <Link to="Messages">Komunikaty</Link>
    <Link to="Events">Wydarzenia</Link>
    <button onClick={} className="contact">Kontakt</button>
  </header>
  <div className="body">
    <div className="main-container">
        <label>
        <h2>LOK ENERGETYK Jelenia Góra</h2>
        <p>Strzelać potrafią wszyscy, ale trafiać do celu nie każdy</p>
        </label>
        <label>
            <button onClick={} className="event-btn">Wydarzenia</button>
            <button onClick={} className="calendar-btn">Kalendarz</button>
        </label>
    </div>
    <div className="second-container">

    </div>
  </div>
  </div>
    )
}
export default Home
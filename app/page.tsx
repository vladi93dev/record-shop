export default function Home() {
  return (
    <>
      <header>
        <div>Needle & Static Records</div>

        <nav>
          <a href="#arrivals">New Arrivals</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p>Independent record store</p>

          <h1>
            Good Music
            <br />
            Lives Here.
          </h1>

          <p>
            New and used vinyl, carefully selected for people who still love
            digging through records.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#arrivals">
              Browse New Arrivals
            </a>
            <a className="secondary-button" href="#visit">
              Visit the Shop
            </a>
          </div>
        </section>

        <section id="arrivals">
          <h2>New Arrivals</h2>
        </section>

        <section id="about">
          <h2>About</h2>
        </section>

        <section id="visit">
          <h2>Visit</h2>
        </section>
      </main>
    </>
  );
}

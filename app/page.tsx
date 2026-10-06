import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <a className="brand" href="#">
          Needle & Static
          <span> Records</span>
        </a>

        <nav>
          <a href="#arrivals">New Arrivals</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <main>
        <Hero />
        <section id="arrivals" className="arrivals">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Just in</p>
              <h2 className="secondary-title">New Arrivals</h2>
            </div>

            <a href="#">View all records</a>
          </div>

          <div className="record-grid">
            <article className="record-card">
              <img src="/images/8.png" alt="Ash Coast - Faint Reciever" />

              <div className="record-info">
                <div>
                  <h3>Ash Coast</h3>
                  <p>Faint Reciever</p>
                </div>

                <span>₪120</span>
              </div>
            </article>
            <article className="record-card">
              <img src="/images/7.png" alt="Moth Circuit - Platform Weather" />

              <div className="record-info">
                <div>
                  <h3>Moth Cirtuit</h3>
                  <p>Platform Weather</p>
                </div>

                <span>₪90</span>
              </div>
            </article>

            <article className="record-card">
              <img src="/images/4.png" alt="Static Bloom - Night Windows" />

              <div className="record-info">
                <div>
                  <h3>Morrow Static</h3>
                  <p>Cold Horizon</p>
                </div>

                <span>₪100</span>
              </div>
            </article>

            {/* repeat */}
          </div>
        </section>
        <section id="about" className="about">
          <div className="about-image">
            <img
              src="/images/store_int_1.png"
              alt="Inside Needle & Static Records"
            />
          </div>

          <div className="about-content">
            <p className="section-kicker">About the shop</p>

            <h2 className="secondary-title">An underground record shop.</h2>

            <p className="about-text">
              Needle & Static is an independent record shop focused on new and
              used vinyl, from familiar favorites to records you didn&apos;t
              know you were looking for.
            </p>

            <div className="services">
              <div>
                <span>01</span>
                <h3>Buy</h3>
              </div>

              <div>
                <span>02</span>
                <h3>Sell</h3>
              </div>

              <div>
                <span>03</span>
                <h3>Trade</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="visit-top">
            <div>
              <p className="section-kicker">Visit the shop</p>
              <h2 className="secondary-title">Come dig through the crates.</h2>
            </div>

            <a className="visit-link" href="#">
              Get Directions →
            </a>
          </div>

          <div className="visit-info">
            <div>
              <p className="visit-label">Address</p>
              <p>
                24 High St.
                <br />
                Novara
              </p>
            </div>

            <div>
              <p className="visit-label">Hours</p>
              <p>
                Sun–Thu 11:00–20:00
                <br />
                Fri 10:00–15:00
                <br />
                Sat Closed
              </p>
            </div>

            <div>
              <p className="visit-label">Contact</p>
              <p>
                hello@needleandstatic.com
                <br />
                Instagram
              </p>
            </div>
          </div>

          <div className="visit-bottom">
            <p>Needle & Static Records</p>
            <p>© 2026 · All rights reserved</p>
          </div>
        </section>
      </main>
    </>
  );
}

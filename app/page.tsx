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
          <div className="hero-content">
            <p className="eyebrow">Independent record store</p>

            <h1>
              Good Music
              <br />
              Lives Here
            </h1>

            <p className="hero-description">
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
          </div>

          <div className="hero-art">
            <img src="/images/vinyl_2.png" alt="Illustrated vinyl record" />
          </div>
        </section>

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
              <img
                src="/images/album_art_1.png"
                alt="Static Bloom - Night Windows"
              />

              <div className="record-info">
                <div>
                  <h3>Night Windows</h3>
                  <p>Static Bloom</p>
                </div>

                <span>₪120</span>
              </div>
            </article>
            <article className="record-card">
              <img
                src="/images/album_art_2.png"
                alt="Static Bloom - Night Windows"
              />

              <div className="record-info">
                <div>
                  <h3>Night Windows</h3>
                  <p>Static Bloom</p>
                </div>

                <span>₪120</span>
              </div>
            </article>

            <article className="record-card">
              <img
                src="/images/album_art_3.png"
                alt="Static Bloom - Night Windows"
              />

              <div className="record-info">
                <div>
                  <h3>Night Windows</h3>
                  <p>Static Bloom</p>
                </div>

                <span>₪120</span>
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

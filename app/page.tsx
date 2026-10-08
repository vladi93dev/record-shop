"use client";
import { useState } from "react";
import Hero from "@/components/Hero";

type RecordDetails = {
  artist: string;
  title: string;
  price: number;
  image: string;
  description: string;
  genre: string;
  format: string;
  condition: string;
};

export default function Home() {
  const [selectedRecord, setSelectedRecord] = useState<RecordDetails | null>(
    null,
  );

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

            {/* <a href="#">View all records</a> */}
          </div>

          <div className="record-grid">
            <article className="record-card">
              <button
                type="button"
                className="record-open"
                aria-label="View details for Ash Coast — Faint Receiver"
                onClick={() =>
                  setSelectedRecord({
                    artist: "Ash Coast",
                    title: "Faint Receiver",
                    price: 120,
                    image: "/images/8.png",
                    description:
                      "Hazy guitars, tape hiss and slow-burning melodies. A record for late-night listening.",
                    genre: "Ambient / Shoegaze",
                    format: "LP · 12″",
                    condition: "New",
                  })
                }
              >
                <img src="/images/8.png" alt="Ash Coast — Faint Receiver" />
              </button>

              <div className="record-info">
                <div>
                  <h3>Ash Coast</h3>
                  <p>Faint Receiver</p>
                </div>

                <span>₪120</span>
              </div>
            </article>
            <article className="record-card">
              <button
                type="button"
                className="record-open"
                aria-label="View details for Moth Circuit — Platform Weather"
                onClick={() =>
                  setSelectedRecord({
                    artist: "Moth Circuit",
                    title: "Platform Weather",
                    price: 90,
                    image: "/images/7.png",
                    description:
                      "Flickering synths and loose rhythms drifting through the noise of an empty station.",
                    genre: "Electronic / Downtempo",
                    format: "LP · 12″",
                    condition: "Used · Very Good",
                  })
                }
              >
                <img
                  src="/images/7.png"
                  alt="Moth Circuit — Platform Weather"
                />
              </button>

              <div className="record-info">
                <div>
                  <h3>Moth Circuit</h3>
                  <p>Platform Weather</p>
                </div>

                <span>₪90</span>
              </div>
            </article>

            <article className="record-card">
              <button
                type="button"
                className="record-open"
                aria-label="View details for Morrow Static — Cold Horizon"
                onClick={() =>
                  setSelectedRecord({
                    artist: "Morrow Static",
                    title: "Cold Horizon",
                    price: 100,
                    image: "/images/4.png",
                    description:
                      "Slow-building guitars and spacious textures tracing a cold, distant landscape.",
                    genre: "Post-rock / Experimental",
                    format: "LP · 12″",
                    condition: "New",
                  })
                }
              >
                <img src="/images/4.png" alt="Morrow Static — Cold Horizon" />
              </button>

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
          <div className="about-inner">
            <div className="about-image">
              <img
                src="/images/store_int_1.png"
                alt="Inside Needle & Static Records"
              />
            </div>

            <div className="about-content">
              <p className="section-kicker">About the shop</p>

              <h2 className="secondary-title">An underground record shop.</h2>

              <p className="about-note">
                Independent vinyl · New & used · Local listening
              </p>

              <p className="about-text">
                A small independent shop in Haifa for curious listeners. We
                stock new and used vinyl across experimental rock, electronic
                music, jazz and the spaces between. Familiar favorites sit
                beside overlooked releases—come browse, listen and find
                something unexpected.
              </p>
            </div>
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="visit-top">
            <div>
              <p className="section-kicker">Visit the shop</p>
              <h2 className="secondary-title">Come dig through the crates.</h2>
            </div>
          </div>

          <div className="visit-info">
            <div>
              <p className="visit-label">Address</p>
              <p>
                24 Static Lane
                <br />
                Haifa, Israel
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
                <a href="mailto:hello@needleandstatic.com">
                  hello@needleandstatic.com
                </a>

                <br />

                <a
                  href="https://instagram.com/needleandstatic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <div className="visit-bottom">
            <p>
              Designed &amp; built by{" "}
              <a
                href="https://github.com/vladi93dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vladi Semyonov
              </a>
            </p>
            <p>© 2026 · All rights reserved</p>
          </div>
        </section>
        {selectedRecord && (
          <dialog
            className="record-modal"
            aria-labelledby="record-modal-title"
            ref={(dialog) => {
              if (dialog && !dialog.open) {
                dialog.showModal();
              }
            }}
            onClose={() => setSelectedRecord(null)}
          >
            <button
              type="button"
              className="record-modal-close"
              onClick={() => setSelectedRecord(null)}
            >
              Close ×
            </button>

            <img
              src={selectedRecord.image}
              alt={`${selectedRecord.artist} — ${selectedRecord.title}`}
            />

            <h2 id="record-modal-title">{selectedRecord.artist}</h2>
            <p className="record-modal-title">{selectedRecord.title}</p>

            <p className="record-modal-description">
              {selectedRecord.description}
            </p>

            <dl className="record-modal-details">
              <div>
                <dt>Genre</dt>
                <dd>{selectedRecord.genre}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>{selectedRecord.format}</dd>
              </div>
              <div>
                <dt>Condition</dt>
                <dd>{selectedRecord.condition}</dd>
              </div>
            </dl>
            <p className="record-modal-price">₪{selectedRecord.price}</p>
          </dialog>
        )}
      </main>
    </>
  );
}

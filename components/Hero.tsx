"use client";

import { useState, useEffect, useRef } from "react";

import { Play, Pause } from "lucide-react";

type Track = {
  title: string;
  artist: string;
  src: string;
};

const tracks: Track[] = [
  {
    title: "Night Windows",
    artist: "Static Bloom",
    src: "/audio/track_1.mp3",
  },
  {
    title: "Velvet Static",
    artist: "After the Streetlights",
    src: "/audio/track_2.mp3",
  },
  {
    title: "Ghost Note",
    artist: "Rooms in Rain",
    src: "/audio/track_3.mp3",
  },
  {
    title: "Ghost Note 2",
    artist: "Rooms in Rain 2",
    src: "/audio/track_4.mp3",
  },
  {
    title: "Velvet Static 2",
    artist: "After the Streetlights 2",
    src: "/audio/track_5.mp3",
  },
];

export default function Hero() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerActivated, setPlayerActivated] = useState(false);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const inlinePlayerRef = useRef<HTMLDivElement>(null);

  async function handlePlayPause() {
    const audio = audioRef.current;

    if (!audio) return;

    if (currentTrack === null) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      const randomTrack = tracks[randomIndex];

      setCurrentTrack(randomTrack);
      audio.src = randomTrack.src;

      await audio.play();
      setIsPlaying(true);

      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await audio.play();
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    const player = inlinePlayerRef.current;

    if (!player) return;

    const observer = new IntersectionObserver(([entry]) => {
      const hasScrolledPastPlayer =
        !entry.isIntersecting && entry.boundingClientRect.top < 0;
    });

    observer.observe(player);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <audio ref={audioRef} loop />

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
          <img
            className={`vinyl ${isPlaying ? "vinyl-playing" : ""}`}
            src="/images/vinyl_2.png"
            alt="Illustrated vinyl record"
          />
        </div>
      </section>
      <div className={`music-player ${currentTrack ? "has-track" : ""}`}>
        <span className="player-track">
          {currentTrack && (
            <span className="player-track-inner">
              {currentTrack.title}
              <span className="player-artist"> — {currentTrack.artist}</span>
            </span>
          )}
        </span>

        <button
          type="button"
          onClick={handlePlayPause}
          className="player-control"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause size={15} strokeWidth={1.8} />
          ) : (
            <Play size={15} strokeWidth={1.8} />
          )}
        </button>
      </div>
    </>
  );
}

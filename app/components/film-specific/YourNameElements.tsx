import React, { useEffect, useRef } from "react";
import { applyFloatingAnimation, setupParallax } from "~/utils/animations";

// Component specifically for comets
export function Comets() {
  // Create a reference to handle animation intervals
  const intervalsRef = useRef<number[]>([]);

  useEffect(() => {
    // Function to create a comet element
    const createComet = () => {
      

      // Create comet element
      const comet = document.createElement("div");
      const randomClass = Math.floor(Math.random() * 3) + 1;
      comet.className = `comet comet-${randomClass}`;



      // Remove after animation completes
      setTimeout(() => {
        comet.remove();
      }, 10000);
    };

    // Create initial comet
    createComet();

    // Set intervals for creating comets at different times
    intervalsRef.current.push(window.setInterval(createComet, 8000));
    intervalsRef.current.push(window.setInterval(createComet, 15000));

    // Cleanup intervals on unmount
    return () => {
      intervalsRef.current.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return null; // This component doesn't render anything directly
}

// Helper function to generate random stars
const generateStars = (count: number) => {
  const stars = [];
  const types = ["star-tiny", "star-small", "star-medium", "star-large"];
  const durations = ["4s", "6s", "8s", "7s", "5s", "9s"];

  for (let i = 0; i < count; i++) {
    // Get random values
    const typeIndex = Math.floor(Math.random() * types.length);
    const durationIndex = Math.floor(Math.random() * durations.length);
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;

    stars.push({
      id: `star-${i}`,
      type: types[typeIndex],
      style: {
        left: `${left}%`,
        top: `${top}%`,
        animationDuration: durations[durationIndex],
        animationDelay: `${delay}s`,
        "--twinkle-duration": durations[durationIndex],
      },
    });
  }

  return stars;
};

// Helper function to generate cosmic dust particles
const generateCosmicDust = (count: number) => {
  const dust = [];

  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 15 + Math.random() * 20;

    dust.push({
      id: `dust-${i}`,
      style: {
        left: `${left}%`,
        bottom: "-5px",
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      },
    });
  }

  return dust;
};

export function YourNameBackground() {
  // Generate 100 stars of various sizes
  const stars = generateStars(100);
  // Generate 30 cosmic dust particles
  const cosmicDust = generateCosmicDust(30);

  return (
    <div className="cosmic-background">
      {/* Render stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.type}`}
          style={star.style as React.CSSProperties}
        />
      ))}

      {/* Render cosmic dust */}
      {cosmicDust.map((dust) => (
        <div
          key={dust.id}
          className="cosmic-dust"
          style={dust.style as React.CSSProperties}
        />
      ))}

      {/* Static comets with different delays */}
      <div className="comet comet-1"></div>
      <div className="comet comet-2"></div>
      <div className="comet comet-3"></div>

      {/* SVG wave background */}
      <svg
        className="your-name-background"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill="#5c7aea"
          fillOpacity="0.3"
        />
        <path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill="#ff6b6b"
          fillOpacity="0.2"
          transform="translate(0, 100)"
        />
      </svg>
    </div>
  );
}

export function YourNameTitle({ title }: { title: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const parallaxElements = Array.from(
        containerRef.current.querySelectorAll(".parallax-element")
      ) as HTMLElement[];

      // More intense parallax effect with higher intensities
      const intensities = [1.2, 0.8, 1.5];

      const cleanup = setupParallax(
        containerRef.current,
        parallaxElements,
        intensities
      );

      return cleanup;
    }
  }, []);

  return (
    <div className="your-name-header" ref={containerRef}>
      <h1 className="your-name-title">{title}</h1>
      <p className="your-name-subtitle parallax-element">
        A modern Japanese animation masterpiece
      </p>
      <div className="cosmic-elements">
        <div
          className="star star-large parallax-element"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="star star-medium parallax-element"
          style={{ top: "50%", left: "80%" }}
        ></div>
        <div
          className="star star-large parallax-element"
          style={{ top: "70%", left: "30%" }}
        ></div>
        <div
          className="star star-medium parallax-element"
          style={{ top: "30%", left: "70%" }}
        ></div>
        <div
          className="star star-large parallax-element"
          style={{ top: "80%", left: "60%" }}
        ></div>
      </div>
    </div>
  );
}

export function YourNameCharacters() {
  // This would typically come from an API or data file
  const characters = [
    {
      id: "taki",
      name: "Taki Tachibana",
      image: "/images/taki.jpg",
      description:
        "A high school boy from Tokyo who mysteriously begins to switch bodies with Mitsuha.",
    },
    {
      id: "mitsuha",
      name: "Mitsuha Miyamizu",
      image: "/images/mitsuha.jpg",
      description:
        "A high school girl from a rural town who dreams of living in Tokyo. She begins switching bodies with Taki.",
    },
    {
      id: "tessie",
      name: "Katsuhiko Teshigawara",
      image: "/images/tessie.jpg",
      description:
        "Mitsuha's friend who helps her with her plan to save the town from the approaching comet.",
    },
  ];

  return (
    <div className="your-name-characters">
      {characters.map((character, index) => (
        <div
          key={character.id}
          className="character-card"
          style={{ animationDelay: `${0.2 * index}s` }}
        >
          <div className="character-image-container">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
          </div>
          <div className="character-info">
            <h3 className="character-name">{character.name}</h3>
            <p className="character-description">{character.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

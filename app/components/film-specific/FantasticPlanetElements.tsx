import React, { useEffect, useRef } from "react";

export function FantasticPlanetBackground() {
  return (
    <>
      <div className="fantastic-planet-background"></div>
      <div className="psychedelic-shift"></div>
      <div className="alien-structure structure-1"></div>
      <div className="alien-structure structure-2"></div>
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>
    </>
  );
}

export function FantasticPlanetTitle({ title }: { title: string }) {
  return (
    <div className="fantastic-planet-header">
      <h1 className="fantastic-planet-title">{title}</h1>
      <p className="fantastic-planet-subtitle">
        A surrealist animated science fiction masterpiece
      </p>
    </div>
  );
}

export function SurrealLandscape() {
  const landscapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = landscapeRef.current;
    if (!container) return;

    const backLayer = container.querySelector(".landscape-back") as HTMLElement;
    const midLayer = container.querySelector(".landscape-mid") as HTMLElement;
    const frontLayer = container.querySelector(
      ".landscape-front"
    ) as HTMLElement;
    const creatures = Array.from(
      container.querySelectorAll(".floating-creature")
    ) as HTMLElement[];

    if (!backLayer || !midLayer || !frontLayer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;

      const moveX = (mouseX / width - 0.5) * 2; // -1 to 1
      const moveY = (mouseY / height - 0.5) * 2; // -1 to 1

      // Move layers with parallax effect
      backLayer.style.transform = `translateX(${moveX * -20}px) translateY(${
        moveY * -10
      }px)`;
      midLayer.style.transform = `translateX(${moveX * -40}px) translateY(${
        moveY * -20
      }px)`;
      frontLayer.style.transform = `translateX(${moveX * -60}px) translateY(${
        moveY * -30
      }px)`;

      // Move creatures in the opposite direction for a floating effect
      creatures.forEach((creature, index) => {
        const factor = (index + 1) * 15;
        creature.style.transform = `translateX(${
          moveX * factor
        }px) translateY(${moveY * factor}px)`;
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="interactive-landscape" ref={landscapeRef}>
      <div className="landscape-layer landscape-back"></div>
      <div className="landscape-layer landscape-mid"></div>
      <div className="landscape-layer landscape-front"></div>

      <img
        src="/images/creature-1.svg"
        alt="Floating creature"
        className="floating-creature creature-1"
      />
      <img
        src="/images/creature-2.svg"
        alt="Floating creature"
        className="floating-creature creature-2"
      />
      <img
        src="/images/creature-3.svg"
        alt="Floating creature"
        className="floating-creature creature-3"
      />
    </div>
  );
}

export function SurrealElements() {
  return (
    <>
      <img
        src="/images/surreal-element-1.svg"
        alt="Surreal element"
        className="surreal-element surreal-element-1"
      />
      <img
        src="/images/surreal-element-2.svg"
        alt="Surreal element"
        className="surreal-element surreal-element-2"
      />
      <img
        src="/images/surreal-element-3.svg"
        alt="Surreal element"
        className="surreal-element surreal-element-3"
      />
    </>
  );
}

export function FantasticPlanetCharacters() {
  // This would typically come from an API or data file
  const characters = [
    {
      id: "terr",
      name: "Terr",
      image: "/images/terr.jpg",
      description:
        "A human (Om) who was kept as a pet by the giant blue Draags but escapes with a headset that gives him access to Draag knowledge and education.",
    },
    {
      id: "tiwa",
      name: "Tiwa",
      image: "/images/tiwa.jpg",
      description:
        "A young female Draag who keeps Terr as a pet. She inadvertently allows him to access Draag knowledge through her learning headset.",
    },
    {
      id: "master-sinh",
      name: "Master Sinh",
      image: "/images/master-sinh.jpg",
      description:
        "The leader of the Draags who seeks to understand the growing resistance of the Oms while maintaining the supposed superiority of Draag civilization.",
    },
  ];

  return (
    <div className="fantastic-planet-characters">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <div className="character-image-container">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <div className="trippy-overlay"></div>
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

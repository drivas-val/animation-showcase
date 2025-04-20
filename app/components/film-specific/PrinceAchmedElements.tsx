import React, { useEffect, useRef } from "react";

export function PrinceAchmedBackground() {
  return (
    <>
      <div className="shadow-theater"></div>
      <div className="ornamental-pattern"></div>
      <div className="decorative-cutout cutout-1"></div>
      <div className="decorative-cutout cutout-2"></div>
      <div className="decorative-cutout cutout-3"></div>
    </>
  );
}

export function PrinceAchmedTitle({ title }: { title: string }) {
  return (
    <div className="prince-achmed-header">
      <h1 className="prince-achmed-title">{title}</h1>
      <p className="prince-achmed-subtitle">
        The world's oldest surviving animated feature film
      </p>
    </div>
  );
}

export function PuppetTheater() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prince = container.querySelector(".prince-puppet") as HTMLElement;
    const witch = container.querySelector(".witch-puppet") as HTMLElement;

    if (!prince || !witch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, width } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const moveRatio = (mouseX / width) * 2 - 1; // -1 to 1 value

      // Move puppets slightly opposite to cursor to simulate rod puppet movement
      prince.style.transform = `rotate(${-moveRatio * 5}deg)`;
      witch.style.transform = `rotate(${moveRatio * 5}deg)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="interactive-puppet-container" ref={containerRef}>
      <div className="puppet-stage">
        <div className="stage-light"></div>
        <img
          src="/images/prince-puppet.png"
          alt="Prince Achmed"
          className="puppet prince-puppet"
        />
        <img
          src="/images/pari-banu.png"
          alt="Pari Banu"
          className="puppet witch-puppet"
        />
        <img
          src="/images/witchy.png"
          alt="Pari Banu"
          className="puppet banu-puppet"
        />
        <img
          src="/images/wizard.png"
          alt="Pari Banu"
          className="puppet wizard-puppet"
        />
      </div>
    </div>
  );
}

export function PrinceAchmedCharacters() {
  // This would typically come from an API or data file
  const characters = [
    {
      id: "prince-achmed",
      name: "Prince Achmed",
      image: "/images/prince-achmed.png",
      description:
        "The brave and adventurous protagonist who embarks on a magical journey after being carried away by a mischievous spirit.",
    },
    {
      id: "witch",
      name: "The Witch",
      image: "/images/the-witch.png",
      description:
        "A powerful and mysterious sorceress with magical abilities who creates obstacles for Prince Achmed on his journey.",
    },
    {
      id: "peri-banu",
      name: "Peri Banu",
      image: "/images/banu.png",
      description:
        "A beautiful fairy princess from the magical Wak Wak islands whom Prince Achmed falls in love with during his adventures.",
    },
  ];

  return (
    <div className="prince-achmed-characters">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <div className="character-image-container">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <div className="silhouette-effect"></div>
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

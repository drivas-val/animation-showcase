import React from "react";

interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CharacterShowcaseProps {
  characters: Character[];
  animationStyle: string;
  className?: string;
}

export default function CharacterShowcase({
  characters,
  animationStyle,
  className = "",
}: CharacterShowcaseProps) {
  return (
    <div
      className={`character-showcase ${animationStyle}-characters ${className}`}
    >
      {characters.map((character) => (
        <div key={character.id} className="character-card">
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

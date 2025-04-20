import React from "react";

interface AnimationInfoProps {
  title: string;
  year: string;
  director: string;
  studio: string;
  technique: string;
  description: string;
  webDesignInfluence: string;
  className?: string;
}

export default function AnimationInfo({
  title,
  year,
  director,
  studio,
  technique,
  description,
  webDesignInfluence,
  className = "",
}: AnimationInfoProps) {
  return (
    <div className={`animation-info ${className}`}>
      <div className="animation-header">
        <h2 className="animation-title">{title}</h2>
        <div className="animation-meta">
          <span>{year}</span>
          <span>Director: {director}</span>
          <span>Studio: {studio}</span>
        </div>
      </div>

      <div className="animation-content">
        <div className="animation-section">
          <h3>Animation Technique</h3>
          <p>{technique}</p>
        </div>

        <div className="animation-section">
          <h3>About the Film</h3>
          <p>{description}</p>
        </div>

        <div className="animation-section">
          <h3>Web Design Influence</h3>
          <p>{webDesignInfluence}</p>
        </div>
      </div>
    </div>
  );
}

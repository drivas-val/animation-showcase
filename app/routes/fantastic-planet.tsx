import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Navigation from "~/components/Navigation";
import AnimationInfo from "~/components/AnimationInfo";
import {
  FantasticPlanetTitle,
  FantasticPlanetCharacters,
  FantasticPlanetBackground,
  SurrealLandscape,
  SurrealElements,
} from "~/components/film-specific/FantasticPlanetElements";

import fantasticPlanetStylesUrl from "~/styles/fantastic-planet.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: fantasticPlanetStylesUrl }];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Fantastic Planet - Animation Styles Showcase" },
    {
      name: "description",
      content: "Explore the surreal animation style of 'Fantastic Planet'",
    },
  ];
};

export default function FantasticPlanetPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay to ensure animations trigger properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-container fantastic-planet-page ${
        isLoaded ? "loaded" : ""
      }`}
    >
      {/* Add the background elements */}
      <FantasticPlanetBackground />

      <div className="fantastic-planet-navigation">
        <Navigation />
      </div>

      <div className="content">
        <FantasticPlanetTitle title="Fantastic Planet" />

        <SurrealLandscape />

        <div className="fantastic-planet-content">
          {/* Add floating surreal elements */}
          <SurrealElements />

          <div className="character-section">
            <h2 className="section-title">Characters</h2>
            <FantasticPlanetCharacters />
          </div>

          <AnimationInfo
            className="fantastic-planet-info"
            title="Fantastic Planet (La Planète Sauvage)"
            year="1973"
            director="René Laloux"
            studio="Les Films Armorial"
            technique="The animation was built on paper cut-outs that were placed on painted backgrounds giving it its odd psychedelic visuals that it is known for. The animations are quite dream-like which make for the perfect alien-syle film."
            description="Fantastic Planet is considered a surrealist animation. It is set ont the planet called Ygam where alien giants called Draags keep humans (called Oms) as pets. The power dynamic between the two types of beings make for perfect allegories on control, corruption, and humanity as a whole. For its great filmakking, it won the Special Jury Prize at the 1973 Cannes Film Festival."
            webDesignInfluence="I attempted to show the surreal aesthetic of Fantastic Planet by using floating geometric shapes. I also went for the odd green with neon blue color combinations to reflect the bright pastel appeal of the film. Included is also floating organic shapes that represent the weird objects and animals shown."
          />
        </div>
      </div>
    </div>
  );
}

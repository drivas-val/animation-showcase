import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Navigation from "~/components/Navigation";
import AnimationInfo from "~/components/AnimationInfo";
import {
  YourNameTitle,
  YourNameCharacters,
  YourNameBackground,
} from "~/components/film-specific/YourNameElements";
import { SimpleComets } from "~/components/film-specific/SimpleComets";


import yourNameStylesUrl from "~/styles/your-name.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: yourNameStylesUrl }];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Your Name - Animation Styles Showcase" },
    {
      name: "description",
      content: "Explore the visual language of 'Your Name' by Makoto Shinkai",
    },
  ];
};

export default function YourNamePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay to ensure animations trigger properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log("Page loaded state set to true");
    }, 100);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-container your-name-page ${isLoaded ? "loaded" : ""}`}
    >
      {/* Add the cosmic background to the entire page */}
      <YourNameBackground />

      {/* Add simple fixed comets that will definitely show */}
      <SimpleComets />


      <div className="your-name-navigation">
        <Navigation />
      </div>

      <div className="content">
        <YourNameTitle title="Your Name" />

        <div className="your-name-content fade-in">
          <div className="character-section">
            <h2 className="section-title">Characters</h2>
            <YourNameCharacters />
          </div>

          <AnimationInfo
            className="your-name-info"
            title="Your Name (Kimi no Na wa)"
            year="2016"
            director="Makoto Shinkai"
            studio="CoMix Wave Films"
            technique="Modern anime with a dab of realism that integrates both 2D and 3D perspectives. It features detailed landscapes displaying urban and rural living as well as the use of lighting techniques to make for more vivid scenes. "
            description="Your Name is considered a mix between romance and fantasy. It tells the story of a high school boy in Tokyo and a high school girl in rural Japan who suddenly begin to swap bodies. It is a great twist on a classic with complex additions that make for a great watch."
            webDesignInfluence="I drew inspiration from the film with its many vibrant colors and out-of-this-world animation techniques with the use of meteors and shining stars. I also gave the title and subtitle floating text animations as to follow the magical nature of the film."
          />
        </div>
      </div>
    </div>
  );
}

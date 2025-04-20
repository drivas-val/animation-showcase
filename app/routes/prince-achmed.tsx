import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Navigation from "~/components/Navigation";
import AnimationInfo from "~/components/AnimationInfo";
import {
  PrinceAchmedTitle,
  PrinceAchmedCharacters,
  PrinceAchmedBackground,
  PuppetTheater,
} from "~/components/film-specific/PrinceAchmedElements";

import princeAchmedStylesUrl from "~/styles/prince-achmed.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: princeAchmedStylesUrl }];
};

export const meta: MetaFunction = () => {
  return [
    { title: "The Adventures of Prince Achmed - Animation Styles Showcase" },
    {
      name: "description",
      content:
        "Explore the silhouette animation style of 'The Adventures of Prince Achmed'",
    },
  ];
};

export default function PrinceAchmedPage() {
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
      className={`page-container prince-achmed-page ${
        isLoaded ? "loaded" : ""
      }`}
    >
      {/* Add the background elements */}
      <PrinceAchmedBackground />

      <div className="prince-achmed-navigation">
        <Navigation />
      </div>

      <div className="content">
        <PrinceAchmedTitle title="The Adventures of Prince Achmed" />

        <PuppetTheater />

        <div className="prince-achmed-content">
          <div className="character-section">
            <h2 className="section-title">Characters</h2>
            <PrinceAchmedCharacters />
          </div>

          <AnimationInfo
            className="prince-achmed-info"
            title="The Adventures of Prince Achmed"
            year="1926"
            director="Lotte Reiniger"
            studio="Comenius-Film GmbH"
            technique="The film was created using silhouette with paper figures placed on a multiplane camera with glass layers. It illuminated from below which created the shadow effects. Each character and element was created individually and cut by hand with scissors which showcases the true level of detail from the animators"
            description="The Adventures of Prince Achmed is considered the oldest surviving animated feature film. It is based on stories from the book 'One Thousand and One Nights,' and it tells the story of Prince Achmed who must deal with evil sorcerers to save the love of his life. It also includes popular characters like Alladin, and has classical happy ending."
            webDesignInfluence="I made sure the page captured what that of a silhouette animation with black shadows reflecting from a source of light. I also added a colorful yet dim background since it was what was usually shown in the animation, and included gold, flickering text to reflect the common 'kingdom' motifs."
          />
        </div>
      </div>
    </div>
  );
}

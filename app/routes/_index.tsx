import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Animation Styles Showcase" },
    {
      name: "description",
      content: "Explore the visual language of three iconic animated films",
    },
  ];
};

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`home-page ${loaded ? "loaded" : ""}`}>
      <div className="home-content">
        <h1 className="home-title">Animation Styles Showcase</h1>
        <p className="home-description">
          Explore three unique animation styles through interactive web
          experiences inspired by iconic animated films.
        </p>

        <div className="navigation-cards">
          <Link to="/your-name" className="nav-card your-name-card">
            <div className="card-content">
              <h2>Your Name</h2>
              <p>Modern Japanese Animation</p>
            </div>
          </Link>

          <Link to="/prince-achmed" className="nav-card prince-achmed-card">
            <div className="card-content">
              <h2>The Adventures of Prince Achmed</h2>
              <p>Silhouette Animation</p>
            </div>
          </Link>

          <Link
            to="/fantastic-planet"
            className="nav-card fantastic-planet-card"
          >
            <div className="card-content">
              <h2>Fantastic Planet</h2>
              <p>Surrealist Animation</p>
            </div>
          </Link>
        </div>

        {/* Reflective Essay Section */}
        <div className="reflective-essay-section">
          <h2 className="essay-title">Reflective Essay</h2>
          <div className="essay-content">
            {/* This is where you can add your reflective essay text */}
            <p>
              I had never really established any interests in animated films so
              it was neat that the entire course reflected on varying aspects of
              that single genre of filmmaking. Initially, I was expecting the
              course to be based on normative films or well renowned films
              within a wider ranger of genres, but the class made me realize
              that even within one genre, there is a big span of differences
              between animation techniques, storytelling, and universal themes.
              In my portfolio, I make it clear that the changes in the forms of
              animation can completely change how viewers interact with the
              films, and many times it also affects how the effects of the
              themes being portrayed. I genuinely enjoyed breaking down the
              animation techniques for different films since before the course,
              I didn’t think much about how animations were created, although I
              did have an idea of the complexities that they contained so my
              appreciation for them grew alongside every novel film that we
              watched.
              <br />
              <br /> In addition to the animations, learning about the directors
              and their influences to creating the animations helped to not only
              better appreciate the films, but also gave us an idea of the depth
              that many directors have when making these films. One important
              change of mind that I had during the semester was no longer
              believing that animated films were just made for children. Many of
              the films we watched had goals and ideas that went well beyond
              what a child would be able to understand. Take for example,
              Persepolis, a film that addresses the stained history of a nation
              while showcasing the cultural beauty that it encumbers. Similarly,
              Studio Ghibli creates films that are directed toward younger
              audiences, however, even those animations are filled with complex
              ideas of environmentalism, internal struggles, and societal
              injustices. This lead to my interest in learning more about the
              personal lives of the directories, and as it turns out, they make
              much of their personal experiences and dilemmas a part of the
              films they create. In other words, in watching an animation you
              are watching fun movie meant for entertainment, but you are also
              seeing into a person’s mind.
              <br />
              <br />
              In terms of writing, I learned that there is a lot packed into
              particular points in an animation that can only be uncovered when
              one takes the time to dig into the nuances of a film. When writing
              my essays, I couldn’t imagine that I would be able to write much
              about a single point of the films, however, once I rewatched the
              movie and dived into some of the influences, I realized there was
              much to unpack. There were many instances where minor parts of an
              animation that I didn’t think much about turned into a writing
              goldmine when I looked at the scene from a different lens. This
              lead me to actually enjoy the writing aspect of the course since I
              had much to say about what I was uncovering and which also lead me
              to explore similar films from the directors to watch on my own.
              Now, even when I watch films for my own personal enjoyment, I find
              myself taking notes of what I would be writing about if I would be
              making a reflexion or writing about it in an essay. Overall, this
              has made my experience when watching animations more enjoyable,
              and I’ve definitely gone through a learning curve in terms of my
              appreciation for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

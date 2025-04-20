import { Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <Link to="/" className="home-link">
          Animation Styles
        </Link>

        <div className="nav-tabs">
          <Link
            to="/your-name"
            className={`nav-tab ${
              activeTab === "/your-name" ? "active your-name-active" : ""
            }`}
          >
            Your Name
          </Link>

          <Link
            to="/prince-achmed"
            className={`nav-tab ${
              activeTab === "/prince-achmed"
                ? "active prince-achmed-active"
                : ""
            }`}
          >
            Prince Achmed
          </Link>

          <Link
            to="/fantastic-planet"
            className={`nav-tab ${
              activeTab === "/fantastic-planet"
                ? "active fantastic-planet-active"
                : ""
            }`}
          >
            Fantastic Planet
          </Link>
        </div>
      </div>
    </nav>
  );
}

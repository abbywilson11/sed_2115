import { Routes, Route, Link } from "react-router-dom"; // for navigation
import Home from "./pages/Home"; //imports home page content
import Events from "./pages/Events"; // imports events page content 
import About from "./pages/About"; // imports about page content 

function App() { // function for application
  return ( // apply to local 
    <div
      style={{ // devlop the area of the application
        display: "flex", // flexes the area of application 
        flexDirection: "column", // column has the content vertially (nav bar on top)
        minHeight: "100vh", // fills the full height of screen 
        width: "100%", // fills full width of screen 
      }}
    >
      {/*navbar*/}
      <nav
        style={{
          padding: "10px", // creates spacing in nav bar 
          background: "#f4f4f4", // generates colour for background of nav bar 
          borderBottom: "1px solid #ccc", // creates a different colour for the border 
          width: "100%", // nav bar goes across full width 
        }}
      >
        {/*linking navagtion sections to the nav bar*/}
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/events" style={{ marginRight: "15px" }}>Events</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* main content */}
      <div style={{ flex: 1, width: "100%" }}> {/*sets dimensions to expand to space of screen*/}
        <Routes>
        {/*routes create paths to the different sections of the app*/}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App; // export the app to local

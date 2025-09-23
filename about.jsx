function About() { //new function for about page 
  return ( //retun it to app.jsx and local 
    // add heading and subheading below for about page
    <div>
      <h1>ℹ️ About</h1> 
      <p>
        This app was developed using NASA's{" "}
        <a href="https://eonet.gsfc.nasa.gov/" target="_blank" rel="noreferrer"> {/*rel opens link in new tab for security (chatgpt suggested it)*/}
          EONET API
        </a>{" "}
        to display natural events such as wildfires, storms, and volcanic activity. You may use filters to narrow down categories and click on the icons on the map to see where the natural event is occuring. 
      </p>
    </div>
  );
}

export default About; //expoprt to app.jsx

import React from 'react';

function Home() {
  return (
    <div
      style={{
// backgroundImage imports thr url of the image I
        backgroundImage: "url('https://th.bing.com/th/id/R.9e27b636a981014cdefd32611696ab6d?rik=EbVy7OC1kQylzg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f11%2fBackgrounds-Earth-From-Space.jpg&ehk=%2b%2bFMdXX1g9TqUKeK8mG489SEf37hVYHuLcaCcxJpcOM%3d&risl=&pid=ImgRaw&r=0')",
// backgroundSize adjusts the image to fit the whole screen area
        backgroundSize: 'cover',
// backgroundPosition centres the image on the screen 
        backgroundPosition: 'center',
// minHeight gives a minimum height of the image compared to the screen 
        minHeight: '100vh',
// color sets the text color to white 
        color: 'white',
// padding adds spacing around the content 
        padding: '40px',
      }}
// create a heading/title and information for user on home page
    >
      <h1>🌍 Welcome to the Natural Event Tracker</h1>
      <p>Explore natural events happening around the world in real time from NASA's EONET API.</p>
    </div>
  );
}

export default Home;//export to app.jsx

import './App.css';
import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ImageCard from './Card.js'

function App() {
  
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    // If this were a real aap, I would move this call to the backend and not hard code the API Key. Since this is a free NASA API, there's no risk.
    const restEndpoint = "https://api.nasa.gov/planetary/apod?api_key=ehVgInclieKHMWfMaX93gRhYQ3rWOpM3G5QaiTJl&count=10";

    const callRestApi = async () => {
      const response = await fetch(restEndpoint);
      const jsonResponse = await response.json();
      return jsonResponse
    };

    callRestApi().then(
      response => setApiResponse(response));

  }, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className="main-container">
        {apiResponse.length ? apiResponse.map((el, idx) => <ImageCard nasaData={el} key={idx} />) : <h1>loading</h1>}
      </section>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;

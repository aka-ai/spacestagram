import './App.css';
import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ImageCard from './Card.js'
import Loading from './Loading.js'

function App() {
  
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    // If this were a real aap, I would move this call to the backend and not hard code the API Key. Since this is a free NASA API, there's no risk.
    const restEndpoint = "https://api.nasa.gov/planetary/apod?api_key=ehVgInclieKHMWfMaX93gRhYQ3rWOpM3G5QaiTJl&start_date=2021-11-14";

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
        <h2>Spacestagram</h2>
        <h3>Brought to you by NASA's image API</h3>
      </header>
      <section className="main-container">
        {apiResponse.length ? apiResponse.map((el, idx) => <ImageCard imgData={el} key={idx} />) : <Loading />}
      </section>
      <footer className="footer">
        <p>By Ai Akarach</p>
        <p>aiakrjs@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

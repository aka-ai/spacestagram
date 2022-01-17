import './App.css';
import React, { useState, useEffect } from 'react';

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
        {apiResponse.length ? apiResponse.map((el, idx)=> <img src={el.url} key={idx}></img>) : <p>loading</p> }
        
      </header>
    </div>
  );
}

export default App;

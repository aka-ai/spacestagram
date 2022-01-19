import './App.css';
import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ImageCard from './Card.js'
import Loading from './Loading.js'
import DatePicker from './DatePicker.js'
import { StyledEngineProvider } from '@mui/material/styles';
import dayjs from 'dayjs'

function App() {

  const [apiResponse, setApiResponse] = useState([]);
  const [startDate, setStartDate] = useState(dayjs().subtract(10, 'day').format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [loadingErrorMsg, setLoadingErrorMsg] = useState('');

  useEffect(async () => {
    // If this were a real app, I would move this call to the backend and not hard code the API Key. Since this is a free NASA API, there's no risk.
    const restEndpoint = `https://api.nasa.gov/planetary/apod?api_key=ehVgInclieKHMWfMaX93gRhYQ3rWOpM3G5QaiTJl&start_date=${startDate}&end_date=${endDate}`;

    const errMsgDefault = 'Error while fetching images, please try again later.';
    try {
      const response = await fetch(restEndpoint);
      if (response.status >= 400 && response.status <= 499) {
        console.error("Error during fetch, response: ", response);
        setLoadingErrorMsg('Error while fetching images, please check your request.');
      } else if (response.status >= 500 && response.status <= 599) {
        console.error("Error during fetch, response: ", response);
        setLoadingErrorMsg(errMsgDefault)
      } else {
        setApiResponse(await response.json())
      }
    } catch (e) {
      console.error("Error during fetch: ", e);
      setLoadingErrorMsg(errMsgDefault)
    }
  }, [startDate, endDate]);

  const selectStartDate = date => {
    const parsedDate = dayjs(date).format("YYYY-MM-DD")
    setStartDate(parsedDate)
    setApiResponse([])
  }
  const selectEndDate = date => {
    const parsedDate = dayjs(date).format("YYYY-MM-DD")
    setEndDate(parsedDate)
    setApiResponse([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Spacestagram</h2>
        <h3>Brought to you by NASA's image API</h3>
        <nav>
          <StyledEngineProvider injectFirst>
            <DatePicker
              onSelectStartDate={selectStartDate}
              onSelectEndDate={selectEndDate}
            />
          </StyledEngineProvider>
        </nav>
      </header>
      <section className="main-container">
        {
          apiResponse.length ? apiResponse.map((el, idx) => <ImageCard imgData={el} key={idx} />) : <Loading errorMsg={loadingErrorMsg} />
        }
      </section>
      <footer className="footer">
        <p>By Ai Akarach</p>
        <p>aiakrjs@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

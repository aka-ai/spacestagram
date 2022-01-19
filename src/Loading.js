import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const loadingMessages = [
  "🛸 Beaming Images from Space...",
  "🚀 Getting Ready for Liftoff...",
  "🛰 Aligning Satellites...",
  "🔭 Polishing Telescope..."
]
export default function loading(props) {
  const index = Math.floor(Math.random() * loadingMessages.length)
  const message = props.errorMsg ? props.errorMsg : loadingMessages[index]
  return (
    <div>
      {props.errorMsg ? <p className="error-message">🙊</p> : <CircularProgress /> }
      <p className="loading-message">{message}</p>
    </div>
  );
}
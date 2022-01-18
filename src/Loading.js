import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const loadingMessages = [
  "🛸 Beaming Images from Space...",
  "🚀 Getting Ready for Liftoff...",
  "🛰 Aligning Satellites...",
  "🔭 Polishing Telescope..."
]
export default function loading() {
  const index = Math.floor(Math.random() * loadingMessages.length)
  const message = loadingMessages[index]
  return (
    <div>
        <CircularProgress />
      <p className="loading-message">{message}</p>
    </div>
  );
}
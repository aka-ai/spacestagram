import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';

export default function Copy(props) {

  const [copySuccess, setCopySuccess] = useState('');

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(props.imageURL)
      setCopySuccess('Copied!');
      setTimeout(() => {
        setCopySuccess('')
      }, 1000)
    } catch (err) {
      setCopySuccess('Failed to copy. Please try again.')
      setTimeout(() => {
        setCopySuccess('')
      }, 2000)
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div>
      <ShareIcon onClick={copyToClipboard} />
      {copySuccess}
    </div>
  );
}

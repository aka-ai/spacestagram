import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

export default function ImageCard(props) {
  // const [liked, setLiked] = useState(false)
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(props.imgData.date);
    const initialValue = saved === "true" ? true : false;

    return initialValue;
  });

  //1) keeep react & localstorage in-sync
  //2)on initial load, use localstorage to populate initial react state
  const handleLikeClick = () => {
    setLiked(!liked);
    localStorage.setItem(props.imgData.date, (!liked).toString())
  };
  // useEffect(() => {
  //   localStorage.setItem("liked", liked.toString())
  // })

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        title={props.imgData.title}
        subheader={props.imgData.date}
        className="card-header"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.imgData.url}
        alt={props.imgData.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.imgData.explanation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleLikeClick}
          aria-label="add to favorites">
          {liked ? <FavoriteIcon /> :
            <FavoriteBorderIcon />}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Copy from './Copy'

export default function ImageCard(props) {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(props.imgData.date);
    const initialValue = saved === "true" ? true : false;

    return initialValue;
  });

  const isImage = props.imgData.url.includes("youtube") ? false : true

  const handleLikeClick = () => {
    setLiked(!liked);
    localStorage.setItem(props.imgData.date, (!liked).toString())
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        title={props.imgData.title}
        subheader={props.imgData.date}
        className="card-header"
      />
      <CardMedia
        component={isImage ? "img" : "iframe"}
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
          {liked ? <FavoriteIcon color="primary" /> :
            <FavoriteBorderIcon />}
        </IconButton>
        <IconButton aria-label="share">
          <Copy imageURL={props.imgData.url} />
        </IconButton>
      </CardActions>
    </Card>
  );
}


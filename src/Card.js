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
    <Card
      sx={{
        maxWidth: 400,
      }}>
      <CardHeader
        title={props.imgData.title}
        subheader={props.imgData.date}
        sx={{
          height: 100
        }}
      />
      <CardMedia
        component={isImage ? "img" : "iframe"}
        height="300"
        image={props.imgData.url}
        alt={props.imgData.title}
      />
      <CardContent
        sx={{
          height: 100,
          overflow: "scroll"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {props.imgData.explanation}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          justifyContent: "right"
        }}
      >
        <IconButton
          onClick={handleLikeClick}
          aria-label="add to favorites">
          {liked ? <FavoriteIcon color="primary" /> :
            <FavoriteBorderIcon />}
        </IconButton>
        <IconButton
          sx={{ fontSize:0 }}
          aria-label="share"
        >
          <Copy imageURL={props.imgData.url} />
        </IconButton>
      </CardActions>
    </Card>
  );
}


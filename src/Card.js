import * as React from 'react';
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
  const [liked, setLiked] = React.useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        title={props.nasaData.title}
        subheader={props.nasaData.date}
        className="card-header"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.nasaData.url}
        alt={props.nasaData.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.nasaData.explanation}
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

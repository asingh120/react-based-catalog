import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  Button
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  manufacturerName: string;
  description: string;
  retailPrice: number;
  thumbnail: string;
  image: string;
  distributor: string;
  height: number;
  width: number;
  depth: number;
  weight: number;
}

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: "10px 0",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  link: {
    marginTop: "auto"
  }
}));
interface Props {
  product: Product;
}
const DisplayCard: FC<Props> = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.product.id}
        subheader={props.product.manufacturerName}
      />
      <CardMedia className={classes.media} image={props.product.thumbnail} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ${props.product.retailPrice}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
      <Link to={`/details/${props.product.id}`} className={classes.link}>
        <Button>Learn More</Button>
      </Link>
    </Card>
  );
};
export default DisplayCard;

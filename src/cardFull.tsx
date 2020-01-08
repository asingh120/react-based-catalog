import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Product } from "./Cards";
import { fetchSingleCatalogItem } from "./mocks/catalog";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    width: 530,
    margin: "10px 0"
  },
  media: {
    height: 500,
    width: 500,
    paddingTop: 20 // 16:9
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
  }
}));

const CardFull = (props: RouteComponentProps<{ productId: string }>) => {
  const productId = Number(props.match.params.productId);
  const classes = useStyles();
  const [productInfo, setProductInfo] = useState<Product | null>(null);

  useEffect(() => {
    if (!isNaN(productId)) {
      fetchSingleCatalogItem(productId).then(data => {
        setProductInfo(data.body);
      });
    }
  }, []);

  return (
    <ul>
      Product ID: {productId}
      {productInfo && (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={productInfo.id}
            subheader={productInfo.manufacturerName}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: {productInfo.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: ${productInfo.retailPrice}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Distributor: {productInfo.distributor}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Height: {productInfo.height}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Width: {productInfo.width}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Depth: {productInfo.depth}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Weight: {productInfo.weight}
            </Typography>
            <CardMedia className={classes.media} image={productInfo.image} />
          </CardContent>
        </Card>
      )}
    </ul>
  );
};

export default withRouter(CardFull);

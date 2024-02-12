import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import CoursesList from "./CoursesList";

export default function ProductCard({ title, image, id, describtion, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={`${image}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              style={{ textAlign: "center" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              style={{ textAlign: "justify" }}
              variant="body2"
              color="text.secondary"
            >
              {describtion}
            </Typography>
          </CardContent>
          <p style={{marginLeft: 20}}>Price {price}</p>
        </CardActionArea>
      </Link>
      <CardActions style={{ justifyContent: "center", padding: 4 }}>
        <Button size="large" color="primary">
          Enrrol
        </Button>
      </CardActions>
    </Card>
  );
}

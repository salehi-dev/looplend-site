import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const data = [
  {
    src: "./images/iman.png",
    title: "Iman Gadzhi in 2020 | Official…",
    channel: "Iman Gadzhi",
    views: "396M views",
    createdAt: "a week ago",
  },
  {
    src: "./images/andrew.png",
    title: "Andrew taite in 2020",
    channel: "Andrew taite",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "./images/image4.png",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Waizerland",
    views: "130K views",
    createdAt: "10 months ago",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid style={{padding: '10px 80px'}} container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 360, marginRight: 1, my: 5 }}>
          {item ? (
            <img
              style={{ width: 240, height: 130, borderRadius: 6 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={280} height={160} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function AboutProvider() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media />
    </Box>
  );
}

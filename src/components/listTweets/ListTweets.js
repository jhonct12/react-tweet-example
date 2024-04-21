import { Grid } from "@mui/material";
import Tweet from "../tweet";

import "./ListTweets.scss";

export default ({ allTweets, deleteTweet }) => {
  console.log("estos son", allTweets);

  if (!allTweets || allTweets.lenght == 0) {
    return (
      <div className="list-tweets__empty">
        <h2>No hay Tweets....</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((refTweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet
            tweet={refTweet}
            index={index}
            deleteTweet={deleteTweet}
          ></Tweet>
        </Grid>
      ))}
    </Grid>
  );
};

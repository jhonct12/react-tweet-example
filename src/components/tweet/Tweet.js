import moment from "moment";

import "./Tweet.scss";
import { Card, CardContent } from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";

export default ({ tweet: { name, tweet, time }, index, deleteTweet }) => {
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet__header">
          <h5>{name}</h5>
          <DeleteTwoTone onClick={() => deleteTweet(index)}></DeleteTwoTone>
        </div>
        <p>{tweet}</p>
        <div className="tweet__date-add-tweet">
          {moment(time).format("DD/MM/YYYY HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
};

import { Container, Snackbar } from "@mui/material";
import Header from "./components/header";
import SendTweet from "./components/sendTweet";
import { useEffect, useState } from "react";
import { TWEETS_STORAGE } from "./utils/constants";
import ListTweets from "./components/listTweets";

function App() {
  console.log("hola Appp");

  const [toastProps, setToastProps] = useState({ open: false, text: null });

  const [allTweets, setAllTweets] = useState([]);

  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    console.log("enter hereee xd");
    const alltweetsStorage = JSON.parse(localStorage.getItem(TWEETS_STORAGE));
    setAllTweets(alltweetsStorage);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  /*
  useEffect(() => {
    const alltweetsStorage = JSON.parse(localStorage.getItem(TWEETS_STORAGE));
    setAllTweets(alltweetsStorage);
  }, []);

  // alternative delete tweet, si no se quiere utiizar el cambio de valor de estado
  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setAllTweets([...allTweets]);
  };¨*/

  console.log(allTweets);
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header></Header>
      <SendTweet
        setToastProps={setToastProps}
        allTweets={allTweets}
      ></SendTweet>
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}></ListTweets>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={toastProps.text}
      ></Snackbar>
    </Container>
  );
}

export default App;

import { useState } from "react";

import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";

import ModalContainer from "../modalContainer";
import FormSendTweet from "../formSendTweet";

import { TWEETS_STORAGE } from "../../utils/constants";

import "./SendTweet.scss";

export default ({ setToastProps, allTweets }) => {
  console.log("hola sendTweets");

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();

    let allTweetsArray = [];
    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if (!formValue.name || !formValue.tweet) {
      setToastProps({
        open: true,
        text: "!Warning: Todos los campos son obligatorios...",
      });
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({
        open: true,
        text: "Tweet enviado correctmente...",
      });

      closeModal();
    }
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <Add></Add>
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet}></FormSendTweet>
      </ModalContainer>
    </div>
  );
};

import { FormControl, FormGroup, TextField, Button } from "@mui/material";

import "./FormSendTweet.scss";
import { useState } from "react";

export default ({ sendTweet }) => {
  const [formValue, setFormValue] = useState({ name: "", tweet: "" });

  const onFormChange = ({ target: { name, value } }) => {
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Enviar Tweet</h2>
      <form
        className="form-send-tweet__form"
        onSubmit={(e) => sendTweet(e, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              name="tweet"
              multiline
              rows={6}
              placeholder="escribe tu Tweet"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <Button type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

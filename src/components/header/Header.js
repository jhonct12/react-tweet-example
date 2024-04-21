import TweeterLogo from "../../assets/img/twitter-logo.png";

import "./Header.scss";

export default () => {
  return (
    <div className="header">
      <img src={TweeterLogo} alt="Tweets Simnulator"></img>
      <h1>Tweets simulator</h1>
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import HeaderMain from "./components/HeaderMain";
import HeaderSecondary from "./components/HeaderSecondary";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {
  return (
    <div>
      <HeaderMain></HeaderMain>
      <HeaderSecondary />
      {/* <div className="overlay">Hellhsadf gkasdksdjfgasdf dfj jsadfgksadjo</div> */}
      {/* <SideBar /> */}

      <div className="ui comments">
        <ApprovalCard>
          <CommentDetails
            author="Joe Henderson"
            comment="great work"
            avatar={faker.image.avatar()}
            time="2 hours ago"
          />
        </ApprovalCard>

        <CommentDetails
          author="Michel"
          comment="wonderful work"
          avatar={faker.image.avatar()}
          time="1 days ago"
        />
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui primary submit labeled icon button">
            <i className="icon edit"></i> Add Comment
          </div>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

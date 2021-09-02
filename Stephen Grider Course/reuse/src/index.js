import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
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
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

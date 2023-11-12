import React from "react";

import User1 from "src/assets/avatars/User1.png";
import { ReactComponent as ThreeDots } from "src/assets/icons/three-dots.svg";
import { ReactComponent as CallIcon } from "src/assets/icons/call.svg";
import { ReactComponent as VideoCallIcon } from "src/assets/icons/video-call.svg";

import "src/biz-components/chat/Chat.scss";
import CommentBox from "./CommentBox";

const ChatBox: React.FC = () => (
  <div className="chatbox">
    <div className="chat-header horizontal-flex justify-space-between align-flex-start">
      <div className="horizontal-flex chat-user">
        <img src={User1} alt="User" height={40} width={40} />
        <div>
          <h5 className="title_1">Linh Nguyen</h5>
          <div className="title_4 grey-font">Active now</div>
        </div>
      </div>
      <div className="horizontal-flex header-options">
        <CallIcon className="cursor-pointer" />
        <VideoCallIcon className="cursor-pointer" />
        <ThreeDots className="cursor-pointer" />
      </div>
    </div>
    <ChatBox />
    <CommentBox />
  </div>
);

export default ChatBox;

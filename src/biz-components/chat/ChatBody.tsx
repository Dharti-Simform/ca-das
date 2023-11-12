import classNames from "classnames";
import React from "react";
import { MESSAGES } from "src/utils/data";

import { ReactComponent as DownloadIcon } from "src/assets/icons/download.svg";

/* 
!TO-DO: 
- Scroll issue
- Calculation of body height
- border issue for image -> border-box not working
*/
const ChatBody: React.FC = () => (
  <div className="chat-body">
    <div className="title_3 grey-font text-center time">09:24, MONDAY</div>
    <ul className="messages">
      {MESSAGES.map((message, index) => (
        <li
          key={index}
          className={classNames("message-item", {
            self: !message.otherUser,
            media: !!message.attachment,
            "mt-24":
              index !== 0 &&
              message.otherUser !== MESSAGES[index - 1].otherUser,
          })}
        >
          {message.attachment ? (
            <div
              className={classNames("attachment msg", {
                "right-block": !message.otherUser,
                "left-block": message.otherUser,
              })}
            >
              <img src={message.attachment} alt="pic" width={320} />
              <DownloadIcon width={32} height={32} className="cursor-pointer" />
            </div>
          ) : (
            <div
              className={classNames("msg", {
                "right-block": !message.otherUser,
                "left-block": message.otherUser,
              })}
            >
              {message.message}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ChatBody;

import React from "react";
import CardLayout, { CardBGType } from "src/layouts/card-layout/CardLayout";

import "src/biz-components/chat/Chat.scss";
import MessageInbox from "./MessageInbox";
import ChatBox from "./ChatBox";

const Chat: React.FC = () => (
  <CardLayout
    size="xl"
    bg={CardBGType.grey}
    hideBottomBorderRadius={true}
    hideRightBorderRadius={true}
    className="chat-container"
  >
    <CardLayout className="chat-wrapper" bg={CardBGType.white}>
      <MessageInbox />
      <ChatBox />
    </CardLayout>
  </CardLayout>
);

export default Chat;

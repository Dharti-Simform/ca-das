import React from "react";
import Chat from "src/biz-components/chat/Chat";
import PrivateLayout from "src/layouts/private-layout/PrivateLayout";

const ChatPage: React.FC = () => (
  <PrivateLayout>
    <Chat />
  </PrivateLayout>
);

export default ChatPage;

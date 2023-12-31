import React, { useState } from "react";
import CardLayout, { CardBGType } from "src/layouts/card-layout/CardLayout";

import User1 from "../../assets/avatars/User1.png";
import { ReactComponent as EmojiIcon } from "src/assets/icons/emoji.svg";
import { ReactComponent as AttachmentIcon } from "src/assets/icons/attachment.svg";

import "src/biz-components/chat/Chat.scss";
import Input from "src/base-components/Input/Input";

const CommentBox: React.FC = () => {
  const [comment, setComment] = useState("");

  return (
    <CardLayout
      bg={CardBGType.grey}
      size="md"
      className="chat-footer horizontal-flex align-center justify-space-between"
    >
      <img src={User1} alt="user" width={40} height={40} />
      <Input
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment…"
        containerClassName="comment-input"
      />
      <div className="input-option horizontal-flex">
        <EmojiIcon width={24} height={24} className="cursor-pointer" />
        <AttachmentIcon width={24} height={24} className="cursor-pointer" />
      </div>
    </CardLayout>
  );
};

export default CommentBox;

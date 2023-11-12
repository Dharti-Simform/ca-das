import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";
import { ReactComponent as DotIcon } from "src/assets/icons/dot.svg";

import "src/biz-components/chat/Chat.scss";
import CardLayout, { CardBGType } from "src/layouts/card-layout/CardLayout";
import { DIRECT_MESSAGES, GROUPS } from "src/utils/data";

/* 
!TO-DO: 
1. Scrollbar issue
2. Info like away time, active
*/
const MessageInbox: React.FC = () => {
  const { t } = useTranslation("Chat");

  return (
    <div className="message">
      <>
        <div className="horizontal-flex justify-space-between">
          <h5 className="title_3 grey-font title title-letter-spacing">
            {t("sidebar.directMessage")}
          </h5>
          <PlusIcon
            width={16}
            height={16}
            fill="#8F92A1"
            className="plus-icon cursor-pointer"
          />
        </div>
        <ul className="chat-sidebar-items">
          {DIRECT_MESSAGES.map((message, index) => (
            <li className="chat-sidebar-item justify-space-between" key={index}>
              <div className="message-item horizontal-flex">
                <img
                  src={message.avatar}
                  alt={message.name}
                  width={32}
                  height={32}
                />
                <span>{message.name}</span>
              </div>
              {!!message.unreadMsgCount && (
                <div className="unread-count">{message.unreadMsgCount}</div>
              )}
              {!message.unreadMsgCount && message.isActive && (
                <DotIcon width={8} height={8} />
              )}
              {!message.unreadMsgCount && !message.isActive && (
                <span className="grey-font">{message.awayTime}</span>
              )}
            </li>
          ))}
        </ul>
      </>

      <>
        <div className="horizontal-flex justify-space-between">
          <h5 className="title_3 grey-font title title-letter-spacing">
            {t("sidebar.groups")}
          </h5>
          <PlusIcon
            width={16}
            height={16}
            fill="#8F92A1"
            className="plus-icon cursor-pointer"
          />
        </div>
        <ul className="chat-sidebar-items">
          {GROUPS.map((group, index) => (
            <li
              className="chat-sidebar-item group-item horizontal-flex justify-space-between"
              key={index}
            >
              <span>{group.name}</span>
              <div className="unread-count">{group.unreadMessage}</div>
            </li>
          ))}
        </ul>
      </>

      <CardLayout
        size="sm"
        bg={CardBGType.grey}
        className="horizontal-flex justify-center add-action-card add-message"
      >
        <PlusIcon width={24} height={24} />
        <span className="title_2">{t("sidebar.newMessage")}</span>
      </CardLayout>
    </div>
  );
};

export default MessageInbox;

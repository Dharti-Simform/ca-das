import User2 from "src/assets/avatars/User2.jpg";
import User3 from "src/assets/avatars/User3.png";
import User4 from "src/assets/avatars/User4.png";
import User5 from "src/assets/avatars/User5.png";
import User6 from "src/assets/avatars/User6.png";
import User7 from "src/assets/avatars/User7.png";
import User8 from "src/assets/avatars/User8.png";
import User9 from "src/assets/avatars/User9.png";
import User10 from "src/assets/avatars/User10.png";
import ChatPhoto from "src/assets/images/ChatPhoto.png";

export type DirectMessageType = {
    avatar: string;
    name: string;
    isActive: boolean;
    awayTime?: string;
    unreadMsgCount?: number;
}

type GroupType = {
    name: string,
    unreadMessage: number
}

export type MessageType = {
    message: string,
    isSender: boolean,
    attachment?: string
}

type MessageList = DirectMessageType[];

type GroupList = GroupType[];

export const TEAMS_LOGO = [User2, User3, User4, User5, User6];

export const DIRECT_MESSAGES: MessageList = [
    {
        avatar: User3,
        name: "Linh Nguyen",
        isActive: true,
        awayTime: "",
        unreadMsgCount: 0
    },
    {
        avatar: User7,
        name: "Seth Daniels",
        isActive: true,
        awayTime: "",
        unreadMsgCount: 0
    },
    {
        avatar: User8,
        name: "Genevieve Rhioadsa",
        isActive: false,
        awayTime: "10 mins",
        unreadMsgCount: 0
    },
    {
        avatar: User9,
        name: "Seth Daniels",
        isActive: false,
        awayTime: "",
        unreadMsgCount: 1
    },
    {
        avatar: User10,
        name: "Lucy Chavez",
        isActive: true,
        awayTime: "",
        unreadMsgCount: 0
    }
]

export const GROUPS: GroupList = [{
    name: "# Carrot Team",
    unreadMessage: 0
},
{
    name: "# Carrot Plan",
    unreadMessage: 1
},
{
    name: "# General",
    unreadMessage: 6
}]

export const MESSAGES: MessageType[] = [
    {
        message: "Hello Linh!",
        isSender: false
    },
    {
        message: "Can you send me preview image of reading app project?",
        isSender: false
    },
    {
        message: "Okay bro! Wait a minute…",
        isSender: true
    },
    {
        message: "Here you are bro. Please check it",
        isSender: true
    },
    {
        message: "",
        isSender: true,
        attachment: ChatPhoto
    }
]
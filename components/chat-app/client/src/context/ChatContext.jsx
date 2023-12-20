import { createContext, useState, useContext } from "react";



const ChatContext = createContext();


// eslint-disable-next-line react/prop-types
export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const values = {
        messages,
        setMessages,
    }

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
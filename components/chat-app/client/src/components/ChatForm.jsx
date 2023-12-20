import styles from "./styles.module.css";
import {useState} from "react";

import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState('');
  const {setMessages} = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message)
    sendMessage(message);
    setMessages((prevState) => [...prevState, {message, fromMe: true}]);
    setMessage('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Type Something..." type="text" className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)}/>
      </form>
    </div>
  )
}

export default ChatForm

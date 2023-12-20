import styles from "./styles.module.css";
import {useState} from "react";

function ChatForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    setMessage('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)}/>
      </form>
    </div>
  )
}

export default ChatForm

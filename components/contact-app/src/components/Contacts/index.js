import {useEffect, useState} from 'react'

import List from "./List";
import Form from "./Form";

import './styles.css';

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Anıl",
      phoneNumber: "123123"
    },
    {
      fullname: "Ali",
      phoneNumber: "324234"
    },
    {
      fullname: "Ayşe",
      phoneNumber: "543543"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts

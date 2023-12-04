import {useState} from 'react'

export default function InputExample() {
    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (event) => {
        console.log(event.target.name)

        setForm({...form, [event.target.name]: event.target.value});
    }
    
  return (
    <div>
      Name: <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      <br />
      Surname: <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />


      <br />
      {form.name} {form.surname}
    </div>
  );
}

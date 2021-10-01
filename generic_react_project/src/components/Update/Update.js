
import React, { useState, useEffect } from 'react'
import './Update.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react'

function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState(null);
  const [telephoneNumber, setTelephoneNumber] = useState('');
  let history = useHistory();

  function callMockApiWithAxiosPUT() {

    const formData = {
      firstName,
      lastName,
      id,
      telephoneNumber
    };

    const endpointURL = `https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance/${id}`;
    axios.put(endpointURL, formData)
      .then(() => history.push("/read"))
      .catch(
        (err) => { console.log(err) }
      );

  }


useEffect(() => {
  setFirstName(localStorage.getItem('firstName'));
  setLastName(localStorage.getItem('lastName'));
  setId(localStorage.getItem('id'));
  setTelephoneNumber(localStorage.getItem('telephoneNumber'))
}, [])

return (
  <div>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input 
          name="firstName"
          onChange={e => setFirstName(e.target.value)}
          placeholder='First Name'
          value={firstName} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input 
          name="lastName"
          onChange={e => setLastName(e.target.value)}
          placeholder='Last Name'
          value={lastName} />
      </Form.Field>
      <Form.Field>
        <label>Telephone Number</label>
        <input 
          name="telephoneNumber"
          onChange={e => setTelephoneNumber(e.target.value)}
          placeholder='Telephone Number'
          value={telephoneNumber} />
      </Form.Field>
      <Button type='submit' onClick={callMockApiWithAxiosPUT}>Update</Button>
    </Form>
  </div>
)
}
export default Update;

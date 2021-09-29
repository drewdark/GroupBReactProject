import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './Create.css';
import { useHistory } from 'react-router';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefix, setPrefix] = useState('');
  let history = useHistory();

  const callMockAPI = () => {
    console.log(prefix + " " + firstName + " " + lastName);

    const formData = {
      firstName,
      lastName,
      prefix
    }

    //lukas - const endpointURL = "https://6151d17e4a5f22001701d459.mockapi.io/ap1/v1/people";
    const endpointURL = "";
    axios.post(endpointURL, formData)
      .then(() => history.push("/read"))
      .catch(err => console.log(err));
  }

  const options = [
    { text: 'Mr', value: 'Mr' },
    { text: 'Mrs', value: 'Mrs' },
    { text: 'Miss', value: 'Miss' },
    { text: 'Ms', value: 'Ms' },
    { text: 'Dr', value: 'Dr' },
  ]

  return (
    <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Prefix'
            options={options}
            placeholder='Prefix'
            onChange={e => setPrefix(e.target.textContent)} />

          <Form.Input fluid label='First name' placeholder='First name'
            onChange={e => setFirstName(e.target.value)} />
          <Form.Input fluid label='Last name' placeholder='Last name'
            onChange={e => setLastName(e.target.value)} />
        </Form.Group>

        <Button
          type='submit'
          onClick={callMockAPI}
        >Submit</Button>
      </Form>
    </div>
  );
}

export default Create;

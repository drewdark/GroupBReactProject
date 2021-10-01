import React, {useEffect, useState} from 'react';
import './Read.css';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [tableData, setTableData] = useState([]);

  const callMockApiWithAxiosGET = () => {
      //LUKAS API: const endpointURL = "https://6151d17e4a5f22001701d459.mockapi.io/ap1/v1/people";
      // Ed's API Below
      const endpointURL = "https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance";
      axios.get(endpointURL)
        .then(response => setTableData(response.data));
    };

  function setLocalStorage(data) {
    console.log(data.id);
    localStorage.setItem("id", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("telephoneNumber", data.telephoneNumber);
  }

  
  // const onDelete = (id) => {
  //   //LUKAS API: const endpointURL = `https://6151d17e4a5f22001701d459.mockapi.io/ap1/v1/people/${id}`;
  //   const endpointURL = `${id}`;
  //   axios.delete(endpointURL)
  //   .then(() => callMockApiWithAxiosGET())
  //   .catch(
  //     (err) => { console.log(err) }
  //     );
  //   }
    
  useEffect(() => {
    callMockApiWithAxiosGET();
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Telephone Number</Table.HeaderCell>
            <Table.HeaderCell>Address Line One</Table.HeaderCell>
            <Table.HeaderCell>Address Line Two</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
            <Table.HeaderCell>Back to admin panel</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            tableData.map(data => {
              return (
                <Table.Row>
                  <Table.Cell>{data.prefix}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>{data.telephoneNumber}</Table.Cell>
                  <Table.Cell>{data.addressLine1}</Table.Cell>
                  <Table.Cell>{data.addressLine2}</Table.Cell>
                  <Table.Cell>{data.city}</Table.Cell>
                  <Table.Cell>{data.zipCode}</Table.Cell>
                  <Table.Cell>
                    <Link to="/admin">
                      <Button color="green"
                        >Back to admin panel</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                  <Link to="/update">
                      <Button color="green" onClick={() => setLocalStorage(data)}>Update</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;

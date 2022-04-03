import Head from 'next/head'
import {useEffect, useState} from "react";

export default function Home() {

  const [apiBaseUrl, setApiBaseUrl] = useState('');
  const [apiKey, setApiKey] = useState('');

  return (
      <div className="ContactsTesterApp">
        <header>
          Contacts API Tester App
          <form onSubmit={(event => {
            event.preventDefault();
            setApiBaseUrl(event.target.apiurl.value);
            setApiKey(event.target.apikey.value);
          })}>
            <input name="apiurl" type="string" placeholder="Ingresa la url de tu API"/>
            <input name="apikey" type="string" placeholder="Ingresa el token JWT de tu API"/>
            <button type="submit">Submit
            </button>
          </form>
        </header>
        {apiBaseUrl && apiKey &&
            <ApiTester apiBaseUrl={apiBaseUrl} apiKey={apiKey}/>
        }
      </div>
  );
}

function ApiTester(props) {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    let request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: 'John Doe',
        celular: 123456789
      })
    };
    fetch(`${props.apiBaseUrl}/contact`, request)
        .then(response => response.json())
        .then(data => {
          setContact(data);
        });
  }, []);

}

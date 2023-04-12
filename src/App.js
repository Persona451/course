import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Total from './components/Total/Total';
import { useState, useEffect } from 'react';
import axios from 'axios';

const getContacts = () => {
  return axios.get('http://localhost:3001/contacts')
}

const createPost = (person) => {
  return axios.post('http://localhost:3001/contacts', person)
}

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    getContacts()
      .then(res =>
        setPersons(res.data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const person = persons.find(
      (p) => p.name.toLowerCase() === personObject.name.toLowerCase()
    )
    if (person) {
      alert("Пользователь с таким именем уже существует")
    } else {
      createPost(personObject).then(() => {
        setNewNumber("")
        setNewName("")
        getContacts().then((res) => setPersons(res.data))
      })
    }
  }

  return (
    <div>
      <h1>Пользователи</h1>
      <form className='pers' onSubmit={addPerson}>
        <input type="text"
          value={newName}
          onChange={event => setNewName(event.target.value)} placeholder="person" />
        <input type="text"
          value={newNumber}
          onChange={event => setNewNumber(event.target.value)} placeholder="телефон" />
        <input type="submit" value="Добавить пользователя" />
      </form>
      <div>
        {persons.map((person) => {
          return (
            <div key={person.id}>
              <p>{person.name}</p>
              <p>{person.number}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

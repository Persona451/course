import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Total from './components/Total/Total';
import { useState, useEffect } from 'react';
import axios from 'axios';

const getPerson = () => {
  return axios.get('http://localhost:3001/contacts')
}

function App() {
  // const course = [
  //   {
  //     id: 1,
  //     name: "IT-RUN React Web Dev",
  //     tasks: [
  //       {
  //         part: "Вводный курс по React",
  //         task: 7
  //       },
  //       {
  //         part: "Состояние компонента",
  //         task: 15
  //       },
  //       {
  //         part: "Декомпозиция компонентов",
  //         task: 10
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: "IT-RUN Python Web Dev",
  //     tasks: [
  //       {
  //         part: "Вводный курс по Python",
  //         task: 5
  //       },
  //       {
  //         part: "Переменные циклы Python",
  //         task: 12
  //       },
  //       {
  //         part: "Фреймворк Django",
  //         task: 17
  //       },
  //     ]
  //   }
  // ]
  const [persons, setPersons] = useState([{
    id: 1,
    name: "Kairat Murataliev",
    number: "996702541269"
  }])
  const [newName, setNewName] = useState('')

  useEffect(() => { 
    getPerson() 
    .then(res =>  
      setPersons(res.data)) 
  }, []) 

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find((p) => {
      return p.name.toLowerCase() === newName.toLowerCase()
    })
    if(person) {
      alert("Пользователь с таким именем уже существует")
    } else {
      setPersons([...persons, {name: newName}])
      setNewName('')
    }
  }

  return (
    <div>
      <h1>Пользователи</h1>
      <form className='pers' onSubmit={addPerson}>
        <input type="text"
        value={newName}
        onChange={event => setNewName(event.target.value)} placeholder="person" />
        <input type="text" placeholder="телефон" />
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

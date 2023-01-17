
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem, Trash, Diamond } from './styles.js'



function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')



  function inputChange(event) {

    setInputTask(event.target.value)


  }
  function click() {

    if( inputTask){    
      setList([...list, { id: uuid(), task: inputTask, finished: false }])

    }


  }

  function finishedTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item

    ))

    setList(newList)
  }

  function delItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }



  return (
    <>
      <Container>
        <ToDoList>
          <Input onChange={inputChange} placeholder="O que tenho para fazer..." />
          <Button onClick={click}>Adicionar</Button>

          <ul>
            {
              list.length >0 ?(

              
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Diamond  onClick={() => finishedTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => delItem(item.id)} />
                </ListItem>
              )) 
            ):  ( <h3> Não há itens na lista</h3>
            )}

          </ul>
        </ToDoList>
      </Container>

    </>
  )

}

export default App

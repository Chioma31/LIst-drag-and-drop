import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import styles from '../styles/Home.module.css';



const tasks = [
  { 
    id: '1', 
    name: 'Take out the garbage'
   },
  {
     id: '2', 
     name: 'Watch my favorite show' 
    },
  { 
    id: '3', 
    name: 'Charge my phone' 
  },
  {
     id: '4', 
     name: 'Cook dinner' 
    },
]

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  margin: `0 50px 15px 50px `,
  background: isDragging ? "black" : "blue",
  color: isDragging ? "white" : "white",
  border: `5px`,
  borderRadius: `1px solid black`,
  fontSize: `20px`,

  ...draggableStyle
})
export default function Home() {
  const [todo, setTodo] = useState(tasks)

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result
    if(!destination) return

    const items = Array.from(todo)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 1, newOrder)

    setTodo(items)
  }
  return (
    <div className={styles.container}>

      <h1>Drag And Drop List</h1>

      <DragDropContext onDragEnd = {onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div className="todo" {...provided.droppableProps} ref = {provided.innerRef} >
              {todo.map(({id, name}, index) => {
                return(
                  <Draggable key={id} draggableId={id} index={index} >
                    {(provided, snapshot) => (
                      <div ref = {provided.innerRef} 
                      {...provided.dragHandleProps} 
                      {...provided.draggableProps} 
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)} >
                        {name}
                      </div>
                    )}

                  </Draggable>
                )
              })}
            </div>
          )}

        </Droppable>
      </DragDropContext>
      
    </div>
  )
}



import React from 'react'
import TodoActions from '../TodoActions/TodoActions'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoRender from '../TodoRender/TodoRender'
import './Todo.css'


const Todo = () => {
    return(
        <div className='todo-wrapper'>
            <TodoHeader />

            <TodoActions/>

            <TodoRender/>
        </div>
    )
}

export default Todo;
import React, {useState} from 'react'
import TodoActions from '../TodoActions/TodoActions'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoRender from '../TodoRender/TodoRender'
import './Todo.css'


const initialFormData = {
    isEdit: false,
    todoName: '',
    todoNote: '',
    isFinished: false,
    id: '',
    index: null
}


const Todo = () => {
    const [tab, setTab] = useState(0)
    const [isOpen, setIsOpen ] = useState(false)
    const [isOpenDisplayTodo, setIsOpenDisplayTodo ] = useState(false)
    const [todo, useTodos] = useState([])
    const [formData, useFormData] = useState({
        isEdit: false,
        todoName: '',
        todoNote: '',
        isFinished: false,
        id: '',
        index: null
    })

    

    return(
        <div className='todo-wrapper'>
            <TodoHeader />

            <TodoActions/>

            <TodoRender/>
        </div>
    )
}

export default Todo;
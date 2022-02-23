import {useState} from 'react';
import {connect} from 'react-redux';
import { createTodo } from './actions/index';

const Form = (props) => {
    const [toDo, setToDo] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newToDo = {
            id: 0,
            task: toDo,
            completed: completed
        } 
        // console.log(newToDo);
        props.createTodo(newToDo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="toDo">New To Do's  :  </label>
            <input 
                className='input'
                type="text" 
                name="toDo" 
                value={toDo} 
                onChange={(e) => setToDo(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" className='button'/>
            <br />
            <br />
            <br />
        </form>
        </div>
    )
}

export default connect( null, {createTodo})(Form);
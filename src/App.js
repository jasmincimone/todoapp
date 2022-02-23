import headerimage from './photos/todolisttitle.png';
import './App.css';
import {connect} from 'react-redux';
import Form from './form';

const mapStateToProps = (state) => ({
  todo: state.TODO
})

function App(props) {
  const {todo} = props
  console.log(todo)
  return (  
    <div className="App">

      <header> <img src={headerimage} height={300} width={700} alt={'todolisttitle'} /> </header>

      <div className='List'>

      <Form todo={todo}/>

      <h4>To Do List:</h4>
      {todo.map((task)=> <span className='toDoList'> {task.task}</span> )}

      </div>
    </div>
  );
}

export default connect(mapStateToProps, {})(App);

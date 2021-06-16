import './App.css';
import Todo from './components/todo'

const todoList = [
  {
    id: 1,
    title: 'Make Dinner',
    completed: false
  },
  {
    id: 2,
    title: 'Wash Dishes',
    completed: true
  } 
]

function App() {
  return (
    <div className="App">
      {todoList.map(val => {
        return  <Todo todo={val} id={val.id} /> 
      })}
    </div>
  );
}

export default App;

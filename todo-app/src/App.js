import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'
import Inputform from './components/Inputform';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Inputform/>
      <TodoList/>
    </div>
  );
}

export default App;

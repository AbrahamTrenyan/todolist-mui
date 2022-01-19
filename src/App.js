import './App.css';
import ToDoList from './Components/ToDoList';
import InputTask from './Components/InputTask';
import UserProvider from './store/appContext';
function App() {
  return (
    <>
      <InputTask />
     {/*  <ToDoList /> */}
    </>
  );
}

export default App;

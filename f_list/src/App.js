  import './App.css';
  import List from './components/List';
  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import "bootstrap/dist/css/bootstrap.min.css"
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddTask from './components/AddTask';


  function App() {
    return (
  <BrowserRouter>
        <Routes>
          <Route path="/list" element={<List/>} />
          <Route path="/*" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/addtask' element={< AddTask />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;

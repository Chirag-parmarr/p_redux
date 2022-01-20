import { Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import Form from './Components/Form'
import Table from "./Components/Table";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">


      <ToastContainer />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element={<Table />} />

      </Routes>

    </div>



  );
}

export default App;

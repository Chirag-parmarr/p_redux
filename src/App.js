import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import Form from './Components/Form'
function App() {
  return (
    <div className="App">



            <Routes>
                <Route path="/" element={<Form/>}/>

            </Routes>

    </div>



  );
}

export default App;

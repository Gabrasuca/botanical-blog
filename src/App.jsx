
import { PlantDetail } from "./pages/PlantDetail/Index";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./pages/Header/Index";
import { Home } from "./pages/Home";
import { CreatePage } from "./pages/CreatePage/Index";
import { Routes, Route } from "react-router-dom";
import { EditPage } from "./pages/EditPage/Index";

function App() {
  return <>
  <Header/>

  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/create" element= {<CreatePage/>}/>
    <Route path="/Plants" element= {<PlantDetail/>}/>
    <Route path="/edit/:plantId" element= {<EditPage/>}/>
  </Routes>
  
  </>;
}

export default App;

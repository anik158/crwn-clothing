import {Routes, Route} from "react-router-dom";
import Home from "./router/home/home.component.jsx";
import Navigation from "./router/navigation/navigation.component.jsx";
import Authentication from "./router/authentication/authentication.component.jsx";
import './App.scss';


const Shop = () => { 
  return (
    <h1>I am on shop page</h1>
  );
}

const  App = () =>{
return (
    <div className="categories-container">
        <Routes>
          <Route path="/" element={<Navigation />} > 
              <Route index element={<Home />} /> 
              <Route path="/shop" element={<Shop />} /> 
              <Route path="/auth" element={<Authentication />} />
          </Route>
         
        </Routes>
    </div>
  );
} 
export default App;
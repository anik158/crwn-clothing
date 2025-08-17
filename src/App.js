import './App.css';


import CategoriesItem from "./components/category-item/categories.component";
import categories from './data/categories.data';

const  App = () =>{
return (
    <div className="categories-container">
      {
        categories.map((category) => (
            <CategoriesItem key={category.id} category={category} />
          ))
      }
     
    </div>
  );
} 
export default App;

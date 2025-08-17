import './directory.style.scss';
import categories from '../../data/categories.data';
import CategoriesItem from '../category-item/categories.component';

const Directory = () => {
    return (
        <div className="directory-container">
        {categories.map((category) => (
            <CategoriesItem key={category.id} category={category} />
        ))}
        </div>
    );
}

export default Directory;
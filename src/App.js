

import 'bootstrap/dist/css/bootstrap.css'; 
import Header from './components/Header/Header';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';
import { Fragment } from 'react';
import ProductList from './components/ProductList/ProductList';

const categories = ['All', 'Electronics', 'Clothing', 'Books']; // Sample categories

function App() {
  return (
    <Fragment>
      <Header />
      <CategoryTabs categories={categories}/>
      <ProductList/>
    </Fragment>
  );
}

export default App;

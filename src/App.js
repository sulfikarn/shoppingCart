import 'bootstrap/dist/css/bootstrap.css'; 
import Header from './components/Header/Header';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';
import { Fragment } from 'react';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <Fragment>
      <Header />
      <CategoryTabs />
      <ProductList/>
    </Fragment>
  );
}

export default App;

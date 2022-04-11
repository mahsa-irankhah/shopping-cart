
import './App.css';
import Store from './components/Store';

// context
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
        <Store />
    </ProductsContextProvider>
  );
}

export default App;

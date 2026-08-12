import ProductContextProvider from "./context/ProductContextProvider";
import Home from "./components/Home";


function App() {
  return (
    <ProductContextProvider>
     
      <Home />
    </ProductContextProvider>
  );
}

export default App;

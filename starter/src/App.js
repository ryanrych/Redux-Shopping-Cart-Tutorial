import CartContainer from "./components/CartConatiner";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import {useDispatch, useSelector} from "react-redux";
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from "react";

function App() {

  //How does useSelector know which state to use??

  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

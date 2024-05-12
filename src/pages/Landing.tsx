import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const Landing = () => {
  const [count, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [show, setShow] = useState(false);

  const decreament = () => {
    if (count == 0) {
      return 0;
    } else {
      setCounter(count - 1);
    }
  };
  return (
    <>
      <Header
        item_quantity={show}
        quantity={quantity}
        cartIcon_onClick={() => setShow(!show)}
      />
      <Main
        show={show}
        quantity={quantity}
        deleteItem={() => {
          setQuantity(0);
          setCounter(0);
          setShow(false);
        }}
        checkoutClick={() => setShow(false)}
        decreament={decreament}
        count={count}
        increment={() => setCounter(count + 1)}
        addCart={() => {
          if (count > 0) setQuantity(count);
        }}
      />
    </>
  );
};

export default Landing;

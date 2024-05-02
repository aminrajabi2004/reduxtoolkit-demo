import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cake/cakeSlice";

function CakeContainer() {
  const [value, setValue] = useState(0);

  // 1. accepts a fucntion as its parameter : selector function
  // 2. useSelector hooks return whatever returns by selector function
  const state = useSelector((state) => state.cake);

  // returns a reference to the dispatch fucntion in redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cake Number : {state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>Buy Cake</button>
    </div>
  );
}
export default CakeContainer;

// 1. how to dispatch actions
// 2. how to access to redux store

// without hooks (CC) => mapStateToProps, mapDispatchToProps => BAD PRACTISE

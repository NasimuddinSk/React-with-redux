import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Conter = () => {

  const count = useSelector((state) => state.counter.value);
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();


  return (
    <div>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());

        }}
      >
        +
      </button>

      <span className="value" style={{ color: color }}>Count: {count}</span>



      <button
        className="button"
        aria-label="Increment value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <button
        className="button"
        aria-label="Increment value"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment value by + 10
      </button>

    </div >
  );
};

export default Conter;

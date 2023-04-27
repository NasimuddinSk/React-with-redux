import { useSelector } from "react-redux"
import Theme from "../theme/Theme";


const Coin = () => {

  const coin = useSelector((state) => state.counter.value);
  const color = useSelector((state) => state.color.color);

  return (
    <>
      <div>
        <span className="value" style={{ color: color }}>Coin: {coin}</span>

      </div>
      <Theme />
    </>

  )
}

export default Coin
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./themeSlice";


const Theme = () => {

  const dispatch = useDispatch();

  const [color, setColor] = useState("");

  return (
    <div>
      <input className="textbox" type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="RED" />

      <button className="button" onClick={() => { dispatch(changeColor(color)) }}>
        Change color</button>
    </div>
  )
}

export default Theme
import {React, useState} from "react";
import { useStore } from "./store";

const Input = () => {
    const [inputValue, setInputValue] = useState("");
    const add = useStore((state) => state.add)
    return (
        <div>
            <input value={inputValue}
            placeholder={"Add Book"} 
            onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {add(inputValue);}}>Add</button>
        </div>
    )
}

export default Input;
import { useState } from "react";
import { useStore } from "./store";

const Editor = ({id, editable}) => {
    const [newValue, setNewValue] = useState("");
    const edit = useStore((state) => state.edit);
    return (
        <div  style={(editable === false) ? {display: "none"} : {display: "block"}}>
            <input value={newValue} 
                onChange={e => setNewValue(e.target.value)} />
            <button onClick={() => {
                edit(id, newValue, editable) 
                }}>Edit</button>
        </div>
    )
}

export default Editor;
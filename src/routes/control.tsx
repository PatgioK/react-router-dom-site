import { useRef, useState } from "react";


const Control: React.FC = () => {
    return (
        <div>
            <p> Controlled vs Uncontrolled components </p>
            <Controlled />
            <Uncontrolled />
        </div>
    )
}

const Controlled: React.FC = () => {
    const [state, setState] = useState<string>("");

    function alertValue() {
        alert(state);
    }

    return (
        <div>
            <p> Controlled component has a state binded to it </p>
            <input
            type="text"
            value={state}
            onChange={ e => setState(e.target.value)}
            />
            <button onClick={alertValue}>Click Me</button>
        </div>
    )
}
interface RefObject<T> {
    readonly current: T | null
  }
  
const Uncontrolled: React.FC = () => {
    // const inputRef = useRef< HTMLInputElement | null> (null);
    const inputRef:RefObject<HTMLInputElement> = useRef< HTMLInputElement | null> (null);
    

    function alertValue() {
        // variable!.var is the non-null assertion operator. Tells the compiler this expression
        // cannot be null or undefined.
        alert(inputRef.current!.value);
    }

    return (
        <div>
            <p> Uncontrolled components do not have state data</p>
            <input type="text" ref={inputRef} />
            <button onClick={alertValue}>Click Me</button>
        </div>
    )
}

export default Control;
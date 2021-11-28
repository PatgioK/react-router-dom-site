import { useState, memo } from "react";


const Memo: React.FC = () => {
    const [localValue, setLocalValue] = useState(0);

    return (
        <div>
            <Child />
            <h1>
                LocalValue: {localValue}
            </h1>
            <button onClick={() => setLocalValue(localValue + 1)}>
            changeLocalValue
            </button>
        </div>
    )
}

const Child: React.FC = memo(() => {
    
    console.log("child render");
    return (
        <div>
    <h1>Child</h1>
    <p>
        Memo is used for child componenets to only re-render when its props change!
    </p>
    <p>
        useCallback is like memo but only for functions passed as props!
    </p>
    </div>
    )
})


export default Memo;
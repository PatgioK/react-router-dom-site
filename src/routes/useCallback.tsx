import { useState, memo, useCallback } from "react";


const UseCallback: React.FC = () => {
    const [localValue, setLocalValue] = useState(0);

    const someFunc = () => { }

    const memoizedFunc = useCallback(someFunc, []);

    return (
        <div>
            {/* <Child func={someFunc}/> */}
            <h1>
                LocalValue: {localValue}
            </h1>
            <button onClick={() => setLocalValue(localValue + 1)}>
                changeLocalValue
            </button>
        </div>
    )
}

const Child: React.FC = memo((props) => {
    console.log("child render");
    return <h1>Child</h1>
})


export default UseCallback;
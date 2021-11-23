import { useEffect, useState } from "react";

interface numberandId {
    number: number;
    id: number;
}

const data: Array<numberandId> = [];

for (let i = 0; i < 10; i++) {
    let newDat = {} as numberandId;
    newDat.number = i;
    newDat.id = i;
    data.push(newDat);
}

interface itemProps {
    number:number;
    id:number;
    delete: (n:number) => void;
}
const Item: React.FC<itemProps>  = (props) => {
    return <h1 onClick={() => props.delete(props.id)}>{props.number}</h1>;
}

const Key: React.FC = () => {
    const [state, setState] = useState(data);

    function deleteNumber(n:number) {
        const newData = state.filter((num) => num.id !== n);
        setState(newData);
    }

    return (
        <div>
            <p> Every item in the data array has a unique key! click an item to delete, check dev tools element!
                Because we use a unique identifier, React knows it doesnt have to re-render the whole tree.
                If you use the index as a key, it thinks every item has changed and will re-render everything.
                </p>
            {state.map((n, i) => {
                return (
                    <Item delete={deleteNumber} key={n.id} id={n.id} number={n.number}/>

                    // *** key = index here as non unique identifier. will force re-render of every item
                    // <Item delete={deleteNumber} key={i} id={n.id} number={n.number}/>
                );
            })}
        </div>
    );
};

export default Key;

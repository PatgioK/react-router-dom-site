import React, { useContext } from "react";

const globContex = React.createContext<number | null>(null);

const Child: React.FC = () => {
    return <GrandChild />;
};

const GrandChild: React.FC = (props) => {
    const gcContext = useContext(globContex);
    return <h1>{gcContext}</h1>;
};

const Context: React.FC = () => {
    return (
        <globContex.Provider value={1}>
            <div>
                <p>
                    Context allows data to be passed down to all components of the same tree.
                    </p>
                <Child />
            </div>
        </globContex.Provider>
    );
};

export default Context;

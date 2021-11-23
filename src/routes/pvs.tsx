import React from "react"


// Props VS State
// State = variables defined locally inside component, can be manipulated / mutated
// Props = passed to children, cannot be changed. Child must ask parent to change data.

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    name: string;
    id?: number;
    ok?: boolean;
    fn?: (bob: string) => string;
    obj?: {
        f1: string;
    }
    person?: Person;
}

const  Pvs: React.FC<Props> = ({
    name,
    id,
    ok,
    fn,
    obj,
}) => {
    return (
        <Child name={name} />
    )
}

interface ChildProps {
    name:string
}

const Child: React.FC<ChildProps> = (props) => {
    return (
        <GrandChild name={props.name}/>
    )
}

interface GCProps {
    name:string
}
const GrandChild: React.FC<GCProps> = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

export default Pvs;
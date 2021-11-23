import React from "react";

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
  };
  person?: Person;
}

const Pvs: React.FC<Props> = (props) => {
  return <Child name={props.name} />;
};

interface ChildProps {
  name: string;
}

const Child: React.FC<ChildProps> = (props) => {
  return <GrandChild name={props.name} />;
};

interface GCProps {
  name: string;
}
const GrandChild: React.FC<GCProps> = (props) => {
  return (
    <div>
      <p>
        React uses a state model where variables are locally declared. The state
        can then be passed down to child components as props.
      </p>
      <p>
        {" "}
        My name is in the parent state; gets passed down as props through
        children to the grandchild component. Not using context.
      </p>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Pvs;

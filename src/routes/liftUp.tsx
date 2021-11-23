import { useState } from "react";

interface liftProps {
  obj: [foo: string, bar: string];
}
const LiftUp: React.FC<liftProps> = (props) => {
  const [state, setState] = useState(props);

  return (
    <div>
      <p> both components use parent props</p>
      <List obj={props.obj} />
      <ItemCount num={state.obj.length} />
    </div>
  );
};

interface listProps {
  obj: [foo: string, bar: string];
}
const List: React.FC<listProps> = (props) => {
  console.log(props);
  console.log(props.obj);
  console.log(props.obj[1]);
  return (
    <div>
      <p> list component string items: </p>
      {props.obj.map((element, index) => (
        <h1 key={index}>{element}</h1>
      ))}
    </div>
  );
};

interface icProps {
  num: number;
}
const ItemCount: React.FC<icProps> = (props) => {
  return (
    <div>
      <p>component item count:</p>
      <h1>{props.num}</h1>
    </div>
  );
};

export default LiftUp;

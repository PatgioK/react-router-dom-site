import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function Unidirectionflow() {
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");


  let handleChange4 = (e: React.FormEvent<HTMLInputElement>): void => {
    setState4((e.target as HTMLInputElement).value);
  };

  let handleChange5 = (event: ChangeEvent<HTMLInputElement>) => {
    setState5(event.currentTarget.value);
  };

  return (
    <main>
      <p>In React, data only flows one way! State -&gt; whatever. one input writes to state, the other does not. Both get their value from
        state but only one has the change reflected in the dom. 
      </p>
      <input type="text" value={state4} onChange={(e) => handleChange4(e)} />
      <input type="text" value={state5} onChange={(e) => handleChange5(e)} />
    </main>
  );
}

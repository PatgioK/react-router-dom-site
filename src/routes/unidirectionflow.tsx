import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function Unidirectionflow() {
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  let handleChange = () => {};
  let handleChange4 = (e: React.FormEvent<HTMLInputElement>): void => {
    setState4((e.target as HTMLInputElement).value);
  };

  // also works
  // let handleChange5 = (event: ChangeEvent<HTMLInputElement>) => {
  //   setState5(event.currentTarget.value);
  // };

  return (
    <main>
      <p>In React, data only flows one way! State -&gt; stuff.  Both inputs get their value from
        state, but only one input writes to state. Only one has its changes reflected in the DOM.
      </p>
      <input type="text" value={state4} onChange={(e) => handleChange4(e)} />
      <input type="text" value={state5} onChange={(e) => handleChange()} />
    </main>
  );
}

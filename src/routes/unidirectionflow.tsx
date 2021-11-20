import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function Unidirectionflow() {
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");

  function handleChange(e: ChangeEventHandler<HTMLInputElement>): void {
    setState((e.target as HTMLInputElement).value);
  }

  function handleChange2(e: {
    target: React.ChangeEventHandler<HTMLInputElement>;
  }) {
    setState2(e.target.value);
  }

  function handleChange3(e: React.FormEvent<HTMLInputElement>): void {
    setState2(e.currentTarget.value);
  }

  let handleChange4 = (e: React.FormEvent<HTMLInputElement>): void => {
    setState3((e.target as HTMLInputElement).value);
  };

  let handleChange5 = (event: ChangeEvent<HTMLInputElement>) => {
    setState5(event.currentTarget.value);
  };

  return (
    <main>
      <p>asdf</p>
      <input type="text" value={state} onChange={() => handleChange} />
      <input type="text" value={state2} onChange={() => handleChange2} />
      <input type="text" value={state3} onChange={() => handleChange3} />
      <input type="text" value={state4} onChange={() => handleChange4} />
      <input type="text" value={state4} onChange={() => handleChange5} />
    </main>
  );
}

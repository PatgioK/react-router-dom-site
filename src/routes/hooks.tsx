import React, { useEffect, useRef, useState } from "react";

// const Hooks = (props: any) => {
//     const [hoverRef, hovered] = useHover();

//     const style = {
//         backgroundColor: hovered ? "red" : "",
//     };

//     return (
//         <div ref={hoverRef} style={style}>
//             <h1>Hooks!</h1>
//             <p>
//                 Hooks allow us to use lifecycle methods without defining a
//                 class. They also allow us to share logic across components and
//                 prevent mass wrappers!
//             </p>
//         </div>
//     );
// };

// const useHover:<HTMLDivElement extends HTMLElement> = () => {
//     const [value, setValue] = useState(false);

//     // the actual ref that will be returned to the consumer of the hook.
//     // using any type otherwise typescript thinks addeventlistener doesnt exist on 'never' type
//     const ref = useRef<HTMLDivElement>(null);

//     const handleMouseOver = () => setValue(true);
//     const handleMouseOut = () => setValue(false);

//     useEffect(() => {
//         const node = ref.current;
//         if (node) {
//             node.addEventListener("mouseover", handleMouseOver);
//             node.addEventListener("mouseout", handleMouseOut);

//             return () => {
//                 node.removeEventListener("mouseover", handleMouseOver);
//                 node.removeEventListener("mouseout", handleMouseOut);
//             }
//         }
//     }, []);

//     // return the ref that we attach to the element
//     // value is whether we are actually being hovered
//     return [ref, value];
// };

// export default Hooks;

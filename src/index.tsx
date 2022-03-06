import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Invoices from "./routes/invoices";

import Invoice from "./routes/invoice";
import Unidirectionflow from "./routes/unidirectionflow";
import Pvs from "./routes/pvs";
import LiftUp from "./routes/liftUp";
import Control from "./routes/control";
import Key from "./routes/key";
import Context from "./routes/context";
import RenderProps from "./routes/renderProps"
import Memo from "./routes/memo";
import UseCallback from "./routes/useCallback";

// Routing tutorial: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        path="unidirectionflow"
                        element={<Unidirectionflow />}
                    />
                    <Route path="pvs" element={<Pvs name="Pat" />} />
                    <Route
                        path="liftUp"
                        element={<LiftUp obj={["test1", "test2"]} />}
                    />
                    <Route path="control" element={<Control />} />
                    <Route path="key" element={<Key />} />
                    <Route path="context" element={<Context />} />
                    <Route path="renderProps" element={<RenderProps />} />
                    <Route path="memo" element={<Memo />} />
                    <Route path="useCallback" element={<UseCallback />} />

                    <Route path="invoices" element={<Invoices />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        {/* index route, 
                         Index routes render in the parent routes outlet at the parent route's path.
                         Index routes match when a parent route matches but none of the other children match.
                         Index routes are the default child route for a parent route.
                          Index routes render when the user hasn't clicked one of the items in a navigation list yet. */}
                        <Route path=":invoiceId" element={<Invoice />} />
                    </Route>

                    {/* '*' is has a special meaning here, it will match when no other routes do.  */}
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Theres nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

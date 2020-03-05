// src/index.test.js

import { h, render } from "preact";
import App from "../pages/Main";

it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<App />, div);
});

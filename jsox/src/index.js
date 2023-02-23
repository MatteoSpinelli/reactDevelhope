import { createRoot } from 'react-dom/client';
import { sum } from "./App"

const root = createRoot(document.getElementById("root"))
root.render(sum(11, 22))
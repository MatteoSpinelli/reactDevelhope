import { createRoot } from 'react-dom/client';
import { helloName } from "./App"

const root = createRoot(document.getElementById("root"))
root.render(helloName("Matteo"))
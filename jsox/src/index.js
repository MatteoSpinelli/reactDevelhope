import { createRoot } from 'react-dom/client';
import { hello } from "./App"

const root = createRoot(document.getElementById("root"))
root.render(hello)
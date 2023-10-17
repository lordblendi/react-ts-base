import React from "react"
import { createRoot } from "react-dom/client"

const rootElement = document.getElementById("root")

if (!!rootElement) {
    const App = (): JSX.Element => {
        return (
            <div>
                <h1>Hello!!</h1>
                <h2>Welcome to your First React App..!</h2>
            </div>
        )
    }

    const root = createRoot(rootElement)
    root.render(<App />)
}

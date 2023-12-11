import React from "react"
import { createHashRouter } from "react-router-dom"

import App from "./pages/app/app"
import HelloWorld from "./pages/helloworld/helloworld"

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        element: <HelloWorld />,
        path: "/hello",
    },
])

export default router

import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

import Counter from "../../components/counter/components/Counter"

export const App = (): JSX.Element => {
    return (
        <div>
            <h1 className="tw-bg-yellow-200">
                <Link to={"hello"}>Hello!!</Link>
            </h1>
            <h2>
                Welcome to your First React App..! Example icon:{" "}
                <FontAwesomeIcon icon={faRightFromBracket} />
            </h2>
            <Counter />
        </div>
    )
}

export default App

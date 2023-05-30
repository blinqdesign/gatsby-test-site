import * as React from 'react'
import Greeting from "../components/greeting"



//time to render the greeting component//
const SayHello = () => {
    return (
        <div>
            <Greeting name="Bender" />
            <Greeting name="Fry" />
            <Greeting name="Leela" />
            <Greeting name="Professor" />
            <Greeting name="Zoidberg" />
            <Greeting name="Amy" />
            <Greeting name="Hermes" />
        </div>
    )
}

export default SayHello
'use client'

import { useState } from "react"

export function Button(){
    const [name, setNome] = useState("Programação web na parada!")

    function handleChangeName(){
        setNome("Zoritto")
    }

    return(
        <div>
            <button onClick={handleChangeName}>Alterar nome</button>
            <h3>Nome: {name}</h3>
        </div>
    )
}
import React from 'react'

type HelloProps = {
    name: string
    idade: number // Propriedade opcional
}

function Hello ({ name, idade }: HelloProps) {
    return (
        <h2>
            Olá, {name}! {idade ? `Você tem ${idade} anos.` :'Idade não informada.'}
        </h2>
    )
}

export default Hello

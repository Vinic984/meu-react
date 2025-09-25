import React from 'react'
import Hello from './assets/Hello'
import Welcome from './assets/Welcome'
import { Button, Label } from './assets/Button'
import Card from './assets/Card'
function App() {

  return (
    <div>
      <Hello name="João" idade={30} />
      <Hello name="Maria" idade={25} />
      <Hello name="Carlos" idade={35} />
      <Welcome name="Ana" />
      <Welcome name="Pedro" />
      <h1>Olá, React!</h1>
      <p>Meu primeiro componente funcional</p>

      <Button />
      <Label />

      <Card titulo="Post 1" descricao="Descrição do primeiro post sobre React." data="2023-10-01" />
      <Card titulo="Post 2" descricao="Descrição do segundo post sobre componentes." />
      <Card titulo="Post 3" descricao="Descrição do terceiro post sobre props." data="2023-10-02" />
    </div>
  )
}

export default App

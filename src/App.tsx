import React from 'react'
import Hello from './assets/Hello'
import Welcome from './assets/Welcome'
import { Button, Label } from './assets/Button'
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
    </div>
  )
}

export default App

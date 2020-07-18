import React, { Fragment } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  return (
    <Fragment>
      <Header title="Buscador de noticias" />
      <div className="container white">
        <Form />
      </div>
    </Fragment>
  )
}

export default App

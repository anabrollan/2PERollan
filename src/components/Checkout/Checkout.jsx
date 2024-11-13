import React from 'react'
import { useState } from 'react'

const Checkout = () => {
  const [dataForm, setDataForm] = useState ({
    fullname: "",
    phone: "",
    email: ""
  })

  const handleChangeInput = (event) => {
    setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>Nombre completo: </label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

        <label>Teléfono: </label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

        <label>Correo: </label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

        <button type="submit">Terminar pedido</button>
      </form>
    </div>
  )
}

export default Checkout
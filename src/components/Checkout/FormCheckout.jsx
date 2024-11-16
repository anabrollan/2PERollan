import React from 'react'

const FormCheckout = ( {dataForm, handleChangeInput, handleSubmitForm} ) => {
  return (
    <form onSubmit={handleSubmitForm}>
    <label>Nombre completo: </label>
    <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

    <label>Teléfono: </label>
    <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

    <label>Correo: </label>
    <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

    <button type="submit">Terminar pedido</button>
  </form>
  )
}

export default FormCheckout
import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import db from "../../db/db.js"
import { Link } from 'react-router-dom'
import validateForm from '../../utils/validateForm.js'
import { toast } from 'react-toastify'
import { TbPlayerStop } from 'react-icons/tb'

const Checkout = () => {
  const [dataForm, setDataForm] = useState ({
    fullname: "",
    phone: "",
    email: ""
  })

  const [idOrder, setIdOrder] = useState(null)

  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      date: Timestamp.fromDate( new Date() ),
      buyer: {...dataForm},
      products: [...cart],
      total: totalPrice()
    }

    try {
      const response = await validateForm(dataForm)
      if(response.status === "error") throw new Error(response.message)
        toast.success("Completando el pedido")
      uploadOrder(order)
    } catch (error) {
      toast.error(error.message)
    }


  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
    .then( (response)=> setIdOrder(response.id) )
    .catch( (error)=> console.log() )
    .finally( ()=> {
      deleteCart()
    } )
  }

  return (
    <div>
      {
        idOrder === null ? (
          <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}/>
        ) : (
          <div>
            <h2>¡Gracias por tu compra!</h2>
            <p>Número de pedido: {idOrder}</p>
            <Link to="/">Volver al inicio</Link>
          </div>
        )
      }
    </div>
  )
}

export default Checkout
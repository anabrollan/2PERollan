import { mixed, object, string } from "yup"

let userSchema = object({
    fullname: string().required("Por favor, escribe tu nombre y apellidos"),
    phone: mixed().required("Por favor, escribe tu número de teléfono"),
    email: string().email("Por favor, escribe tu correo electrónico")
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return {status: "error", message: error.message }
    }

}

export default validateForm
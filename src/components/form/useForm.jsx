import { useState } from 'react'
import { helpHttp } from './helpHttp';


export const useForm = (initialForm, validateForm) => {
    
    //use states
    
    // valores Iniciales del formulario que recibe nuestro hook personalizado
    const [form , setForm] = useState(initialForm);
    
    // para manejo de errores, obojeto vacio para uso de validaciones
    const [errors, setErrors] = useState ({});
    
    // proceso de loading 
    const [loading, setLoading] =useState (false);
    
    //Respuesta para imprimir en nuestro formulario
    const [response, setResponse] = useState(null);

    // funcion que detecta cuando el usuario escribe y realiza los cambios de los valores
    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value,
        })
    };
    
    // funcion para validaciones
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form));
    };
    
    //funcion para enviar nuestro formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form))

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/axelvalientehex97@gmail.com",{
                body:form,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                },
            })
            .then(res => {
                setLoading(false);
                setResponse(true);
            })
        }else{
            return;
        }
    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }

}

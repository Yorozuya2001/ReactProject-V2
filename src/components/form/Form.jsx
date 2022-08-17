import { useForm } from "./useForm"
import Preloader from '../preloader/Preloader'

const initialForm = {
    name: "",
    email: "",
    emailCheck: "",
    phone: "",
}

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios"
    }

    if (!form.email.trim()) {
        errors.email = "El campo'Email' es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto"
    }

    if (!form.emailCheck.trim()) {
        errors.emailCheck = "El campo'Email repetido' es requerido";
    }else if(!regexEmail.test(form.emailCheck.trim())){
        errors.emailCheck = "El campo 'Email repetido' es incorrecto"
    }

    if (!(form.email.trim() === form.emailCheck.trim())) {
        errors.emailCheck = "Los Emails escritos no coinciden"
    }

    if (!form.phone.trim()) {
        errors.phone = "El campo 'Teléfono' es requerido";
    }else if(!regexPhone.test(form.phone.trim())){
        errors.phone = "El campo 'Teléfono' es incorrecto"
    }

    return errors;
}

const Form = ({ buyed }) => {

    const {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)

    return (
        <div>
            <h2>Formulario de pedido</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <input 
                type="text"
                name="name"
                id="name" 
                placeholder="Escribe tu nombre" 
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.name} 
                required />
                {
                    errors.name && <p className="error">{errors.name}</p>
                }
                </div>
                <div>
                <input 
                type="text"
                name="phone" 
                id="phone"
                placeholder="Escribe tu número de teléfono" 
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.phone} 
                required />
                {
                    errors.phone && <p className="error">{errors.phone}</p>
                }
                </div>
                <div>
                <input 
                type="email"
                name="email" 
                id="email"
                placeholder="Escribe tu email" 
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.email} 
                required />
                {
                    errors.email && <p className="error">{errors.email}</p>
                }
                </div>
                <div>
                <input 
                type="email"
                name="emailCheck"
                id="emailCheck" 
                placeholder="Escribe tu email nuevamente" 
                onBlur={handleBlur} 
                onChange={handleChange} 
                value={form.emailCheck} 
                required />
                {
                    errors.emailCheck && <p className="error">{errors.emailCheck}</p>
                }
                </div>
                <div>
                    {
                        Object.keys(errors).length === 0? 
                        <input onClick={buyed}  type="submit" value="Enviar" /> 
                        :
                        <input  type="submit" value="Enviar" />
                        
                    }
                </div>
            </form>
            {
            loading && <Preloader/>
            }
        </div>
    )
}

export default Form



const Form = ({buyed}) => {
    return (
        <div>
            <form className="form" action="">
                <label>Formulario de Pedido</label>
                <div className="inputContainer">
                <input id="name" className="inputWidth300" type="text" placeholder="Nombre" aria-label="Nombre" required />
                <input id="surname" className="inputWidth300" type="text" placeholder="Apellido" aria-label="Apellido" required />
                </div>
                <div className="inputContainer">
                <input id="phone" className="inputMax" type="text" placeholder="Numero de teléfono" />
                </div>
                <div className="d-flex flex-column">
                    <input id="email" className="inputMax" type="email" placeholder="Ingresar Email de contacto" />
                    <input id="email-checked" className="inputMax" type="email" placeholder="Repetear Email de contacto" />
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={buyed}  className="buttonConfirmInForm">Confirmar Pedido</button>
                </div>
            </form>
        </div>
    )
}

export default Form

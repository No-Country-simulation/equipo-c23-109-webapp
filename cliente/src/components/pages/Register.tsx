
export function Register() {
    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col m-auto justify-center items-center">
            <div className="flex flex-col m-auto justify-center items-center p-10 gap-5 text-left">
                <h1 className=" inline">Te damos la bienvenida a PrestaYa</h1>
                <form className="flex flex-col m-auto justify-center items-start p-10 gap-5 text-left border border-solid border-gray-700">
                    <div>
                        <label htmlFor="name">Nombre y Apellido</label>
                        <input type="text" id="name" required/>
                    </div>

                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" required/>
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" required/>
                    </div>

                    <div>
                        <label htmlFor="passConfirm">Confirmar Contraseña</label>
                        <input type="email" id="passConfirm" required/>
                    </div>
                </form>
            </div>
        </div>
    )
}
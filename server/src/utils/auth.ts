import bcrypt from 'bcrypt';

    // Modulo para hashear el password 

export const hashPassword = async(password: string) => {
    /**
        genSalt función para generar un salt que es un valor aleatorio y unico que se
        genera por cada contraseña antes de aplicar el algoritmo de encriptación, de esa forma
        aunque dos contraseñas tengan el mismo valor el hash será diferente.
        recibe un parámetro que se le llama rondas, mientras mayor el número más aleatorio es el 
        hash pero mientras más alto el número mas lento es la desencriptación
    */
    const salt = await bcrypt.genSalt(10);  
    return await bcrypt.hash(password, salt); //toma el password y el salt como parámetro
}
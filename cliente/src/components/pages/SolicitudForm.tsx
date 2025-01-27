import { useState } from "react";
import axios from "axios";

type SolicitudForm = {
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    telefono: string;
    montoSolicitado: number;
    plazoPrestamo: string;
    propositoPrestamo: string;
    ingresosMensuales: number;
    gastosMensuales: number;
    ocupacion: string;
    tiempoEmpleo: string;
}

export default function SolicitudForm() {
    const [formData, setFormData] = useState<SolicitudForm>({
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        telefono: "",
        montoSolicitado: 0,
        plazoPrestamo: "",
        propositoPrestamo: "",
        ingresosMensuales: 0,
        gastosMensuales: 0,
        ocupacion: "",
        tiempoEmpleo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Usando axios
            const response = await axios.post("http://localhost:4000/api/solicitudes/", formData);

            alert("Solicitud enviada con éxito: " + JSON.stringify(response.data));
            console.log(response.config.data)
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                // Errores específicos de axios
                alert(`Error al enviar la solicitud: ${err.response?.data?.message || err.message}`);
            } else {
                // Otros tipos de errores
                alert("Ocurrió un error inesperado.");
            }
            console.error(err);
        }
    };

    return (
        <div className="h-[100dvh] w-[100dvw] flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col m-auto p-4 text-left gap-6 border-2 border-solid border-gray-900">
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
                </label>
                <label>
                    Fecha de Nacimiento:
                    <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
                </label>
                <label>
                    Teléfono:
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </label>
                <label>
                    Monto Solicitado:
                    <input type="number" name="montoSolicitado" value={formData.montoSolicitado} onChange={handleChange} required />
                </label>
                <label>
                    Plazo del Préstamo:
                    <select name="plazoPrestamo" value={formData.plazoPrestamo} onChange={handleChange} required>
                        <option value="">Seleccione...</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </label>
                <label>
                    Propósito del Préstamo:
                    <input type="text" name="propositoPrestamo" value={formData.propositoPrestamo} onChange={handleChange} required />
                </label>
                <label>
                    Ingresos Mensuales:
                    <input type="number" name="ingresosMensuales" value={formData.ingresosMensuales} onChange={handleChange} required />
                </label>
                <label>
                    Gastos Mensuales:
                    <input type="number" name="gastosMensuales" value={formData.gastosMensuales} onChange={handleChange} required />
                </label>
                <label>
                    Ocupación:
                    <input type="text" name="ocupacion" value={formData.ocupacion} onChange={handleChange} required />
                </label>
                <label>
                    Tiempo en el Empleo:
                    <input type="text" name="tiempoEmpleo" value={formData.tiempoEmpleo} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar Solicitud</button>
            </form>
        </div>
    );
}
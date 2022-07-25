import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre]           = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail]             = useState('')
  const [fecha, setFecha]             = useState('')
  const [sintomas, setSintomas]       = useState('')
  const [error, setError]             = useState(false)

  const generateID = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    /* Validar formulario */
    if([nombre,propietario,email,fecha,sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    /* objeto paciente */
    const objectoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generateID()
    }

    setPacientes([...pacientes, objectoPaciente])

    /* Reiniciar formulario */
    setEmail('')
    setPropietario('')
    setNombre('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade paciente y <span className="text-indigo-600">Administralos</span></p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        { error &&
          <Error
            msg = {"Todos los campos son obligatorios"}
          />
        }
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input
            id="mascota"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)  }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
          <input
            id="propietario"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input
            id="email"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input
            id="alta"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
          <textarea
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-400 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar paciente" />
      </form>
    </div>
  )
}

export default Formulario
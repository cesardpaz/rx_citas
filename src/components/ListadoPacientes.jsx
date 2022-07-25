import Paciente from "./Paciente"

const ListadoPacientes = ( { pacientes } ) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
        {
            pacientes && pacientes.length ?
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        administra tus {' '}
                        <span className="text-indigo-600">pacientes y citas</span>
                    </p>
                    {
                        pacientes.map( ( paciente ) => (
                            <Paciente
                                key      = {paciente.id}
                                paciente = {paciente}
                            />
                        ))
                    }
                </>
            :

                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        comienza agregando pacientes {' '}
                        <span className="text-indigo-600">y aparecerán en el listado</span>
                    </p>
                </>

        }

    </div>
  )
}

export default ListadoPacientes
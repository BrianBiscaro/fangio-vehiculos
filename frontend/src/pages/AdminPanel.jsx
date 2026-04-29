const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <h3>Herramientas de Administración</h3>
            <div className="admin-tools">
                <div className="admin-tool">
                    <h4>Gestión de Vehículos</h4>
                    <p>Administra el catálogo de vehículos disponibles para las clases prácticas.</p>
                    <button>Ir a Vehículos</button>

                    <h4>
                        Gestión de Reservas
                    </h4>
                    <p>Revisa y administra las reservas realizadas por los alumnos.</p>
                    <button>Ir a Reservas</button>
                    <h4>
                        Gestión de Pagos
                    </h4>
                    <p>Verifica y administra los pagos realizados por los alumnos.</p>
                    <button>Ir a Pagos</button>

                    <h4>
                        Gestión de Instructores
                    </h4>
                    <p>Administra el equipo de instructores y sus asignaciones.</p>
                    <button>Ir a Instructores</button>

                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
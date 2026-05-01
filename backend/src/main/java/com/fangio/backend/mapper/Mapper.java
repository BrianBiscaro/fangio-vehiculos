package com.fangio.backend.mapper;

import com.fangio.backend.cliente.Cliente;
import com.fangio.backend.cliente.ClienteDTO;
import com.fangio.backend.instructor.Instructor;
import com.fangio.backend.instructor.InstructorDTO;
import com.fangio.backend.reserva.Reserva;
import com.fangio.backend.reserva.ReservaDTO;
import com.fangio.backend.vehiculo.Vehiculo;
import com.fangio.backend.vehiculo.VehiculoDTO;

public class Mapper {

    /*
     * Mapeos de Vehiculos
     */

    public static VehiculoDTO toDTO(Vehiculo vehiculo) {
        return VehiculoDTO.builder()
                .marca(vehiculo.getMarca())
                .modelo(vehiculo.getModelo())
                .patente(vehiculo.getPatente())
                .color(vehiculo.getColor())
                .anio(vehiculo.getAnio())
                .tipo(vehiculo.getTipo())
                .disponible(vehiculo.getDisponible())
                .build();
    }

    public static Vehiculo toEntity(VehiculoDTO vehiculoDTO) {
        return Vehiculo.builder()
                .marca(vehiculoDTO.getMarca())
                .modelo(vehiculoDTO.getModelo())
                .patente(vehiculoDTO.getPatente())
                .color(vehiculoDTO.getColor())
                .anio(vehiculoDTO.getAnio())
                .tipo(vehiculoDTO.getTipo())
                .disponible(vehiculoDTO.getDisponible())
                .build();
    }

    /*
     * Mapeos de Clientes
     */

    public static ClienteDTO toDTO(Cliente cliente) {
        return ClienteDTO.builder()
                .nombre(cliente.getNombre())
                .apellido(cliente.getApellido())
                .email(cliente.getEmail())
                .telefono(cliente.getTelefono())
                .build();
    }

    public static Cliente toEntity(ClienteDTO clienteDTO) {
        return Cliente.builder()
                .nombre(clienteDTO.getNombre())
                .apellido(clienteDTO.getApellido())
                .email(clienteDTO.getEmail())
                .telefono(clienteDTO.getTelefono())
                .build();
    }

    /*
     * Mapeos de Reservas
     */

    public static ReservaDTO toDTO(Reserva reserva) {
        return ReservaDTO.builder()
                .cliente(reserva.getCliente())
                .instructor(reserva.getInstructor())
                .vehiculo(reserva.getVehiculo())
                .fechaReserva(reserva.getFechaReserva())
                .build();
    }

    public static Reserva toEntity(ReservaDTO reservaDTO) {
        return Reserva.builder()
                .cliente(reservaDTO.getCliente())
                .instructor(reservaDTO.getInstructor())
                .vehiculo(reservaDTO.getVehiculo())
                .fechaReserva(reservaDTO.getFechaReserva())
                .build();
    }

    /*
     * Mapeos de Instructores
     */
    public static InstructorDTO toDTO(Instructor instructor) {
        return InstructorDTO.builder()
                .nombre(instructor.getNombre())
                .apellido(instructor.getApellido())
                .email(instructor.getEmail())
                .telefono(instructor.getTelefono())
                .build();
    }

    public static Instructor toEntity(InstructorDTO instructorDTO) {
        return Instructor.builder()
                .nombre(instructorDTO.getNombre())
                .apellido(instructorDTO.getApellido())
                .email(instructorDTO.getEmail())
                .telefono(instructorDTO.getTelefono())
                .build();
    }
}

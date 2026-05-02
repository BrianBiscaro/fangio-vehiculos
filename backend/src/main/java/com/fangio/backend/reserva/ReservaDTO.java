package com.fangio.backend.reserva;

import java.util.Date;

import com.fangio.backend.cliente.Cliente;
import com.fangio.backend.instructor.Instructor;
import com.fangio.backend.vehiculo.Vehiculo;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReservaDTO {
    private Long id;
    private Cliente cliente;
    private Instructor instructor;
    private Vehiculo vehiculo;
    private Date fechaReserva;
}

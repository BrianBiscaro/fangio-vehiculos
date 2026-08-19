package com.fangio.backend.instructor;

import java.util.List;

import com.fangio.backend.reserva.Reserva;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ResponseInstructorDTO {
    private Long id;
    private String username;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
    private List<Reserva> reservas;
}

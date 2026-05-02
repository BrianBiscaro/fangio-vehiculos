package com.fangio.backend.instructor;

import java.util.List;

import com.fangio.backend.reserva.Reserva;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RequestInstructorDTO {
    private String username;
    private String email;
    private String password;
    private String nombre;
    private String apellido;
    private String telefono;
    private List<Reserva> reservas;
}

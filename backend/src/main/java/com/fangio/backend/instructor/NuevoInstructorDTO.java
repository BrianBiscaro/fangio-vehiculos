package com.fangio.backend.instructor;

import lombok.Data;

@Data
public class NuevoInstructorDTO {
    private String username;
    private String email;
    private String password;
    private String nombre;
    private String apellido;
    private String telefono;
}

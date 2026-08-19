package com.fangio.backend.cliente;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ClienteDTO {
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}

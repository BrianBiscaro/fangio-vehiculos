package com.fangio.backend.vehiculo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiculoDTO {
    private Long id;
    private String marca;
    private String modelo;
    private String patente;
    private String color;
    private int anio;
    private String tipo;
    private Boolean disponible;
}

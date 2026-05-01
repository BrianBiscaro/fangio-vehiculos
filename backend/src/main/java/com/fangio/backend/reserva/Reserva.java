package com.fangio.backend.reserva;

import com.fangio.backend.cliente.Cliente;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Cliente cliente; // Relaciona Reserva con Cliente

    // Relaciona Vehiculo con Instructor

}

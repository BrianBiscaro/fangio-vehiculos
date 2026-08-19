package com.fangio.backend.vehiculo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiculoRepository extends JpaRepository<Vehiculo, Long> {

    List<Vehiculo> findByDisponibleTrue();

}

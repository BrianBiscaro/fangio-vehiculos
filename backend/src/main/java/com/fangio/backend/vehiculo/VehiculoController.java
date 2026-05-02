package com.fangio.backend.vehiculo;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/api/vehiculos")
public class VehiculoController {

    private final VehiculoService vehiculoService;

    @GetMapping
    public ResponseEntity<List<VehiculoDTO>> getVehiculos() {
        return ResponseEntity.ok(vehiculoService.getVehiculos());
    }

    @PostMapping
    public ResponseEntity<VehiculoDTO> createVehiculo(@RequestBody VehiculoDTO dto) {
        VehiculoDTO created = vehiculoService.createVehiculo(dto);

        return ResponseEntity.created(URI.create("/api/vehiculos/" + created.getId())).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VehiculoDTO> updateVehiculo(@RequestBody VehiculoDTO dto, @PathVariable Long id) {

        return ResponseEntity.ok(vehiculoService.updateVehiculo(id, dto));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteVehiculo(@PathVariable Long id) {

        vehiculoService.deleteVehiculo(id);
        return ResponseEntity.noContent().build();
    }
}

package com.fangio.backend.vehiculo;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fangio.backend.mapper.Mapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class VehiculoService {

    private final VehiculoRepository vehiculoRepository;

    public List<VehiculoDTO> getVehiculos() {
        return vehiculoRepository.findAll()
                .stream()
                .map(vehiculo -> Mapper.toDTO(vehiculo))
                .toList();
    }

    public VehiculoDTO createVehiculo(VehiculoDTO vehiculoDTO) {

        Vehiculo nuevoVehiculo = Mapper.toEntity(vehiculoDTO);

        return Mapper.toDTO(vehiculoRepository.save(nuevoVehiculo));
    }

    public VehiculoDTO updateVehiculo(Long id, VehiculoDTO dto) {

        Vehiculo vehiculoActualizado = vehiculoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("No existe el vehiculo"));

        vehiculoActualizado.setAnio(dto.getAnio());
        vehiculoActualizado.setColor(dto.getColor());
        vehiculoActualizado.setDisponible(dto.getDisponible());
        vehiculoActualizado.setMarca(dto.getMarca());
        vehiculoActualizado.setModelo(dto.getModelo());
        vehiculoActualizado.setPatente(dto.getPatente());
        vehiculoActualizado.setTipo(dto.getTipo());

        return Mapper.toDTO(vehiculoRepository.save(vehiculoActualizado));

    }

    public void deleteVehiculo(Long id) {
        vehiculoRepository.deleteById(id);
    }

}

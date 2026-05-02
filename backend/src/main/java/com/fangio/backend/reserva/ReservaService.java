package com.fangio.backend.reserva;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fangio.backend.mapper.Mapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReservaService {

    private final ReservaRepository reservaRepository;

    public List<ReservaDTO> getReservas() {

        return reservaRepository.findAll()
                .stream()
                .map(reserva -> Mapper.toDTO(reserva))
                .toList();
    }

    public ReservaDTO createReserva(ReservaDTO dto) {

        Reserva nuevaReserva = Mapper.toEntity(dto);

        return Mapper.toDTO(reservaRepository.save(nuevaReserva));
    }

    public ReservaDTO updateReserva(Long id, ReservaDTO dto) {

        Reserva reservaActualizada = reservaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("La reserva no existe"));

        reservaActualizada.setCliente(dto.getCliente());
        reservaActualizada.setFechaReserva(dto.getFechaReserva());
        reservaActualizada.setVehiculo(dto.getVehiculo());
        reservaActualizada.setInstructor(dto.getInstructor());

        return Mapper.toDTO(reservaRepository.save(reservaActualizada));
    }

    public void deleteReserva(Long id) {
        reservaRepository.deleteById(id);
    }
}

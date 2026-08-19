package com.fangio.backend.cliente;

import java.util.List;

import org.springframework.stereotype.Service;
import com.fangio.backend.mapper.Mapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public List<ClienteDTO> getClientes() {
        return clienteRepository
                .findAll()
                .stream()
                .map(cliente -> Mapper.toDTO(cliente))
                .toList();
    }

    public ClienteDTO createCliente(ClienteDTO clienteDto) {

        Cliente cliente = Mapper.toEntity(clienteDto);

        return Mapper.toDTO(clienteRepository.save(cliente));
    }

    public ClienteDTO updateCliente(Long id, ClienteDTO clienteDto) {

        Cliente clienteActualizado = clienteRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("El cliente buscado no existe"));

        clienteActualizado.setNombre(clienteDto.getNombre());
        clienteActualizado.setApellido(clienteDto.getApellido());
        clienteActualizado.setEmail(clienteDto.getEmail());
        clienteActualizado.setTelefono(clienteDto.getTelefono());

        return Mapper.toDTO(clienteRepository.save(clienteActualizado));

    }

    public void deleteCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}

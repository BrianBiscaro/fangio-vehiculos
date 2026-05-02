package com.fangio.backend.instructor;

import com.fangio.backend.auth.Role;
import com.fangio.backend.auth.User;
import com.fangio.backend.auth.UserRepository;
import com.fangio.backend.mapper.Mapper;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class InstructorService {

    private final InstructorRepository instructorRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<ResponseInstructorDTO> getInstructores() {

        return instructorRepository.findAll()
                .stream()
                .map(instructor -> Mapper.toDTO(instructor))
                .toList();
    }

    @Transactional
    public ResponseInstructorDTO createInstructor(RequestInstructorDTO dto) {

        if (userRepository.existsByUsername(dto.getUsername())) {
            throw new IllegalArgumentException("El nombre de usuario ya está en uso.");
        }
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("El email ya está en uso.");
        }

        User nuevoUsuario = new User();
        nuevoUsuario.setUsername(dto.getUsername());
        nuevoUsuario.setEmail(dto.getEmail());
        nuevoUsuario.setPassword(passwordEncoder.encode(dto.getPassword()));
        nuevoUsuario.setRole(Role.INSTRUCTOR);

        Instructor nuevoInstructor = new Instructor();
        nuevoInstructor.setNombre(dto.getNombre());
        nuevoInstructor.setApellido(dto.getApellido());
        nuevoInstructor.setTelefono(dto.getTelefono());

        nuevoInstructor.setUser(nuevoUsuario);

        instructorRepository.save(nuevoInstructor);

        return Mapper.toDTO(instructorRepository.save(nuevoInstructor));
    }

    public ResponseInstructorDTO updateInstructor(Long id, RequestInstructorDTO requestDto) {

        Instructor instructorActualizado = instructorRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("El instructor no existe"));

        instructorActualizado.setApellido(requestDto.getApellido());
        instructorActualizado.setNombre(requestDto.getNombre());
        instructorActualizado.setEmail(requestDto.getEmail());
        instructorActualizado.setTelefono(requestDto.getTelefono());
        instructorActualizado.setReservas(requestDto.getReservas());

        return Mapper.toDTO(instructorRepository.save(instructorActualizado));

    }

    public void deleteInstructor(Long id) {
        instructorRepository.deleteById(id);
    }
}
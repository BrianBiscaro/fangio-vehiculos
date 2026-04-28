package com.fangio.backend.instructor;

import com.fangio.backend.auth.Role;
import com.fangio.backend.auth.User;
import com.fangio.backend.auth.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InstructorService {

    private final InstructorRepository instructorRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public InstructorService(InstructorRepository instructorRepository, UserRepository userRepository,
            PasswordEncoder passwordEncoder) {
        this.instructorRepository = instructorRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public String crearInstructor(NuevoInstructorDTO dto) {

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

        return "Instructor y usuario creados con éxito.";
    }
}
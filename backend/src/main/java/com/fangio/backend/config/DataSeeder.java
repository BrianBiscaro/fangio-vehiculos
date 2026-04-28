package com.fangio.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.fangio.backend.auth.Role;
import com.fangio.backend.auth.User;
import com.fangio.backend.auth.UserRepository;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Tomará "admin" en local, o lo que diga el .env en producción
    @Value("${admin.setup.username}")
    private String adminUsername;

    @Value("${admin.setup.password}")
    private String adminPassword;

    @Value("${admin.setup.email}")
    private String adminEmail;

    public DataSeeder(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        if (!userRepository.existsByUsername(adminUsername)) {
            User admin = new User();
            admin.setUsername(adminUsername);
            admin.setEmail(adminEmail);
            admin.setPassword(passwordEncoder.encode(adminPassword));
            admin.setRole(Role.ADMIN);

            userRepository.save(admin);
            System.out.println("✅ DataSeeder: Usuario ADMIN creado (" + adminUsername + ")");
        }
    }
}
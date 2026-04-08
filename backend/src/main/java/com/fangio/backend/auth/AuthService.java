package com.fangio.backend.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fangio.backend.security.JwtTokenProvider;

@Service
public class AuthService implements IAuthService{

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;


    public AuthService(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider){
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }


    @Override
    public AuthResponse login(LoginRequest loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        User user = userRepository.findByUsername(loginDto.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));

        return new AuthResponse(token, user.getUsername(), user.getEmail());


    }

    @Override
    public String register(RegisterRequest registerDto) {

        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new IllegalArgumentException("Username already register");
        }

        if (userRepository.existsByEmail(registerDto.getEmail())){
            throw new IllegalArgumentException("Email already exists");
        }

        User user = new User();
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setRole(Role.USER);

        userRepository.save(user);

        return "User registered";
    }

}

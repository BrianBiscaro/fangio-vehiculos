package com.fangio.backend.auth;

public interface IAuthService {

    AuthResponse login(LoginRequest loginDto);
    String register(RegisterRequest registerDto);

}

package com.example.demo.service;

import com.example.demo.dto.LoginRequestDto;
import com.example.demo.dto.LoginResponseDto;
import com.example.demo.dto.UserDto;

public interface IAuthService {
    UserDto register(UserDto userDto);

    LoginResponseDto login(LoginRequestDto request);
}

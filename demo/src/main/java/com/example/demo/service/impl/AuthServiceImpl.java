package com.example.demo.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginRequestDto;
import com.example.demo.dto.LoginResponseDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.IAuthService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements IAuthService{

    private UserRepository _userRepository;

    @Override
    public UserDto register(UserDto userDto){
        User user = UserMapper.mapToUser(userDto);
        User savedUser = _userRepository.save(user);

        return UserMapper.mapToUserDto(savedUser);
    }


    @Override
    public LoginResponseDto login(LoginRequestDto request){
        Optional<User> userOpt = _userRepository.findBy_email(request.get_email());
        if (userOpt.isEmpty()) {
            throw new RuntimeException("Invalid mail");
        }
        User user = userOpt.get();
        if (! user.get_password().equals(request.get_password())) {
            throw new RuntimeException("Invalid password");
        }

        // In real apps, generate and return a JWT token here
        return new LoginResponseDto("fake-jwt-token", UserMapper.mapToUserDto(user));

    }
}

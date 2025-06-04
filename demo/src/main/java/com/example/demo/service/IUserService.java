package com.example.demo.service;

import com.example.demo.dto.UserDto;

public interface IUserService {

    public UserDto createUser(UserDto userDto);

    public UserDto getUserById(Long userId);
    
}

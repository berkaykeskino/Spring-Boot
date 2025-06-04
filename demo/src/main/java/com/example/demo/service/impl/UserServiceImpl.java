package com.example.demo.service.impl;

import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.UserMapper;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.IUserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService {

    private UserRepository _userRepository;

    @Override
    public UserDto createUser(UserDto userDto){

        User user = UserMapper.mapToUser(userDto);
        User savedUser = _userRepository.save(user);

        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId){
        User user = _userRepository.findById(userId).
                                    orElseThrow(
                                        () -> new ResourceNotFoundException("User not found with ID: " + userId )
                                    );
        
        return UserMapper.mapToUserDto(user);
    }
}

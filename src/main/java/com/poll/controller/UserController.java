package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.user.UserCreateRequestDto;
import com.poll.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private static final String ENTITY_ID = "id";
    private static final String GET_USER_ID = "/getUserId";
    private static final String ADD_USER = "/addUser";

    @Autowired
    private UserService service;

    @PostMapping(value = ADD_USER)
    public IdDto add(@RequestBody final UserCreateRequestDto userDto) {
        return service.add(userDto);
    }

    /*@GetMapping(value = GET_USER_ID)
    public IdDto find(@RequestParam(value = ENTITY_ID) final String id) {
        return service.read(IdDto.of(Long.valueOf((id))));
    }*/
}

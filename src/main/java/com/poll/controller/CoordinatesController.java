package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.coordinates.CoordinatesCreateRequestDto;
import com.poll.service.CoordinatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoordinatesController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_COORDINATES = "/addCoordinates";

    @Autowired
    private CoordinatesService service;

    @PostMapping(value = ADD_COORDINATES)
    public IdDto add(@RequestBody final CoordinatesCreateRequestDto dto) {
        return service.add(dto);
    }
}

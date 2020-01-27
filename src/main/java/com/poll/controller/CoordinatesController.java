package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.coordinates.CoordinatesComputeRequestDto;
import com.poll.dto.coordinates.CoordinatesRequestDto;
import com.poll.service.CoordinatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoordinatesController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_COORDINATES = "/addCoordinates";
    private static final String COMPUTE_COORIDANTES = "/computeCoordinates";

    @Autowired
    private CoordinatesService service;

    @PostMapping(value = ADD_COORDINATES)
    public IdDto add(@RequestBody final CoordinatesRequestDto dto) {
        return service.add(dto);
    }

    @PostMapping(value = COMPUTE_COORIDANTES)
    public CoordinatesRequestDto compute(@RequestBody final CoordinatesComputeRequestDto dto) {
        return service.compute(dto);
    }
}

package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.coordinates.CoordinatesCreateRequestDto;
import com.poll.mapper.CoordinatesMapper;
import com.poll.repository.CoordinatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoordinatesService {

    @Autowired
    private CoordinatesRepository coordinatesRepository;

    public IdDto add(CoordinatesCreateRequestDto dto) {

        return IdDto.of(
                coordinatesRepository.save(
                        CoordinatesMapper.fromDto(dto)));
    }
}

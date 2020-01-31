package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.coordinates.CoordinatesComputeRequestDto;
import com.poll.dto.coordinates.CoordinatesRequestDto;
import com.poll.mapper.CoordinatesMapper;
import com.poll.repository.CoordinatesRepository;
import com.poll.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CoordinatesService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CoordinatesRepository coordinatesRepository;

    public IdDto add(CoordinatesRequestDto dto) {

        return IdDto.of(
                coordinatesRepository.save(
                        CoordinatesMapper.fromDto(dto, userRepository.findUser(dto.getUserId()))));
    }

    public CoordinatesRequestDto compute(final CoordinatesComputeRequestDto dto) {

        Integer economy = 0;
        Integer social = 0;

        for(String pair : dto.getAnswerValues()) {
            String[] values = pair.split(",");
            economy += Integer.parseInt(values[0]);
            social += Integer.parseInt(values[1]);
        }

        return CoordinatesRequestDto.of(
                String.valueOf(economy),
                String.valueOf(social),
                null
        );
    }

    /*public EconomyEntity setCache(EconomyEntity entity) {
        return cache.setAt0(entity).getValue0();
    }

    public StateViewEntity setCache(StateViewEntity entity) {
        return cache.setAt1(entity).getValue1();
    }

    public SocialViewEntity setCache(SocialViewEntity entity) {
        return cache.setAt2(entity).getValue2();
    }


    public CoordinatesEntity compute() {

        Double xAxis;
        Double yAxis;

        return new CoordinatesEntity();
    }

    public IdDto saveAfterCompute() {

        return IdDto.of(
                coordinatesRepository.save(
                        compute()));
    }*/
}

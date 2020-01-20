package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.coordinates.CoordinatesCreateRequestDto;
import com.poll.mapper.CoordinatesMapper;
import com.poll.repository.CoordinatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CoordinatesService {

    @Autowired
    private CoordinatesRepository coordinatesRepository;

    //private Triplet<EconomyEntity, StateViewEntity, SocialViewEntity> cache;

    public IdDto add(CoordinatesCreateRequestDto dto) {

        return IdDto.of(
                coordinatesRepository.save(
                        CoordinatesMapper.fromDto(dto)));
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

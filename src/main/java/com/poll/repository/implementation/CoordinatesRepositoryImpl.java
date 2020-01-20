package com.poll.repository.implementation;

import com.poll.model.CoordinatesEntity;
import com.poll.repository.CoordinatesRepository;
import com.poll.repository.orm.CoordinatesOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CoordinatesRepositoryImpl implements CoordinatesRepository {

    @Autowired
    private CoordinatesOrmRepository ormRepository;

    @Override
    public Long save(CoordinatesEntity coordinatesEntity) {

        return ormRepository.saveAndFlush(coordinatesEntity).getIdCoordinates();
    }
}

package com.poll.repository.implementation;

import com.poll.model.EconomyEntity;
import com.poll.repository.EconomyRepository;
import com.poll.repository.orm.EconomyOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class EconomyRepositoryImpl implements EconomyRepository {

    @Autowired
    private EconomyOrmRepository ormRepository;

    @Override
    public Long save(EconomyEntity economyEntity) {
        return ormRepository.saveAndFlush(economyEntity).getIdEconomy();
    }
}

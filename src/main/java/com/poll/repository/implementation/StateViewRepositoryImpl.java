package com.poll.repository.implementation;

import com.poll.model.StateViewEntity;
import com.poll.repository.StateViewRepository;
import com.poll.repository.orm.StateViewOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StateViewRepositoryImpl implements StateViewRepository {

    @Autowired
    private StateViewOrmRepository ormRepository;

    @Override
    public Long save(final StateViewEntity stateView) {
        return ormRepository.saveAndFlush(stateView).getIdStateView();
    }
}

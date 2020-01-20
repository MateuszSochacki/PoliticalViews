package com.poll.repository.implementation;

import com.poll.model.UserEntity;
import com.poll.repository.UserRepository;
import com.poll.repository.orm.UserOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private UserOrmRepository ormRepository;

    @Override
    public Long save(final UserEntity userEntity) {
        return ormRepository.saveAndFlush(userEntity).getIdUser();
    }

    @Override
    public UserEntity findUser(Long id) {
        return ormRepository.findById(id).orElse(null);
    }
}

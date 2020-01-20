package com.poll.repository;

import com.poll.model.UserEntity;

public interface UserRepository {
    Long save(UserEntity userEntity);
    UserEntity findUser(Long id);
}

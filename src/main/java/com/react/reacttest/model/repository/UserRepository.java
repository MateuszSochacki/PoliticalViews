package com.react.reacttest.model.repository;

import com.react.reacttest.model.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Long> {
}

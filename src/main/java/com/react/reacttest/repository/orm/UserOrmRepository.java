package com.react.reacttest.repository.orm;

import com.react.reacttest.model.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserOrmRepository extends CrudRepository<UserEntity, Long> {
}

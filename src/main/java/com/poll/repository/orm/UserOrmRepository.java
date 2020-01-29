package com.poll.repository.orm;

import com.poll.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserOrmRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByNameAndPassword(String userName, String password);
}

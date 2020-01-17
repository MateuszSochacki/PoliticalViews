package com.poll.repository.orm;

import com.poll.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserOrmRepository extends JpaRepository<UserEntity, Long> {
}

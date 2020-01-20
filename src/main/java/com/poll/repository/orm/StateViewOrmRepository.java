package com.poll.repository.orm;

import com.poll.model.StateViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateViewOrmRepository extends JpaRepository<StateViewEntity, Long> {
}

package com.poll.repository.orm;

import com.poll.model.CoordinatesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordinatesOrmRepository extends JpaRepository<CoordinatesEntity, Long> {
}

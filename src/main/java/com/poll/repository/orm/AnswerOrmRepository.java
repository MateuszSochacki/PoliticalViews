package com.poll.repository.orm;

import com.poll.model.AnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerOrmRepository extends JpaRepository<AnswerEntity, Long> {
}

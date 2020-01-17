package com.poll.repository.orm;

import com.poll.model.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionOrmRepository extends JpaRepository<QuestionEntity, Long> {
}

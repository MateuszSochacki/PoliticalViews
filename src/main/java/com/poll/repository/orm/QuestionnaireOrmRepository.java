package com.poll.repository.orm;

import com.poll.model.QuestionnaireEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionnaireOrmRepository extends JpaRepository<QuestionnaireEntity, Long> {
}

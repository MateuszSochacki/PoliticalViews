package com.poll.repository.orm;

import com.poll.model.QuestionnaireEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionnaireOrmRepository extends JpaRepository<QuestionnaireEntity, Long> {
    List<QuestionnaireEntity> findByUser_IdUser(Long id);
}

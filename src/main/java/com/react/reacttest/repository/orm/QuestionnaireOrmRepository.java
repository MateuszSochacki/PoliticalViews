package com.react.reacttest.repository.orm;

import com.react.reacttest.model.QuestionnaireEntity;
import org.springframework.data.repository.CrudRepository;

public interface QuestionnaireOrmRepository extends CrudRepository<QuestionnaireEntity, Long> {
}

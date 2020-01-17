package com.react.reacttest.repository.orm;

import com.react.reacttest.model.QuestionEntity;
import org.springframework.data.repository.CrudRepository;

public interface QuestionOrmRepository extends CrudRepository<QuestionEntity, Long> {
}

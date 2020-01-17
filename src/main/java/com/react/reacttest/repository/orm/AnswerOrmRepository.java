package com.react.reacttest.repository.orm;

import com.react.reacttest.model.AnswerEntity;
import org.springframework.data.repository.CrudRepository;

public interface AnswerOrmRepository extends CrudRepository<AnswerEntity, Long> {
}

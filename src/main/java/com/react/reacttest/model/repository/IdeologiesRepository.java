package com.react.reacttest.model.repository;

import com.react.reacttest.model.IdeologiesEntity;
import org.springframework.data.repository.CrudRepository;

public interface IdeologiesRepository extends CrudRepository<IdeologiesEntity, Long> {
}

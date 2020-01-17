package com.react.reacttest.repository.orm;

import com.react.reacttest.model.StateViewEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "stateviews")
public interface StateViewOrmRepository extends CrudRepository<StateViewEntity, Long> {
}

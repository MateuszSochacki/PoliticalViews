package com.react.reacttest.model.repository;

import com.react.reacttest.model.StateViewEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "stateviews")
public interface StateViewRepository extends CrudRepository<StateViewEntity, Long> {
}

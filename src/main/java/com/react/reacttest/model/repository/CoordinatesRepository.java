package com.react.reacttest.model.repository;

import com.react.reacttest.model.CoordinatesEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "coordinates")
public interface CoordinatesRepository extends CrudRepository<CoordinatesEntity, Long> {
}

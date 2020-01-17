package com.react.reacttest.repository.orm;

import com.react.reacttest.model.CoordinatesEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "coordinates")
public interface CoordinatesOrmRepository extends CrudRepository<CoordinatesEntity, Long> {
}

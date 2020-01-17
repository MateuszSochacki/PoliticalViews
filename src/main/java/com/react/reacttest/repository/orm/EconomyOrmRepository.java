package com.react.reacttest.repository.orm;

import com.react.reacttest.model.EconomyEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "economy")
public interface EconomyOrmRepository extends CrudRepository<EconomyEntity, Long> {


}

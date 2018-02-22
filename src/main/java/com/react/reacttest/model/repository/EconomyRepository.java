package com.react.reacttest.model.repository;

import com.react.reacttest.model.EconomyEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "economy")
public interface EconomyRepository extends CrudRepository<EconomyEntity, Long> {


}

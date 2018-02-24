package com.react.reacttest.model.repository;

import com.react.reacttest.model.PoliticalPartyEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "parties")
public interface PoliticalPartyRepository extends CrudRepository<PoliticalPartyEntity, Long> {
}

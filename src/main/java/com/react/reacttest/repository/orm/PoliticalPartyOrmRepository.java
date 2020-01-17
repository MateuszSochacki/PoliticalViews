package com.react.reacttest.repository.orm;

import com.react.reacttest.model.PoliticalPartyEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "parties")
public interface PoliticalPartyOrmRepository extends CrudRepository<PoliticalPartyEntity, Long> {
}

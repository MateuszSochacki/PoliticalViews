package com.poll.repository.orm;

import com.poll.model.PoliticalPartyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "parties")
public interface PoliticalPartyOrmRepository extends JpaRepository<PoliticalPartyEntity, Long> {
}

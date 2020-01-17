package com.poll.repository.orm;

import com.poll.model.EconomyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "economy")
public interface EconomyOrmRepository extends JpaRepository<EconomyEntity, Long> {


}

package com.poll.repository.orm;

import com.poll.model.StateViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "stateviews")
public interface StateViewOrmRepository extends JpaRepository<StateViewEntity, Long> {
}

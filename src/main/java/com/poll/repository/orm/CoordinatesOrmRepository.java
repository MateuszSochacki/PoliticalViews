package com.poll.repository.orm;

import com.poll.model.CoordinatesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "coordinates")
public interface CoordinatesOrmRepository extends JpaRepository<CoordinatesEntity, Long> {
}

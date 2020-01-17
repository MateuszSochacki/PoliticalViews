package com.react.reacttest.repository.orm;

import com.react.reacttest.model.SocialViewEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "socialviews")
public interface SocialViewOrmRepository extends CrudRepository<SocialViewEntity, Long> {
}

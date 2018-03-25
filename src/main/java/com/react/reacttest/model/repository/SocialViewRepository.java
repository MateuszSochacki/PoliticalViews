package com.react.reacttest.model.repository;

import com.react.reacttest.model.SocialViewEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "socialviews")
public interface SocialViewRepository extends CrudRepository<SocialViewEntity, Long> {
}

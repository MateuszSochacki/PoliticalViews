package com.poll.repository.orm;

import com.poll.model.SocialViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "socialviews")
public interface SocialViewOrmRepository extends JpaRepository<SocialViewEntity, Long> {
}

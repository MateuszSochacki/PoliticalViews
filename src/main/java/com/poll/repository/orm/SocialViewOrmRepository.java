package com.poll.repository.orm;

import com.poll.model.SocialViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SocialViewOrmRepository extends JpaRepository<SocialViewEntity, Long> {
}

package com.poll.repository.orm;

import com.poll.model.PoliticalPartyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoliticalPartyOrmRepository extends JpaRepository<PoliticalPartyEntity, Long> {
}

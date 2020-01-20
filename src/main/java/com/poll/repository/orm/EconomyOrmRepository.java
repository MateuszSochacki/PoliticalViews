package com.poll.repository.orm;

import com.poll.model.EconomyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EconomyOrmRepository extends JpaRepository<EconomyEntity, Long> {


}

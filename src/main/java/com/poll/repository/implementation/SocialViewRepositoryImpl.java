package com.poll.repository.implementation;

import com.poll.model.SocialViewEntity;
import com.poll.repository.SocialViewRepository;
import com.poll.repository.orm.SocialViewOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SocialViewRepositoryImpl implements SocialViewRepository {

    @Autowired
    private SocialViewOrmRepository ormRepository;

    @Override
    public Long save(SocialViewEntity socialViewEntity) {
        return ormRepository.saveAndFlush(socialViewEntity).getIdSocialView();
    }
}

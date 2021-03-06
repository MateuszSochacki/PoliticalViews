package com.poll.mapper;

import com.poll.dto.economy.EconomyCreateRequestDto;
import com.poll.model.EconomyEntity;
import com.poll.model.UserEntity;

public final class EconomyMapper {

    public static EconomyEntity fromDto(final EconomyCreateRequestDto dto, UserEntity user) {

        return new EconomyEntity(
                dto.getRich(), dto.getCorpTax(), dto.getMinWage(), dto.getIncTax(),
                dto.getGround(), dto.getEducation(), dto.getHealthcare(), dto.getMonopolies(),
                dto.getRetirenment(), dto.getTradeUnions(), dto.getVat(), dto.getProtectTariffs(),
                dto.getProtectLicenses(), dto.getAntiDumping(), dto.getExchangeRate(), dto.getWelfarePoverty(),
                dto.getWelfareUnemployed(), dto.getWelfareMin(), dto.getWelfarePension(), user
        );
    }
}

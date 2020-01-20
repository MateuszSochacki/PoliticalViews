package com.poll.dto.economy;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class EconomyCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String rich;

    @NotNull
    @NotEmpty
    private final String corpTax;

    @NotNull
    @NotEmpty
    private final String minWage;

    @NotNull
    @NotEmpty
    private final String incTax;

    @NotNull
    @NotEmpty
    private final String ground;

    @NotNull
    @NotEmpty
    private final String education;

    @NotNull
    @NotEmpty
    private final String healthcare;

    @NotNull
    @NotEmpty
    private final String monopolies;

    @NotNull
    @NotEmpty
    private final String retirenment;

    @NotNull
    @NotEmpty
    private final String tradeUnions;

    @NotNull
    @NotEmpty
    private final String vat;

    @NotNull
    @NotEmpty
    private final Boolean protectTariffs;

    @NotNull
    @NotEmpty
    private final Boolean protectLicenses;

    @NotNull
    @NotEmpty
    private final Boolean antiDumping;

    @NotNull
    @NotEmpty
    private final Boolean exchangeRate;

    @NotNull
    @NotEmpty
    private final Boolean welfarePoverty;

    @NotNull
    @NotEmpty
    private final Boolean welfareUnemployed;

    @NotNull
    @NotEmpty
    private final Boolean welfareMin;

    @NotNull
    @NotEmpty
    private final Boolean welfarePension;

    public static EconomyCreateRequestDto of(
            final String rich,
            final String corpTax,
            final String minWage,
            final String incTax,
            final String ground,
            final String education,
            final String healthcare,
            final String monopolies,
            final String retirenment,
            final String tradeUnions,
            final String vat,
            final Boolean protectTariffs,
            final Boolean protectLicenses,
            final Boolean antiDumping,
            final Boolean exchangeRate,
            final Boolean welfarePoverty,
            final Boolean welfareUnemployed,
            final Boolean welfareMin,
            final Boolean welfarePension) {
        return new EconomyCreateRequestDto(
                rich,
                corpTax,
                minWage,
                ground,
                incTax,
                education,
                healthcare,
                monopolies,
                retirenment,
                tradeUnions,
                vat,
                protectTariffs,
                protectLicenses,
                antiDumping,
                exchangeRate,
                welfarePoverty,
                welfareUnemployed,
                welfareMin,
                welfarePension);
    }
}

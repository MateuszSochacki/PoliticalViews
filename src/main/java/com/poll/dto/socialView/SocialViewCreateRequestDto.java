package com.poll.dto.socialView;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class SocialViewCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String religion;

    @NotNull
    @NotEmpty
    private final String deathPenalty;

    @NotNull
    @NotEmpty
    private final String orientation;

    @NotNull
    @NotEmpty
    private final String abortion;

    @NotNull
    @NotEmpty
    private final String euthanasia;

    @NotNull
    @NotEmpty
    private final String race;

    @NotNull
    @NotEmpty
    private final Boolean womenEdu;

    @NotNull
    @NotEmpty
    private final Boolean womenEmploy;

    @NotNull
    @NotEmpty
    private final Boolean womenVoting;

    @NotNull
    @NotEmpty
    private final Boolean womenWage;

    @NotNull
    @NotEmpty
    private final Boolean womenMaternity;

    @NotNull
    @NotEmpty
    private final Boolean stimAlcohol;

    @NotNull
    @NotEmpty
    private final Boolean stimCannabis;

    @NotNull
    @NotEmpty
    private final Boolean stimHard;

    @NotNull
    @NotEmpty
    private final Boolean stimNicotine;

    public static SocialViewCreateRequestDto of(
            final String religion,
            final String deathPenalty,
            final String orientation,
            final String abortion,
            final String euthanasia,
            final String race,
            final Boolean womenEdu,
            final Boolean womenEmploy,
            final Boolean womenVoting,
            final Boolean womenWage,
            final Boolean womenMaternity,
            final Boolean stimAlcohol,
            final Boolean stimCannabis,
            final Boolean stimHard,
            final Boolean stimNicotine) {
        return new SocialViewCreateRequestDto(
                religion,
                deathPenalty,
                orientation,
                euthanasia,
                abortion,
                race,
                womenEdu,
                womenEmploy,
                womenVoting,
                womenWage,
                womenMaternity,
                stimAlcohol,
                stimCannabis,
                stimHard,
                stimNicotine);
    }
}

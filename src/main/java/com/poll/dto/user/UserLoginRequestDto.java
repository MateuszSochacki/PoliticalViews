package com.poll.dto.user;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class UserLoginRequestDto {

    @NotNull
    @NotEmpty
    private final String userName;

    @NotNull
    @NotEmpty
    private final String password;

    public static UserLoginRequestDto of(final String userName, final String password) {
        return new UserLoginRequestDto(userName, password);
    }
}

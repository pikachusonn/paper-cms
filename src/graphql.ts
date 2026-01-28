
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    STAFF = "STAFF"
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface Account {
    id: string;
    email: string;
    password: string;
    createdAt?: Nullable<DateTime>;
    avatar?: Nullable<string>;
    role: Role;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    account: Account;
}

export interface IQuery {
    accounts(): Account[] | Promise<Account[]>;
    account(id: string): Account | Promise<Account>;
    auth(): AuthQuery | Promise<AuthQuery>;
}

export interface IMutation {
    login(loginRequest: LoginRequest): LoginResponse | Promise<LoginResponse>;
}

export interface AuthQuery {
    accounts: Account[];
    account?: Account;
}

export type DateTime = any;
type Nullable<T> = T | null;

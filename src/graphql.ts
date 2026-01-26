
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Account {
    id: string;
    email: string;
    password: string;
    createdAt?: Nullable<DateTime>;
    avatar?: Nullable<string>;
}

export interface IQuery {
    accounts(): Account[] | Promise<Account[]>;
    account(id: string): Account | Promise<Account>;
    auth(): AuthQuery | Promise<AuthQuery>;
}

export interface AuthQuery {
    accounts: Account[];
    account?: Account;
}

export type DateTime = any;
type Nullable<T> = T | null;

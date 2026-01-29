
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

export enum DocumentStatus {
    PENDING = "PENDING",
    PROCESSED = "PROCESSED",
    FINISHED = "FINISHED"
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface CourtFilter {
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    documentStatus?: Nullable<DocumentStatus>;
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
    _empty(): Nullable<string> | Promise<Nullable<string>>;
    accounts(): Account[] | Promise<Account[]>;
    account(id: string): Account | Promise<Account>;
    auth(): AuthQuery | Promise<AuthQuery>;
    courts(courtFilter?: Nullable<CourtFilter>): Court[] | Promise<Court[]>;
    court(id: string): Court | Promise<Court>;
    courtStaffs(): CourtStaff[] | Promise<CourtStaff[]>;
    courtStaff(id: string): CourtStaff | Promise<CourtStaff>;
    documents(): Document[] | Promise<Document[]>;
    documentsByCourtId(courtId: string): Document[] | Promise<Document[]>;
    document(id: string): Document | Promise<Document>;
    documentLists(): DocumentList[] | Promise<DocumentList[]>;
}

export interface IMutation {
    login(loginRequest: LoginRequest): LoginResponse | Promise<LoginResponse>;
}

export interface AuthQuery {
    accounts: Account[];
    account?: Account;
}

export interface Court {
    id: string;
    name: string;
    address: string;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    courtNumber: number;
    isDeleted: boolean;
    staff: CourtStaff[];
    documentList: DocumentList[];
    document: Document[];
}

export interface CourtStaff {
    id: string;
    court: Court;
    name: string;
    phone?: Nullable<string>;
    avatar?: Nullable<string>;
    socialId?: Nullable<string>;
    email?: Nullable<string>;
    operatingArea: string;
    isDeleted: boolean;
    document: Document[];
}

export interface Document {
    id: string;
    receivedDate: string;
    documentCode: string;
    content: string;
    processProof: string;
    processAddress: string;
    processDeadline: string;
    processStatus: DocumentStatus;
    pricePerDocument: number;
    travelDistance?: Nullable<number>;
    gasFee?: Nullable<number>;
    innerTotalPrice?: Nullable<number>;
    outerTotalPrice?: Nullable<number>;
    courtStaff?: Nullable<CourtStaff>;
    note?: Nullable<string>;
    court: Court;
    isLate: boolean;
}

export interface DocumentList {
    id: string;
    sentByCourt: Court;
    sentAt: string;
    fileUrl: string;
}

export type DateTime = any;
type Nullable<T> = T | null;

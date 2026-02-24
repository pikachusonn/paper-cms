
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
    WAITING = "WAITING",
    COMPLETED = "COMPLETED",
    CONFIRMED = "CONFIRMED"
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface CreateAccountInput {
    email: string;
    role: Role;
    name: string;
    phone?: Nullable<string>;
    courtId: string;
}

export interface ChangePasswordInput {
    userId: string;
    oldPassword: string;
    newPassword: string;
}

export interface ResetPasswordInput {
    email: string;
    otp: string;
    newPassword: string;
}

export interface AccountFilterInput {
    page?: Nullable<number>;
    limit?: Nullable<number>;
    search?: Nullable<string>;
    role?: Nullable<Role>;
    courtId?: Nullable<string>;
}

export interface UpdateAccountInput {
    id: string;
    name?: Nullable<string>;
    phone?: Nullable<string>;
    role?: Nullable<Role>;
    courtId?: Nullable<string>;
    avatar?: Nullable<string>;
}

export interface GetDocsFilterInput {
    courtId: string;
    year: number;
    status?: Nullable<DocumentStatus>;
    page?: Nullable<number>;
    limit?: Nullable<number>;
    search?: Nullable<string>;
}

export interface CreateDocumentInput {
    courtId: string;
    docCode: string;
    docType: string;
    recipient: string;
    address?: Nullable<string>;
    receivedDate?: Nullable<DateTime>;
    dueDate: DateTime;
    deliveryMethod?: Nullable<string>;
    responsiblePerson?: Nullable<string>;
    content?: Nullable<string>;
}

export interface UpdateDocumentInput {
    id: string;
    evidenceUrl?: Nullable<string>;
    distance?: Nullable<number>;
    cost?: Nullable<number>;
    fuelCost?: Nullable<number>;
    otherCost?: Nullable<number>;
    totalCost?: Nullable<number>;
    status?: Nullable<DocumentStatus>;
}

export interface Account {
    id: string;
    email: string;
    createdAt?: Nullable<DateTime>;
    avatar?: Nullable<string>;
    role: Role;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    account: Account;
}

export interface AccountPagination {
    data: Account[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface IQuery {
    _empty(): Nullable<string> | Promise<Nullable<string>>;
    accounts(): Account[] | Promise<Account[]>;
    account(id: string): Account | Promise<Account>;
    getAllAccounts(filter?: Nullable<AccountFilterInput>): AccountPagination | Promise<AccountPagination>;
    auth(): AuthQuery | Promise<AuthQuery>;
    dashboardStats(year: number, searchCourt?: Nullable<string>): DashboardSummary | Promise<DashboardSummary>;
    courtStaffs(): CourtStaff[] | Promise<CourtStaff[]>;
    courtStaff(id: string): CourtStaff | Promise<CourtStaff>;
    getDocumentsByCourt(filter: GetDocsFilterInput): DocumentPagination | Promise<DocumentPagination>;
    document(id: string): Document | Promise<Document>;
}

export interface IMutation {
    login(loginRequest: LoginRequest): LoginResponse | Promise<LoginResponse>;
    createAccount(input: CreateAccountInput): Account | Promise<Account>;
    logout(userId: string): boolean | Promise<boolean>;
    changePassword(input: ChangePasswordInput): boolean | Promise<boolean>;
    forgotPassword(email: string): boolean | Promise<boolean>;
    resetPassword(input: ResetPasswordInput): boolean | Promise<boolean>;
    updateAccount(input: UpdateAccountInput): Account | Promise<Account>;
    deleteAccount(id: string): boolean | Promise<boolean>;
    createDocument(input: CreateDocumentInput): Document | Promise<Document>;
    updateDocument(input: UpdateDocumentInput): Document | Promise<Document>;
    deleteDocument(id: string): boolean | Promise<boolean>;
}

export interface AuthQuery {
    accounts: Account[];
    account?: Account;
}

export interface Court {
    id: string;
    name: string;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    courtNumber?: Nullable<number>;
}

export interface CourtStaff {
    id: string;
    name: string;
    phone?: Nullable<string>;
    avatar?: Nullable<string>;
    court: Court;
    socialId?: Nullable<string>;
    email?: Nullable<string>;
    operatingArea: string;
    isDeleted: boolean;
    document: Document[];
}

export interface CourtStats {
    id: string;
    name: string;
    address?: Nullable<string>;
    waitingCount: number;
    overdueCount: number;
}

export interface DashboardSummary {
    totalWaiting: number;
    totalOverdue: number;
    totalStaff: number;
    totalSecretary: number;
    courts: CourtStats[];
}

export interface Document {
    id: string;
    docCode: string;
    docType?: Nullable<string>;
    recipient?: Nullable<string>;
    address?: Nullable<string>;
    receivedDate?: Nullable<DateTime>;
    dueDate?: Nullable<DateTime>;
    status: DocumentStatus;
    evidenceUrl?: Nullable<string>;
    deliveryMethod?: Nullable<string>;
    responsiblePerson?: Nullable<string>;
    content?: Nullable<string>;
    distance?: Nullable<number>;
    cost?: Nullable<number>;
    fuelCost?: Nullable<number>;
    otherCost?: Nullable<number>;
    totalCost?: Nullable<number>;
    isOverdue?: Nullable<boolean>;
    isUrgent?: Nullable<boolean>;
    court: Court;
    courtStaff?: Nullable<CourtStaff>;
}

export interface CourtDocStats {
    waiting: number;
    overdue: number;
}

export interface DocumentPagination {
    data: Document[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    statHeader: CourtDocStats;
}

export type DateTime = any;
type Nullable<T> = T | null;

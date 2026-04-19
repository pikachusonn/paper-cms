
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
    fullName: string;
    phone?: Nullable<string>;
    role?: Nullable<Role>;
}

export interface ChangePasswordInput {
    userId: string;
    oldPassword: string;
    newPassword: string;
}

export interface UpdateProfileInput {
    fullName?: Nullable<string>;
    phone?: Nullable<string>;
    avatar?: Nullable<string>;
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
}

export interface UpdateAccountInput {
    id: string;
    name?: Nullable<string>;
    phone?: Nullable<string>;
    avatar?: Nullable<string>;
}

export interface CreateCourtInput {
    name: string;
    address: string;
    courtNumber?: Nullable<number>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
}

export interface UpdateOfficialInput {
    id: string;
    name?: Nullable<string>;
    title?: Nullable<string>;
    phone?: Nullable<string>;
}

export interface CreateOfficialInput {
    courtId: string;
    name: string;
    title?: Nullable<string>;
    phone?: Nullable<string>;
}

export interface GetDocsFilterInput {
    courtId: string;
    officialId?: Nullable<string>;
    fromDate?: Nullable<string>;
    toDate?: Nullable<string>;
    status?: Nullable<DocumentStatus>;
    page?: Nullable<number>;
    limit?: Nullable<number>;
    search?: Nullable<string>;
}

export interface CreateDocumentInput {
    _rowIndex?: Nullable<number>;
    courtId: string;
    docCode: string;
    docType: string;
    recipient: string;
    address?: Nullable<string>;
    receivedDate?: Nullable<DateTime>;
    dueDate: DateTime;
    responsibleOfficialId?: Nullable<string>;
    responsibleOfficialName?: Nullable<string>;
    deliveryMethod?: Nullable<string>;
    content?: Nullable<string>;
    distance?: Nullable<number>;
    deliveryFee?: Nullable<number>;
    accommodationFee?: Nullable<number>;
    fuelFee?: Nullable<number>;
    otherFee?: Nullable<number>;
    totalFeeInternal?: Nullable<number>;
    totalFeeExternal?: Nullable<number>;
}

export interface UpdateDocumentInput {
    id: string;
    docCode?: Nullable<string>;
    docType?: Nullable<string>;
    recipient?: Nullable<string>;
    address?: Nullable<string>;
    receivedDate?: Nullable<DateTime>;
    dueDate?: Nullable<DateTime>;
    responsibleOfficialId?: Nullable<string>;
    evidenceUrl?: Nullable<string>;
    deliveryMethod?: Nullable<string>;
    content?: Nullable<string>;
    status?: Nullable<DocumentStatus>;
    distance?: Nullable<number>;
    deliveryFee?: Nullable<number>;
    accommodationFee?: Nullable<number>;
    fuelFee?: Nullable<number>;
    otherFee?: Nullable<number>;
    totalFeeInternal?: Nullable<number>;
    totalFeeExternal?: Nullable<number>;
}

export interface GetNotificationsFilterInput {
    page?: Nullable<number>;
    limit?: Nullable<number>;
    isRead?: Nullable<boolean>;
}

export interface Account {
    id: string;
    email: string;
    fullName?: Nullable<string>;
    phone?: Nullable<string>;
    avatar?: Nullable<string>;
    role: Role;
    isDeleted: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
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
    getStaffAccounts(search?: Nullable<string>): Account[] | Promise<Account[]>;
    getAdminAccounts(search?: Nullable<string>): Account[] | Promise<Account[]>;
    auth(): AuthQuery | Promise<AuthQuery>;
    dashboardStats(year: number, searchCourt?: Nullable<string>): DashboardSummary | Promise<DashboardSummary>;
    courts(): Court[] | Promise<Court[]>;
    court(id: string): Court | Promise<Court>;
    courtStaffs(): CourtStaff[] | Promise<CourtStaff[]>;
    courtStaff(id: string): Nullable<CourtStaff> | Promise<Nullable<CourtStaff>>;
    getDocumentsByCourt(filter: GetDocsFilterInput): DocumentPagination | Promise<DocumentPagination>;
    document(id: string): Document | Promise<Document>;
    getOfficialsByCourt(courtId: string): CourtOfficial[] | Promise<CourtOfficial[]>;
    publicGetOfficials(token: string): OfficialDropdown[] | Promise<OfficialDropdown[]>;
    getMyNotifications(filter: GetNotificationsFilterInput): NotificationPagination | Promise<NotificationPagination>;
}

export interface IMutation {
    _empty(): Nullable<string> | Promise<Nullable<string>>;
    login(loginRequest: LoginRequest): LoginResponse | Promise<LoginResponse>;
    createAccount(input: CreateAccountInput): Account | Promise<Account>;
    logout(userId: string): boolean | Promise<boolean>;
    changePassword(input: ChangePasswordInput): boolean | Promise<boolean>;
    forgotPassword(email: string): boolean | Promise<boolean>;
    resetPassword(input: ResetPasswordInput): boolean | Promise<boolean>;
    updateAccount(input: UpdateAccountInput): Account | Promise<Account>;
    deleteAccount(id: string): boolean | Promise<boolean>;
    updateProfile(input: UpdateProfileInput): Account | Promise<Account>;
    createCourt(input: CreateCourtInput): Court | Promise<Court>;
    createCourtOfficial(input: CreateOfficialInput): CourtOfficial | Promise<CourtOfficial>;
    updateCourtOfficial(input: UpdateOfficialInput): CourtOfficial | Promise<CourtOfficial>;
    deleteCourtOfficial(id: string): boolean | Promise<boolean>;
    createDocument(input: CreateDocumentInput): Document | Promise<Document>;
    updateDocument(input: UpdateDocumentInput): Document | Promise<Document>;
    deleteDocument(id: string): boolean | Promise<boolean>;
    confirmDocument(id: string): Document | Promise<Document>;
    createMultipleDocuments(inputs: CreateDocumentInput[]): number | Promise<number>;
    createBulkDocuments(inputs: CreateDocumentInput[]): BulkImportResult | Promise<BulkImportResult>;
    generatePublicImportLink(courtId: string): string | Promise<string>;
    publicCreateBulkDocuments(token: string, inputs: CreateDocumentInput[]): BulkImportResult | Promise<BulkImportResult>;
    markNotificationAsRead(id: string): Notification | Promise<Notification>;
    markAllNotificationsAsRead(): boolean | Promise<boolean>;
}

export interface AuthQuery {
    accounts: Account[];
    account?: Account;
}

export interface CourtOfficial {
    id: string;
    name: string;
    title?: Nullable<string>;
    phone?: Nullable<string>;
    isDeleted: boolean;
}

export interface Court {
    id: string;
    name: string;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    courtNumber?: Nullable<number>;
    officials: CourtOfficial[];
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

export interface CourtStaff {
    id: string;
    court: Court;
    name: string;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    isDeleted: boolean;
    responsibleDocs?: Nullable<Nullable<Document>[]>;
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
    content?: Nullable<string>;
    responsibleOfficial?: Nullable<CourtOfficial>;
    creator?: Nullable<Account>;
    distance?: Nullable<number>;
    deliveryFee?: Nullable<number>;
    accommodationFee?: Nullable<number>;
    fuelFee?: Nullable<number>;
    otherFee?: Nullable<number>;
    totalFeeInternal?: Nullable<number>;
    totalFeeExternal?: Nullable<number>;
    isOverdue?: Nullable<boolean>;
    isUrgent?: Nullable<boolean>;
    court: Court;
}

export interface BulkImportError {
    rowIndex: number;
    message: string;
}

export interface BulkImportResult {
    successCount: number;
    errors: BulkImportError[];
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

export interface OfficialDropdown {
    id: string;
    name: string;
    title?: Nullable<string>;
}

export interface Notification {
    id: string;
    title: string;
    content: string;
    isRead: boolean;
    type?: Nullable<string>;
    createdAt: DateTime;
}

export interface NotificationPagination {
    data: Notification[];
    total: number;
    unreadCount: number;
    page: number;
    limit: number;
    totalPages: number;
}

export type DateTime = any;
type Nullable<T> = T | null;

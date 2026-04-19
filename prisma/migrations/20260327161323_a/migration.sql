-- DropForeignKey
ALTER TABLE `courtofficial` DROP FOREIGN KEY `CourtOfficial_courtId_fkey`;

-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_courtId_fkey`;

-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_documentListId_fkey`;

-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_responsibleOfficialId_fkey`;

-- DropForeignKey
ALTER TABLE `documentlist` DROP FOREIGN KEY `DocumentList_sendByCourtId_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_accountId_fkey`;

-- AddForeignKey
ALTER TABLE `courtofficial` ADD CONSTRAINT `courtofficial_courtId_fkey` FOREIGN KEY (`courtId`) REFERENCES `court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentlist` ADD CONSTRAINT `documentlist_sendByCourtId_fkey` FOREIGN KEY (`sendByCourtId`) REFERENCES `court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_responsibleOfficialId_fkey` FOREIGN KEY (`responsibleOfficialId`) REFERENCES `courtofficial`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_courtId_fkey` FOREIGN KEY (`courtId`) REFERENCES `court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_documentListId_fkey` FOREIGN KEY (`documentListId`) REFERENCES `documentlist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `account`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `account` RENAME INDEX `Account_email_key` TO `account_email_key`;

-- RenameIndex
ALTER TABLE `document` RENAME INDEX `Document_courtId_docCode_key` TO `document_courtId_docCode_key`;

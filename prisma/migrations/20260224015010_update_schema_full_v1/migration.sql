/*
  Warnings:

  - You are about to alter the column `receivedDate` on the `document` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `processDeadline` on the `document` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `pricePerDocument` on the `document` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - A unique constraint covering the columns `[courtStaffId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Made the column `travelDistance` on table `document` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gasFee` on table `document` required. This step will fail if there are existing NULL values in that column.
  - Made the column `innerTotalPrice` on table `document` required. This step will fail if there are existing NULL values in that column.
  - Made the column `outerTotalPrice` on table `document` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `account` ADD COLUMN `courtStaffId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `courtstaff` MODIFY `operatingArea` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `document` ADD COLUMN `hazardousRoadFee` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `otherFee` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `receivedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `content` TEXT NOT NULL,
    MODIFY `processAddress` VARCHAR(191) NULL,
    MODIFY `processDeadline` DATETIME(3) NULL,
    MODIFY `processStatus` ENUM('PENDING', 'PROCESSED', 'FINISHED', 'FAILED') NOT NULL DEFAULT 'PENDING',
    MODIFY `pricePerDocument` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `travelDistance` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `gasFee` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `innerTotalPrice` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `outerTotalPrice` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `note` TEXT NULL;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `accountId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Account_courtStaffId_key` ON `Account`(`courtStaffId`);

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_courtStaffId_fkey` FOREIGN KEY (`courtStaffId`) REFERENCES `CourtStaff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

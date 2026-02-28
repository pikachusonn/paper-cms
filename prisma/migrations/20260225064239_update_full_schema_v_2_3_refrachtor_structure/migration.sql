/*
  Warnings:

  - You are about to drop the column `courtStaffId` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `courtStaffId` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `responsiblePerson` on the `document` table. All the data in the column will be lost.
  - You are about to drop the `courtstaff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_courtStaffId_fkey`;

-- DropForeignKey
ALTER TABLE `courtstaff` DROP FOREIGN KEY `CourtStaff_courtId_fkey`;

-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_courtStaffId_fkey`;

-- DropIndex
DROP INDEX `Account_courtStaffId_key` ON `account`;

-- DropIndex
DROP INDEX `Document_courtStaffId_fkey` ON `document`;

-- AlterTable
ALTER TABLE `account` DROP COLUMN `courtStaffId`,
    ADD COLUMN `fullName` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `document` DROP COLUMN `courtStaffId`,
    DROP COLUMN `responsiblePerson`,
    ADD COLUMN `creatorId` VARCHAR(191) NULL,
    ADD COLUMN `responsibleOfficialId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `courtstaff`;

-- CreateTable
CREATE TABLE `CourtOfficial` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `courtId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CourtOfficial` ADD CONSTRAINT `CourtOfficial_courtId_fkey` FOREIGN KEY (`courtId`) REFERENCES `Court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_responsibleOfficialId_fkey` FOREIGN KEY (`responsibleOfficialId`) REFERENCES `CourtOfficial`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `Account`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `documentCode` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `gasFee` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `hazardousRoadFee` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `innerTotalPrice` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `otherFee` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `outerTotalPrice` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerDocument` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `processAddress` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `processDeadline` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `processProof` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `processStatus` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `travelDistance` on the `document` table. All the data in the column will be lost.
  - Added the required column `docCode` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `docType` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `court` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `document` DROP COLUMN `documentCode`,
    DROP COLUMN `gasFee`,
    DROP COLUMN `hazardousRoadFee`,
    DROP COLUMN `innerTotalPrice`,
    DROP COLUMN `note`,
    DROP COLUMN `otherFee`,
    DROP COLUMN `outerTotalPrice`,
    DROP COLUMN `pricePerDocument`,
    DROP COLUMN `processAddress`,
    DROP COLUMN `processDeadline`,
    DROP COLUMN `processProof`,
    DROP COLUMN `processStatus`,
    DROP COLUMN `travelDistance`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `cost` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `deliveryMethod` VARCHAR(191) NULL,
    ADD COLUMN `distance` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `docCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `docType` VARCHAR(191) NOT NULL,
    ADD COLUMN `dueDate` DATETIME(3) NOT NULL,
    ADD COLUMN `evidenceUrl` VARCHAR(191) NULL,
    ADD COLUMN `fuelCost` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `otherCost` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `recipient` VARCHAR(191) NOT NULL,
    ADD COLUMN `responsiblePerson` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('WAITING', 'COMPLETED', 'CONFIRMED') NOT NULL DEFAULT 'WAITING',
    ADD COLUMN `totalCost` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `documentlist` ADD COLUMN `code` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `notification` ADD COLUMN `type` VARCHAR(191) NOT NULL;

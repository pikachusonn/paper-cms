/*
  Warnings:

  - You are about to drop the column `cost` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `fuelCost` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `otherCost` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `totalCost` on the `document` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `document` DROP COLUMN `cost`,
    DROP COLUMN `fuelCost`,
    DROP COLUMN `otherCost`,
    DROP COLUMN `totalCost`,
    ADD COLUMN `accommodationFee` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `deliveryFee` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `fuelFee` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `otherFee` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `totalFeeExternal` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `totalFeeInternal` DOUBLE NOT NULL DEFAULT 0;

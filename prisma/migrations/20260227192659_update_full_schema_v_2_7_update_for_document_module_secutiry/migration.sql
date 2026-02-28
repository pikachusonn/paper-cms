/*
  Warnings:

  - A unique constraint covering the columns `[courtId,docCode]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Document_courtId_docCode_key` ON `Document`(`courtId`, `docCode`);

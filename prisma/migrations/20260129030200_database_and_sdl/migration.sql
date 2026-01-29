-- CreateTable
CREATE TABLE `Court` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `courtNumber` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourtStaff` (
    `id` VARCHAR(191) NOT NULL,
    `courtId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `socialId` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `operatingArea` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DocumentList` (
    `id` VARCHAR(191) NOT NULL,
    `sendByCourtId` VARCHAR(191) NOT NULL,
    `sentAt` VARCHAR(191) NOT NULL,
    `fileUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `id` VARCHAR(191) NOT NULL,
    `receivedDate` VARCHAR(191) NOT NULL,
    `documentCode` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `processProof` VARCHAR(191) NOT NULL,
    `processAddress` VARCHAR(191) NOT NULL,
    `processDeadline` VARCHAR(191) NOT NULL,
    `processStatus` ENUM('PENDING', 'PROCESSED', 'FINISHED') NOT NULL DEFAULT 'PENDING',
    `pricePerDocument` INTEGER NOT NULL,
    `travelDistance` INTEGER NULL,
    `gasFee` INTEGER NULL,
    `innerTotalPrice` INTEGER NULL,
    `outerTotalPrice` INTEGER NULL,
    `courtStaffId` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `courtId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CourtStaff` ADD CONSTRAINT `CourtStaff_courtId_fkey` FOREIGN KEY (`courtId`) REFERENCES `Court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DocumentList` ADD CONSTRAINT `DocumentList_sendByCourtId_fkey` FOREIGN KEY (`sendByCourtId`) REFERENCES `Court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_courtStaffId_fkey` FOREIGN KEY (`courtStaffId`) REFERENCES `CourtStaff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_courtId_fkey` FOREIGN KEY (`courtId`) REFERENCES `Court`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

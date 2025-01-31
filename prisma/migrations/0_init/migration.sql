-- CreateTable
CREATE TABLE `WatchedCallsign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cid` INTEGER NOT NULL,
    `callsign` VARCHAR(15) NOT NULL,
    `topdown` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiscordEmbed` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cid` INTEGER NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `event` VARCHAR(4) NOT NULL,
    `name` VARCHAR(80) NOT NULL,
    `url` VARCHAR(256) NOT NULL,
    `author` VARCHAR(80) NOT NULL,
    `title` VARCHAR(256) NOT NULL,
    `text` VARCHAR(4096) NOT NULL,
    `color` VARCHAR(7) NOT NULL,
    `avatar` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


/*
  Warnings:

  - You are about to alter the column `title` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the column `GameId` on the `Game_list` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Game_list` table. All the data in the column will be lost.
  - You are about to drop the column `GameId` on the `Genre_list` table. All the data in the column will be lost.
  - You are about to drop the column `GenreId` on the `Genre_list` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Profile` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `surname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `cpf` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(11)`.
  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `gameId` to the `Game_list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Game_list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreId` to the `Genre_list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game_list" DROP CONSTRAINT "Game_list_GameId_fkey";

-- DropForeignKey
ALTER TABLE "Game_list" DROP CONSTRAINT "Game_list_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Genre_list" DROP CONSTRAINT "Genre_list_GameId_fkey";

-- DropForeignKey
ALTER TABLE "Genre_list" DROP CONSTRAINT "Genre_list_GenreId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_profileId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "title" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Game_list" DROP COLUMN "GameId",
DROP COLUMN "UserId",
ADD COLUMN     "gameId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Genre_list" DROP COLUMN "GameId",
DROP COLUMN "GenreId",
ADD COLUMN     "gameId" INTEGER,
ADD COLUMN     "genreId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "Title",
DROP COLUMN "profileId",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "surname" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "cpf" SET DATA TYPE CHAR(11),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE INDEX "Game_title_idx" ON "Game"("title");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game_list" ADD CONSTRAINT "Game_list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game_list" ADD CONSTRAINT "Game_list_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre_list" ADD CONSTRAINT "Genre_list_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre_list" ADD CONSTRAINT "Genre_list_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

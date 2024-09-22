-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "Title" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gamecover" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "trailerurl" TEXT NOT NULL,
    "gameplayurl" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game_list" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "GameId" INTEGER NOT NULL,

    CONSTRAINT "Game_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre_list" (
    "id" SERIAL NOT NULL,
    "GenreId" INTEGER NOT NULL,
    "GameId" INTEGER NOT NULL,

    CONSTRAINT "Genre_list_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Game_title_key" ON "Game"("title");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game_list" ADD CONSTRAINT "Game_list_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game_list" ADD CONSTRAINT "Game_list_GameId_fkey" FOREIGN KEY ("GameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre_list" ADD CONSTRAINT "Genre_list_GenreId_fkey" FOREIGN KEY ("GenreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre_list" ADD CONSTRAINT "Genre_list_GameId_fkey" FOREIGN KEY ("GameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

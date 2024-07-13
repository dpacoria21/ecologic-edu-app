-- CreateEnum
CREATE TYPE "Type" AS ENUM ('human', 'natural');

-- CreateTable
CREATE TABLE "Suggestions" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stories" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date_story" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClimateChanges" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'human',
    "causes" TEXT[],
    "consequences" TEXT[],

    CONSTRAINT "ClimateChanges_pkey" PRIMARY KEY ("id")
);

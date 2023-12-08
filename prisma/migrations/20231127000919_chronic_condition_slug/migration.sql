/*
  Warnings:

  - Added the required column `slug` to the `ChronicCondition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChronicCondition" ADD COLUMN     "slug" TEXT NOT NULL;

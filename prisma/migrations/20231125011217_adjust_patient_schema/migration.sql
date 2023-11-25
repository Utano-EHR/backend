/*
  Warnings:

  - You are about to drop the column `nationality` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `religion` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "nationality",
DROP COLUMN "religion";

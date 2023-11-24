/*
  Warnings:

  - Added the required column `nationality` to the `Receptionist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Receptionist" ADD COLUMN     "nationality" TEXT NOT NULL;

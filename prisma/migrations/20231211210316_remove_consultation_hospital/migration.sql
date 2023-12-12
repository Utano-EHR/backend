/*
  Warnings:

  - You are about to drop the column `hospital_id` on the `Consultation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_hospital_id_fkey";

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "hospital_id";

/*
  Warnings:

  - A unique constraint covering the columns `[appointment_id]` on the table `Consultation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Consultation" ADD COLUMN     "appointment_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_appointment_id_key" ON "Consultation"("appointment_id");

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `discharge_id` on the `Admission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[admission_id]` on the table `Discharge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admission_id` to the `Discharge` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admission" DROP CONSTRAINT "Admission_discharge_id_fkey";

-- DropIndex
DROP INDEX "Admission_discharge_id_key";

-- AlterTable
ALTER TABLE "Admission" DROP COLUMN "discharge_id";

-- AlterTable
ALTER TABLE "Discharge" ADD COLUMN     "admission_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Discharge_admission_id_key" ON "Discharge"("admission_id");

-- AddForeignKey
ALTER TABLE "Discharge" ADD CONSTRAINT "Discharge_admission_id_fkey" FOREIGN KEY ("admission_id") REFERENCES "Admission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

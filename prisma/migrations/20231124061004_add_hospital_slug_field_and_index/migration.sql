/*
  Warnings:

  - A unique constraint covering the columns `[observation_id]` on the table `Height` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Hospital` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Hospital` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[observation_id]` on the table `Weight` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `observation_id` to the `Height` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Hospital` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observation_id` to the `Weight` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "hospital_name_index";

-- AlterTable
ALTER TABLE "Height" ADD COLUMN     "observation_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Hospital" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Weight" ADD COLUMN     "observation_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Observation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Observation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "observation_name_index" ON "Observation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Height_observation_id_key" ON "Height"("observation_id");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_name_key" ON "Hospital"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_slug_key" ON "Hospital"("slug");

-- CreateIndex
CREATE INDEX "hospital_slug_index" ON "Hospital"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Weight_observation_id_key" ON "Weight"("observation_id");

-- AddForeignKey
ALTER TABLE "Height" ADD CONSTRAINT "Height_observation_id_fkey" FOREIGN KEY ("observation_id") REFERENCES "Observation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_observation_id_fkey" FOREIGN KEY ("observation_id") REFERENCES "Observation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

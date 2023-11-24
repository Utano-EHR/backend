/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Speciality` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Speciality` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Speciality" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Speciality_slug_key" ON "Speciality"("slug");

/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Insurance` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Insurance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Insurance" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Insurance_slug_key" ON "Insurance"("slug");

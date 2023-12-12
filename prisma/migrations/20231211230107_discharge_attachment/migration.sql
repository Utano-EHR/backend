/*
  Warnings:

  - You are about to drop the column `discharge_id` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Attachment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[form_id]` on the table `Discharge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `original` to the `Attachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Attachment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_discharge_id_fkey";

-- DropIndex
DROP INDEX "Attachment_discharge_id_key";

-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "discharge_id",
DROP COLUMN "url",
ADD COLUMN     "original" TEXT NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Discharge" ADD COLUMN     "form_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Discharge_form_id_key" ON "Discharge"("form_id");

-- AddForeignKey
ALTER TABLE "Discharge" ADD CONSTRAINT "Discharge_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

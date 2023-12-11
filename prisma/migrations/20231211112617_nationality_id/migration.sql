/*
  Warnings:

  - You are about to drop the column `nation_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nationality_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_nation_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "nation_id",
ADD COLUMN     "nationality_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Country";

-- CreateTable
CREATE TABLE "Nationality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nationality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nationality_name_key" ON "Nationality"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Nationality_slug_key" ON "Nationality"("slug");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_nationality_id_fkey" FOREIGN KEY ("nationality_id") REFERENCES "Nationality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

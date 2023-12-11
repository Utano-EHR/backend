/*
  Warnings:

  - You are about to drop the column `national_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `nation_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `national_identity` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "national_id",
DROP COLUMN "nationality",
DROP COLUMN "role",
ADD COLUMN     "nation_id" INTEGER NOT NULL,
ADD COLUMN     "national_identity" TEXT NOT NULL,
ADD COLUMN     "role_id" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "USER_ROLE";

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_slug_key" ON "Role"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_slug_key" ON "Country"("slug");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_nation_id_fkey" FOREIGN KEY ("nation_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[national_identity]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_national_identity_key" ON "User"("national_identity");

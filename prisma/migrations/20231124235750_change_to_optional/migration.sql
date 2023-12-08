-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_hospital_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_speciality_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "hospital_id" DROP NOT NULL,
ALTER COLUMN "speciality_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_speciality_id_fkey" FOREIGN KEY ("speciality_id") REFERENCES "Speciality"("id") ON DELETE SET NULL ON UPDATE CASCADE;

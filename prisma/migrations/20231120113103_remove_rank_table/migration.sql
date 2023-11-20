/*
  Warnings:

  - You are about to drop the `Rank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DoctorToRank` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DoctorToRank" DROP CONSTRAINT "_DoctorToRank_A_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToRank" DROP CONSTRAINT "_DoctorToRank_B_fkey";

-- AlterTable
ALTER TABLE "Height" ALTER COLUMN "unit" SET DEFAULT 'cm';

-- DropTable
DROP TABLE "Rank";

-- DropTable
DROP TABLE "_DoctorToRank";

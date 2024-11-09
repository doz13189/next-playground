/*
  Warnings:

  - You are about to drop the column `email` on the `Questionnaire` table. All the data in the column will be lost.
  - Added the required column `contents` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "email",
ADD COLUMN     "contents" TEXT NOT NULL;

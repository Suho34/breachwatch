/*
  Warnings:

  - You are about to drop the `breach_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `credential` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."breach_log" DROP CONSTRAINT "breach_log_credentialId_fkey";

-- DropForeignKey
ALTER TABLE "public"."breach_log" DROP CONSTRAINT "breach_log_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."credential" DROP CONSTRAINT "credential_userId_fkey";

-- DropTable
DROP TABLE "public"."breach_log";

-- DropTable
DROP TABLE "public"."credential";

-- DropEnum
DROP TYPE "public"."BreachStatus";

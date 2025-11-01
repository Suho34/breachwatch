-- CreateEnum
CREATE TYPE "BreachStatus" AS ENUM ('SAFE', 'BREACHED', 'UNKNOWN');

-- CreateTable
CREATE TABLE "credential" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "credential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "breach_log" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "credentialId" TEXT NOT NULL,
    "status" "BreachStatus" NOT NULL,
    "dataSource" TEXT,
    "breachCount" INTEGER NOT NULL DEFAULT 0,
    "breachHashPrefix" TEXT,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alertSent" BOOLEAN NOT NULL DEFAULT false,
    "ipAddress" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "breach_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "credential_userId_idx" ON "credential"("userId");

-- CreateIndex
CREATE INDEX "breach_log_userId_idx" ON "breach_log"("userId");

-- CreateIndex
CREATE INDEX "breach_log_credentialId_idx" ON "breach_log"("credentialId");

-- CreateIndex
CREATE INDEX "breach_log_checkedAt_idx" ON "breach_log"("checkedAt");

-- CreateIndex
CREATE INDEX "breach_log_status_idx" ON "breach_log"("status");

-- CreateIndex
CREATE INDEX "breach_log_userId_checkedAt_idx" ON "breach_log"("userId", "checkedAt");

-- AddForeignKey
ALTER TABLE "credential" ADD CONSTRAINT "credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "breach_log" ADD CONSTRAINT "breach_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "breach_log" ADD CONSTRAINT "breach_log_credentialId_fkey" FOREIGN KEY ("credentialId") REFERENCES "credential"("id") ON DELETE CASCADE ON UPDATE CASCADE;

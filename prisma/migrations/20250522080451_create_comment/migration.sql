-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "menfessId" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'SipalingPenyamar',
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comment_menfessId_idx" ON "Comment"("menfessId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_menfessId_fkey" FOREIGN KEY ("menfessId") REFERENCES "Menfess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

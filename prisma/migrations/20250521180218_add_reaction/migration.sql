-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL,
    "menfessId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reaction_menfessId_type_key" ON "Reaction"("menfessId", "type");

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_menfessId_fkey" FOREIGN KEY ("menfessId") REFERENCES "Menfess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

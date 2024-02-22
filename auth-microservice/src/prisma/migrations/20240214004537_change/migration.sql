-- DropForeignKey
ALTER TABLE "Role_User" DROP CONSTRAINT "Role_User_role_id_fkey";

-- DropForeignKey
ALTER TABLE "Role_User" DROP CONSTRAINT "Role_User_user_id_fkey";

-- CreateTable
CREATE TABLE "_RoleToUserInfo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUserInfo_AB_unique" ON "_RoleToUserInfo"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUserInfo_B_index" ON "_RoleToUserInfo"("B");

-- AddForeignKey
ALTER TABLE "_RoleToUserInfo" ADD CONSTRAINT "_RoleToUserInfo_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUserInfo" ADD CONSTRAINT "_RoleToUserInfo_B_fkey" FOREIGN KEY ("B") REFERENCES "UserInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

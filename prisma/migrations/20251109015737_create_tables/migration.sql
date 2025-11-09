/*
  Warnings:

  - You are about to drop the column `createdAt` on the `favorito` table. All the data in the column will be lost.
  - You are about to drop the column `categoria` on the `noticia` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `noticia` table. All the data in the column will be lost.
  - You are about to drop the column `imagemUrl` on the `noticia` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `favorito` DROP COLUMN `createdAt`,
    ADD COLUMN `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `noticia` DROP COLUMN `categoria`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `imagemUrl`,
    ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `publicadaEm` DATETIME(3) NULL,
    ADD COLUMN `urlImagem` VARCHAR(191) NULL,
    MODIFY `conteudo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `createdAt`,
    ADD COLUMN `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

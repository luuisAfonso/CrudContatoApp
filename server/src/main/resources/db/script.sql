CREATE TABLE `CrudApp_DataBase`.`contato` (
 `id` INT NOT NULL,
 `name` VARCHAR(255) NULL,
 `email` VARCHAR(255) NULL,
 `phoneNumber` VARCHAR(45) NULL,
 PRIMARY KEY (`id`));

 ALTER TABLE `CrudApp_DataBase`.`contato`
 CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ,
 ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC);
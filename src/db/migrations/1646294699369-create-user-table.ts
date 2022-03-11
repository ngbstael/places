import { MigrationInterface, QueryRunner } from 'typeorm'

export class createUserTable1646294699369 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL PRIMARY KEY,
                "first_name" CHARACTER VARYING(255) NOT NULL,
                "second_name" CHARACTER VARYING(255),
                "birthday" date,
                "email" CHARACTER VARYING(255),
                "password" CHARACTER VARYING(255) NOT NULL,
                "phone_number" CHARACTER VARYING(255)
            )
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "user')
  }
}

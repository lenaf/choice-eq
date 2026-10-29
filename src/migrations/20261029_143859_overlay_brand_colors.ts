import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_phero_overlay_color" ADD VALUE 'charcoal' BEFORE 'green';
  ALTER TYPE "public"."enum_phero_overlay_color" ADD VALUE 'plum' BEFORE 'none';
  ALTER TYPE "public"."enum_contact_overlay_color" ADD VALUE 'charcoal' BEFORE 'green';
  ALTER TYPE "public"."enum_contact_overlay_color" ADD VALUE 'plum' BEFORE 'none';
  ALTER TYPE "public"."enum__phero_v_overlay_color" ADD VALUE 'charcoal' BEFORE 'green';
  ALTER TYPE "public"."enum__phero_v_overlay_color" ADD VALUE 'plum' BEFORE 'none';
  ALTER TYPE "public"."enum__contact_v_overlay_color" ADD VALUE 'charcoal' BEFORE 'green';
  ALTER TYPE "public"."enum__contact_v_overlay_color" ADD VALUE 'plum' BEFORE 'none';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "phero" ALTER COLUMN "overlay_color" SET DATA TYPE text;
  ALTER TABLE "phero" ALTER COLUMN "overlay_color" SET DEFAULT 'dark'::text;
  DROP TYPE "public"."enum_phero_overlay_color";
  CREATE TYPE "public"."enum_phero_overlay_color" AS ENUM('dark', 'green', 'none');
  ALTER TABLE "phero" ALTER COLUMN "overlay_color" SET DEFAULT 'dark'::"public"."enum_phero_overlay_color";
  ALTER TABLE "phero" ALTER COLUMN "overlay_color" SET DATA TYPE "public"."enum_phero_overlay_color" USING "overlay_color"::"public"."enum_phero_overlay_color";
  ALTER TABLE "contact" ALTER COLUMN "overlay_color" SET DATA TYPE text;
  ALTER TABLE "contact" ALTER COLUMN "overlay_color" SET DEFAULT 'green'::text;
  DROP TYPE "public"."enum_contact_overlay_color";
  CREATE TYPE "public"."enum_contact_overlay_color" AS ENUM('dark', 'green', 'none');
  ALTER TABLE "contact" ALTER COLUMN "overlay_color" SET DEFAULT 'green'::"public"."enum_contact_overlay_color";
  ALTER TABLE "contact" ALTER COLUMN "overlay_color" SET DATA TYPE "public"."enum_contact_overlay_color" USING "overlay_color"::"public"."enum_contact_overlay_color";
  ALTER TABLE "_phero_v" ALTER COLUMN "overlay_color" SET DATA TYPE text;
  ALTER TABLE "_phero_v" ALTER COLUMN "overlay_color" SET DEFAULT 'dark'::text;
  DROP TYPE "public"."enum__phero_v_overlay_color";
  CREATE TYPE "public"."enum__phero_v_overlay_color" AS ENUM('dark', 'green', 'none');
  ALTER TABLE "_phero_v" ALTER COLUMN "overlay_color" SET DEFAULT 'dark'::"public"."enum__phero_v_overlay_color";
  ALTER TABLE "_phero_v" ALTER COLUMN "overlay_color" SET DATA TYPE "public"."enum__phero_v_overlay_color" USING "overlay_color"::"public"."enum__phero_v_overlay_color";
  ALTER TABLE "_contact_v" ALTER COLUMN "overlay_color" SET DATA TYPE text;
  ALTER TABLE "_contact_v" ALTER COLUMN "overlay_color" SET DEFAULT 'green'::text;
  DROP TYPE "public"."enum__contact_v_overlay_color";
  CREATE TYPE "public"."enum__contact_v_overlay_color" AS ENUM('dark', 'green', 'none');
  ALTER TABLE "_contact_v" ALTER COLUMN "overlay_color" SET DEFAULT 'green'::"public"."enum__contact_v_overlay_color";
  ALTER TABLE "_contact_v" ALTER COLUMN "overlay_color" SET DATA TYPE "public"."enum__contact_v_overlay_color" USING "overlay_color"::"public"."enum__contact_v_overlay_color";`)
}

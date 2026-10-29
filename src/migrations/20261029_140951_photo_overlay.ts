import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_phero_overlay_color" AS ENUM('dark', 'green', 'none');
  CREATE TYPE "public"."enum_phero_overlay_strength" AS ENUM('light', 'medium', 'strong');
  CREATE TYPE "public"."enum_contact_overlay_color" AS ENUM('dark', 'green', 'none');
  CREATE TYPE "public"."enum_contact_overlay_strength" AS ENUM('light', 'medium', 'strong');
  CREATE TYPE "public"."enum__phero_v_overlay_color" AS ENUM('dark', 'green', 'none');
  CREATE TYPE "public"."enum__phero_v_overlay_strength" AS ENUM('light', 'medium', 'strong');
  CREATE TYPE "public"."enum__contact_v_overlay_color" AS ENUM('dark', 'green', 'none');
  CREATE TYPE "public"."enum__contact_v_overlay_strength" AS ENUM('light', 'medium', 'strong');
  ALTER TABLE "phero" ADD COLUMN "overlay_color" "enum_phero_overlay_color" DEFAULT 'dark';
  ALTER TABLE "phero" ADD COLUMN "overlay_strength" "enum_phero_overlay_strength" DEFAULT 'medium';
  ALTER TABLE "contact" ADD COLUMN "overlay_color" "enum_contact_overlay_color" DEFAULT 'green';
  ALTER TABLE "contact" ADD COLUMN "overlay_strength" "enum_contact_overlay_strength" DEFAULT 'strong';
  ALTER TABLE "_phero_v" ADD COLUMN "overlay_color" "enum__phero_v_overlay_color" DEFAULT 'dark';
  ALTER TABLE "_phero_v" ADD COLUMN "overlay_strength" "enum__phero_v_overlay_strength" DEFAULT 'medium';
  ALTER TABLE "_contact_v" ADD COLUMN "overlay_color" "enum__contact_v_overlay_color" DEFAULT 'green';
  ALTER TABLE "_contact_v" ADD COLUMN "overlay_strength" "enum__contact_v_overlay_strength" DEFAULT 'strong';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "phero" DROP COLUMN "overlay_color";
  ALTER TABLE "phero" DROP COLUMN "overlay_strength";
  ALTER TABLE "contact" DROP COLUMN "overlay_color";
  ALTER TABLE "contact" DROP COLUMN "overlay_strength";
  ALTER TABLE "_phero_v" DROP COLUMN "overlay_color";
  ALTER TABLE "_phero_v" DROP COLUMN "overlay_strength";
  ALTER TABLE "_contact_v" DROP COLUMN "overlay_color";
  ALTER TABLE "_contact_v" DROP COLUMN "overlay_strength";
  DROP TYPE "public"."enum_phero_overlay_color";
  DROP TYPE "public"."enum_phero_overlay_strength";
  DROP TYPE "public"."enum_contact_overlay_color";
  DROP TYPE "public"."enum_contact_overlay_strength";
  DROP TYPE "public"."enum__phero_v_overlay_color";
  DROP TYPE "public"."enum__phero_v_overlay_strength";
  DROP TYPE "public"."enum__contact_v_overlay_color";
  DROP TYPE "public"."enum__contact_v_overlay_strength";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_media_overlay_color" AS ENUM('auto', 'dark', 'charcoal', 'green', 'plum', 'none');
  CREATE TYPE "public"."enum_media_overlay_strength" AS ENUM('auto', 'light', 'medium', 'strong');
  ALTER TABLE "media" ADD COLUMN "overlay_color" "enum_media_overlay_color" DEFAULT 'auto';
  ALTER TABLE "media" ADD COLUMN "overlay_strength" "enum_media_overlay_strength" DEFAULT 'auto';
  UPDATE "media" m SET "overlay_color" = v."overlay_color"::text::"enum_media_overlay_color" FROM "_phero_v" v JOIN "_pages_v" pv ON pv."id" = v."_parent_id" WHERE pv."latest" AND v."image_id" = m."id" AND v."overlay_color" <> 'dark';
  UPDATE "media" m SET "overlay_strength" = v."overlay_strength"::text::"enum_media_overlay_strength" FROM "_phero_v" v JOIN "_pages_v" pv ON pv."id" = v."_parent_id" WHERE pv."latest" AND v."image_id" = m."id" AND v."overlay_strength" <> 'medium';
  UPDATE "media" m SET "overlay_color" = v."overlay_color"::text::"enum_media_overlay_color" FROM "_contact_v" v JOIN "_pages_v" pv ON pv."id" = v."_parent_id" WHERE pv."latest" AND v."background_image_id" = m."id" AND v."overlay_color" <> 'green';
  UPDATE "media" m SET "overlay_strength" = v."overlay_strength"::text::"enum_media_overlay_strength" FROM "_contact_v" v JOIN "_pages_v" pv ON pv."id" = v."_parent_id" WHERE pv."latest" AND v."background_image_id" = m."id" AND v."overlay_strength" <> 'strong';
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

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_phero_overlay_color" AS ENUM('dark', 'charcoal', 'green', 'plum', 'none');
  CREATE TYPE "public"."enum_phero_overlay_strength" AS ENUM('light', 'medium', 'strong');
  CREATE TYPE "public"."enum_contact_overlay_color" AS ENUM('dark', 'charcoal', 'green', 'plum', 'none');
  CREATE TYPE "public"."enum_contact_overlay_strength" AS ENUM('light', 'medium', 'strong');
  CREATE TYPE "public"."enum__phero_v_overlay_color" AS ENUM('dark', 'charcoal', 'green', 'plum', 'none');
  CREATE TYPE "public"."enum__phero_v_overlay_strength" AS ENUM('light', 'medium', 'strong');
  CREATE TYPE "public"."enum__contact_v_overlay_color" AS ENUM('dark', 'charcoal', 'green', 'plum', 'none');
  CREATE TYPE "public"."enum__contact_v_overlay_strength" AS ENUM('light', 'medium', 'strong');
  ALTER TABLE "phero" ADD COLUMN "overlay_color" "enum_phero_overlay_color" DEFAULT 'dark';
  ALTER TABLE "phero" ADD COLUMN "overlay_strength" "enum_phero_overlay_strength" DEFAULT 'medium';
  ALTER TABLE "contact" ADD COLUMN "overlay_color" "enum_contact_overlay_color" DEFAULT 'green';
  ALTER TABLE "contact" ADD COLUMN "overlay_strength" "enum_contact_overlay_strength" DEFAULT 'strong';
  ALTER TABLE "_phero_v" ADD COLUMN "overlay_color" "enum__phero_v_overlay_color" DEFAULT 'dark';
  ALTER TABLE "_phero_v" ADD COLUMN "overlay_strength" "enum__phero_v_overlay_strength" DEFAULT 'medium';
  ALTER TABLE "_contact_v" ADD COLUMN "overlay_color" "enum__contact_v_overlay_color" DEFAULT 'green';
  ALTER TABLE "_contact_v" ADD COLUMN "overlay_strength" "enum__contact_v_overlay_strength" DEFAULT 'strong';
  ALTER TABLE "media" DROP COLUMN "overlay_color";
  ALTER TABLE "media" DROP COLUMN "overlay_strength";
  DROP TYPE "public"."enum_media_overlay_color";
  DROP TYPE "public"."enum_media_overlay_strength";`)
}

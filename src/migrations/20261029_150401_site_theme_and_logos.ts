import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_site_settings_theme_heading_font" AS ENUM('cormorant', 'dmSerif', 'fraunces', 'libreBaskerville', 'lora', 'montserrat', 'playfair');
  CREATE TYPE "public"."enum_site_settings_theme_body_font" AS ENUM('dmSans', 'inter', 'karla', 'lato', 'nunitoSans', 'sourceSans', 'workSans');
  ALTER TABLE "site_settings" ADD COLUMN "footer_logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "theme_heading_font" "enum_site_settings_theme_heading_font" DEFAULT 'fraunces';
  ALTER TABLE "site_settings" ADD COLUMN "theme_body_font" "enum_site_settings_theme_body_font" DEFAULT 'dmSans';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_primary" varchar DEFAULT '#4F6E61';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_secondary" varchar DEFAULT '#7E5A82';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_accent" varchar DEFAULT '#CBDDD1';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_neutral" varchar DEFAULT '#352D37';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_background" varchar DEFAULT '#FBFBF5';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_background_alt" varchar DEFAULT '#F6F6E9';
  ALTER TABLE "site_settings" ADD COLUMN "theme_colors_text" varchar DEFAULT '#352D37';
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_footer_logo_id_media_id_fk" FOREIGN KEY ("footer_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_settings_footer_logo_idx" ON "site_settings" USING btree ("footer_logo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_footer_logo_id_media_id_fk";
  
  DROP INDEX "site_settings_footer_logo_idx";
  ALTER TABLE "site_settings" DROP COLUMN "footer_logo_id";
  ALTER TABLE "site_settings" DROP COLUMN "theme_heading_font";
  ALTER TABLE "site_settings" DROP COLUMN "theme_body_font";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_primary";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_secondary";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_accent";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_neutral";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_background";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_background_alt";
  ALTER TABLE "site_settings" DROP COLUMN "theme_colors_text";
  DROP TYPE "public"."enum_site_settings_theme_heading_font";
  DROP TYPE "public"."enum_site_settings_theme_body_font";`)
}

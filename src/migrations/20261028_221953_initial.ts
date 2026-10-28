import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_phero_buttons_style" AS ENUM('solid', 'outline');
  CREATE TYPE "public"."enum_pgrid_photos_size" AS ENUM('normal', 'wide', 'tall', 'large');
  CREATE TYPE "public"."enum_banner_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_banner_padding" AS ENUM('none', 'small', 'standard', 'large');
  CREATE TYPE "public"."enum_hero_slides_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_full_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_full_padding" AS ENUM('none', 'small', 'standard', 'large');
  CREATE TYPE "public"."enum_two_col_ratio" AS ENUM('1-1', '3-2', '2-3');
  CREATE TYPE "public"."enum_two_col_left_column_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_two_col_right_column_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_three_col_column1_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_three_col_column2_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_three_col_column3_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_grid_items_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_grid_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_grid_vertical_alignment" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum_grid_padding" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_grid_gap" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_list_data_source" AS ENUM('products');
  CREATE TYPE "public"."enum_list_layout" AS ENUM('grid', 'list', 'carousel', 'featured');
  CREATE TYPE "public"."enum_list_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_list_sort_field" AS ENUM('createdAt_desc', 'createdAt_asc', 'title_asc', 'order_asc');
  CREATE TYPE "public"."enum_list_view_all_link_type" AS ENUM('page', 'url');
  CREATE TYPE "public"."enum_list_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__phero_v_buttons_style" AS ENUM('solid', 'outline');
  CREATE TYPE "public"."enum__pgrid_v_photos_size" AS ENUM('normal', 'wide', 'tall', 'large');
  CREATE TYPE "public"."enum__banner_v_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__banner_v_padding" AS ENUM('none', 'small', 'standard', 'large');
  CREATE TYPE "public"."enum__hero_v_slides_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__full_v_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__full_v_padding" AS ENUM('none', 'small', 'standard', 'large');
  CREATE TYPE "public"."enum__two_col_v_ratio" AS ENUM('1-1', '3-2', '2-3');
  CREATE TYPE "public"."enum__two_col_v_left_column_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__two_col_v_right_column_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__three_col_v_column1_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__three_col_v_column2_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__three_col_v_column3_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__grid_v_items_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__grid_v_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__grid_v_vertical_alignment" AS ENUM('top', 'center', 'bottom');
  CREATE TYPE "public"."enum__grid_v_padding" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__grid_v_gap" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__list_v_data_source" AS ENUM('products');
  CREATE TYPE "public"."enum__list_v_layout" AS ENUM('grid', 'list', 'carousel', 'featured');
  CREATE TYPE "public"."enum__list_v_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__list_v_sort_field" AS ENUM('createdAt_desc', 'createdAt_asc', 'title_asc', 'order_asc');
  CREATE TYPE "public"."enum__list_v_view_all_link_type" AS ENUM('page', 'url');
  CREATE TYPE "public"."enum__list_v_background_color" AS ENUM('primary', 'secondary', 'accent', 'accent2', 'base-100', 'base-200');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_navigation_nav_items_sub_items_link_type" AS ENUM('page', 'url');
  CREATE TYPE "public"."enum_navigation_nav_items_link_type" AS ENUM('page', 'url');
  CREATE TYPE "public"."enum_navigation_cta_buttons_style" AS ENUM('primary', 'accent', 'accent2', 'secondary', 'outline');
  CREATE TYPE "public"."enum_navigation_cta_buttons_link_type" AS ENUM('page', 'url');
  CREATE TYPE "public"."enum_navigation_style" AS ENUM('solid', 'white');
  CREATE TABLE "phero_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum_phero_buttons_style" DEFAULT 'solid'
  );
  
  CREATE TABLE "phero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pcards_cards_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pcards_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"lead" varchar
  );
  
  CREATE TABLE "pcards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "prows_rows_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "prows_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE "prows_box_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "prows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"box_title" varchar,
  	"box_text" varchar,
  	"box_button_label" varchar,
  	"box_button_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pband_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pband" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"image_id" integer,
  	"brighten" boolean DEFAULT false,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"list_heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "quote_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"attribution" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "profile_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "profile_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "profile" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"image_id" integer,
  	"name" varchar,
  	"role" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pgrid_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum_pgrid_photos_size" DEFAULT 'normal'
  );
  
  CREATE TABLE "pgrid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"background_image_id" integer,
  	"heading" varchar,
  	"text" varchar,
  	"phone_label" varchar DEFAULT 'Call/text',
  	"social_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum_banner_background_color",
  	"padding" "enum_banner_padding" DEFAULT 'standard',
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "hero_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum_hero_slides_background_color",
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false
  );
  
  CREATE TABLE "hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "full_floating_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"position_x" numeric DEFAULT 10,
  	"position_y" numeric DEFAULT 10,
  	"position_width" numeric DEFAULT 200,
  	"position_height" numeric DEFAULT 200,
  	"mobile_position_x" numeric DEFAULT 10,
  	"mobile_position_y" numeric DEFAULT 10,
  	"mobile_position_width" numeric DEFAULT 200,
  	"mobile_position_height" numeric DEFAULT 200
  );
  
  CREATE TABLE "full" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum_full_background_color",
  	"padding" "enum_full_padding" DEFAULT 'standard',
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "two_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrap_on_mobile" boolean DEFAULT true,
  	"ratio" "enum_two_col_ratio" DEFAULT '1-1',
  	"left_column_content" jsonb,
  	"left_column_background_color" "enum_two_col_left_column_background_color",
  	"left_column_background_image_id" integer,
  	"left_column_dark_scrim" boolean DEFAULT false,
  	"right_column_content" jsonb,
  	"right_column_background_color" "enum_two_col_right_column_background_color",
  	"right_column_background_image_id" integer,
  	"right_column_dark_scrim" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "three_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrap_on_mobile" boolean DEFAULT true,
  	"column1_content" jsonb,
  	"column1_background_color" "enum_three_col_column1_background_color",
  	"column1_background_image_id" integer,
  	"column1_dark_scrim" boolean DEFAULT false,
  	"column2_content" jsonb,
  	"column2_background_color" "enum_three_col_column2_background_color",
  	"column2_background_image_id" integer,
  	"column2_dark_scrim" boolean DEFAULT false,
  	"column3_content" jsonb,
  	"column3_background_color" "enum_three_col_column3_background_color",
  	"column3_background_image_id" integer,
  	"column3_dark_scrim" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum_grid_items_background_color",
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false
  );
  
  CREATE TABLE "grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"alignment" "enum_grid_alignment" DEFAULT 'left',
  	"vertical_alignment" "enum_grid_vertical_alignment" DEFAULT 'top',
  	"padding" "enum_grid_padding" DEFAULT 'md',
  	"gap" "enum_grid_gap" DEFAULT 'md',
  	"wrap_on_mobile" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "list_pinned_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"data_source" "enum_list_data_source",
  	"layout" "enum_list_layout" DEFAULT 'grid',
  	"columns" "enum_list_columns" DEFAULT '3',
  	"limit" numeric,
  	"sort_field" "enum_list_sort_field" DEFAULT 'createdAt_desc',
  	"filter_featured" boolean DEFAULT false,
  	"view_all_label" varchar,
  	"view_all_link_type" "enum_list_view_all_link_type" DEFAULT 'url',
  	"view_all_page_id" integer,
  	"view_all_url" varchar,
  	"empty_message" varchar DEFAULT 'Nothing to show right now. Check back soon!',
  	"background_color" "enum_list_background_color",
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_og_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"products_id" integer
  );
  
  CREATE TABLE "_phero_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum__phero_v_buttons_style" DEFAULT 'solid',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_phero_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pcards_v_cards_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pcards_v_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"lead" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pcards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prows_v_rows_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prows_v_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prows_v_box_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prows_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"box_title" varchar,
  	"box_text" varchar,
  	"box_button_label" varchar,
  	"box_button_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pband_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pband_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"image_id" integer,
  	"brighten" boolean DEFAULT false,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"list_heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_quote_v_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_quote_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"attribution" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_profile_v_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_profile_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"image_id" integer,
  	"name" varchar,
  	"role" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pgrid_v_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"size" "enum__pgrid_v_photos_size" DEFAULT 'normal',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pgrid_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_contact_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"background_image_id" integer,
  	"heading" varchar,
  	"text" varchar,
  	"phone_label" varchar DEFAULT 'Call/text',
  	"social_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_banner_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum__banner_v_background_color",
  	"padding" "enum__banner_v_padding" DEFAULT 'standard',
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hero_v_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum__hero_v_slides_background_color",
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hero_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_full_v_floating_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"position_x" numeric DEFAULT 10,
  	"position_y" numeric DEFAULT 10,
  	"position_width" numeric DEFAULT 200,
  	"position_height" numeric DEFAULT 200,
  	"mobile_position_x" numeric DEFAULT 10,
  	"mobile_position_y" numeric DEFAULT 10,
  	"mobile_position_width" numeric DEFAULT 200,
  	"mobile_position_height" numeric DEFAULT 200,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_full_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum__full_v_background_color",
  	"padding" "enum__full_v_padding" DEFAULT 'standard',
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_two_col_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrap_on_mobile" boolean DEFAULT true,
  	"ratio" "enum__two_col_v_ratio" DEFAULT '1-1',
  	"left_column_content" jsonb,
  	"left_column_background_color" "enum__two_col_v_left_column_background_color",
  	"left_column_background_image_id" integer,
  	"left_column_dark_scrim" boolean DEFAULT false,
  	"right_column_content" jsonb,
  	"right_column_background_color" "enum__two_col_v_right_column_background_color",
  	"right_column_background_image_id" integer,
  	"right_column_dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_three_col_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrap_on_mobile" boolean DEFAULT true,
  	"column1_content" jsonb,
  	"column1_background_color" "enum__three_col_v_column1_background_color",
  	"column1_background_image_id" integer,
  	"column1_dark_scrim" boolean DEFAULT false,
  	"column2_content" jsonb,
  	"column2_background_color" "enum__three_col_v_column2_background_color",
  	"column2_background_image_id" integer,
  	"column2_dark_scrim" boolean DEFAULT false,
  	"column3_content" jsonb,
  	"column3_background_color" "enum__three_col_v_column3_background_color",
  	"column3_background_image_id" integer,
  	"column3_dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_grid_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" "enum__grid_v_items_background_color",
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_grid_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"alignment" "enum__grid_v_alignment" DEFAULT 'left',
  	"vertical_alignment" "enum__grid_v_vertical_alignment" DEFAULT 'top',
  	"padding" "enum__grid_v_padding" DEFAULT 'md',
  	"gap" "enum__grid_v_gap" DEFAULT 'md',
  	"wrap_on_mobile" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_list_v_pinned_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"data_source" "enum__list_v_data_source",
  	"layout" "enum__list_v_layout" DEFAULT 'grid',
  	"columns" "enum__list_v_columns" DEFAULT '3',
  	"limit" numeric,
  	"sort_field" "enum__list_v_sort_field" DEFAULT 'createdAt_desc',
  	"filter_featured" boolean DEFAULT false,
  	"view_all_label" varchar,
  	"view_all_link_type" "enum__list_v_view_all_link_type" DEFAULT 'url',
  	"view_all_page_id" integer,
  	"view_all_url" varchar,
  	"empty_message" varchar DEFAULT 'Nothing to show right now. Check back soon!',
  	"background_color" "enum__list_v_background_color",
  	"background_image_id" integer,
  	"dark_scrim" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"products_id" integer
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar
  );
  
  CREATE TABLE "products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"price" numeric NOT NULL,
  	"inventory" numeric,
  	"summary" varchar,
  	"description" jsonb,
  	"featured" boolean DEFAULT false,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "products_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"users_id" integer,
  	"media_id" integer,
  	"products_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "navigation_nav_items_sub_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navigation_nav_items_sub_items_link_type" DEFAULT 'page',
  	"page_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "navigation_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navigation_nav_items_link_type" DEFAULT 'page',
  	"page_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "navigation_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"style" "enum_navigation_cta_buttons_style" DEFAULT 'primary',
  	"link_type" "enum_navigation_cta_buttons_link_type" DEFAULT 'url',
  	"page_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum_navigation_style" DEFAULT 'white',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar,
  	"tagline" varchar,
  	"logo_id" integer,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address_line1" varchar,
  	"contact_address_line2" varchar,
  	"contact_city" varchar,
  	"contact_state" varchar,
  	"contact_zip" varchar,
  	"social_media_instagram" varchar,
  	"social_media_facebook" varchar,
  	"social_media_twitter" varchar,
  	"social_media_tiktok" varchar,
  	"social_media_youtube" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "phero_buttons" ADD CONSTRAINT "phero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phero" ADD CONSTRAINT "phero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "phero" ADD CONSTRAINT "phero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pcards_cards_details" ADD CONSTRAINT "pcards_cards_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pcards_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pcards_cards" ADD CONSTRAINT "pcards_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pcards_cards" ADD CONSTRAINT "pcards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pcards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pcards" ADD CONSTRAINT "pcards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prows_rows_paragraphs" ADD CONSTRAINT "prows_rows_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prows_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prows_rows" ADD CONSTRAINT "prows_rows_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prows_rows" ADD CONSTRAINT "prows_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prows_box_items" ADD CONSTRAINT "prows_box_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prows" ADD CONSTRAINT "prows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pband_items" ADD CONSTRAINT "pband_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pband"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pband" ADD CONSTRAINT "pband_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pband" ADD CONSTRAINT "pband_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote_paragraphs" ADD CONSTRAINT "quote_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote" ADD CONSTRAINT "quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_paragraphs" ADD CONSTRAINT "profile_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile_items" ADD CONSTRAINT "profile_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "profile" ADD CONSTRAINT "profile_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "profile" ADD CONSTRAINT "profile_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pgrid_photos" ADD CONSTRAINT "pgrid_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pgrid_photos" ADD CONSTRAINT "pgrid_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pgrid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pgrid" ADD CONSTRAINT "pgrid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact" ADD CONSTRAINT "contact_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact" ADD CONSTRAINT "contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "banner" ADD CONSTRAINT "banner_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "banner" ADD CONSTRAINT "banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero_slides" ADD CONSTRAINT "hero_slides_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hero_slides" ADD CONSTRAINT "hero_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "full_floating_items" ADD CONSTRAINT "full_floating_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "full_floating_items" ADD CONSTRAINT "full_floating_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."full"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "full" ADD CONSTRAINT "full_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "full" ADD CONSTRAINT "full_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "two_col" ADD CONSTRAINT "two_col_left_column_background_image_id_media_id_fk" FOREIGN KEY ("left_column_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "two_col" ADD CONSTRAINT "two_col_right_column_background_image_id_media_id_fk" FOREIGN KEY ("right_column_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "two_col" ADD CONSTRAINT "two_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "three_col" ADD CONSTRAINT "three_col_column1_background_image_id_media_id_fk" FOREIGN KEY ("column1_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "three_col" ADD CONSTRAINT "three_col_column2_background_image_id_media_id_fk" FOREIGN KEY ("column2_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "three_col" ADD CONSTRAINT "three_col_column3_background_image_id_media_id_fk" FOREIGN KEY ("column3_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "three_col" ADD CONSTRAINT "three_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "grid_items" ADD CONSTRAINT "grid_items_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "grid_items" ADD CONSTRAINT "grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "grid" ADD CONSTRAINT "grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "list_pinned_items" ADD CONSTRAINT "list_pinned_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "list" ADD CONSTRAINT "list_view_all_page_id_pages_id_fk" FOREIGN KEY ("view_all_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "list" ADD CONSTRAINT "list_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "list" ADD CONSTRAINT "list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_phero_v_buttons" ADD CONSTRAINT "_phero_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_phero_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_phero_v" ADD CONSTRAINT "_phero_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_phero_v" ADD CONSTRAINT "_phero_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pcards_v_cards_details" ADD CONSTRAINT "_pcards_v_cards_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pcards_v_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pcards_v_cards" ADD CONSTRAINT "_pcards_v_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pcards_v_cards" ADD CONSTRAINT "_pcards_v_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pcards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pcards_v" ADD CONSTRAINT "_pcards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prows_v_rows_paragraphs" ADD CONSTRAINT "_prows_v_rows_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prows_v_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prows_v_rows" ADD CONSTRAINT "_prows_v_rows_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prows_v_rows" ADD CONSTRAINT "_prows_v_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prows_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prows_v_box_items" ADD CONSTRAINT "_prows_v_box_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prows_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prows_v" ADD CONSTRAINT "_prows_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pband_v_items" ADD CONSTRAINT "_pband_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pband_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pband_v" ADD CONSTRAINT "_pband_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pband_v" ADD CONSTRAINT "_pband_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quote_v_paragraphs" ADD CONSTRAINT "_quote_v_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_quote_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quote_v" ADD CONSTRAINT "_quote_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_paragraphs" ADD CONSTRAINT "_profile_v_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v_items" ADD CONSTRAINT "_profile_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_profile_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_profile_v" ADD CONSTRAINT "_profile_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_profile_v" ADD CONSTRAINT "_profile_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pgrid_v_photos" ADD CONSTRAINT "_pgrid_v_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pgrid_v_photos" ADD CONSTRAINT "_pgrid_v_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pgrid_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pgrid_v" ADD CONSTRAINT "_pgrid_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_v" ADD CONSTRAINT "_contact_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_contact_v" ADD CONSTRAINT "_contact_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_banner_v" ADD CONSTRAINT "_banner_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_banner_v" ADD CONSTRAINT "_banner_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hero_v_slides" ADD CONSTRAINT "_hero_v_slides_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hero_v_slides" ADD CONSTRAINT "_hero_v_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hero_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hero_v" ADD CONSTRAINT "_hero_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_full_v_floating_items" ADD CONSTRAINT "_full_v_floating_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_full_v_floating_items" ADD CONSTRAINT "_full_v_floating_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_full_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_full_v" ADD CONSTRAINT "_full_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_full_v" ADD CONSTRAINT "_full_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_two_col_v" ADD CONSTRAINT "_two_col_v_left_column_background_image_id_media_id_fk" FOREIGN KEY ("left_column_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_two_col_v" ADD CONSTRAINT "_two_col_v_right_column_background_image_id_media_id_fk" FOREIGN KEY ("right_column_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_two_col_v" ADD CONSTRAINT "_two_col_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_three_col_v" ADD CONSTRAINT "_three_col_v_column1_background_image_id_media_id_fk" FOREIGN KEY ("column1_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_three_col_v" ADD CONSTRAINT "_three_col_v_column2_background_image_id_media_id_fk" FOREIGN KEY ("column2_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_three_col_v" ADD CONSTRAINT "_three_col_v_column3_background_image_id_media_id_fk" FOREIGN KEY ("column3_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_three_col_v" ADD CONSTRAINT "_three_col_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_grid_v_items" ADD CONSTRAINT "_grid_v_items_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_grid_v_items" ADD CONSTRAINT "_grid_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_grid_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_grid_v" ADD CONSTRAINT "_grid_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_list_v_pinned_items" ADD CONSTRAINT "_list_v_pinned_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_list_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_list_v" ADD CONSTRAINT "_list_v_view_all_page_id_pages_id_fk" FOREIGN KEY ("view_all_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_list_v" ADD CONSTRAINT "_list_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_list_v" ADD CONSTRAINT "_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_nav_items_sub_items" ADD CONSTRAINT "navigation_nav_items_sub_items_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "navigation_nav_items_sub_items" ADD CONSTRAINT "navigation_nav_items_sub_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_nav_items" ADD CONSTRAINT "navigation_nav_items_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "navigation_nav_items" ADD CONSTRAINT "navigation_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_cta_buttons" ADD CONSTRAINT "navigation_cta_buttons_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "navigation_cta_buttons" ADD CONSTRAINT "navigation_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "phero_buttons_order_idx" ON "phero_buttons" USING btree ("_order");
  CREATE INDEX "phero_buttons_parent_id_idx" ON "phero_buttons" USING btree ("_parent_id");
  CREATE INDEX "phero_order_idx" ON "phero" USING btree ("_order");
  CREATE INDEX "phero_parent_id_idx" ON "phero" USING btree ("_parent_id");
  CREATE INDEX "phero_path_idx" ON "phero" USING btree ("_path");
  CREATE INDEX "phero_image_idx" ON "phero" USING btree ("image_id");
  CREATE INDEX "pcards_cards_details_order_idx" ON "pcards_cards_details" USING btree ("_order");
  CREATE INDEX "pcards_cards_details_parent_id_idx" ON "pcards_cards_details" USING btree ("_parent_id");
  CREATE INDEX "pcards_cards_order_idx" ON "pcards_cards" USING btree ("_order");
  CREATE INDEX "pcards_cards_parent_id_idx" ON "pcards_cards" USING btree ("_parent_id");
  CREATE INDEX "pcards_cards_image_idx" ON "pcards_cards" USING btree ("image_id");
  CREATE INDEX "pcards_order_idx" ON "pcards" USING btree ("_order");
  CREATE INDEX "pcards_parent_id_idx" ON "pcards" USING btree ("_parent_id");
  CREATE INDEX "pcards_path_idx" ON "pcards" USING btree ("_path");
  CREATE INDEX "prows_rows_paragraphs_order_idx" ON "prows_rows_paragraphs" USING btree ("_order");
  CREATE INDEX "prows_rows_paragraphs_parent_id_idx" ON "prows_rows_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "prows_rows_order_idx" ON "prows_rows" USING btree ("_order");
  CREATE INDEX "prows_rows_parent_id_idx" ON "prows_rows" USING btree ("_parent_id");
  CREATE INDEX "prows_rows_image_idx" ON "prows_rows" USING btree ("image_id");
  CREATE INDEX "prows_box_items_order_idx" ON "prows_box_items" USING btree ("_order");
  CREATE INDEX "prows_box_items_parent_id_idx" ON "prows_box_items" USING btree ("_parent_id");
  CREATE INDEX "prows_order_idx" ON "prows" USING btree ("_order");
  CREATE INDEX "prows_parent_id_idx" ON "prows" USING btree ("_parent_id");
  CREATE INDEX "prows_path_idx" ON "prows" USING btree ("_path");
  CREATE INDEX "pband_items_order_idx" ON "pband_items" USING btree ("_order");
  CREATE INDEX "pband_items_parent_id_idx" ON "pband_items" USING btree ("_parent_id");
  CREATE INDEX "pband_order_idx" ON "pband" USING btree ("_order");
  CREATE INDEX "pband_parent_id_idx" ON "pband" USING btree ("_parent_id");
  CREATE INDEX "pband_path_idx" ON "pband" USING btree ("_path");
  CREATE INDEX "pband_image_idx" ON "pband" USING btree ("image_id");
  CREATE INDEX "quote_paragraphs_order_idx" ON "quote_paragraphs" USING btree ("_order");
  CREATE INDEX "quote_paragraphs_parent_id_idx" ON "quote_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "quote_order_idx" ON "quote" USING btree ("_order");
  CREATE INDEX "quote_parent_id_idx" ON "quote" USING btree ("_parent_id");
  CREATE INDEX "quote_path_idx" ON "quote" USING btree ("_path");
  CREATE INDEX "profile_paragraphs_order_idx" ON "profile_paragraphs" USING btree ("_order");
  CREATE INDEX "profile_paragraphs_parent_id_idx" ON "profile_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "profile_items_order_idx" ON "profile_items" USING btree ("_order");
  CREATE INDEX "profile_items_parent_id_idx" ON "profile_items" USING btree ("_parent_id");
  CREATE INDEX "profile_order_idx" ON "profile" USING btree ("_order");
  CREATE INDEX "profile_parent_id_idx" ON "profile" USING btree ("_parent_id");
  CREATE INDEX "profile_path_idx" ON "profile" USING btree ("_path");
  CREATE INDEX "profile_image_idx" ON "profile" USING btree ("image_id");
  CREATE INDEX "pgrid_photos_order_idx" ON "pgrid_photos" USING btree ("_order");
  CREATE INDEX "pgrid_photos_parent_id_idx" ON "pgrid_photos" USING btree ("_parent_id");
  CREATE INDEX "pgrid_photos_image_idx" ON "pgrid_photos" USING btree ("image_id");
  CREATE INDEX "pgrid_order_idx" ON "pgrid" USING btree ("_order");
  CREATE INDEX "pgrid_parent_id_idx" ON "pgrid" USING btree ("_parent_id");
  CREATE INDEX "pgrid_path_idx" ON "pgrid" USING btree ("_path");
  CREATE INDEX "contact_order_idx" ON "contact" USING btree ("_order");
  CREATE INDEX "contact_parent_id_idx" ON "contact" USING btree ("_parent_id");
  CREATE INDEX "contact_path_idx" ON "contact" USING btree ("_path");
  CREATE INDEX "contact_background_image_idx" ON "contact" USING btree ("background_image_id");
  CREATE INDEX "banner_order_idx" ON "banner" USING btree ("_order");
  CREATE INDEX "banner_parent_id_idx" ON "banner" USING btree ("_parent_id");
  CREATE INDEX "banner_path_idx" ON "banner" USING btree ("_path");
  CREATE INDEX "banner_background_image_idx" ON "banner" USING btree ("background_image_id");
  CREATE INDEX "hero_slides_order_idx" ON "hero_slides" USING btree ("_order");
  CREATE INDEX "hero_slides_parent_id_idx" ON "hero_slides" USING btree ("_parent_id");
  CREATE INDEX "hero_slides_background_image_idx" ON "hero_slides" USING btree ("background_image_id");
  CREATE INDEX "hero_order_idx" ON "hero" USING btree ("_order");
  CREATE INDEX "hero_parent_id_idx" ON "hero" USING btree ("_parent_id");
  CREATE INDEX "hero_path_idx" ON "hero" USING btree ("_path");
  CREATE INDEX "full_floating_items_order_idx" ON "full_floating_items" USING btree ("_order");
  CREATE INDEX "full_floating_items_parent_id_idx" ON "full_floating_items" USING btree ("_parent_id");
  CREATE INDEX "full_floating_items_image_idx" ON "full_floating_items" USING btree ("image_id");
  CREATE INDEX "full_order_idx" ON "full" USING btree ("_order");
  CREATE INDEX "full_parent_id_idx" ON "full" USING btree ("_parent_id");
  CREATE INDEX "full_path_idx" ON "full" USING btree ("_path");
  CREATE INDEX "full_background_image_idx" ON "full" USING btree ("background_image_id");
  CREATE INDEX "two_col_order_idx" ON "two_col" USING btree ("_order");
  CREATE INDEX "two_col_parent_id_idx" ON "two_col" USING btree ("_parent_id");
  CREATE INDEX "two_col_path_idx" ON "two_col" USING btree ("_path");
  CREATE INDEX "two_col_left_column_left_column_background_image_idx" ON "two_col" USING btree ("left_column_background_image_id");
  CREATE INDEX "two_col_right_column_right_column_background_image_idx" ON "two_col" USING btree ("right_column_background_image_id");
  CREATE INDEX "three_col_order_idx" ON "three_col" USING btree ("_order");
  CREATE INDEX "three_col_parent_id_idx" ON "three_col" USING btree ("_parent_id");
  CREATE INDEX "three_col_path_idx" ON "three_col" USING btree ("_path");
  CREATE INDEX "three_col_column1_column1_background_image_idx" ON "three_col" USING btree ("column1_background_image_id");
  CREATE INDEX "three_col_column2_column2_background_image_idx" ON "three_col" USING btree ("column2_background_image_id");
  CREATE INDEX "three_col_column3_column3_background_image_idx" ON "three_col" USING btree ("column3_background_image_id");
  CREATE INDEX "grid_items_order_idx" ON "grid_items" USING btree ("_order");
  CREATE INDEX "grid_items_parent_id_idx" ON "grid_items" USING btree ("_parent_id");
  CREATE INDEX "grid_items_background_image_idx" ON "grid_items" USING btree ("background_image_id");
  CREATE INDEX "grid_order_idx" ON "grid" USING btree ("_order");
  CREATE INDEX "grid_parent_id_idx" ON "grid" USING btree ("_parent_id");
  CREATE INDEX "grid_path_idx" ON "grid" USING btree ("_path");
  CREATE INDEX "list_pinned_items_order_idx" ON "list_pinned_items" USING btree ("_order");
  CREATE INDEX "list_pinned_items_parent_id_idx" ON "list_pinned_items" USING btree ("_parent_id");
  CREATE INDEX "list_order_idx" ON "list" USING btree ("_order");
  CREATE INDEX "list_parent_id_idx" ON "list" USING btree ("_parent_id");
  CREATE INDEX "list_path_idx" ON "list" USING btree ("_path");
  CREATE INDEX "list_view_all_page_idx" ON "list" USING btree ("view_all_page_id");
  CREATE INDEX "list_background_image_idx" ON "list" USING btree ("background_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_seo_seo_og_image_idx" ON "pages" USING btree ("seo_og_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_products_id_idx" ON "pages_rels" USING btree ("products_id");
  CREATE INDEX "_phero_v_buttons_order_idx" ON "_phero_v_buttons" USING btree ("_order");
  CREATE INDEX "_phero_v_buttons_parent_id_idx" ON "_phero_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_phero_v_order_idx" ON "_phero_v" USING btree ("_order");
  CREATE INDEX "_phero_v_parent_id_idx" ON "_phero_v" USING btree ("_parent_id");
  CREATE INDEX "_phero_v_path_idx" ON "_phero_v" USING btree ("_path");
  CREATE INDEX "_phero_v_image_idx" ON "_phero_v" USING btree ("image_id");
  CREATE INDEX "_pcards_v_cards_details_order_idx" ON "_pcards_v_cards_details" USING btree ("_order");
  CREATE INDEX "_pcards_v_cards_details_parent_id_idx" ON "_pcards_v_cards_details" USING btree ("_parent_id");
  CREATE INDEX "_pcards_v_cards_order_idx" ON "_pcards_v_cards" USING btree ("_order");
  CREATE INDEX "_pcards_v_cards_parent_id_idx" ON "_pcards_v_cards" USING btree ("_parent_id");
  CREATE INDEX "_pcards_v_cards_image_idx" ON "_pcards_v_cards" USING btree ("image_id");
  CREATE INDEX "_pcards_v_order_idx" ON "_pcards_v" USING btree ("_order");
  CREATE INDEX "_pcards_v_parent_id_idx" ON "_pcards_v" USING btree ("_parent_id");
  CREATE INDEX "_pcards_v_path_idx" ON "_pcards_v" USING btree ("_path");
  CREATE INDEX "_prows_v_rows_paragraphs_order_idx" ON "_prows_v_rows_paragraphs" USING btree ("_order");
  CREATE INDEX "_prows_v_rows_paragraphs_parent_id_idx" ON "_prows_v_rows_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_prows_v_rows_order_idx" ON "_prows_v_rows" USING btree ("_order");
  CREATE INDEX "_prows_v_rows_parent_id_idx" ON "_prows_v_rows" USING btree ("_parent_id");
  CREATE INDEX "_prows_v_rows_image_idx" ON "_prows_v_rows" USING btree ("image_id");
  CREATE INDEX "_prows_v_box_items_order_idx" ON "_prows_v_box_items" USING btree ("_order");
  CREATE INDEX "_prows_v_box_items_parent_id_idx" ON "_prows_v_box_items" USING btree ("_parent_id");
  CREATE INDEX "_prows_v_order_idx" ON "_prows_v" USING btree ("_order");
  CREATE INDEX "_prows_v_parent_id_idx" ON "_prows_v" USING btree ("_parent_id");
  CREATE INDEX "_prows_v_path_idx" ON "_prows_v" USING btree ("_path");
  CREATE INDEX "_pband_v_items_order_idx" ON "_pband_v_items" USING btree ("_order");
  CREATE INDEX "_pband_v_items_parent_id_idx" ON "_pband_v_items" USING btree ("_parent_id");
  CREATE INDEX "_pband_v_order_idx" ON "_pband_v" USING btree ("_order");
  CREATE INDEX "_pband_v_parent_id_idx" ON "_pband_v" USING btree ("_parent_id");
  CREATE INDEX "_pband_v_path_idx" ON "_pband_v" USING btree ("_path");
  CREATE INDEX "_pband_v_image_idx" ON "_pband_v" USING btree ("image_id");
  CREATE INDEX "_quote_v_paragraphs_order_idx" ON "_quote_v_paragraphs" USING btree ("_order");
  CREATE INDEX "_quote_v_paragraphs_parent_id_idx" ON "_quote_v_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_quote_v_order_idx" ON "_quote_v" USING btree ("_order");
  CREATE INDEX "_quote_v_parent_id_idx" ON "_quote_v" USING btree ("_parent_id");
  CREATE INDEX "_quote_v_path_idx" ON "_quote_v" USING btree ("_path");
  CREATE INDEX "_profile_v_paragraphs_order_idx" ON "_profile_v_paragraphs" USING btree ("_order");
  CREATE INDEX "_profile_v_paragraphs_parent_id_idx" ON "_profile_v_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_items_order_idx" ON "_profile_v_items" USING btree ("_order");
  CREATE INDEX "_profile_v_items_parent_id_idx" ON "_profile_v_items" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_order_idx" ON "_profile_v" USING btree ("_order");
  CREATE INDEX "_profile_v_parent_id_idx" ON "_profile_v" USING btree ("_parent_id");
  CREATE INDEX "_profile_v_path_idx" ON "_profile_v" USING btree ("_path");
  CREATE INDEX "_profile_v_image_idx" ON "_profile_v" USING btree ("image_id");
  CREATE INDEX "_pgrid_v_photos_order_idx" ON "_pgrid_v_photos" USING btree ("_order");
  CREATE INDEX "_pgrid_v_photos_parent_id_idx" ON "_pgrid_v_photos" USING btree ("_parent_id");
  CREATE INDEX "_pgrid_v_photos_image_idx" ON "_pgrid_v_photos" USING btree ("image_id");
  CREATE INDEX "_pgrid_v_order_idx" ON "_pgrid_v" USING btree ("_order");
  CREATE INDEX "_pgrid_v_parent_id_idx" ON "_pgrid_v" USING btree ("_parent_id");
  CREATE INDEX "_pgrid_v_path_idx" ON "_pgrid_v" USING btree ("_path");
  CREATE INDEX "_contact_v_order_idx" ON "_contact_v" USING btree ("_order");
  CREATE INDEX "_contact_v_parent_id_idx" ON "_contact_v" USING btree ("_parent_id");
  CREATE INDEX "_contact_v_path_idx" ON "_contact_v" USING btree ("_path");
  CREATE INDEX "_contact_v_background_image_idx" ON "_contact_v" USING btree ("background_image_id");
  CREATE INDEX "_banner_v_order_idx" ON "_banner_v" USING btree ("_order");
  CREATE INDEX "_banner_v_parent_id_idx" ON "_banner_v" USING btree ("_parent_id");
  CREATE INDEX "_banner_v_path_idx" ON "_banner_v" USING btree ("_path");
  CREATE INDEX "_banner_v_background_image_idx" ON "_banner_v" USING btree ("background_image_id");
  CREATE INDEX "_hero_v_slides_order_idx" ON "_hero_v_slides" USING btree ("_order");
  CREATE INDEX "_hero_v_slides_parent_id_idx" ON "_hero_v_slides" USING btree ("_parent_id");
  CREATE INDEX "_hero_v_slides_background_image_idx" ON "_hero_v_slides" USING btree ("background_image_id");
  CREATE INDEX "_hero_v_order_idx" ON "_hero_v" USING btree ("_order");
  CREATE INDEX "_hero_v_parent_id_idx" ON "_hero_v" USING btree ("_parent_id");
  CREATE INDEX "_hero_v_path_idx" ON "_hero_v" USING btree ("_path");
  CREATE INDEX "_full_v_floating_items_order_idx" ON "_full_v_floating_items" USING btree ("_order");
  CREATE INDEX "_full_v_floating_items_parent_id_idx" ON "_full_v_floating_items" USING btree ("_parent_id");
  CREATE INDEX "_full_v_floating_items_image_idx" ON "_full_v_floating_items" USING btree ("image_id");
  CREATE INDEX "_full_v_order_idx" ON "_full_v" USING btree ("_order");
  CREATE INDEX "_full_v_parent_id_idx" ON "_full_v" USING btree ("_parent_id");
  CREATE INDEX "_full_v_path_idx" ON "_full_v" USING btree ("_path");
  CREATE INDEX "_full_v_background_image_idx" ON "_full_v" USING btree ("background_image_id");
  CREATE INDEX "_two_col_v_order_idx" ON "_two_col_v" USING btree ("_order");
  CREATE INDEX "_two_col_v_parent_id_idx" ON "_two_col_v" USING btree ("_parent_id");
  CREATE INDEX "_two_col_v_path_idx" ON "_two_col_v" USING btree ("_path");
  CREATE INDEX "_two_col_v_left_column_left_column_background_image_idx" ON "_two_col_v" USING btree ("left_column_background_image_id");
  CREATE INDEX "_two_col_v_right_column_right_column_background_image_idx" ON "_two_col_v" USING btree ("right_column_background_image_id");
  CREATE INDEX "_three_col_v_order_idx" ON "_three_col_v" USING btree ("_order");
  CREATE INDEX "_three_col_v_parent_id_idx" ON "_three_col_v" USING btree ("_parent_id");
  CREATE INDEX "_three_col_v_path_idx" ON "_three_col_v" USING btree ("_path");
  CREATE INDEX "_three_col_v_column1_column1_background_image_idx" ON "_three_col_v" USING btree ("column1_background_image_id");
  CREATE INDEX "_three_col_v_column2_column2_background_image_idx" ON "_three_col_v" USING btree ("column2_background_image_id");
  CREATE INDEX "_three_col_v_column3_column3_background_image_idx" ON "_three_col_v" USING btree ("column3_background_image_id");
  CREATE INDEX "_grid_v_items_order_idx" ON "_grid_v_items" USING btree ("_order");
  CREATE INDEX "_grid_v_items_parent_id_idx" ON "_grid_v_items" USING btree ("_parent_id");
  CREATE INDEX "_grid_v_items_background_image_idx" ON "_grid_v_items" USING btree ("background_image_id");
  CREATE INDEX "_grid_v_order_idx" ON "_grid_v" USING btree ("_order");
  CREATE INDEX "_grid_v_parent_id_idx" ON "_grid_v" USING btree ("_parent_id");
  CREATE INDEX "_grid_v_path_idx" ON "_grid_v" USING btree ("_path");
  CREATE INDEX "_list_v_pinned_items_order_idx" ON "_list_v_pinned_items" USING btree ("_order");
  CREATE INDEX "_list_v_pinned_items_parent_id_idx" ON "_list_v_pinned_items" USING btree ("_parent_id");
  CREATE INDEX "_list_v_order_idx" ON "_list_v" USING btree ("_order");
  CREATE INDEX "_list_v_parent_id_idx" ON "_list_v" USING btree ("_parent_id");
  CREATE INDEX "_list_v_path_idx" ON "_list_v" USING btree ("_path");
  CREATE INDEX "_list_v_view_all_page_idx" ON "_list_v" USING btree ("view_all_page_id");
  CREATE INDEX "_list_v_background_image_idx" ON "_list_v" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_seo_version_seo_og_image_idx" ON "_pages_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_products_id_idx" ON "_pages_v_rels" USING btree ("products_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_tablet_sizes_tablet_filename_idx" ON "media" USING btree ("sizes_tablet_filename");
  CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");
  CREATE INDEX "products_updated_at_idx" ON "products" USING btree ("updated_at");
  CREATE INDEX "products_created_at_idx" ON "products" USING btree ("created_at");
  CREATE INDEX "products_rels_order_idx" ON "products_rels" USING btree ("order");
  CREATE INDEX "products_rels_parent_idx" ON "products_rels" USING btree ("parent_id");
  CREATE INDEX "products_rels_path_idx" ON "products_rels" USING btree ("path");
  CREATE INDEX "products_rels_media_id_idx" ON "products_rels" USING btree ("media_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_products_id_idx" ON "payload_locked_documents_rels" USING btree ("products_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "navigation_nav_items_sub_items_order_idx" ON "navigation_nav_items_sub_items" USING btree ("_order");
  CREATE INDEX "navigation_nav_items_sub_items_parent_id_idx" ON "navigation_nav_items_sub_items" USING btree ("_parent_id");
  CREATE INDEX "navigation_nav_items_sub_items_page_idx" ON "navigation_nav_items_sub_items" USING btree ("page_id");
  CREATE INDEX "navigation_nav_items_order_idx" ON "navigation_nav_items" USING btree ("_order");
  CREATE INDEX "navigation_nav_items_parent_id_idx" ON "navigation_nav_items" USING btree ("_parent_id");
  CREATE INDEX "navigation_nav_items_page_idx" ON "navigation_nav_items" USING btree ("page_id");
  CREATE INDEX "navigation_cta_buttons_order_idx" ON "navigation_cta_buttons" USING btree ("_order");
  CREATE INDEX "navigation_cta_buttons_parent_id_idx" ON "navigation_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "navigation_cta_buttons_page_idx" ON "navigation_cta_buttons" USING btree ("page_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "phero_buttons" CASCADE;
  DROP TABLE "phero" CASCADE;
  DROP TABLE "pcards_cards_details" CASCADE;
  DROP TABLE "pcards_cards" CASCADE;
  DROP TABLE "pcards" CASCADE;
  DROP TABLE "prows_rows_paragraphs" CASCADE;
  DROP TABLE "prows_rows" CASCADE;
  DROP TABLE "prows_box_items" CASCADE;
  DROP TABLE "prows" CASCADE;
  DROP TABLE "pband_items" CASCADE;
  DROP TABLE "pband" CASCADE;
  DROP TABLE "quote_paragraphs" CASCADE;
  DROP TABLE "quote" CASCADE;
  DROP TABLE "profile_paragraphs" CASCADE;
  DROP TABLE "profile_items" CASCADE;
  DROP TABLE "profile" CASCADE;
  DROP TABLE "pgrid_photos" CASCADE;
  DROP TABLE "pgrid" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "banner" CASCADE;
  DROP TABLE "hero_slides" CASCADE;
  DROP TABLE "hero" CASCADE;
  DROP TABLE "full_floating_items" CASCADE;
  DROP TABLE "full" CASCADE;
  DROP TABLE "two_col" CASCADE;
  DROP TABLE "three_col" CASCADE;
  DROP TABLE "grid_items" CASCADE;
  DROP TABLE "grid" CASCADE;
  DROP TABLE "list_pinned_items" CASCADE;
  DROP TABLE "list" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_phero_v_buttons" CASCADE;
  DROP TABLE "_phero_v" CASCADE;
  DROP TABLE "_pcards_v_cards_details" CASCADE;
  DROP TABLE "_pcards_v_cards" CASCADE;
  DROP TABLE "_pcards_v" CASCADE;
  DROP TABLE "_prows_v_rows_paragraphs" CASCADE;
  DROP TABLE "_prows_v_rows" CASCADE;
  DROP TABLE "_prows_v_box_items" CASCADE;
  DROP TABLE "_prows_v" CASCADE;
  DROP TABLE "_pband_v_items" CASCADE;
  DROP TABLE "_pband_v" CASCADE;
  DROP TABLE "_quote_v_paragraphs" CASCADE;
  DROP TABLE "_quote_v" CASCADE;
  DROP TABLE "_profile_v_paragraphs" CASCADE;
  DROP TABLE "_profile_v_items" CASCADE;
  DROP TABLE "_profile_v" CASCADE;
  DROP TABLE "_pgrid_v_photos" CASCADE;
  DROP TABLE "_pgrid_v" CASCADE;
  DROP TABLE "_contact_v" CASCADE;
  DROP TABLE "_banner_v" CASCADE;
  DROP TABLE "_hero_v_slides" CASCADE;
  DROP TABLE "_hero_v" CASCADE;
  DROP TABLE "_full_v_floating_items" CASCADE;
  DROP TABLE "_full_v" CASCADE;
  DROP TABLE "_two_col_v" CASCADE;
  DROP TABLE "_three_col_v" CASCADE;
  DROP TABLE "_grid_v_items" CASCADE;
  DROP TABLE "_grid_v" CASCADE;
  DROP TABLE "_list_v_pinned_items" CASCADE;
  DROP TABLE "_list_v" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "products" CASCADE;
  DROP TABLE "products_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "navigation_nav_items_sub_items" CASCADE;
  DROP TABLE "navigation_nav_items" CASCADE;
  DROP TABLE "navigation_cta_buttons" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TYPE "public"."enum_phero_buttons_style";
  DROP TYPE "public"."enum_pgrid_photos_size";
  DROP TYPE "public"."enum_banner_background_color";
  DROP TYPE "public"."enum_banner_padding";
  DROP TYPE "public"."enum_hero_slides_background_color";
  DROP TYPE "public"."enum_full_background_color";
  DROP TYPE "public"."enum_full_padding";
  DROP TYPE "public"."enum_two_col_ratio";
  DROP TYPE "public"."enum_two_col_left_column_background_color";
  DROP TYPE "public"."enum_two_col_right_column_background_color";
  DROP TYPE "public"."enum_three_col_column1_background_color";
  DROP TYPE "public"."enum_three_col_column2_background_color";
  DROP TYPE "public"."enum_three_col_column3_background_color";
  DROP TYPE "public"."enum_grid_items_background_color";
  DROP TYPE "public"."enum_grid_alignment";
  DROP TYPE "public"."enum_grid_vertical_alignment";
  DROP TYPE "public"."enum_grid_padding";
  DROP TYPE "public"."enum_grid_gap";
  DROP TYPE "public"."enum_list_data_source";
  DROP TYPE "public"."enum_list_layout";
  DROP TYPE "public"."enum_list_columns";
  DROP TYPE "public"."enum_list_sort_field";
  DROP TYPE "public"."enum_list_view_all_link_type";
  DROP TYPE "public"."enum_list_background_color";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__phero_v_buttons_style";
  DROP TYPE "public"."enum__pgrid_v_photos_size";
  DROP TYPE "public"."enum__banner_v_background_color";
  DROP TYPE "public"."enum__banner_v_padding";
  DROP TYPE "public"."enum__hero_v_slides_background_color";
  DROP TYPE "public"."enum__full_v_background_color";
  DROP TYPE "public"."enum__full_v_padding";
  DROP TYPE "public"."enum__two_col_v_ratio";
  DROP TYPE "public"."enum__two_col_v_left_column_background_color";
  DROP TYPE "public"."enum__two_col_v_right_column_background_color";
  DROP TYPE "public"."enum__three_col_v_column1_background_color";
  DROP TYPE "public"."enum__three_col_v_column2_background_color";
  DROP TYPE "public"."enum__three_col_v_column3_background_color";
  DROP TYPE "public"."enum__grid_v_items_background_color";
  DROP TYPE "public"."enum__grid_v_alignment";
  DROP TYPE "public"."enum__grid_v_vertical_alignment";
  DROP TYPE "public"."enum__grid_v_padding";
  DROP TYPE "public"."enum__grid_v_gap";
  DROP TYPE "public"."enum__list_v_data_source";
  DROP TYPE "public"."enum__list_v_layout";
  DROP TYPE "public"."enum__list_v_columns";
  DROP TYPE "public"."enum__list_v_sort_field";
  DROP TYPE "public"."enum__list_v_view_all_link_type";
  DROP TYPE "public"."enum__list_v_background_color";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_navigation_nav_items_sub_items_link_type";
  DROP TYPE "public"."enum_navigation_nav_items_link_type";
  DROP TYPE "public"."enum_navigation_cta_buttons_style";
  DROP TYPE "public"."enum_navigation_cta_buttons_link_type";
  DROP TYPE "public"."enum_navigation_style";`)
}

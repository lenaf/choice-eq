import type { Block, Field } from "payload";

const anchorField: Field = {
  name: "anchor",
  type: "text",
  label: "Section ID",
  admin: { description: "Lets menu links jump here, e.g. who-we-are links from /#who-we-are" },
};

const sectionAdmin: Block["admin"] = {
  components: { Label: "@/payload/components/SectionRowLabel#SectionRowLabel" },
  disableBlockName: true,
};

const textList = (name: string, label: string): Field => ({
  name,
  type: "array",
  label,
  admin: { initCollapsed: true },
  fields: [{ name: "text", type: "textarea", required: true, admin: { rows: 2 } }],
});

const image = (name = "image", required = true): Field => ({
  name,
  type: "upload",
  relationTo: "media" as never,
  required,
});

export const PhotoHero: Block = {
  slug: "photoHero",
  dbName: "phero",
  labels: { singular: "Photo Hero", plural: "Photo Heroes" },
  admin: sectionAdmin,
  fields: [
    image(),
    { name: "eyebrow", type: "text", label: "Small text above heading" },
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea", admin: { rows: 2 } },
    {
      name: "buttons",
      type: "array",
      maxRows: 2,
      fields: [
        {
          type: "row",
          fields: [
            { name: "label", type: "text", required: true, admin: { width: "40%" } },
            { name: "href", type: "text", required: true, label: "Link", admin: { width: "40%", placeholder: "#reach-out" } },
            {
              name: "style",
              type: "select",
              defaultValue: "solid",
              options: [
                { label: "Solid", value: "solid" },
                { label: "Outline", value: "outline" },
              ],
              admin: { width: "20%" },
            },
          ],
        },
      ],
    },
  ],
};

export const PhotoCards: Block = {
  slug: "photoCards",
  dbName: "pcards",
  labels: { singular: "Photo Cards", plural: "Photo Cards" },
  admin: sectionAdmin,
  fields: [
    anchorField,
    { name: "eyebrow", type: "text", label: "Small text above heading" },
    { name: "heading", type: "textarea", admin: { rows: 2 } },
    { name: "intro", type: "textarea", admin: { rows: 3 } },
    {
      name: "cards",
      type: "array",
      fields: [image(), { name: "title", type: "text", required: true }, { name: "lead", type: "textarea", admin: { rows: 2 } }, textList("details", "More text")],
    },
  ],
};

export const PhotoRows: Block = {
  slug: "photoRows",
  dbName: "prows",
  labels: { singular: "Photo + Text Rows", plural: "Photo + Text Rows" },
  admin: sectionAdmin,
  fields: [
    anchorField,
    { name: "eyebrow", type: "text", label: "Small text above heading" },
    { name: "heading", type: "textarea", admin: { rows: 2 } },
    {
      name: "rows",
      type: "array",
      admin: { description: "Photos alternate left and right" },
      fields: [image(), { name: "title", type: "text", required: true }, textList("paragraphs", "Paragraphs")],
    },
    {
      name: "box",
      type: "group",
      label: "Box below rows",
      fields: [
        { name: "title", type: "text" },
        { name: "text", type: "textarea", admin: { rows: 2 } },
        textList("items", "List"),
        {
          type: "row",
          fields: [
            { name: "buttonLabel", type: "text", admin: { width: "50%" } },
            { name: "buttonHref", type: "text", label: "Button link", admin: { width: "50%", placeholder: "#reach-out" } },
          ],
        },
      ],
    },
  ],
};

export const PhotoBand: Block = {
  slug: "photoBand",
  dbName: "pband",
  labels: { singular: "Dark Photo Band", plural: "Dark Photo Bands" },
  admin: sectionAdmin,
  fields: [
    anchorField,
    image(),
    { name: "brighten", type: "checkbox", label: "Brighten a dark photo", defaultValue: false },
    { name: "eyebrow", type: "text", label: "Small text above heading" },
    { name: "heading", type: "textarea", admin: { rows: 3 } },
    { name: "listHeading", type: "text" },
    textList("items", "Checklist"),
  ],
};

export const QuoteBlock: Block = {
  slug: "quote",
  dbName: "quote",
  labels: { singular: "Quote", plural: "Quotes" },
  admin: sectionAdmin,
  fields: [textList("paragraphs", "Quote paragraphs"), { name: "attribution", type: "text" }],
};

export const Profile: Block = {
  slug: "profile",
  dbName: "profile",
  labels: { singular: "Profile", plural: "Profiles" },
  admin: sectionAdmin,
  fields: [
    anchorField,
    image(),
    { name: "name", type: "text", required: true },
    { name: "role", type: "text" },
    textList("paragraphs", "Paragraphs"),
    textList("items", "List"),
  ],
};

export const PhotoGrid: Block = {
  slug: "photoGrid",
  dbName: "pgrid",
  labels: { singular: "Photo Grid", plural: "Photo Grids" },
  admin: sectionAdmin,
  fields: [
    anchorField,
    { name: "heading", type: "text" },
    { name: "text", type: "textarea", admin: { rows: 2 } },
    {
      name: "photos",
      type: "array",
      fields: [
        image(),
        {
          name: "size",
          type: "select",
          defaultValue: "normal",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Wide", value: "wide" },
            { label: "Tall", value: "tall" },
            { label: "Large", value: "large" },
          ],
        },
      ],
    },
  ],
};

export const ContactBand: Block = {
  slug: "contactBand",
  dbName: "contact",
  labels: { singular: "Contact Band", plural: "Contact Bands" },
  admin: sectionAdmin,
  fields: [
    anchorField,
    image("backgroundImage", false),
    { name: "heading", type: "text", required: true },
    { name: "text", type: "textarea", admin: { rows: 2 } },
    { name: "phoneLabel", type: "text", label: "Phone button prefix", defaultValue: "Call/text" },
    { name: "socialText", type: "text", label: "Text before social links" },
  ],
};

export const homeBlocks = [PhotoHero, PhotoCards, PhotoRows, PhotoBand, QuoteBlock, Profile, PhotoGrid, ContactBand];

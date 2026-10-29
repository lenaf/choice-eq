import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media" as const,
  admin: {
    defaultColumns: ["filename", "alt", "updatedAt"],
    group: "📷 Media",
  },
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (req.file && !data.alt) {
          data.alt = req.file.name
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ");
        }
        return data;
      },
    ],
  },
  upload: {
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      console.log(
        "[Media] Create access check - user:",
        user ? "authenticated" : "not authenticated",
      );
      return !!user;
    },
    update: ({ req: { user } }) => {
      console.log(
        "[Media] Update access check - user:",
        user ? "authenticated" : "not authenticated",
      );
      return !!user;
    },
    delete: ({ req: { user } }) => {
      console.log(
        "[Media] Delete access check - user:",
        user ? "authenticated" : "not authenticated",
      );
      return !!user;
    },
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "overlayColor",
      type: "radio",
      label: "Photo overlay",
      defaultValue: "auto",
      options: [
        { label: "Section default", value: "auto" },
        { label: "Dark", value: "dark" },
        { label: "Charcoal", value: "charcoal" },
        { label: "Green", value: "green" },
        { label: "Plum", value: "plum" },
        { label: "None", value: "none" },
      ],
      admin: { description: "Tints the photo when text sits on top of it (Photo Hero, Contact Band)", layout: "horizontal" },
    },
    {
      name: "overlayStrength",
      type: "radio",
      label: "Overlay strength",
      defaultValue: "auto",
      options: [
        { label: "Section default", value: "auto" },
        { label: "Light", value: "light" },
        { label: "Medium", value: "medium" },
        { label: "Strong", value: "strong" },
      ],
      admin: { condition: (data) => data?.overlayColor !== "none", layout: "horizontal" },
    },
  ],
};

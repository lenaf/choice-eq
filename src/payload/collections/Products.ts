import type { CollectionConfig } from "payload";
import { slugify } from "../utils/slugify";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "price", "inventory", "featured", "order"],
    description: "Products sold in the shop",
    group: "🛒 Shop",
    listSearchableFields: ["name", "slug"],
    preview: (doc) => `${process.env.NEXT_PUBLIC_SERVER_URL}/products/${doc.slug}`,
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug && data.name) data.slug = slugify(data.name);
        return data;
      },
    ],
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      admin: { position: "sidebar", description: "URL path. Filled from the name if left empty." },
    },
    {
      type: "row",
      fields: [
        { name: "price", type: "number", required: true, min: 0, label: "Price (USD)", admin: { step: 0.01, width: "50%" } },
        {
          name: "inventory",
          type: "number",
          min: 0,
          label: "In Stock",
          admin: { width: "50%", description: "Leave empty for unlimited. 0 shows Sold Out." },
        },
      ],
    },
    { name: "summary", type: "textarea", label: "Short Description", admin: { rows: 2 } },
    { name: "description", type: "richText" },
    {
      name: "images",
      type: "upload",
      relationTo: "media" as never,
      hasMany: true,
      admin: { description: "First image is the cover" },
    },
    { name: "featured", type: "checkbox", label: "Featured", defaultValue: false, admin: { position: "sidebar" } },
    { name: "order", type: "number", label: "Display Order", admin: { position: "sidebar" } },
  ],
};

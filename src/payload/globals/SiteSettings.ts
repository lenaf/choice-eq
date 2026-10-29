import type { GlobalConfig } from "payload";
import { BODY_FONTS, DEFAULT_BODY_FONT, DEFAULT_HEADING_FONT, HEADING_FONTS, THEME_COLOR_FIELDS } from "@/lib/siteTheme";
import { serverURL } from "@/lib/serverUrl";
import { revalidate } from "../utils/revalidate";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: {
    group: "⚙️ Settings",
    livePreview: { url: () => `${serverURL}/next/preview?slug=home` },
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => !!user,
  },
  hooks: {
    afterChange: [
      async () => { await revalidate(["/(.*)"]) },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Branding",
          fields: [
            {
              type: "row",
              fields: [
                { name: "siteName", type: "text", label: "Site Name", admin: { width: "50%" } },
                { name: "tagline", type: "text", label: "Tagline", admin: { width: "50%" } },
              ],
            },
            {
              type: "row",
              fields: [
                { name: "logo", type: "upload", relationTo: "media" as never, label: "Header logo", admin: { width: "50%" } },
                { name: "footerLogo", type: "upload", relationTo: "media" as never, label: "Footer logo", admin: { width: "50%" } },
              ],
            },
          ],
        },
        {
          label: "Look & feel",
          fields: [
            {
              name: "theme",
              type: "group",
              label: false,
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "headingFont",
                      type: "select",
                      defaultValue: DEFAULT_HEADING_FONT,
                      label: "Heading font",
                      options: Object.entries(HEADING_FONTS).map(([value, font]) => ({ label: font.label, value })),
                      admin: { width: "50%" },
                    },
                    {
                      name: "bodyFont",
                      type: "select",
                      defaultValue: DEFAULT_BODY_FONT,
                      label: "Body font",
                      options: Object.entries(BODY_FONTS).map(([value, font]) => ({ label: font.label, value })),
                      admin: { width: "50%" },
                    },
                  ],
                },
                {
                  name: "colors",
                  type: "group",
                  admin: { description: "Text on each color switches between white and dark automatically" },
                  fields: THEME_COLOR_FIELDS.map((color) => ({
                    name: color.name,
                    type: "text" as const,
                    defaultValue: color.defaultValue,
                    label: color.label,
                    admin: { components: { Field: "@/payload/components/ColorPickerField#ColorPickerField" } },
                  })),
                },
              ],
            },
          ],
        },
        {
          label: "Contact",
          fields: [
            {
              name: "contact",
              type: "group",
              label: false,
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "email", type: "email", label: "Email", admin: { width: "50%" } },
                    { name: "phone", type: "text", label: "Phone", admin: { width: "50%" } },
                  ],
                },
                { name: "addressLine1", type: "text", label: "Address Line 1" },
                { name: "addressLine2", type: "text", label: "Address Line 2" },
                {
                  type: "row",
                  fields: [
                    { name: "city", type: "text", admin: { width: "40%" } },
                    { name: "state", type: "text", admin: { width: "30%" } },
                    { name: "zip", type: "text", admin: { width: "30%" } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Social Media",
          fields: [
            {
              name: "socialMedia",
              type: "group",
              label: false,
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "instagram", type: "text", label: "Instagram", admin: { width: "50%" } },
                    { name: "facebook", type: "text", label: "Facebook", admin: { width: "50%" } },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    { name: "twitter", type: "text", label: "Twitter / X", admin: { width: "50%" } },
                    { name: "tiktok", type: "text", label: "TikTok", admin: { width: "50%" } },
                  ],
                },
                { name: "youtube", type: "text", label: "YouTube" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

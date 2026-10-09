import type { SiteSetting } from "@/payload-types";
import { RenderSections } from "@/components/RenderSections";
import { ContactBandBlock } from "./ContactBandBlock";
import { PhotoBandBlock } from "./PhotoBandBlock";
import { PhotoCardsBlock } from "./PhotoCardsBlock";
import { PhotoGridBlock } from "./PhotoGridBlock";
import { PhotoHeroBlock } from "./PhotoHeroBlock";
import { PhotoRowsBlock } from "./PhotoRowsBlock";
import { ProfileBlock } from "./ProfileBlock";
import { QuoteBlock } from "./QuoteBlock";
import type { PageSection } from "./types";

export function RenderBlocks({ sections, settings }: { sections: PageSection[]; settings: SiteSetting | null }) {
  return (
    <>
      {sections.map((section, i) => {
        const key = section.id || i;
        switch (section.blockType) {
          case "contactBand":
            return <ContactBandBlock key={key} block={section} settings={settings} />;
          case "photoBand":
            return <PhotoBandBlock key={key} block={section} />;
          case "photoCards":
            return <PhotoCardsBlock key={key} block={section} />;
          case "photoGrid":
            return <PhotoGridBlock key={key} block={section} />;
          case "photoHero":
            return <PhotoHeroBlock key={key} block={section} />;
          case "photoRows":
            return <PhotoRowsBlock key={key} block={section} />;
          case "profile":
            return <ProfileBlock key={key} block={section} />;
          case "quote":
            return <QuoteBlock key={key} block={section} />;
          default:
            return <RenderSections key={key} sections={[section]} />;
        }
      })}
    </>
  );
}

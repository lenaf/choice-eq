import * as migration_20261028_221953_initial from './20261028_221953_initial';
import * as migration_20261028_225331_blob_storage from './20261028_225331_blob_storage';
import * as migration_20261029_134623_live_preview_autosave from './20261029_134623_live_preview_autosave';
import * as migration_20261029_140951_photo_overlay from './20261029_140951_photo_overlay';
import * as migration_20261029_143859_overlay_brand_colors from './20261029_143859_overlay_brand_colors';
import * as migration_20261029_144651_overlay_on_media from './20261029_144651_overlay_on_media';
import * as migration_20261029_150401_site_theme_and_logos from './20261029_150401_site_theme_and_logos';

export const migrations = [
  {
    up: migration_20261028_221953_initial.up,
    down: migration_20261028_221953_initial.down,
    name: '20261028_221953_initial',
  },
  {
    up: migration_20261028_225331_blob_storage.up,
    down: migration_20261028_225331_blob_storage.down,
    name: '20261028_225331_blob_storage',
  },
  {
    up: migration_20261029_134623_live_preview_autosave.up,
    down: migration_20261029_134623_live_preview_autosave.down,
    name: '20261029_134623_live_preview_autosave',
  },
  {
    up: migration_20261029_140951_photo_overlay.up,
    down: migration_20261029_140951_photo_overlay.down,
    name: '20261029_140951_photo_overlay',
  },
  {
    up: migration_20261029_143859_overlay_brand_colors.up,
    down: migration_20261029_143859_overlay_brand_colors.down,
    name: '20261029_143859_overlay_brand_colors',
  },
  {
    up: migration_20261029_144651_overlay_on_media.up,
    down: migration_20261029_144651_overlay_on_media.down,
    name: '20261029_144651_overlay_on_media',
  },
  {
    up: migration_20261029_150401_site_theme_and_logos.up,
    down: migration_20261029_150401_site_theme_and_logos.down,
    name: '20261029_150401_site_theme_and_logos'
  },
];

import * as migration_20261028_221953_initial from './20261028_221953_initial';
import * as migration_20261028_225331_blob_storage from './20261028_225331_blob_storage';
import * as migration_20261029_134623_live_preview_autosave from './20261029_134623_live_preview_autosave';

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
    name: '20261029_134623_live_preview_autosave'
  },
];

import * as migration_20261028_221953_initial from './20261028_221953_initial';
import * as migration_20261028_225331_blob_storage from './20261028_225331_blob_storage';

export const migrations = [
  {
    up: migration_20261028_221953_initial.up,
    down: migration_20261028_221953_initial.down,
    name: '20261028_221953_initial',
  },
  {
    up: migration_20261028_225331_blob_storage.up,
    down: migration_20261028_225331_blob_storage.down,
    name: '20261028_225331_blob_storage'
  },
];

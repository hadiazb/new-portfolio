import { storage } from '../rootPersistConfig'

export const adminPersistConfig = {
    key: 'admin',
    keyPrefix: 'portfolio-',
    storage,
    blacklist: [''],
    version: 1.0,
}

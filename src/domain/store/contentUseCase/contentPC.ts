import { storage } from '../rootPersistConfig'

export const contentPersistConfig = {
    key: 'content',
    keyPrefix: 'portfolio-',
    storage,
    blacklist: [''],
    version: 1.0,
}

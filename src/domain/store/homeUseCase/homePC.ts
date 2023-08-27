import { storage } from '../rootPersistConfig'

export const homePersistConfig = {
    key: 'home',
    keyPrefix: 'portfolio-',
    storage,
    blacklist: [''],
    version: 1.0,
}

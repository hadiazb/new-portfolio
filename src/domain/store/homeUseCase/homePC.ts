import { encrypt } from '../encrypt'
import { storage } from '../rootPersistConfig'

export const homePersistConfig = {
    key: 'home',
    keyPrefix: 'portfolio-',
    storage,
    blacklist: [''],
    version: 1.0,
    transforms: process.env.NODE_ENV !== 'development' ? [encrypt] : undefined,
}

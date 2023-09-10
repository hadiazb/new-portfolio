import { encrypt } from '../encrypt'
import { storage } from '../rootPersistConfig'

export const contentPersistConfig = {
    key: 'content',
    keyPrefix: 'portfolio-',
    storage,
    blacklist: [''],
    version: 1.0,
    transforms: process.env.NODE_ENV !== 'development' ? [encrypt] : undefined,
}

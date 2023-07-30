import { storage } from '../rootPersistConfig'

export const authPersistConfig = {
    key: 'auth',
    keyPrefix: 'portfolio-',
    storage,
    blacklist: [''],
    version: 1.0,
}

import { encryptTransform } from 'redux-persist-transform-encrypt'

export const encrypt = encryptTransform({
    secretKey: process.env.NEXT_PUBLIC_SECRET_STORE ?? ' ',
    onError: (err) => {
        console.error(err)
    },
})
import { AxiosError, AxiosResponse, isAxiosError } from 'axios'

// store
import { AppDispatch } from '@/domain/store/store'

// actions
import { onError, onLoading, onLoad } from '.'

// services
import { contentService } from '@/domain/services/content'

// interfaces
import { Option } from '@/domain/models'

export interface Management<T> {
    onSuccess?: (data: T) => void
    onErr?: (err: AxiosError) => void
}

export const onLoadOptionMenu =
    ({ onSuccess, onErr }: Management<AxiosResponse>) =>
    async (dispatch: AppDispatch) => {
        dispatch(onLoading())
        try {
            const resp = await contentService.getMobileMenuOptions<Option[]>()
            const { data } = resp
            dispatch(onLoad(data))

            if (onSuccess) {
                onSuccess(resp)
            }
        } catch (error) {
            if (!isAxiosError(error)) return dispatch(onError())

            dispatch(onError())
            if (onErr) {
                onErr(error)
            }
        }
    }

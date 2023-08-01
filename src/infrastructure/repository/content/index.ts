import { AxiosRequestConfig } from 'axios'

// api
import { http } from '../../api'

export const contentRepository = {
    getMobileMenuOptions: async (url: string, config?: AxiosRequestConfig) =>
        await http.get(url, config),
}

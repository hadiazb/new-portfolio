import { AxiosRequestConfig } from 'axios'

// api
import { http } from '../../api'

export const contentRepository = {
    getMobileMenuOptions: async <T>(config?: AxiosRequestConfig) =>
        await http.get<T>('/content/home', config),
}

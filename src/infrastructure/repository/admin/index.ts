import { AxiosRequestConfig } from 'axios'

// api
import { http } from '../../api'

export const adminRepository = {
    createMobileMenu: async <T>(url: string, data: T, config?: AxiosRequestConfig) =>
        await http.post(url, data, config),
}

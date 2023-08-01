import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios'

export const api = axios.create({
    baseURL: 'https://hello-world',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
})

const handleErr = (error: unknown): AxiosResponse | undefined => {
    if (isAxiosError(error)) {
        return error.response
    }
}

const get = async <T>(
    url: string,
    config?: AxiosRequestConfig,
): Promise<AxiosResponse<T> | undefined> => {
    try {
        return await api.get<T>(url, config)
    } catch (error) {
        handleErr(error)
    }
}

const _delete = async <T>(
    url: string,
    config?: AxiosRequestConfig,
): Promise<AxiosResponse<T> | undefined> => {
    try {
        return await api.delete<T>(url, config)
    } catch (error) {
        handleErr(error)
    }
}

const put = async <T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig,
): Promise<AxiosResponse<T, D> | undefined> => {
    try {
        return await api.put<T>(url, data, config)
    } catch (error) {
        handleErr(error)
    }
}

const post = async <T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig,
): Promise<AxiosResponse<T, D> | undefined> => {
    try {
        return await api.post<T>(url, data, config)
    } catch (error) {
        handleErr(error)
    }
}

export const http = {
    api,
    get,
    delete: _delete,
    put,
    post,
}

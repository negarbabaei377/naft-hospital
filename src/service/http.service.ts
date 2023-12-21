import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

class Http {
    private instance: AxiosInstance | null = null

    private get http(): AxiosInstance {
        return this.instance != null ? this.instance : this.initHttp()
    }

    initHttp() {
        const http = axios.create({
            baseURL: process.env.BASE_URL
        })

        http.interceptors.request.use(
            config => config,
            error => Promise.reject(error)
        )

        http.interceptors.response.use(
            response => response,
            response => {
                const {error} = response

                return error
            }
        )

        this.instance = http

        return http
    }

    get<T = any, R = AxiosResponse<T>>(url: string, query?: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.get<T, R>(url, config)
    }

    post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        return this.http.post<T, R>(url, data, config)
    }

    put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        return this.http.put<T, R>(`data`, data, config)
    }

    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.delete<T, R>(url, config)
    }
}

export const http = new Http()
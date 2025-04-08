/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/



// Define interfaces for better type checking
interface RequestOptions {
    headers?: Record<string, string>;
    params?: Record<string, string>;
    giveDetails?: boolean;
    timeOut?: number;
    UseTimeOut?: boolean;
    Authorization?: string;
}

interface DetailedResponse<T> {
    status: number;
    json: T;
}

// Error handler function
export function jsonErrorHandler(error: any): Record<string, string> {
    return {
        notJsonError: 'unexpected end of json data'
    };
}

// Helper function to build URL with query parameters
function buildUrl(url: string, params?: Record<string, string>): string {
    if (params) {
        return `${url}?${new URLSearchParams(params).toString()}`;
    }
    return url;
}


// Class implementation with all HTTP methods
class RequestClient {
    public withCredentials: boolean;
    constructor(withCredentials: boolean = false) {
        this.withCredentials = withCredentials
    }

    async get<T = any>(url: string, options: RequestOptions = {}): Promise<T | DetailedResponse<T>> {

        if (!options.headers) options.headers = {};
        if (options.Authorization) {
            options.headers["Authorization"] = `Bearer ${options.Authorization.normalize()}`
        }


        let formattedUrl;
        if (options.params) formattedUrl = buildUrl(url, options.params);
        else formattedUrl = url;



        (options.UseTimeOut === undefined) && (options.UseTimeOut = true);
        (options.timeOut === undefined) && (options.timeOut = 10000);
        let timeOut: undefined | any;
        if (options.UseTimeOut) {
            timeOut = setTimeout(() => {
                throw "Failed To Request Data from Server as Timeout"
            }, options.timeOut);
        }


        const response = await fetch(formattedUrl, {
            method: 'GET',
            headers: options.headers,
            credentials :this.withCredentials ? "include" : undefined
        });

        if (options.UseTimeOut) {
            clearTimeout(timeOut)
        }


        if (options.giveDetails) {
            const status = response.status;
            const json = await response.json().catch(jsonErrorHandler) as T;
            return {
                status,
                json
            };
        }

        return await response.json().catch(jsonErrorHandler) as T;
    }



    async post<T = any>(url: string, json: Record<string, any> = {}, options: RequestOptions = {}): Promise<T | DetailedResponse<T>> {

        if (!options.headers) options.headers = {};
        if (options.Authorization) {
            options.headers["Authorization"] = `Bearer ${options.Authorization.normalize()}`
        }
    
        let formattedUrl;
        if (options.params) formattedUrl = buildUrl(url, options.params);
        else formattedUrl = url;
    
    
        (options.UseTimeOut === undefined) && (options.UseTimeOut = true);
        (options.timeOut === undefined) && (options.timeOut = 10000);
        let timeOut: undefined | any;
        if (options.UseTimeOut) {
            timeOut = setTimeout(() => {
                throw "Failed To Request Data from Server as Timeout"
            }, options.timeOut);
        }
    
    
        const response = await fetch(formattedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(json),
            credentials :this.withCredentials ? "include" : undefined,
        });
    
    
        if (options.UseTimeOut) {
            clearTimeout(timeOut)
        }
    
        if (options.giveDetails) {
            const status = response.status;
            const json = await response.json().catch(jsonErrorHandler) as T;
            return {
                status,
                json
            };
        }
    
        return await response.json().catch(jsonErrorHandler) as T;
    }
    

    async put<T = any>(url: string, json: Record<string, any> = {}, options: RequestOptions = {}): Promise<T | DetailedResponse<T>> {
        if (!options.headers) options.headers = {};
        if (options.Authorization) {
            options.headers["Authorization"] = `Bearer ${options.Authorization.normalize()}`
        }

        let formattedUrl;
        if (options.params) formattedUrl = buildUrl(url, options.params);
        else formattedUrl = url;


        (options.UseTimeOut === undefined) && (options.UseTimeOut = true);
        (options.timeOut === undefined) && (options.timeOut = 10000);
        let timeOut: undefined | any;
        if (options.UseTimeOut) {
            timeOut = setTimeout(() => {
                throw "Failed To Request Data from Server as Timeout"
            }, options.timeOut);
        }


        const response = await fetch(formattedUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(json),
            credentials :this.withCredentials ? "include" : undefined,
        });

        if (options.UseTimeOut) {
            clearTimeout(timeOut)
        }


        if (options.giveDetails) {
            const status = response.status;
            const json = await response.json().catch(jsonErrorHandler) as T;
            return {
                status,
                json
            };
        }

        return await response.json().catch(jsonErrorHandler) as T;
    }



    async delete<T = any>(url: string, options: RequestOptions = {}): Promise<T | DetailedResponse<T>> {
        if (!options.headers) options.headers = {};
        if (options.Authorization) {
            options.headers["Authorization"] = `Bearer ${options.Authorization.normalize()}`
        }
    
        let formattedUrl;
        if (options.params) formattedUrl = buildUrl(url, options.params);
        else formattedUrl = url;
    
    
        (options.UseTimeOut === undefined) && (options.UseTimeOut = true);
        (options.timeOut === undefined) && (options.timeOut = 10000);
        let timeOut: undefined | any;
        if (options.UseTimeOut) {
            timeOut = setTimeout(() => {
                throw "Failed To Request Data from Server as Timeout"
            }, options.timeOut);
        }
    
    
        const response = await fetch(formattedUrl, {
            method: 'DELETE',
            headers: options.headers,
            credentials :this.withCredentials ? "include" : undefined
        });
    
    
        if (options.UseTimeOut) {
            clearTimeout(timeOut)
        }
    
        if (options.giveDetails) {
            const status = response.status;
            const json = await response.json().catch(jsonErrorHandler) as T;
            return {
                status,
                json
            };
        }
    
        return await response.json().catch(jsonErrorHandler) as T;
    }

}

export default RequestClient;
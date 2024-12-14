interface FetcherProps {
    resource: string,
    method: 'GET' | "POST" | "PUT"
    baseUrl?: string
    upload?: unknown
    id?: number
}

export const fetcher = async ({ method, resource, baseUrl, upload, id}: FetcherProps) => {
    if (!resource) return
    const url = baseUrl ||  "http://85.192.49.26:8888/"
    const res = await fetch(`${url}${resource}${id ? '/'+id : ''}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: upload ? JSON.stringify(upload) : undefined
    })
    const data = await res.json()

    return data
}
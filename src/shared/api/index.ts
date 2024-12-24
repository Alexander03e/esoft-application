interface FetcherProps {
    resource: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    baseUrl?: string;
    upload?: unknown;
    id?: number;
    params?: Record<string, string>[];
    search?: string;
    additionalUrl?: string;
}

export const fetcher = async ({
    method,
    resource,
    baseUrl,
    upload,
    id,
    search,
    additionalUrl,
}: FetcherProps) => {
    if (!resource) return;
    const url = baseUrl || 'http://85.192.49.26:8888/';
    let fetchUrl = `${url}${resource}${id ? '/' + id : ''}`;

    if (search) {
        fetchUrl += `/find/${search}`;
    }

    if (additionalUrl) {
        fetchUrl += additionalUrl;
    }

    const res = await fetch(fetchUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
        method,
        body: upload ? JSON.stringify(upload) : undefined,
    });
    const data = await res.json();

    return data;
};

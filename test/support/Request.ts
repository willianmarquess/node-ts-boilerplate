type RequestParams = {
    path: string;
    method?: 'POST' | 'GET';
    body?: object;
    headers?: [string, string][];
};

type RequestResponse = {
    status: number;
    body: object;
};

export default async function ({ path, body, method, headers }: RequestParams): Promise<RequestResponse> {
    const url = `http://localhost:3333/${path}`.replace('//', '/');
    const result = await fetch(url, {
        method: method || 'GET',
        headers: headers,
        body: JSON.stringify(body),
    });

    const bodyResponse = await result.json();

    return {
        status: result.status,
        body: bodyResponse,
    };
}

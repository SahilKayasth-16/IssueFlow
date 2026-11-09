const BASE_URL: string = import.meta.env.VITE_API_URL ?? 'http://localhost:5070/api';

interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: unknown;
}

export async function api<T>(path: string, {method = 'GET', body }: RequestOptions = {}): Promise<T> {
    const token = localStorage.getItem('token');
    
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;

    const init: RequestInit = { method, headers };
    if (body !== undefined) init.body = JSON.stringify(body);

    const res = await fetch(`${BASE_URL}${path}`, init);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) throw new Error((data as { message?: string }).message ?? 'Something went wrong.');
    return data as T;
}
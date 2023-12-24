import { lastValueFrom, Observable } from "rxjs";

export const adjustRpcResponse = async <T>(response: Observable<T>): Promise<T> => {
    try {
        return await lastValueFrom(response);
    } catch (e) {
        throw e;
    }
}
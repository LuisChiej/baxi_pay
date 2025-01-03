import { ERROR_CODE } from "./base";

export type ServiceResponse = {
    status: 'success' | 'error' | 'pending';
    message: string;
    code: 200 | ERROR_CODE;
    data?: Record<string, unknown>;
    errors?: Array<unknown>
}
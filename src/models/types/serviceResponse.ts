import { ERROR_CODE } from "./base";

export type ServiceResponse = {
    status: 'success' | 'error' | 'pending';
    message: string;
    code: 200 | ERROR_CODE;
    data?: {
        rawOutput?: Record<string, string | null>;
        user?: {
            rawOutput?: Record<string, string | null>;
            [x: string]: unknown;
        };
        [x: string]: unknown;
    };
    errors?: Array<unknown>
}
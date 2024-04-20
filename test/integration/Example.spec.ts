import { describe, expect, it } from '@jest/globals';
import Request from '../support/Request';

describe('Get /Example', () => {
    describe('when the route is called', () => {
        it('should return statusCode 200 and an expected body', async () => {
            const { status, body } = await Request({
                path: 'example',
            });

            expect(status).toBe(200);
            expect(body).toEqual({
                message: 'example',
            });
        });
    });
});

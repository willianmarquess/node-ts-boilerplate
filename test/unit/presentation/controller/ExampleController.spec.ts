import ExampleController from '@/presentation/controllers/ExampleController';
import { describe, expect, it } from '@jest/globals';

describe('Example Controller', () => {
    describe('when new instance is created', () => {
        it('should return an valid instance', () => {
            const exampleController = new ExampleController();
            expect(exampleController).toBeInstanceOf(ExampleController);
        });
    });

    describe('when example method is called', () => {
        it('should return an expected string message', () => {
            const exampleController = new ExampleController();
            const result = exampleController.example();
            expect(result).toBe('example');
        });
    });
});

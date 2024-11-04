import type { Assertion, AsymmetricMatcherFunction } from 'vitest';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

interface CustomMatchers<R = unknown> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatcherInterface extends CustomMatchers {}
}
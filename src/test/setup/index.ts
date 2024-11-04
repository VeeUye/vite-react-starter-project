/// <reference types="@testing-library/jest-dom" />
/// <reference types="vitest/globals" />

import { expect, vi, beforeAll, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';

// Extend expect with jest-dom matchers
expect.extend(matchers);

// Run cleanup after each test case
afterEach(() => {
    cleanup();
});

// Mock localStorage
const storageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0,
    key: vi.fn(),
};

beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
        value: storageMock,
        writable: true
    });
});
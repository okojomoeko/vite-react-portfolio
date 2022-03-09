export const intersectionObserverMock = () => ({
  observe: () => vi.fn(),
  disconnect: () => vi.fn(),
  unobserve: () => vi.fn(),
});

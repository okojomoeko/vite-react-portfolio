import { beforeEach, describe, expect, it } from "vitest";
import pretty from "pretty";
import App from "../App";
import { render } from "../utils/test-utils";
import { intersectionObserverMock } from "../__mocks__/intersectionObserverMock";

beforeEach(() => {
  // setup a DOM element as a render target
  // const mockIntersectionObserver = vi.fn();
  // mockIntersectionObserver.mockReturnValue({
  //   observe: () => null,
  //   unobserve: () => null,
  //   disconnect: () => null,
  // });
  // TODO
  // fix below ignoring code
  // @ts-expect-error type
  globalThis.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);
});

afterAll(() => {
  vi.clearAllMocks();
});

describe("Simple working test", () => {
  it("should increment count on click", async () => {
    const { container } = render(<App />);

    // const buttons = getAllByRole("button");

    // const headerButtons = buttons.slice(0, 3);
    // const expectHeadderButtons = ["ABOUT", "SKILLS", "WORKS"];
    // expect(headerButtons.length).toBe(expectHeadderButtons.length);

    // for (let i = 0; i < expectHeadderButtons.length; i += 1) {
    //   expect(buttons[i].outerHTML).toContain(expectHeadderButtons[i]);
    // }
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});

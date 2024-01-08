import { TextEncoder, TextDecoder } from "util";
import ResizeObserver from "resize-observer-polyfill";

import "@testing-library/react";

window.ResizeObserver = ResizeObserver;

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

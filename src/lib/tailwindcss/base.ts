import { grid } from "./grid"

export const base = {
  base: 4,
  span:
    (grid.desktop.container - grid.desktop.gap * (grid.desktop.columns - 1)) /
    12
}

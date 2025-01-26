import { base } from "./base"
import { grid } from "./grid"

/**
 * Generates a set of tailwindcss utility classes for widths and heights based
 * on the grid system.
 */
export const span = (): Record<string, string> => {
  const items: Record<string, string> = {}

  for (let i = 1; i <= grid.desktop.columns; i++) {
    /**
     * The width class is calculated as the width of the item plus the gap
     * multiplied by the number of items minus one.
     *
     * This is to ensure that the items fit within the container width and
     * that the gap is included in the calculation.
     */
    items[`span-w-${i}`] = `${i * base.span + (i - 1) * grid.desktop.gap}px`
    /**
     * The height class is calculated as the height of the item plus the gap
     * multiplied by the number of items minus one.
     *
     * This is to ensure that the items fit within the container height and
     * that the gap is included in the calculation.
     */
    items[`span-h-${i}`] = `${i * base.span + (i - 1) * grid.desktop.gap}px`
  }

  return items
}

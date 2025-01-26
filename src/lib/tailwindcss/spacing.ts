// import { grid } from "./grid"
// import { base } from "./base"

const grid = {
  desktop: {
    gap: 16,
    columns: 12,
    container: 1280
  },
  tablet: {
    gap: 12,
    columns: 8,
    container: 768
  },
  phone: {
    gap: 8,
    columns: 4,
    container: 280
  }
}

const base = {
  base: 4,
  span:
    (grid.desktop.container - grid.desktop.gap * (grid.desktop.columns - 1)) /
    12
}

/**
 * Generates a record of gap classes for TailwindCSS based on the number of columns in the grid.
 *
 * @returns {Record<string, string>} An object where the keys are TailwindCSS class names and the values are the corresponding gap values in pixels.
 *
 * The gap values are calculated based on the base unit and the gap between columns.
 *
 * Example class names generated:
 * - `.span-gap-{i}`: Sets the gap between columns.
 *
 * @example
 * // Assuming grid.desktop.columns = 12, base.base = 8, and grid.desktop.gap = 16
 * // The generated gap object will contain:
 * // {
 * //   ".span-gap-1": "24px",
 * //   ".span-gap-2": "40px",
 * //   ".span-gap-3": "56px",
 * //   ".span-gap-4": "72px",
 * //   ".span-gap-5": "88px",
 * //   ".span-gap-6": "104px",
 * //   ".span-gap-7": "120px",
 * //   ".span-gap-8": "136px",
 * //   ".span-gap-9": "152px",
 * //   ".span-gap-10": "168px",
 * //   ".span-gap-11": "184px",
 * //   ".span-gap-12": "200px"
 * // }
 */
const gap = (): Record<string, string> => {
  const gap: Record<string, string> = {}

  // Gap - Column based
  for (let i = 1; i <= grid.desktop.columns; i++) {
    gap[`.span-gap-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
  }

  return gap
}

/**
 * Generates a record of padding classes for TailwindCSS based on the number of columns in the grid.
 *
 * @returns {Record<string, string>} An object where the keys are TailwindCSS class names and the values are the corresponding padding values in pixels.
 *
 * The padding values are calculated based on the base unit and the gap between columns.
 *
 * Example class names generated:
 * - `.span-p-{i}`: Sets the padding for all sides.
 * - `.span-px-{i}`: Sets the horizontal padding (left and right).
 * - `.span-py-{i}`: Sets the vertical padding (top and bottom).
 * - `.span-pl-{i}`: Sets the left padding.
 * - `.span-pr-{i}`: Sets the right padding.
 * - `.span-pt-{i}`: Sets the top padding.
 * - `.span-pb-{i}`: Sets the bottom padding.
 *
 * @example
 * // Assuming grid.desktop.columns = 12, base.base = 8, and grid.desktop.gap = 16
 * // The generated padding object will contain:
 * // {
 * //   ".span-p-1": "8px",
 * //   ".span-px-1": "8px",
 * //   ".span-py-1": "8px",
 * //   ".span-pl-1": "8px",
 * //   ".span-pr-1": "8px",
 * //   ".span-pt-1": "8px",
 * //   ".span-pb-1": "8px",
 * //   ...
 * //   ".span-p-12": "104px",
 * //   ".span-px-12": "248px",
 * //   ".span-py-12": "248px",
 * //   ".span-pl-12": "248px",
 * //   ".span-pr-12": "248px",
 * //   ".span-pt-12": "248px",
 * //   ".span-pb-12": "248px"
 * // }
 */

const padding = (): Record<string, string> => {
  const padding: Record<string, string> = {}

  // Padding - Column based
  for (let i = 1; i <= grid.desktop.columns; i++) {
    padding[`.span-p-${i}`] = `${base.base * i}px`
    padding[`.span-px-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    padding[`.span-py-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    padding[`.span-pl-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    padding[`.span-pr-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    padding[`.span-pt-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    padding[`.span-pb-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
  }

  return padding
}

/**
 * Generates a record of margin classes for TailwindCSS based on the number of columns in the grid.
 *
 * @returns {Record<string, string>} An object where the keys are TailwindCSS class names and the values are the corresponding margin values in pixels.
 *
 * The margin values are calculated based on the base unit and the gap between columns.
 *
 * Example class names generated:
 * - `.span-m-{i}`: Sets the margin for all sides.
 * - `.span-mx-{i}`: Sets the horizontal margin (left and right).
 * - `.span-my-{i}`: Sets the vertical margin (top and bottom).
 * - `.span-ml-{i}`: Sets the left margin.
 * - `.span-mr-{i}`: Sets the right margin.
 * - `.span-mt-{i}`: Sets the top margin.
 * - `.span-mb-{i}`: Sets the bottom margin.
 *
 * @example
 * // Assuming grid.desktop.columns = 12, base.base = 8, and grid.desktop.gap = 16
 * // The generated margin object will contain:
 * // {
 * //   ".span-m-1": "8px",
 * //   ".span-mx-1": "8px",
 * //   ".span-my-1": "8px",
 * //   ".span-ml-1": "8px",
 * //   ".span-mr-1": "8px",
 * //   ".span-mt-1": "8px",
 * //   ".span-mb-1": "8px",
 * //   ...
 * //   ".span-m-12": "104px",
 * //   ".span-mx-12": "248px",
 * //   ".span-my-12": "248px",
 * //   ".span-ml-12": "248px",
 * //   ".span-mr-12": "248px",
 * //   ".span-mt-12": "248px",
 * //   ".span-mb-12": "248px"
 * // }
 */
const margin = (): Record<string, string> => {
  const margin: Record<string, string> = {}

  // Margin - Column based
  for (let i = 1; i <= grid.desktop.columns; i++) {
    margin[`.span-m-${i}`] = `${base.base * i}px`
    margin[`.span-mx-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    margin[`.span-my-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    margin[`.span-ml-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    margin[`.span-mr-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    margin[`.span-mt-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
    margin[`.span-mb-${i}`] = `${base.base * i + (i - 1) * grid.desktop.gap}px`
  }

  return margin
}

export { gap, padding, margin }

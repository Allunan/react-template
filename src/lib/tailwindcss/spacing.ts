import { base, grid } from "./base"

/**
 * This object can then be used to extend tailwinds `width`.
 *
 * Example of usage:
 * <div className="w-span-5" />
 *
 */
export const width = () => {
  const width: Record<string, string> = {}

  for (let value = 1; value <= grid.desktop.columns; value++) {
    width[`span-${value}`] =
      `${value * base.span + (value - 1) * grid.desktop.gap}px`
  }

  return width
}
/**
 * This object can then be used to extend tailwinds `minWidth`.
 *
 * Example of usage:
 * <div className="min-w-span-5" />
 *
 */
export const minWidth = () => {
  const height: Record<string, string> = {}

  for (let value = 1; value <= grid.desktop.columns; value++) {
    height[`span-${value}`] =
      `${value * base.span + (value - 1) * grid.desktop.gap}px`
  }

  return height
}
/**
 * This object can then be used to extend tailwinds `maxWidth`.
 *
 * Example of usage:
 * <div className="max-w-span-5" />
 *
 */
export const maxWidth = () => {
  const height: Record<string, string> = {}

  for (let value = 1; value <= grid.desktop.columns; value++) {
    height[`span-${value}`] =
      `${value * base.span + (value - 1) * grid.desktop.gap}px`
  }

  return height
}

/**
 * This object can then be used to extend tailwinds `height`.
 *
 * Example of usage:
 * <div className="h-span-5" />
 *
 */
export const height = () => {
  const height: Record<string, string> = {}

  for (let value = 1; value <= grid.desktop.columns; value++) {
    height[`span-${value}`] =
      `${value * base.span + (value - 1) * grid.desktop.gap}px`
  }

  return height
}
/**
 * This object can then be used to extend tailwinds `minHeight`.
 *
 * Example of usage:
 * <div className="min-h-span-5" />
 *
 */
export const minHeight = () => {
  const height: Record<string, string> = {}

  for (let value = 1; value <= grid.desktop.columns; value++) {
    height[`span-${value}`] =
      `${value * base.span + (value - 1) * grid.desktop.gap}px`
  }

  return height
}
/**
 * This object can then be used to extend tailwinds `maxHeight`.
 *
 * Example of usage:
 * <div className="max-h-span-5" />
 *
 */
export const maxHeight = () => {
  const height: Record<string, string> = {}

  for (let value = 1; value <= grid.desktop.columns; value++) {
    height[`span-${value}`] =
      `${value * base.span + (value - 1) * grid.desktop.gap}px`
  }

  return height
}

/**
 * This object can then be used to extend tailwinds `gap`.
 *
 * Example of usage:
 * <div className="gap-1" />
 * <div className="gap-x-5" />
 * <div className="gap-y-64" />
 *
 */
export const gap = () => {
  const gap: Record<string, string> = {}

  for (let value = 1; value <= 64; value++) {
    gap[`span-${value}`] = `${base.spacing * value}px`
  }

  return gap
}

/**
 * This object can then be used to extend tailwinds `padding`.
 *
 * Example of usage:
 * <div className="p-span-5" />
 * <div className="px-span-8" />
 * <div className="pl-span-24" />
 * <div className="pe-span-56" />
 *
 */
export const padding = () => {
  const padding: Record<string, string> = {}

  for (let value = 1; value <= 64; value++) {
    padding[`span-${value}`] = `${base.spacing * value}px`
  }

  return padding
}

/**
 * This object can then be used to extend tailwinds `margin`.
 *
 * Example of usage:
 * <div className="m-span-5" />
 * <div className="mx-span-8" />
 * <div className="ml-span-24" />
 * <div className="me-span-56" />
 *
 */
export const margin = () => {
  const margin: Record<string, string> = {}

  for (let value = 1; value <= 64; value++) {
    margin[`span-${value}`] = `${base.spacing * value}px`
  }

  return margin
}

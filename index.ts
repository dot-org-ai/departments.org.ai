/**
 * departments.org.ai
 *
 * Standard business departments as Business-as-Code.
 *
 * @example
 * ```typescript
 * import { Department, things } from 'departments.org.ai'
 * ```
 *
 * @see https://departments.org.ai
 * @license CC-BY-SA-4.0
 */

// Re-export types
export type { Department } from './types'

// Import types for runtime use
import type { Department } from './types'

/**
 * Collection of all department instances
 * Fetched from https://departments.org.ai
 */
export const things: Promise<Department[]> = fetch('https://departments.org.ai/things.json')
  .then((res) => res.json())
  .catch(() => [])

/**
 * Get a specific Department by ID
 */
export async function get(id: string): Promise<Department | undefined> {
  const items = await things
  return items.find((item) => item['@id'] === id || item['@id'] === `https://departments.org.ai/${id}`)
}

/**
 * Search departments by name or description
 */
export async function search(query: string): Promise<Department[]> {
  const items = await things
  const q = query.toLowerCase()
  return items.filter((item) => item.name?.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q))
}

/**
 * Get direct children of a department by parent ID
 */
export async function getChildren(parentId: string): Promise<Department[]> {
  const items = await things
  return items.filter((item) => item.parent === parentId || item.parent === `https://departments.org.ai/${parentId}`)
}

/**
 * Domain metadata
 */
export const domain = {
  '@context': 'https://departments.org.ai',
  '@id': 'https://departments.org.ai',
  name: 'departments.org.ai',
  parent: 'schema.org.ai',
  types: ['Department']
} as const

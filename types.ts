/**
 * departments.org.ai - Type Definitions
 *
 * Defines the Department type for organizational units.
 *
 * @see https://departments.org.ai
 * @license CC-BY-SA-4.0
 */

/**
 * Base Schema type (JSON-LD compatible)
 */
export interface Schema {
  '@context'?: string
  '@type'?: string
  '@id'?: string
}

export type DepartmentLevel = 'Category' | 'Department'

/**
 * Department - https://departments.org.ai/Department
 */
export interface Department extends Schema {
  '@context': 'https://departments.org.ai'
  '@type': 'https://departments.org.ai/Department'
  '@id': string
  name: string
  description?: string
  code?: string
  level?: DepartmentLevel
  category?: string
  parent?: string
  children?: string[]
  apqcCategories?: string[]
  industries?: string[]
}

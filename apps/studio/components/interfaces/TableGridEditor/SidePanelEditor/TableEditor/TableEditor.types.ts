import type { Dictionary } from 'types'
import type { ColumnField } from '../SidePanelEditor.types'
import type { QuickstartVariant, TableSource } from './TableQuickstart/types'

export interface TableField {
  id: number
  name: string
  comment?: string
  columns: ColumnField[]
  isRLSEnabled: boolean
  isRealtimeEnabled: boolean
  quickstartSource?: TableSource
  quickstartVariant?: QuickstartVariant
}

export interface ImportContent {
  file?: File
  headers: string[]
  rowCount: number
  rows: object[]
  columnTypeMap: Dictionary<any>
  selectedHeaders: string[]
  resolve: () => void
}

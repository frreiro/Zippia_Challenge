//Creating a interface for my theme in TS

import 'styled-components'

import { theme } from './Theme.jsx'

export type Theme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
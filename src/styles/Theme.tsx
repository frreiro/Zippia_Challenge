import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";
const theme = {
	colors: {
		header: '#343A40',
		selected: ' rgba(131, 121, 243, 0.1)',
		primary: '#FFFFFF',
		secondary: '#949494',
		border: '#8D8D8D',
		divider: '#D9D9D9'
	},

	font: "Open Sans",
	fontSizes: {
		mobile: {
			extraLarge: "25px",
			large: "18px",
			medium: "15px",
			mediumSmall: "12.5px",
			small: "10px",
			extraSmall: "7.5px"
		},
	}

}
const Theme: React.FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export {Theme, theme}
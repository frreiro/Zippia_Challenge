import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";

//Creating a custom theme to my app
const theme = {
	colors: {
		primary: '#343A40',
		secondary: '#949494',
		third: '#FFFFFF',
		selected: ' rgba(131, 121, 243, 0.1)',
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

//Creating a new component with ThemeProvider that includes all children components
const Theme: React.FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export {Theme, theme}
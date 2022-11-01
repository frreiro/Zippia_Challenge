import { createGlobalStyle } from "styled-components";

//Creating a new global styles that resets some default css configs 
const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		line-height: 1;
		border: 0;
		box-sizing: border-box;
		list-style: none;
		
	}


	body{
		font-family: ${props => props.theme.font}
	}

	
`;

export default GlobalStyles
import styled from 'styled-components'
import Menu, { Item as MenuItem } from 'rc-menu';


const Container = styled.div`
	width: 130px;
	height: 20px;
	background: ${props => props.theme.colors.selected};
	border: 1px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 36px;
	cursor: pointer;

	h1{
		
		letter-spacing: 0.1em;
		font-size: ${props => props.theme.fontSizes.mobile.small};
		color: ${props => props.theme.colors.primary};
	}
	
	.arrow{
		color: ${props => props.theme.colors.primary};
		margin-left: 4px;
		font-size: 15px;
	}

`;


const DropMenu = styled(Menu)`
	overflow-wrap: break-word;
	border-radius: 5px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DropItem = styled(MenuItem)`
	min-width: 200px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	background-color: ${props => props.theme.colors.selected};
	border: 1px solid ${props => props.theme.colors.border};
	
	:hover{
		background-color: ${props => props.theme.colors.primary};
		h1{
			color: ${props => props.theme.colors.third};
		}
	}
	
	h1{
		/*margin: 15px ;*/
		padding-left: 15px;
		padding-bottom: 15px;
		padding-right: 15px;
		padding-top: 5px;

		font-size: ${props => props.theme.fontSizes.mobile.small};
		color: ${props => props.theme.colors.primary};
	}
`;


export { 
	Container,
	DropItem,
	DropMenu,
	}
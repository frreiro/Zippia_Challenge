import styled from 'styled-components'

const Container = styled.div`
	width: 121px;
	height: 20px;
	background: ${props => props.theme.colors.selected};
	border: 1px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	margin-bottom: 36px;

	h1{
		
		letter-spacing: 0.1em;
		font-size: ${props => props.theme.fontSizes.mobile.small};
		color: ${props => props.theme.colors.primary};
	}

`;

export { Container}
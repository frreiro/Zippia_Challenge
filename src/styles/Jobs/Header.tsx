import styled from "styled-components"

const Container = styled.header`
	width: 100%;
	height: 134px;
	background-color: ${props => props.theme.colors.primary};
	padding: 50px 0 50px 45px;

	h1{
		font-size:  ${props => props.theme.fontSizes.mobile.extraLarge};
		color: ${props => props.theme.colors.third};
		font-weight: 600;
		line-height: 34px;
	}
`;

export {
	Container
}
import styled from "styled-components"

const TitleSearchContainer = styled.div`
	margin-top: 42px;
	margin-bottom: 34px;

	h1{
		font-size: ${props => props.theme.fontSizes.mobile.medium};
		color: ${props => props.theme.colors.primary};
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.1em;
	}
`;


export { 
	TitleSearchContainer,
}
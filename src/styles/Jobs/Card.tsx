import styled from "styled-components"


const Container = styled.li<{isSelected: boolean}>`

	width: 368px;
	height: ${props => props.isSelected ? '331px' : '92px'};
	border-radius: 10px;
	border: 1px solid ${props => props.theme.colors.border};
	padding: 20px 16px 12px 16px;
	background-color: ${props => props.isSelected ?  props.theme.colors.selected : props.theme.colors.third};
	cursor: pointer;
	margin-bottom: 20px;

	hr{
		margin: 12px 0 12px 0;
		border: 1px solid ${props => props.theme.colors.divider};
	}

	&.large-card{ 
		display: none;
		width: 605px;
		height: 331px;
		
		margin-left: 20px;
	}

	@media(min-width: 700px ){
		height: 92px;

		&.large-card{
			display: block;
		}


	}
`;


const ImageContainer = styled.div<{url: string}>`
	width: 42px;
	height: 42px;
	background-image: url(${props => props.url});
	background-size: cover;
`;

const Title = styled.h1`
	font-size: ${props => props.theme.fontSizes.mobile.large};
	color: ${props => props.theme.colors.primary};
	font-weight: 600;
	margin-bottom: 3px;
`;

const Subtitle = styled.h4`
	font-size: ${props => props.theme.fontSizes.mobile.mediumSmall};
	color: ${props => props.theme.colors.secondary};
	font-weight: 400;
	line-height: 17px;
`;

const Subtitle2 = styled.h4`
	font-size: ${props => props.theme.fontSizes.mobile.extraSmall};
	color: ${props => props.theme.colors.secondary};
	font-weight: 400;
	line-height: 10px;
`;

const BasicInfo = styled.div`
	display: flex;
	align-items: center;


	div:not(:last-of-type){
		margin-right: 23px;
	}

`;

const DetailInfo = styled.div`
	overflow-y: scroll;
	height: 55%;
	`;

const DescriptionTitle = styled(Title)`
	padding-top: 25px;
	font-size: ${props => props.theme.fontSizes.mobile.medium};
`;

const DescriptionBody = styled.p`
	font-size: ${props => props.theme.fontSizes.mobile.small};
	color: ${props => props.theme.colors.secondary};
	font-weight: 600;
	line-height: 14px;
`;

export {
	Container,
	Title,
	Subtitle,
	Subtitle2,
	ImageContainer,
	BasicInfo,
	DetailInfo,
	DescriptionTitle,
	DescriptionBody
}
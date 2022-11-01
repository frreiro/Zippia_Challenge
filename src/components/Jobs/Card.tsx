import { useState } from "react"
import {Container, Subtitle, Title, Subtitle2, ImageContainer, BasicInfo, DetailInfo, DescriptionTitle, DescriptionBody} from "../../styles/Jobs/Card"


/*Create the Card compoenente, inside has the JobTile, CompanyName and the companyImage.
 Whe clicked, the card will open and display the job description  */
const  Card: React.FC =  () => {
	const [select, setSelect] = useState(false)

	return (
		<Container onClick={() => setSelect(!select)} isSelected={select}>
			<BasicInfo>
				<div>
					<ImageContainer url='https://logo.clearbit.com/usaa.com'></ImageContainer>
				</div>
				<div>
					<Title>Job Name</Title>
					<Subtitle>Company Name</Subtitle>
					<Subtitle2>Location</Subtitle2>
				</div>
			</BasicInfo>
			{
			select ? 
				(
				<DetailInfo>
					<DescriptionTitle>Job Description</DescriptionTitle>
					<hr/>
					<DescriptionBody>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</DescriptionBody>
				</DetailInfo>
				) 
				: <></>
			}
		</Container>
	)
}

export default Card
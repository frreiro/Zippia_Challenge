import { useState } from "react"
import {Container, Subtitle, Title, Subtitle2, ImageContainer, BasicInfo, DetailInfo, DescriptionTitle, DescriptionBody} from "../../styles/Jobs/Card"
import { ICard } from "../interfaces/card.interfaces"
import { IJob } from "../interfaces/jobs.interfaces"


/*Create the Card compoenente, inside has the JobTile, CompanyName and the companyImage.
 Whe clicked, the card will open and display the job description  */
const  Card: React.FC<ICard> =  ({job}) => {
	const [select, setSelect] = useState(false)

	return (
		<Container onClick={() => setSelect(!select)} isSelected={select}>
			<BasicInfo>
				<div>
					<ImageContainer url={job.companyLogo ? job.companyLogo : "" }></ImageContainer>
				</div>
				<div>
					<Title>
						{job.jobTitle}
					</Title>
					<Subtitle>
						{job.companyName}
					</Subtitle>
					<Subtitle2>
						{job.location}
					</Subtitle2>
				</div>
			</BasicInfo>
			{
			select ? 
				(
					<>
					<DescriptionTitle>Job Description</DescriptionTitle>
					<hr/>
					<DetailInfo>
					<DescriptionBody>
						{job.jobDescription}
					</DescriptionBody>
					</DetailInfo>
					</>
				) 
				: <></>
			}
		</Container>
	)
}

export default Card
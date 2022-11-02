import { useState } from "react"
import {Container, Subtitle, Title, Subtitle2, ImageContainer, BasicInfo, DetailInfo, DescriptionTitle, DescriptionBody} from "../../styles/Jobs/Card"
import { ICard } from "../interfaces/card.interfaces"
import MediaQuery from 'react-responsive' 


/*Create the Card component, it receives the following props: 
		- job -> One single job object 
		- largeCard -> A an optional boolean prop that describes if the card is the largeCard. LargeCars is only displayed when the screen size is over then 700px
		- setLargeCard -> A optional prop used to change the content of the largeCard, by default it is null. When this card is clicked and the screen size is over 700px
			the largeCard content will be this card's job content.
		- isSelected -> A boolean value indicating if this card is selected.

	Click: 
		- If the screen size is over 700px => The small card will continious the same structure, but the largeCard will be updated with this card content.
		- If the screen size is under 700px => The card height will be increased and the job description will be displayed.

 Whe clicked, the card will open and display the job description  */
const  Card: React.FC<ICard> =  ({job, largeCard = false, setLargeCard = null, isSelected}) => {

	const selectCard = () => {
		if(!largeCard && setLargeCard){
			setLargeCard(job);
		} 
	}
	
	return (
		<Container onClick={selectCard} isSelected={isSelected} className={largeCard ? "large-card" : ""}>
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
			<MediaQuery maxWidth={700}>
			{
				isSelected ? 
				(
					<>
					<DescriptionTitle>Job Description</DescriptionTitle>
					<hr/>
					<DetailInfo>
					<DescriptionBody dangerouslySetInnerHTML={{__html: job.jobDescription}}>
					</DescriptionBody>
					</DetailInfo>
					</>
				) 
				: <></>
				
			}
			</MediaQuery>
			{
				largeCard ? 
					(
					<>
					<DescriptionTitle>Job Description</DescriptionTitle>
					<hr/>
					<DetailInfo>
					<DescriptionBody dangerouslySetInnerHTML={{__html: job.jobDescription}}>
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
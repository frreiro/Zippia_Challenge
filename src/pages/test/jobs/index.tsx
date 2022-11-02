import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import {Fragment, useState } from 'react'


import FilterButton from '../../../components/Button'
import Card from '../../../components/Jobs/Card'
import Header from '../../../components/Jobs/Header'
import Container from '../../../styles/Jobs'
import { TitleSearchContainer, CardContainer as CardsContainer } from '../../../styles/Jobs/Jobs'
import { fechJobs} from '../../../utils/fetchData'


/*
getStaticProps is a Nextjs function to fetch data from API
This application fetch data while buiding and on realoads
*/
export async function getStaticProps() {
	const res = await fechJobs()
	const jobs = res.data.jobs
	return { props: { jobs } }
}

/*
	Jobs component displays: 
	 - Header
	 - Page title 
	 - Button to filter
	 - Card

	States and functions: 

	- JobList state is where the all jobs are storaging and can be replaced by a filtered job list;
	- jobSelected state is where the clicked job is storage, by default is the first job of the list
	- filteredListByInput is a function that receives one company name at params and return another list filtered by that company name, or, all companies (if the filter paramenter is "All")

*/
export default function Jobs({jobs}: InferGetStaticPropsType< typeof getStaticProps>) {
	const [jobsList, setJobsList] = useState(jobs)
	const [jobSelected, setJobSelected] = useState(jobsList[0])

	const filteredListByInput = (filterCompanyName: string | null = null): void => {
		if(filterCompanyName === "All"){
			setJobsList(jobs);
			setJobSelected(jobs[0])
		} 
		else{
			const newList = jobs.filter((jobs) => jobs.companyName === filterCompanyName);
			setJobsList(newList);
			setJobSelected(newList[0])
		}
	}

	return (
	<>
		<Head>
			<title>Home</title>
		</Head>
		<Header/>
		
	<Container>
		<TitleSearchContainer>
			<h1>{`RESULT FOR "BUSINESS ANALYST"`}</h1>
		</TitleSearchContainer>
		<FilterButton jobs={jobs} filterParam={(param) => filteredListByInput(param) } />
		<CardsContainer>
			<ul>
			{
				jobsList.map((job, i) => i < 10
				? <Card key={job.jobId} job={job} setLargeCard={setJobSelected} isSelected={jobSelected.jobId === job.jobId}/> 
				: <Fragment key={job.jobId}></Fragment>)
			}
			</ul>
			<Card job={jobSelected} largeCard={true} isSelected={true} />

		</CardsContainer>
	</Container>
	</>
  )
}

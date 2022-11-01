import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import {Fragment, useEffect, useState } from 'react'
import FilterButton from '../../../components/Button'
import { IJob, IJobsData } from '../../../components/interfaces/jobs.interfaces.js'
import Card from '../../../components/Jobs/Card'
import Header from '../../../components/Jobs/Header'
import Container from '../../../styles/Jobs'
import { TitleSearchContainer } from '../../../styles/Jobs/Jobs'
import { fechJobs} from '../../../utils/fetchData'



export async function getStaticProps() {
	const res = await fechJobs()
	const jobs = res.data.jobs
	return { props: { jobs } }
}


export default function Jobs({jobs}: InferGetStaticPropsType< typeof getStaticProps>) {
	const [jobsList, setJobsList] = useState(jobs)

	const filteredListByInput = (filterCompanyName: string | null = null): void => {
		if(filterCompanyName === "All") setJobsList(jobs);
		else{
			const newList = jobs.filter((jobs) => jobs.companyName === filterCompanyName);
			setJobsList(newList);
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
		<ul>
		{
			jobsList.map((job, i) => i < 10
			? <Card key={job.jobId} job={job}/> 
			: <Fragment key={job.jobId}></Fragment>)
		}
		</ul>

	</Container>
	</>
  )
}

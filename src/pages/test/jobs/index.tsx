import Head from 'next/head'
import FilterButton from '../../../components/Button'
import Card from '../../../components/Jobs/Card'
import Header from '../../../components/Jobs/Header'
import Container from '../../../styles/Jobs'
import { TitleSearchContainer } from '../../../styles/Jobs/Jobs'

export default function Home() {
  return (
	<>
		<Head>
			<title>Home</title>
		</Head>
		<Header/>
		
	<Container>
		<TitleSearchContainer>
			<h1>{`RESULT FOR "BUSINESS ANALYST"`}</h1>
			<h1>{`20 JOBS`}</h1>
		</TitleSearchContainer>
		<FilterButton/>
		<Card/>
	</Container>
	</>
  )
}

import Head from 'next/head'
import Link from 'next/link.js'
import Card from '../../../components/Jobs/Card'
import Container from '../../../styles/Jobs'
export default function Home() {
  return (
	<Container>
		<Head>
			<title>Home</title>

		</Head>

		<h1>
			Teste
		</h1>
		<Card/>
	</Container>
  )
}

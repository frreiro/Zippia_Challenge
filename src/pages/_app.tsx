import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import {Theme} from '../styles/Theme'
import 'rc-dropdown/assets/index.css';



export default function App({ Component, pageProps }: AppProps) {
  return(
	<Theme>
	<GlobalStyles/>
	 <Component {...pageProps} />
	</Theme>
	 )
}

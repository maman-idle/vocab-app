import {createGlobalStyle} from 'styled-components';


/*CSS global settings, goes here*/
export const GlobalStyle = createGlobalStyle`

	/*Root styling, root is bigger selector than html*/
	:root{
		--maxWidth: 1280px;
		--aliceBlue: #F0F8FF;
		--darkBlue: #00008B;
		--greyBlue: #72A0C1;
		--aero: #7CB9E8;
		--fontXLarge: 2.5rem;
		--fontLarge: 1.5rem;
		--fontMed: 1.2rem;
		--fontSmall: 1rem;
	}
	*{
		box-sizing: border-box;
		font-family: Verdana, Arial, Helvetica, sans-serif;
	}
	body{
		margin: 0;
		padding: 0;

		h1{
			font-size:2rem;
			font-weight: 500;
			color: var(--darkBlue) /*Get variable from root*/
		}

		p{
			font-size: 1rem;
			color: var(--aliceBlue)
		}
	}

`
import React from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBtn } from './components/Button.styled';
import { SuperButton } from './components/Button.styled';
import { Link } from "./components/Link.styled";
import { Menu } from './components/Menu.styled';
import { myTheme } from './styles/Theme.styled';

function App() {
	return (
		<div className="App">
			<Menu>
				<ul>
					<li><a href="1">menu item 1</a></li>
					<li><a href="2">menu item 2</a></li>
					<li><a href="3">menu item 3</a></li>
				</ul>
			</Menu>
			<Box>

				<StyledBtn color="green" fontSize={"20px"}>Кнопка-1</StyledBtn>
				<StyledBtn color="red">Кнопка-1</StyledBtn>
				<StyledBtn fontSize={"30px"}>Кнопка-1</StyledBtn>

				<StyledBtn primary>Кнопка-2</StyledBtn>
				<StyledBtn outlined>Кнопка-2</StyledBtn>

				<StyledBtn color={myTheme.colors.primary} btnType={"secondary"} active>Кнопка-3</StyledBtn>
				<StyledBtn color={myTheme.colors.secondary} btnType={"danger"}>Кнопка-3</StyledBtn>

				<StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
				<StyledBtn as="a" href={'#'}>Link</StyledBtn>
				<SuperButton>Super Button</SuperButton>

				{/* <input type="text" />
				<input type="submit" /> */}

			</Box>

		</div>
	)
}

export default App

const Box = styled.div`
  height: 100vh;
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;
	gap: 30px;

	button {
		cursor: pointer;
	}

	${Link} {
		cursor: zoom-in;
	}

	/* @media screen and (max-width: 800px) {
		flex-direction: column;
	} */

	@media ${myTheme.media.tablet} {
		flex-direction: row;
	}
`

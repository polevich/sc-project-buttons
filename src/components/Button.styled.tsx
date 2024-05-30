import styled, { css } from "styled-components"
import { MyAnimation } from "../styles/animations/Animations"

type StyledBtnPropsType = {
	color?: string
	fontSize?: string
	primary?: boolean
	outlined?: boolean
	btnType?: "secondary" | "danger"
	active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  /* background-color: #fb3f78; */
	/* background-color: ${props => props.color || "#fb3f78"}; */
  padding: 10px 20px;
  /* color: snow; */
  /* font-size: 2rem; */
	font-size: ${props => props.fontSize || "2rem"};
	font-weight: bold;

	&:hover {
		background-color: #3f71fb;
	}

	&:last-child {
		background-color: #17eb22;
	}

	${props => props.primary && css<StyledBtnPropsType>`
		background-color: ${props => props.color || "#fb3f78"};
		color: snow;
	`}


	${props => props.outlined && css<StyledBtnPropsType>`
		border: 2px solid ${props => props.color || "#fb3f78"};
		color: ${props => props.color || "#fb3f78"};
		background-color: transparent;

		&:hover {
			border-color: #4053cc;
			color: #4053cc;
			background-color: transparent;
		}
	`}

	${props => props.btnType === "secondary" && css<StyledBtnPropsType>`
		background-color: ${props => props.color || "#fb3f78"};
		color: snow;
	`}

	${props => props.btnType === "danger" && css<StyledBtnPropsType>`
		border: 2px solid ${props => props.color || "#fb3f78"};
		color: ${props => props.color || "#fb3f78"};
		background-color: transparent;

		&:hover {
			border-color: #4053cc;
			color: #4053cc;
			background-color: transparent;
		}
	`}

	${props => props.active && css<StyledBtnPropsType>`
	box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
	`}

`

export const SuperButton = styled(StyledBtn)`
	border-radius: 5px;
	background-color: #ffe869;
	color: #363636;

	&:hover {
		animation: ${MyAnimation} 2s ease -in -out infinite;
	}
`


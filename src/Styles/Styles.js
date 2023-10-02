import styled from "styled-components";
import { White } from "./Colors";

export const Shadow = "17px 10px 22px -11px rgba(0,0,0,0.09)";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: flex-start;
  box-shadow: ${(props) => (props.shadow ? Shadow : "")};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "stretch")};
  background: ${(props) => (props.background ? props.background : White)};
  cursor: ${(props) => (props.cursor ? props.cursor : "")};
  border-radius: ${(props) => props.radius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.flexDirection};
`;

export const internalBoxStracture = `
    padding:1rem;
    border-radius:15px;
    margin:.2rem;
	color: white;

`;
export const BoxSize = styled.div`
  flex: ${(props) => props.flexSize};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  background: ${(props) => props.background};
  box-shadow: ${(props) => (props.shadow ? Shadow : "")};
  ${internalBoxStracture}
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const AppWrapper = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;
`;

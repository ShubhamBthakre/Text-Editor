import styled from 'styled-components/macro'

export const TextEditorMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: #1b1c22;
  display: flex;
  padding: 20px;
`

export const HeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 26px;
  font-weight: 500;
  margin-top: 30px;
`
export const Image = styled.img`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
`

export const BoldButtonTools = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const ItalicButtonTools = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const UnderlineButtonTools = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const TextEditorTextInput = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #25262c;
  border: none;
  outline: none;
  color: #cbd5e1;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.textStyle};
  text-decoration: ${props => props.textDecoration};
`
export const ListContainer = styled.ul`
  display: flex;
  border-bottom: 1px solid #334155;
  padding: 10px;
`
export const ListItem = styled.li`
  list-style-type: none;
`

import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  TextEditorMainContainer,
  ContentContainer,
  HeadingAndImageContainer,
  Heading,
  Image,
  TextEditorContainer,
  BoldButtonTools,
  ItalicButtonTools,
  UnderlineButtonTools,
  TextEditorTextInput,
  ListContainer,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {isTextBold: false, isTextItalic: false, isTextUnderline: false}

  onToggleBoldTool = () => {
    const {isTextBold} = this.state
    this.setState({isTextBold: !isTextBold})
  }

  onToggleItalicTool = () => {
    const {isTextItalic} = this.state
    this.setState({isTextItalic: !isTextItalic})
  }

  onToggleUnderlineTool = () => {
    const {isTextUnderline} = this.state
    this.setState({isTextUnderline: !isTextUnderline})
  }

  render() {
    const {isTextBold, isTextItalic, isTextUnderline} = this.state

    const fontWeight = isTextBold ? 'bold' : 'normal'
    const textStyle = isTextItalic ? 'italic' : 'normal'
    const textDecoration = isTextUnderline ? 'underline' : 'normal'
    return (
      <TextEditorMainContainer>
        <ContentContainer>
          <HeadingAndImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingAndImageContainer>
          <TextEditorContainer>
            <ListContainer>
              <ListItem>
                <BoldButtonTools
                  type="button"
                  data-testid="bold"
                  onClick={this.onToggleBoldTool}
                  color={isTextBold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold size={20} />
                </BoldButtonTools>
              </ListItem>
              <ListItem>
                <ItalicButtonTools
                  type="button"
                  data-testid="italic"
                  onClick={this.onToggleItalicTool}
                  color={isTextItalic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size={20} />
                </ItalicButtonTools>
              </ListItem>
              <ListItem>
                <UnderlineButtonTools
                  type="button"
                  data-testid="underline"
                  onClick={this.onToggleUnderlineTool}
                  color={isTextUnderline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size={20} />
                </UnderlineButtonTools>
              </ListItem>
            </ListContainer>
            <TextEditorTextInput
              fontWeight={fontWeight}
              textStyle={textStyle}
              textDecoration={textDecoration}
            />
          </TextEditorContainer>
        </ContentContainer>
      </TextEditorMainContainer>
    )
  }
}

export default TextEditor

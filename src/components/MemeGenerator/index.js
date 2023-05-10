// Write your code here
import {Component} from 'react'

import {
  AppContainer,
  FormContainer,
  MainHeading,
  Label,
  Input,
  SelectedList,
  Option,
  GenerateButton,
  ImageContainer,
  TopText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    isTrue: false,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {imageUrl} = this.state
    if (imageUrl !== undefined) {
      this.setState({isTrue: true})
    }
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  addFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isTrue} = this.state
    console.log(fontSize)
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <MainHeading>Meme Generator</MainHeading>
          <Label htmlFor="URL">Image URL</Label>
          <Input
            id="URL"
            type="text"
            placeholder="Enter the image URL"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
          />
          <Label htmlFor="Top">Top Text</Label>
          <Input
            id="Top"
            type="text"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.onChangeTopText}
          />
          <Label htmlFor="Bottom">Bottom Text</Label>
          <Input
            id="Bottom"
            type="text"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />
          <Label htmlFor="FontSize">Font Size</Label>
          <SelectedList onChange={this.addFontSize} id="FontSize">
            {fontSizesOptionsList.map(eachItem => (
              <Option key={eachItem.optionId}>{eachItem.displayText}</Option>
            ))}
          </SelectedList>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        {isTrue ? (
          <ImageContainer imgUrl={imageUrl} data-testid="meme">
            <TopText fSize={fontSize}>{topText}</TopText>
            <TopText fSize={fontSize}>{bottomText}</TopText>
          </ImageContainer>
        ) : null}
      </AppContainer>
    )
  }
}

export default MemeGenerator

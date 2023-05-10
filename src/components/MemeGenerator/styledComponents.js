// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 110px;
  padding-right: 110px;
`

export const FormContainer = styled.form`
  width: 43%;
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-size: 29px;
  font-weight: bold;
  font-family: 'roboto';
  margin-bottom: 0px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 18;
  font-weight: 500;
  font-family: 'roboto';
  margin-top: 30px;
`

export const Input = styled.input`
  width: 75%;
  height: 38px;
  border-radius: 4px;
  background-color: transparent;
  margin-top: 10px;
  padding: 15px;
`

export const SelectedList = styled.select`
  width: 75%;
  height: 38px;
  margin-top: 10px;
`
export const Option = styled.option`
  font-size: 18px;
`

export const GenerateButton = styled.button`
  width: 150px;
  height: 39px;
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'roboto';
  margin-top: 17px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
`

export const ImageContainer = styled.div`
  align-self: center;
  width: 54%;
  height: 60vh;
  background-size: cover;
  padding: 40px;
  background-image: url(${props => props.imgUrl});
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TopText = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-family: 'roboto';
  font-size: ${props => props.fSize};
`

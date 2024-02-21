// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`
export const PasswordCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  height: 50vh;
  padding: 12px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 23px;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: #f8fafc;
  font-size: 18px;
  font-family: 'Roboto';
`
export const InputElement = styled.input`
  background-color: #edeeff;
  padding: 15px;
  outline: none;
  border: 1px solid #cbd5e1;
  width: 350px;
  color: #000000;
  font-family: 'Roboto';
  margin-bottom: 8px;
`
export const ErrorPara = styled.p`
  color: #ef4444;
  font-size: 18px;
  font-family: 'Roboto';
`

/* solution code css 
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const PasswordValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 12px;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const Text = styled.p`
  color: #f8fafc;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`

export const PasswordInput = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
*/

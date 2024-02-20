// Write your code here

import {useState} from 'react'
import {
  BgContainer,
  PasswordCont,
  Heading,
  InputElement,
  Para,
  ErrorPara,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <>
      <BgContainer>
        <PasswordCont>
          <Heading>Password Validator</Heading>
          <Para>Check how strong and secure is your password</Para>
          <InputElement
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          {password.length >= 8 ? (
            ''
          ) : (
            <ErrorPara>Your password must be at least 8 characters</ErrorPara>
          )}
        </PasswordCont>
      </BgContainer>
    </>
  )
}
export default PasswordValidator

import { ReactNode, useCallback, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Container } from './styles'
import { Input } from 'components/Input'
import getValidationErrors from 'utils/getValidationErrors'

interface SignInFormData {
  children: ReactNode;
}

export function ContactForm() {
  const formRef = useRef<FormHandles>(null)

  const history = useHistory()

  const handleSubmit = useCallback( async (data: SignInFormData) =>{
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email:Yup.string()
          .required('E-mail obrigatório')
          .email('Insira um e-mail válido'),
        password:Yup.string()
          .required('Senha obrigatória')
      })
      await schema.validate(data, {
        abortEarly:false
      })

      history.push('/dashboard')

    } catch (err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

        return
      }
    }
  },[history])

  return (
    <Container>
     <Form ref={formRef}onSubmit={handleSubmit} >
        <Input
          name="password"
          type="password"
          placeholder="Senha"
        />
        <button  type="submit">Entrar</button>
      </Form>
    </Container>
  );
};



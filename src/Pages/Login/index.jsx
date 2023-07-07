import React from 'react'
import Main from '../../Components/Main'
import { useForm } from "react-hook-form";
import sass from './login.module.scss'

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className={sass.login}>
       <Main title='ФИЗИЧЕСКОЕ ЛИЦО' title2='ЮРИДИЧЕСКОЕ ЛИЦО'/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='+998хх-ххх-хх-хх' {...register("example")} />
      <input  placeholder='Пароль' {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
     <button type='submit'>ПРОДОЛЬЖИТЬ</button>
    </form>
    </div>
  )
}

export default Login
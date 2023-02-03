import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container, Form, Button, FormError } from "./styles";

const registerFormSchema = z.object({
    username: z.string().min(3, {message:'Digite ao menos 3 letras'}).regex(/^([a-z\\-]+)$/i, {message:'Digite apenas letras'}).transform((username) => username.toLowerCase()),
    name:z.string().min(5,{message:'Digite ao menos 5 letras'}),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register(){
    const {register, handleSubmit, reset, formState:{errors, isSubmitting}} = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    });

    async function handleRegister(data: RegisterFormData){
        console.log(data);
        reset();
    }

    return (
        <Container>

           <header>

             <h1>Bem-vindo ao Adreline Call!</h1>
             <span>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</span>

           </header>
           <Form onSubmit={handleSubmit(handleRegister)}>
                <div>
                <label>
                    <span>Nome de usuário</span>
                    <div><span>cal.com/</span><input type="text" {...register("username")} /></div>
                    {errors.username && (<FormError style={{color:'#f75a68'}}>{errors.username.message}</FormError>)}
                </label>
                <label>
                    <span>Nome completo</span>
                    <div><input style={{marginLeft:'1rem'}} {...register("name") } type="text" placeholder="Aeudo Pereira"/></div>
                    {errors.name && (<FormError style={{color:'#f75a68'}}>{errors.name.message}</FormError>)}
                </label>

                <Button disabled={isSubmitting} type="submit"><span>Proximo passo</span><ArrowRight/></Button>
                </div>
           </Form>
           
        </Container>
    )
}
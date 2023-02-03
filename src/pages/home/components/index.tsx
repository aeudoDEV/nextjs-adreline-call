import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormAnnotation } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import Link from "next/link";

const claimUsernameFormSchema = z.object({
    username: z.string().min(3, {message:'Digite ao menos 3 letras'}).regex(/^([a-z\\-]+)$/i, {message:'Digite apenas letras'}).transform((username) => username.toLowerCase()),
})
type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export default function ClaimUsernameForm(){

    const { reset, register, handleSubmit, formState:{errors} } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema),
    });
    async function handleClaimUsername(data: any){
        console.log(data);
        reset();
    }

    return (
        <>
            <Form onSubmit={handleSubmit(handleClaimUsername)}>
                <div>
                    <span>ignite.com/</span>
                    <input 
                        type="text" 
                        placeholder="seu-usuario" 
                        {...register("username")}
                    />
                </div>
                <Link href={'/register'} style={{ textDecoration: 'none' }}><button type="submit">Reservar <ArrowRight/></button></Link>
                {errors.username?.message}
            </Form>
            <FormAnnotation>
                <span>
                    {errors.username ? errors.username.message : 'Digite o nome de usuário desejado'} 
                </span>
            </FormAnnotation>
        </>
    )
}
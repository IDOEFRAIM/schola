'use client'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from '@radix-ui/react-toast'
import { Input } from '@/components/ui/input'
import GlobalApi from '@/app/_services/GlobalApi'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const {toast} = useToast()
    const [error, seterror] = useState()
    const [loading, setloading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()
    const onSubmit = async (info) => {
        setloading(true)
        const {response} = await GlobalApi.register(info).then(success=>{
            toast({
                title: "Success",
                description: response.response.data,
                variant:'destructive',

              })
            router.push('/auth/login')
        }).catch(error=>{
            toast({
                title: "Erreur",
                description: "Verifez que vous etes connecte a internet.Veuillez nous contacter au numero 01479800 si l erreur persiste",
                variant:'destructive',
                action: <ToastAction altText="Creer un compte" 
                onClick={()=>router.push('/api/auth/login')}
                >Se connecter</ToastAction>,
              })
        })
        //console.log(response,'statut', response)
        setloading(false)
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='p-1 mb-2'>
                    <label className='text-sky-600' > Nom</label>
                    <Input             {...register('username', { required: 'Tu n as pas entre ton nom' })}
                        placeholder='Entre ton username' />
                    {errors.username && <p className='text-red-500 text-sm'>* {errors.username.message} </p>}
                </div>
                <div className='p-1 mb-2'>
                    <label className='text-sky-600' > Prenom</label>
                    <Input
                        {...register('prenom', { required: "Tu n as pas entre ton prenom" })}
                        placeholder="Entre ton prenom" />
                    {errors.prenom && <p className='text-red-500 text-sm'>* {errors.prenom.message} </p>}

                </div>
                <div className='p-1 mb-2'>
                    <label className='text-sky-600' >Entre ton email</label>
                    <Input
                        type='email'
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                message: 'Verifie que tu as entre un email correct' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                        placeholder="Entre ton email" />
                    {errors.email && <p className='text-red-500 text-sm'>* {errors.email.message} </p>}

                </div>
                <div className='p-1 mb-2'>
                    <label className='text-sky-600' > Mot de passe</label>
                    <Input
                        {...register('password', { required: "Ton mot de passe doit faire au moins 8 caracteres" })}
                        placeholder="Entre ton Mot de passe" />
                    {errors.password && <p className='text-red-500 text-sm'>* {errors.password.message} </p>}

                </div>
                <div className='p-1 mb-3'>
                    <label className='text-sky-600' > Preferences</label>
                    <Input
                        {...register('preferences', { required: 'T a oublie tes preferences' })}
                        placeholder="Entre tes preferences" />
                    {errors.preferences && <p className='text-red-500 text-sm'>* {errors.preferences.message} </p>}

                </div>

                <Button disabled={loading}
                    type='submit' variant={loading ? 'default' : 'primary'}> Creer son compte</Button>
                {error && <p className='text-red-500 text-sm'>* {error} </p>}

            </form>
    )


}

export default Login

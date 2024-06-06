'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import GlobalApi from '@/app/_services/GlobalApi'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const resetPassword = () => {
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
        const response =  GlobalApi.resetPassword(info).then(succeess=>{
        router.push('/auth/login')
        toast({
            title: "Success",
            description:'Connectez vous avec votre nouveau mot de passe',
          })
            return succeess
        }).catch(error=>{
            seterror(true)
        })
       
setloading(false)
    }

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='p-1 mb-2'>
                <p className="text-gray-600 mb-4">Si tu as oublie ton ancien mot de passe.Contactez Efraim Ido sur whatsapp au numero 01479800</p>
                <label className='text-sky-600' >Entre ton email</label>
                <Input
                    type='email'
                    {...register('email', {
                        required: 'L email est obligatoire',
                        pattern: {
                            value: /^[^@]+@[^@]+\.[^@]+$/,
                            message: 'Verifie que tu as entre un email correct' // JS only: <p>error message</p> TS only support string
                        }
                    })}
                    placeholder="Entre ton email" />
                {errors.email && <p className='text-red-600 text-sm'>* {errors.email.message} </p>}

            </div>
            <div className='p-1 mb-6'>
                <label className='text-sky-600' > Actuel mot de de passe</label>
                <Input
                    {...register('oldPassword', { required: "Ton mot de passe doit faire au moins 8 caracteres" })}
                    placeholder="Entre ton ancien Mot de passe" />
                {errors.oldPassword && <p className='text-red-600 text-sm'>* {errors.oldPassword.message} </p>}

            </div>
            <div className='p-1 mb-6'>
                <label className='text-sky-600' > Nouveau mot de de passe</label>
                <Input
                    {...register('newPassword', { required: "Ton mot de passe doit faire au moins 8 caracteres" })}
                    placeholder="Entre ton nouveau Mot de passe" />
                {errors.newPassword && <p className='text-red-600 text-sm'>* {errors.newPassword.message} </p>}

            </div>


            <Button disabled={loading}
                type='submit' variant={loading ? 'default' : 'primary'}> Changer </Button>

            {error && <p className='text-red-600 text-sm'>* Une erreur est malheureusement arrive.Verifiez votre connection internet et les valeurs rentrees</p>}

        </form>
)


}

export default resetPassword

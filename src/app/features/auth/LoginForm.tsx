/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Form, Label } from 'semantic-ui-react';
import { FieldValues, useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../store/store';
import { auth } from '../../config/firebase';
import SocialLogin from './SocialLogin';
import ModalWrapper from '../../common/modals/ModalWrapper';
import { closeModal } from '../../common/modals/modalSlice';

export default function LoginForm() {
    const { register, handleSubmit, setError, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
        mode: 'onTouched'
    })
    const dispatch = useAppDispatch();


    async function onSubmit(data: FieldValues) {
        try {
            // await signInWithEmailAndPassword(auth, data.email, data.password);
            const result = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(result)
            dispatch(closeModal());
        } catch (error: any ) {
            // console.log(error)
            setError('root.serverError', {
                type: '400', message: error.message
            })
        }
    }
    return (
        <ModalWrapper header='Sign into IREAD' size='mini'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input 
                    defaultValue=''
                    placeholder='Email address'
                    {...register('email', {required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}
                    // pattern is a second validation tools got from https://www.regexlib.com/?AspxAutoDetectCookieSupport=1
                    error={
                        errors.email?.type === 'required' && 'Email is required' ||
                        errors.email?.type === 'pattern' && 'Email is invalid'
                    }
                />
                <Form.Input 
                    type='password'
                    defaultValue=''
                    placeholder='Password'
                    {...register('password', {required: true})}
                    error={errors.password && 'Password is required'}
                />
                    {errors.root && (
                    <Label 
                        basic color='red' 
                        style={{display: 'block', marginBottom: 10}} 
                        content={errors.root.serverError.message}
                    />
                )}

                <Button 
                    loading={isSubmitting}
                    disabled={!isValid || !isDirty || isSubmitting}
                    type='submit'
                    // so that they can press return or press the button
                    fluid
                    // fluid for full width
                    size='large'
                    color='teal'
                    content='Login'
                />
                  <Divider horizontal>Or</Divider>
                <SocialLogin />
            </Form>
        </ModalWrapper>
    )
}
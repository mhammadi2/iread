/* eslint-disable @typescript-eslint/no-explicit-any */
// Modifed the loginForm file
import { Button, Form, Label } from 'semantic-ui-react';
import { FieldValues, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { signIn } from './authSlice';
import ModalWrapper from '../../common/modals/ModalWrapper';
import { useAppDispatch } from '../../store/store';
import { auth } from '../../config/firebase';
import { closeModal } from '../../common/modals/modalSlice';
import { useFireStore } from '../../hooks/firestore/useFirestore';


export default function RegisterForm() {
    // Name of the collection set by "profiles" as follows
    const {set} = useFireStore('profiles');
    const { register, handleSubmit, setError, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
        mode: 'onTouched'
    })
    const dispatch = useAppDispatch();


    async function onSubmit(data: FieldValues) {
        try {
            const userCreds = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(userCreds.user, {
                displayName: data.displayName
            })
            await set(userCreds.user.uid, {
                displayName: data.displayName,
                email: data.email,
                createdAt: Timestamp.now()
            })
            dispatch(signIn(userCreds.user));
            dispatch(closeModal());

           
        } catch (error: any) {
            // console.log(error);
            setError('root.serverError', {
                type: '400', message: error.message
            })
        }
    }
    return (
        <ModalWrapper header='Register to IREAD'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input 
                    // type='password'
                    defaultValue=''
                    placeholder='Display name'
                    {...register('displayName', {required: true})}
                    error={errors.displayName && 'Display name is required'}
                />
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
                    // content='Login'
                    content='Register'
                />
            </Form>
        </ModalWrapper>
    )
}
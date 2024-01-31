import { FieldValues, useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import { Button, Form } from 'semantic-ui-react';
import { Profile } from '../../types/profile';
import { useFireStore } from '../../hooks/firestore/useFirestore';
import { auth } from '../../config/firebase';

type Props = {
    profile: Profile
    setEditMode: (value: boolean) => void
}

export default function ProfileForm({ profile, setEditMode }: Props) {
    const { update } = useFireStore('profiles');
    const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({
        mode: 'onTouched',
        defaultValues: {
            displayName: profile.displayName,
            description: profile.description
        }
    })

    async function onSubmit(data: FieldValues) {
        await update(profile.id, data);
        if (profile.displayName !== data.displayName) {
            await updateProfile(auth.currentUser!, {
                displayName: data.displayName
            })
        }
        setEditMode(false);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
                placeholder='Display Name'
                {...register('displayName', { required: true })}
                error={errors.displayName && 'Display name is required'}
            />
            <Form.TextArea
                placeholder='Tell us about yourself'
                {...register('description')}
            />
            <Button 
                loading={isSubmitting}
                disabled={isSubmitting || !isValid || !isDirty}
                floated='right'
                type='submit'
                size='large'
                positive
                content='Update profile'
            />
        </Form>
    )
    }
/* eslint-disable @typescript-eslint/no-explicit-any */
// modified from filepond website pqina: https://pqina.nl/filepond/docs/getting-started/installation/react/#react-hooks-implementation

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useState } from 'react';
import { useFireStore } from '../../hooks/firestore/useFirestore';
import { auth, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Profile } from '../../types/profile';
import { updateProfile } from 'firebase/auth';
import { createId } from '@paralleldrive/cuid2';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginImageTransform)
type Props = {
    profile:Profile
    setEditMode:(value: boolean) => void;
}

export default function PhotoUpload({profile, setEditMode}:Props) {
    const [files, setFiles] = useState<any>([]);
    // to upload our collection named "profiles"
    const {update} = useFireStore('profiles');
    // Give an id for the imagae that matches image id in our stairage profie
    const {set} = useFireStore(`profiles/${auth.currentUser?.uid}/photos`);
    
  return (
    <FilePond
    files={files}
    onupdatefiles={setFiles}
    allowMultiple={false}
    maxFiles={1}
    // server="/api"
    server={{
        // process:(fileName, file, metadata, load, error,progress) => { underscore _filename to mute warning
        process:(_fileName, file, _metadata, load, error,progress) => {
            // call back function and create id
                const id = createId();
                const storageRef = ref(storage, `${auth.currentUser?.uid}/user_images/${id}`)
                const task = uploadBytesResumable(storageRef,file);

                task.on(
                    'state_changed',
                    snap => {
                        // this can work out the progess of the image
                        progress(true, snap.bytesTransferred, snap.totalBytes)
                    },
                    err => {
                        error(err.message)
                    },
                    ()=>{
                        getDownloadURL(task.snapshot.ref).then(async (url) => {
                            // console.log("photURL: ",profile.photoURL)
                            if (!profile.photoURL) {
                                await update(profile.id, {
                                    photoURL:url
                                });
                                await updateProfile(auth.currentUser!, {
                                    photoURL:url

                                })
                            }
                            await set(id, {
                                name:file.name,
                                url
                            })
                                setEditMode(false);
                        })
                        load(id);
                    }

                )

        }
    }

    }
    name="files"
    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    credits={false}
    allowImageCrop={true}
    imageCropAspectRatio='1:1'
    // to stop instant uplaod ; without prompting
    instantUpload ={false}

/>

  )
}
import { ReactNode } from 'react'
import { Modal, ModalProps } from 'semantic-ui-react'
import { closeModal } from './modalSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'

type Props = {
    children: ReactNode
    header?: string
} & ModalProps
// ModalPrpos will extend the props that is available inside the model porps
// such as the open property or onclose property


export default function ModalWrapper({ children, header, ...props }: Props) {
    const { open } = useAppSelector(state => state.modals);
    const dispatch = useAppDispatch();

    return (
        <Modal open={open} size={props.size} onClose={() => dispatch(closeModal())}>
            {/* Modal get for SUI */}
            {header && <Modal.Header>{header}</Modal.Header>}
            {/* check to see first if there is header */}
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    )
} 
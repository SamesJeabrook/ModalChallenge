
export const showModal = ({modalProps}) => {
    return {
        type: 'SHOW_MODAL',
        modalProps
    }
} 

export const hideModal = () => {
    return {
        type: 'HIDE_MODAL'
    }
}

export const resolveModal = ({innerModalProps}) => {
    return {
        type: 'RESOLVE_MODAL',
        innerModalProps
    }
}
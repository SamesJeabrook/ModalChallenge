export const initialState={
    isModalOpen: false,
    modalProps: {},
    innerModalProps: {}
};

export default (state = initialState, action) => {
    switch(action.type){
    case 'SHOW_MODAL' :
        return {
            isModalOpen: true,
            modalProps: action.modalProps,
            innerModalProps: {}
        }
    case 'HIDE_MODAL' : 
        return initialState
    case 'RESOLVE_MODAL' : 
        return{
            ...action.modalProps,
            isModalOpen: false,
            modalProps: {},
            innerModalProps: action.innerModalProps
        }
    default: 
        return state;
    }
}
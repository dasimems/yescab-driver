import { CLOSE_CAMERA, CLOSE_MENU, CLOSE_MODAL, OPEN_CAMERA, OPEN_MENU, OPEN_MODAL, RESET_ACTION_CONTEXT, SET_MODAL_CONTENT, SET_MODAL_HEIGHT, SET_MODAL_STYLES } from "../data/_actions";

export const initialValue = {
    modalOpened: false,
    modalContent: null,
    modalHeight: "50%",
    modalStyle: null,
    cameraOpened: false,
    imagSelected: "",
    menuOpened: false
}

export const reducer= (state, action) =>{
    const {type, payload} = action;
    
    switch (type) {
      case OPEN_MODAL:
        return { ...state, modalOpened: true, modalContent: payload, modalHeight: "50%" };

      case CLOSE_MODAL:
        return { ...state, modalOpened: false, modalContent: null, modalHeight: "50%", modalStyle: null };

      case SET_MODAL_STYLES:
        return { ...state, modalStyle: payload };

      case SET_MODAL_CONTENT:
        return { ...state, modalContent: payload };

      case OPEN_CAMERA:
        return { ...state, cameraOpened: true };

      case OPEN_MENU:
        return { ...state, menuOpened: true };

      case CLOSE_MENU:
        return { ...state, menuOpened: false };

      case CLOSE_CAMERA:
        return { ...state, cameraOpened: false };

      case SET_MODAL_HEIGHT:
        return { ...state, modalHeight: payload };

      case RESET_ACTION_CONTEXT:
        return initialValue;

      default:
        return state;
    }
}
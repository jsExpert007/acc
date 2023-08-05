import {
  TOGGLE_NOTE_MODAL,
} from '../Type';

const INITIAL = {
  isNoteModal: false,
  note: "",
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Note Modal
     */
    case TOGGLE_NOTE_MODAL: {
      const { isNoteModal, note } = action.data;
      return {
        ...state,
        isNoteModal,
        note,
      };
    }

    default:
      return state;
  }
}
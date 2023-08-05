import {
  TOGGLE_NOTE_MODAL,
} from '../Type';

export const toggleNoteModal = (isNoteModal, note = "") => {
  return {
    type: TOGGLE_NOTE_MODAL,
    data: { isNoteModal, note }
  }
}
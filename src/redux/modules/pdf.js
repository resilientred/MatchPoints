import axios from 'axios';
import { getCSRF } from 'helpers';
import { LOAD, MESSAGE } from './main';

const GENERATE_PDF_SUCCESS = 'mp/pdf/GENERATE_PDF_SUCCESS';
const ALLOW_GENERATE = 'mp/pdf/ALLOW_GENERATE';
const CLEAR_PDF = 'mp/pdf/CLEAR_PDF';

const initialState = {
  generated: false,
  pdfs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_PDF_SUCCESS:
      return {
        generated: true,
        pdfs: action.payload,
      };
    case CLEAR_PDF:
      return {
        ...state,
        pdfs: null,
      };
    case ALLOW_GENERATE:
      return {
        generated: false,
      };
    default:
      return state;
  }
};


export const generatePDF = (addedPlayers, schemas, club, date) => {
  const promise = axios({
    method: 'POST',
    url: `/api/pdfs/${club._id}`,
    data: {
      session: { addedPlayers, schemas, club, date },
    },
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });

  return {
    types: [LOAD, GENERATE_PDF_SUCCESS, MESSAGE],
    promise,
  };
};

export const clearPDF = () => {
  return {
    type: CLEAR_PDF,
  };
};

export const allowGenerate = () => {
  return {
    type: ALLOW_GENERATE,
  };
};

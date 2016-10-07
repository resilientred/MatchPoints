import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { GENERATED_PDF, PDF_ERROR } from "../constants/constants";

let _pdfs = null;
let _error = null;
const PDFStore = new Store(AppDispatcher);

const _setPDF = (pdfs) => {
  _pdfs = pdfs;
};
const _setError = (error) => {
  _error = error.responseText;
};
PDFStore.getPDF = () => _pdfs;
PDFStore.getError = () => {
  let err = _error;
  _error = null;
  return err;
};

PDFStore.clearPDF = () => {
  _pdfs = null;
};

PDFStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case GENERATED_PDF:
      _setPDF(payload.pdfs);
      PDFStore.__emitChange();
      break;
    case PDF_ERROR:
      _setError(payload.error);
      PDFStore.__emitChange();
      break;
    default:
      break;
  }
};

export default PDFStore;

import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { GENERATED_PDF, PDF_ERROR } from "../constants/constants";

let pdfs = null;
let error = null;
const PDFStore = new Store(AppDispatcher);

const setPDF = (ps) => {
  pdfs = ps;
};
const setError = (e) => {
  error = e.responseText;
};
PDFStore.getPDF = () => pdfs;
PDFStore.getError = () => {
  const err = error;
  error = null;
  return err;
};

PDFStore.clearPDF = () => {
  pdfs = null;
};

PDFStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case GENERATED_PDF:
      setPDF(payload.pdfs);
      PDFStore.__emitChange();
      break;
    case PDF_ERROR:
      setError(payload.error);
      PDFStore.__emitChange();
      break;
    default:
      break;
  }
};

export default PDFStore;

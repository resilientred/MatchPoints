import { Store } from "flux/utils"
import AppDispatcher from "../dispatcher/dispatcher"
import { GENERATED_PDF } from "../constants/constants"

let _pdfs = null;
const PDFStore = new Store(AppDispatcher);

const _setPDF = (pdfs) => {
  _pdfs = pdfs;
}
PDFStore.getPDF = () => {
  return _pdfs;
}

PDFStore.__onDispatch = (payload) => {
  switch (payload.actionType){
    case GENERATED_PDF:
      _setPDF(payload.pdfs);
      PDFStore.__emitChange();
      break; 
  }
}

export default PDFStore;




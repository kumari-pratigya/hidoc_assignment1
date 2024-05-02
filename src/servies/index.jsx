import axios from "axios";
import { DRUG_DETAIL } from '../Api/index';
const DRUG_DETAIL_AXIOS = (values) => {
  console.log(values,'catid')
  return axios.post(DRUG_DETAIL);
};
export {DRUG_DETAIL_AXIOS}
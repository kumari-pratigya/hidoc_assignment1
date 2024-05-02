const API_BASE_URL = 'https://hidocdr.com/api/hidoc-us';

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

const DRUG_DETAIL = getApiUrl('/drug/getDrugList');

export {
    DRUG_DETAIL
};




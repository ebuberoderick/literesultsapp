import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const savedata = (formData) => apiWithOutAuth.post("/save_course_order",formData).then(getApiResponse).catch(getErrorResponse);

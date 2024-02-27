import axiosInstance from "./axios-intance";

export const getSections = () => axiosInstance.get(`/section`);

// Body = {text, section}
export const addSectionText = (body) => axiosInstance.post(`/section`, body);

// Body = {text, section}
export const updateSectionText = (id, body) =>
  axiosInstance.put(`/section/${id}`, body);

// Body = {section}
export const deleteSection = (body) => axiosInstance.delete(`/section`, body);

export const getTotalAPICount = () => axiosInstance.get(`/section/count`);

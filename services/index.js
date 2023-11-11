import * as React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://b0fb-102-89-23-90.eu.ngrok.io";
axios.defaults.timeout = process.env.REACT_APP_TIMEOUT;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

//axios.defaults.headers.common.accept = 'application/json';

// axios.interceptors.request.use(
//   async config => {
//     const token = process.env.REACT_APP_USER_TOKEN || null
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export async function requestRide(request) {
  const { data } = await axios.post(`passenger/request-ride`, request);
  return data;
}

export async function postRide(post) {
  const { data } = await axios.post(`driver/create-ride`, post);
  return data;
}

export async function findActiveRidesByLocation(location) {
  const { data } = await axios.get(`driver/search?location=${location}`);

  return data;
}

export async function findActiveRequestsByLocation(location) {
  const { data } = await axios.get(`passenger/search?location=${location}`);

  return data;
}

export async function getRides() {
  const { data } = await axios.get(`passenger/ride`);

  return data;
}

export async function getPassengers() {
  const { data } = await axios.get(`driver/passenger`);

  return data;
}

export async function findBirthdays(startDate, endDate, status, searchQuery) {
  const { data } = await axios.get(
    `birthdays/all?startDate=${startDate}&endDate=${endDate}&status=${status}&searchQuery=${searchQuery}`
  );

  return data;
}

export async function downloadBirthdays(
  startDate,
  endDate,
  status,
  searchQuery
) {
  const response = await axios.get(
    `birthdays/download-birthdays?startDate=${startDate}&endDate=${endDate}&status=${status}&searchQuery=${searchQuery}`,
    {
      responseType: "blob", // Set the response type to 'blob'
    }
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));

  // Create a temporary <a> element to trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "birthdays.xlsx"); // Set the desired file name
  document.body.appendChild(link);
  link.click();

  // Cleanup: remove the temporary <a> element and revoke the URL
  link.parentNode.removeChild(link);
  window.URL.revokeObjectURL(url);

  // return data
}

export async function downloadPayments(
  startDate,
  endDate,
  status,
  searchQuery
) {
  const response = await axios.get(
    `payments/download-payments?startDate=${startDate}&endDate=${endDate}&status=${status}&searchQuery=${searchQuery}`,
    {
      responseType: "blob", // Set the response type to 'blob'
    }
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));

  // Create a temporary <a> element to trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "payments.xlsx"); // Set the desired file name
  document.body.appendChild(link);
  link.click();

  // Cleanup: remove the temporary <a> element and revoke the URL
  link.parentNode.removeChild(link);
  window.URL.revokeObjectURL(url);

  // return data
}

export async function login(email, password) {
  const { data } = await axios.get(
    `admin/login?email=${email}&password=${password}`
  );

  return data;
}

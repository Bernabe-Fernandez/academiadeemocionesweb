
//cliente axios

import axios from "axios";

const apiBlog= axios.create({
    // baseURL: "http://servidormorgall.ddns.net:8080/systemobs/public/api/",
    baseURL: "https://academiademociones.com/blog-admin/wp-json/",
    headers:{
        'Accept' : 'application/json',
    //   'X-Requested-With' : 'XMLHttpRequest'
  },
  withCredentials: true
});

// Agregar un interceptor para incluir el token solo si está disponible
apiBlog.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  
export default apiBlog;


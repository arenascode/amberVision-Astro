import axios from "axios";
import { API_URL, API_TEST } from "astro:env/client";

export const makeRequest = axios.create({
  baseURL: import.meta.env.DEV ? API_TEST : API_URL,
  withCredentials: true,
});

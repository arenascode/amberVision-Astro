import axios from "axios";
import { PUBLIC_API_URL, PUBLIC_API_TEST } from "astro:env/client";

export const makeRequest = axios.create({
  baseURL: import.meta.env.DEV ? PUBLIC_API_TEST : PUBLIC_API_URL,
  withCredentials: true,
});

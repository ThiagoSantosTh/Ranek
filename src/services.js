import axios from "axios";

const url = axios.create({
  baseURL: "http://ranekapi.local/wp-json/api",
});

url.interceptors.request.use(
  (config) => {
    const token = localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export const api = {
  /**
   * @param {endpoint} url: Buscando a API pela URL
   */

  get(endpoint) {
    return url.get(endpoint);
  },

  /**
   *
   * @returns Atualizando os dados da API
   */

  put(endpoint, body) {
    return url.put(endpoint, body);
  },

  /**
   *
   * @param {endpoint} url: Buscando a API pela URL7
   * @param {body} Body: Dados a serem enviados para a API
   */

  post(endpoint, body) {
    return url.post(endpoint, body);
  },

  /**
   *
   * @param {*} endpoint
   * @returns Deletando a API pela URL
   */
  delete(endpoint) {
    return url.delete(endpoint);
  },

  login(body) {
    return axios.post("http://ranekapi.local/wp-json/jwt-auth/v1/token", body);
  },

  validateToken() {
    return axios.post(
      "http://ranekapi.local/wp-json/jwt-auth/v1/token/validate"
    );
  },
};

/**
 *
 * @param cep
 * @returns Consulta de Endereço
 */
export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:3004",
});

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
};

/**
 *
 * @param cep
 * @returns Consulta de Endereço
 */
export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

import axios from "axios";

type Address = {
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string
}

export async function getAddressInfo(cep: number): Promise<Address> {
  const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
  return {
    logradouro: result.data.logradouro,
    bairro: result.data.bairro,
    cidade: result.data.cidade,
    estado: result.data.uf
  }
} 
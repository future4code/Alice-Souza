import axios from "axios";

type Address = {
  street: string,
  neighborhood: string,
  city: string,
  state: string
}

export async function getAddressInfo(cep: number): Promise<Address> {
  const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
  return {
    street: result.data.logradouro,
    neighborhood: result.data.bairro,
    city: result.data.cidade,
    state: result.data.uf
  }
} 
import { ProductDataType } from '../[types]/ProductData'

const API_URL = 'https://api.mocki.io/v2/016d11e8/product-widgets'

export const getData = async (): Promise<ProductDataType[] | undefined> => {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    return []
  }
}

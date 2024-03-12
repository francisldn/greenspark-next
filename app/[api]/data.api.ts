const API_URL = 'https://api.mocki.io/v2/016d11e8/product-widgets'

interface ProductData {
  id: string
  type: string
  amount: number
  action: string
  active: boolean
  linked: boolean
  selectedColor: string
}

export const getData = async (): Promise<ProductData[] | undefined> => {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    return []
  }
}

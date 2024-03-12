export interface ProductDataType {
  id: string
  type: 'carbon' | 'plastic bottles' | 'trees'
  amount: number
  action: 'offsets' | 'plants' | 'collects'
  active: boolean
  linked: boolean
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige'
}

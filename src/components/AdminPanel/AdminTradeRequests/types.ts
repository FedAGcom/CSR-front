export interface ITradeRequest {
  id: number,
  num: number
  nick: string,
  email: string,
  tradeUrl: string,
  items: Array<ITradeItem>
}

interface ITradeItem {
  id: number,
  type: string,
  title: string,
  image: string,
  class: string,
}
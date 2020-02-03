import * as https from "https"
import * as querystring from "querystring"
import {token} from "./token"

const URL = "https://api.worldtradingdata.com/api/v1/stock?"
const Grid = require("console-grid")
const grid = new Grid()


export const queryData = (name: string) => {

  const queryParam = querystring.stringify({
    api_token: token,
    symbol: name
  })
  const url = URL + queryParam
  https.get(url, (res) => {
    //返回数据可能是分段的
    let chunks: any[] = []
    res.on("data", (chunk:Buffer) => {
      chunks.push(chunk)
    })
    res.on("end", () => {
      const result = JSON.parse(Buffer.concat(chunks).toString())
      if (result.Message) {
        console.error(result.Message)
      } else {
        printData(result.data[0])
      }
    })
  }).on("error", (e) => {
    console.error(e)
  })

}


export const printData = (data: any): void => {
  // console.log(data)
  const renderData = {
    option: {
      sortField: "name"
    },
    columns: [
      {
        id: "name",
        name: "股票名称",
        type: "string",
        maxWidth: 38
      },
      {
        id: "value",
        name: "当前股价",
        type: "string",
        maxWidth: 10
      },
      {
        id: "cap",
        name: "当前市值",
        type: "string",
        maxWidth: 10
      },
      {
        id: "pe",
        name: "市盈率",
        type: "string",
        maxWidth: 10
      },
    ],
    rows: [{
      name: data.name,
      value: data.price,
      cap:((data.market_cap-0)/100000000).toFixed(2),
      pe:data.pe
    }]
  }
  grid.render(renderData)
}

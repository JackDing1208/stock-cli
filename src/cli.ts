const program = require("commander")
import {getCurrentStockData} from "./main"


program
  //设置版本号
  .version("0.1.0")
  //设置指令名字
  .name("stock")
  //指令参数
  .usage("<name>")
  //获取输入的参数
  .arguments("<name> [market]")
  //不同指令的动作
  .action((name)=>{
    getCurrentStockData(name)
    console.log(name)
  })


//解析指令的参数
program.parse(process.argv)

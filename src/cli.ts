import * as program from "commander"
import print from "./main"


program
  //设置版本号
  .version("0.1.0")
  //设置指令名字
  .name("stock")
  //指令参数
  .usage("<name>")
  //获取输入的参数
  .arguments("<method> [name]")
  //不同指令的动作
  .action((method:string, name:string,)=>{
    print("xxx")
  })


//解析指令的参数
// @ts-ignore
program.parse(process.argv)
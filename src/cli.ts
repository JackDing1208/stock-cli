#!/usr/bin/env node
import * as commander from "commander"
import {queryData} from "./main"

const program = new commander.Command()


program
//设置基本信息
  .version("0.1.0")
  .name("stock")
  .usage("<name>")
  //设置函数的参数和函数体
  .arguments("<name>")
  .action((name: string,) => {
    queryData(name)
  })


//解析指令的参数
program.parse(process.argv)

/*
way to import export,
1. normal export
---------file1.ts----------------
export const add = (para1:number, para2:number):number=>a+b
-------file2.ts------------------
import {add} from file1

2. default export
---------file1.ts----------------
export default add = (para1:number, para2:number):number=>a+b
-------file2.ts------------------
import add from file1



3. import all using * 
---------file1.ts----------------
export const add1 = 1+0
export const add2 = 1+1
export const add3 = 1+1+3

const add4 = 1+1+1+1

export default add4
-------file2.ts------------------
import * as allMethods from './module'

allMethods.add1
allMethods.add2
allMethods.add3
allMethods.default

3. import all using * 
---------file1.ts----------------
export const add1 = 1+0
export const add2 = 1+1
export const add3 = 1+1+3

const add4 = 1+1+1+1

export default add4
-------file2.ts------------------
import * as allMethods from './module'

allMethods.add1
allMethods.add2
allMethods.add3
allMethods.default

4. export all as default
---------file1.ts----------------
const add1 = 1+0
const add2 = 1+1
const add3 = 1+1+3

const add4 = 1+1+1+1

export default {
    add1,add2,add3,add4
}
-------file2.ts------------------
import {add1,add2,add3,add4} from './file2'
import allMethods from './file2'
allMethods.add1


5. import export with 3rd file
---------add.ts----------------
const add = 1+0
export default add1

-------subtract.ts------------------
const subtract = 1-0
export default subtract

-------index.ts------------------
import add from '/utils/index'
import subtract from '/utils/index'
export default{
    add,subtract
}
-------main.ts------------------
import methods from '/utils/index'


*/
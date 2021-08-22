import { input } from './day-7-input'
let bagToSearch: string = 'shiny gold'
let inputSplit: string[] = input.split('.')
let directContain: { [key: string]: boolean} ={}
let stringSplitted: string[][] = [];
inputSplit.splice(inputSplit.length -1,1)

inputSplit.map((line: string) => {
  let stringSplit: string[] = line.split('contain');
  stringSplitted.push([stringSplit[0].trim(), stringSplit[1]])
  stringSplit[0] = stringSplit[0].trim()
  if (stringSplit[1].includes(bagToSearch)) {
    if (stringSplit[0].slice(-1) === 's'){
    
      stringSplit[0] = stringSplit[0].slice(0,-1)
    }
    directContain[stringSplit[0]] = true

  }
})

let counter: number = 0
const recursiveness = () => {
  stringSplitted.map((item: string[]) => {
    Object.keys(directContain).forEach((key) => {
      if (!directContain.hasOwnProperty(item[0])){
        if(item[1].includes(key)) {
          if (item[0].slice(-1) === 's'){
            item[0] = item[0].slice(0,-1)
          }
          directContain[item[0]] = true
          counter++
        }
      
      }
    })
  })
  
  if (counter > 0){
    counter = 0;
    recursiveness()
  } else{
    console.log(Object.keys(directContain).length)
  }
}
 recursiveness()

// console.log(Object.keys(directContain).length)
  
  
  
  // click pr value 
  let displayValues = [];
  const myFunction = (event) => {
          console.log(`function click callled: `)
          let val = event.getAttribute("id");

          displayValues.push(val)

          let display = document.getElementsByClassName("display");

          let stringNumber= displayValues.toString()

          let replaeCommaString = stringNumber.replaceAll(',','')

          display[0].value= replaeCommaString
         
  }

   function backspace(event){
    console.log(`funnction click called: ${event}`)
    displayValues.pop()
    let display = document.getElementsByClassName("display");
    display[0].value= displayValues.toString().replaceAll(',','')
   }

 function calculate (event){
    console.log(`funnction click called: ${event}`);

    let display = document.getElementsByClassName("display");

    let stringNumber= displayValues.toString()

    let replaeCommaString = stringNumber.replaceAll(',','')
   

    if (replaeCommaString.includes("/0")) {
      display[0].value = "Error: Division by zero";
      return;
    }
  
  
    let result=eval(replaeCommaString)

    if (isNaN(result)) {
      display[0].value = "Error: Invalid calculation";
      return;
    }
    display[0].value= result
 }

const  clearScreen = () => {
    let display = document.getElementsByClassName("display")[0].value = 0;
    displayValues= [];
} 
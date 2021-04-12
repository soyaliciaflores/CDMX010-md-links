const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

//const document = './Files'
//const document = './Files/README.md'
const document = 'prueba2.md'

//Función que imprime la funcion base
const forInLinks = (links) => {
  const regexURL2 = /\[([^[]+)\]\((.*)\)/;
    for(let x in links){  
      const currentPath = (__filename)
      console.log('----------------------------------------------'.rainbow)
     let groupData = regexURL2.exec(links[x]);
    //console.log(groupData)
    console.log('path: '.bgBlue + currentPath.brightBlue) 
    console.log('link: '.bgYellow + groupData[2].slice(0,30).brightYellow)
    console.log('Text: '.bgGreen + groupData[1].brightGreen)
 }}

const mdLinksFile = () =>{
  fs.readFile(document, 'utf8', function(err, data){
      if (err)
          console.log(err);
      else{
    const regexURL = /\[([^[]+)\](\(.*\))/gm;
    const URLs = data.match(regexURL)
    //console.log(URLs)
    //Funcion para que muestre el resultado base de un solo archivo 
    //forInLinks(URLs)
    //Funcion para que muestra el resultado con la option validate
    validateOneFile(URLs)
     //Funcion para que muestra el resultado con la option stats
     //statsOneFile(URLs)
  }}); 
  }
  mdLinksFile(document);

////////////////Funciones para flag validate/////////////////
//Funcion para el flag validate para un solo archivo
const validateOneFile = (links) => {
  const regexURL2 = /\[([^[]+)\]\((.*)\)/;
  //console.log(links)
  const arrLinks = []
    for(let x in links){
      let groupData = regexURL2.exec(links[x]);
      // console.log('---------------'.rainbow)
      //console.log('link: '.bgYellow + groupData[2].slice(0,30).brightYellow)
      arrLinks.push(groupData[2])  
      //Función validate
      //arrLinks.forEach(getValidateLinks)
      //Funcion Stats
      arrLinks.forEach(statsOneFile)
 }
}
  
const getValidateLinks = (links) => {
  fetch(links)
    .then(res => {
      currentPath = (__filename)
      const resStatus = (res.statusText)
      const statusCode = (res.status)
      // --------imprime la funcion de validate ------
      console.log('Url:'.bgYellow + links.slice(0,200).brightYellow);
      console.log('Status: '.bgCyan + statusCode);
      if(resStatus === 'OK'){
        console.log('Status:'.bgGreen + 'OK'.brightGreen)
      }
      else{
        console.log('Status:'.bgRed + 'FAIL'.brightRed) 
      }
      console.log('Path:'.bgBlue + currentPath.brightBlue)
      console.log('----------------------------------------'.rainbow)
    })
    .catch(err => {
      console.log(err)
    })
};

///////////////////Funciones para el flag stats
const statsOneFile = (links) => {
  fetch(links)
    .then(res => {
      currentPath = (__filename)
      const resStatus = (res.statusText)
      const statusCode = (res.status)
      //console.log(links)

      // // --------imprime la funcion de validate ------
      // console.log('Url:'.bgYellow + links.slice(0,200).brightYellow);
      // console.log('Status: '.bgCyan + statusCode);
      // if(resStatus === 'OK'){
      //   console.log('Status:'.bgGreen + 'OK'.brightGreen)
      // }
      // else{
      //   console.log('Status:'.bgRed + 'FAIL'.brightRed) 
      // }
      // console.log('Path:'.bgBlue + currentPath.brightBlue)
      // console.log('----------------------------------------'.rainbow)
      //-----imprimir unique------
    })
    const arrUnique = [...new Set(links)]
      console.log(arrUnique)
    .catch(err => {
      console.log(err)
    })
    
};
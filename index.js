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
  //    console.log(groupData)
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
    //validateLinks(URLs)
    //Funcion para que muestre el resultado con la option validate 
    validateOneFile(URLs)
  }}); 
  }
  mdLinksFile(document);
  
  const mdLinksFiles = (filePath) =>{
      const pathParse = path.parse(__filename);
      const directory = pathParse.dir;
      fs.readdir(filePath, (err, files) => {
        if (err)
          console.log(err);
        else {
          files.forEach(file => {
            if (path.extname(file) != ".md")
             return 
            let onlyMds = file
            onlyMds = path.join(directory, filePath, onlyMds)
            fs.readFile(onlyMds, 'utf8', function(err, data){
              const regexURL = /\[([^[]+)\](\(.*\))/gm;
              const URLs = data.match(regexURL);
              //Funcion que muestra la funcion base para carpetas
              //forInLinks(URLs)
              //Funcion que muestra la funcion vaidate para carpetas
              URLs.forEach(validateOneFile)
            })
          })
        }})}
    // mdLinksFiles(document)

  //Esta funcion es para saber si es carpeta o archivo 
  const whatItIs = (filePath) => {
    //Expresión regular que verifica si es carpeta
    const regExpFiles = /^(.+)\/([^\/]+)$/m;
    //Variable donde se almacena si es un archivo con extension md
    const itsAMDFile = path.extname(filePath)
    if (document.match(regExpFiles)){
      mdLinksFiles(filePath);
    }
    else if (itsAMDFile === '.md'){
      //mdLinksFile(filePath);
    }
    else{
      console.log('No es carpeta ni archiv md')
    }
  }
 // whatItIs(document)


////////////////////Funciones para flag validate/////////////////////////
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
 }
 arrLinks.forEach(getValidateLinks)

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
 ///////////////Funciones para la flag --stats/////////

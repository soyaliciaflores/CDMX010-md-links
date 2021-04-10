const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

//Path con el que se esta trabajando
//const document = './Files'
//const document = './Files/README.md'
const document = 'prueba2.md'


//Función que imprime el path del documento, texto y link de un solo archivo
const mdLinksFile = () =>{
fs.readFile(document, 'utf8', function(err, data){
    if (err)
        console.log(err);
    else{
    const regexURL = /\[([^[]+)\](\(.*\))/gm;
    const URLs = data.match(regexURL)
    //console.log(URLs)
   //forInLinks(URLs)
   //validateLinks(URLs)
}}); 
}
//mdLinksFile();


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
            //const linkStaText = URLs.forEach(link => mdLinksFile(link))
            forInLinks(URLs)
          })
        })
      }})
    }
    //mdLinksFiles(document)

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

//Esta funcion es para saber si es carpeta o archivo 
const whatItIs = (filePath) => {
    //Expresión regular que verifica si es carpeta
    const regExpFiles = /^(.+)\/([^\/]+)$/m;
    //Variable donde se almacena si es un archivo con extension md
    const itsAMDFile = path.extname(filePath)
    if (document.match(regExpFiles)){
      //console.log('Es una carpeta')
      mdLinksFiles(filePath);
    }
    else if (itsAMDFile === '.md'){
      //console.log('es un archivo md')
      mdLinksFile(filePath);
    }
    else{
      console.log('No es carpeta ni archiv md')
    }
  }
  whatItIs(document)


const validateLinks = (files)=> {
fs.readFile(files, 'utf8', function(err, data){
const regexURL = /\https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
const URLs = data.match(regexURL);
URLs.forEach(getValidateLinks)
})};
validateLinks(document)

const getValidateLinks = (links) => {
fetch(links)
      .then(res => {
          currentPath = (__filename)
          const resStatus = (res.statusText);
          console.log('Url:'.bgYellow + links.slice(0,200).brightYellow)
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
      })};

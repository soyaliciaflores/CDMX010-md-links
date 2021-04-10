const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

//Path con el que se esta trabajando
const document = './Files'
//const document = './Files/README.md'
//const document = 'prueba2.md'


//Función que imprime el path del documento, texto y link de un solo archivo
const mdLinksFile = () =>{
fs.readFile(document, 'utf8', function(err, data){
    if (err)
        console.log(err);
    else{
    const regexURL = /\[([^[]+)\](\(.*\))/gm;
    const regexURL2 = /\[([^[]+)\]\((.*)\)/;
    const URLs = data.match(regexURL)
   for(let x in URLs){
        const currentPath = (__filename)
        console.log('----------------------------------------------'.rainbow)
       let groupData = regexURL2.exec(URLs[x]);
    //    console.log(groupData)
    console.log('path: '.bgBlue + currentPath.brightBlue) 
    console.log('link: '.bgYellow + groupData[2].slice(0,30).brightYellow)
    console.log('Text: '.bgGreen + groupData[1].brightGreen)
   }
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
            const regexURL2 = /\[([^[]+)\]\((.*)\)/;
            const URLs = data.match(regexURL);
            //const linkStaText = URLs.forEach(link => mdLinksFile(link))
            //console.log(linkStaText + 'console linkStaText 54')
            for(let x in URLs){
                const currentPath = (__filename)
                console.log('----------------------------------------------'.rainbow)
               let groupData = regexURL2.exec(URLs[x]);
            //    console.log(groupData)
            console.log('path: '.bgBlue + currentPath.brightBlue) 
            console.log('link: '.bgYellow + groupData[2].slice(0,30).brightYellow)
            console.log('Text: '.bgGreen + groupData[1].brightGreen)
           }
          })
        })
      }})
    }
    //mdLinksFiles(document)

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
  
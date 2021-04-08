const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

const document = './Files'
//const document = './Files/README.md'
//const document = 'prueba2.md'

const readLinks = ()=>{
  fs.readFile(document, 'utf8', function(err, data){ 
    if(err)  {
      console.log('Este es un error en readLinks')
    }
    const regexURL = /\(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm
    const URLs = data.match(regexURL);
    URLs.forEach(link => readAllLinks(link))
    const linkStaText = URLs.forEach(link => readAllLinks(link))
    console.log(linkStaText)
    
    })};
//readLinks()

const pathParse = path.parse(__filename);
const directory = pathParse.dir

//console.log(directory)

const mdPaths = (document) =>{
fs.readdir(document, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file) != ".md")
       return 
      let onlyMds = file
      //console.log(onlyMds)
      onlyMds = path.join(directory, document, onlyMds)
      fs.readFile(onlyMds, 'utf8', function(err, data){
        const regexURL = /\(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm
        const URLs = data.match(regexURL);
        //console.log(URLs)
        const linkStaText = URLs.forEach(link => readAllLinks(link))
        //  console.log(linkStaText)
        readAllLinks()
      })
    })
  }})
}
//mdPaths(document)


// function linkValidate(url, stat){
// url : url;
// stat : stat
// }

//Esta funcion es recursiva para saber si es carpeta o archivo 
const whatItIs = (document) => {
  //convertir a ruta absoluta el path enviado por el usuario
  const regExpFiles = /^(.+)\/([^\/]+)$/m;
  const itsAMDFile = path.extname(document)
  if (document.match(regExpFiles)){
    //console.log('Es una carpeta')
    mdPaths(document);
  }
  else if (itsAMDFile === '.md'){
    //console.log('es un archivo md')
    readLinks();
  }
  else{
    console.log('No es carpeta ni archiv md')
  }
}
whatItIs(document)

const readAllLinks = (link) => {
  fetch(link)

  .then(res => {
      const resStatus = (res.statusText);
      const propietyLinks = {
        link : link,
        stat : resStatus    
      }
      console.log(propietyLinks)
  })
  .catch(err => {
    console.log(err)
  });
}
//readAllLinks(link)

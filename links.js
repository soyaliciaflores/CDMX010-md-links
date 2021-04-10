const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

//const document = './Files'
//const document = './Files/README.md'
const document = 'prueba2.md'




const readLinks = (document)=>{
  fs.readFile(document, 'utf8', function(err, data){ 
    if(err)  {
      console.log('Este es un error en readLinks')
    }
    const regexURL = /\[([^[]+)\](\(.*\))/gm;
    const URLs = data.match(regexURL);
    console.log(URLs)
    // URLs.forEach(link => readAllLinks(link))
    // const linkStaText = URLs.forEach(link => readAllLinks(link))
    // console.log(linkStaText)
    })};
//readLinks()

const pathParse = path.parse(__filename);
const directory = pathParse.dir

//console.log(directory)

const mdPaths = (filePath) =>{
fs.readdir(filePath, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file) != ".md")
       return 
      let onlyMds = file
      //console.log(onlyMds)
      onlyMds = path.join(directory, filePath, onlyMds)
      fs.readFile(onlyMds, 'utf8', function(err, data){
        const regexURL = /\(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
        const URLs = data.match(regexURL);
        //console.log(URLs)
        const linkStaText = URLs.forEach(link => readAllLinks(link))
        //console.log(linkStaText)
      })
    })
  }})
}
//mdPaths(document)

//Esta funcion es para saber si es carpeta o archivo 
const whatItIs = (filePath) => {
  const regExpFiles = /^(.+)\/([^\/]+)$/m;
  const itsAMDFile = path.extname(filePath)
  if (document.match(regExpFiles)){
    //console.log('Es una carpeta')
    mdPaths(filePath);
  }
  else if (itsAMDFile === '.md'){
    //console.log('es un archivo md')
    readLinks(filePath);
  }
  else{
    console.log('No es carpeta ni archiv md')
  }
}
whatItIs(document)

// const readAllLinks = (link) => {
//   fetch(link)
//   .then(res => {
//       currentPath = (__filename)
//       const resStatus = (res.statusText);
//       console.log('Url: '.magenta + link.brightBlue, '  Status: '.magenta + resStatus + '  Path: '.magenta + currentPath.brightYellow
//       )
//       console.log('----------------------------------------'.rainbow)
//   })
//   .catch(err => {
//     console.log(link)

//     console.log(err)
//   });
// }
//readAllLinks(link)

// console.log(process.argv)
const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

const document = './Files'
//const document = './Files/README.md'
//const document = 'prueba2.md'

// Esta función excluye todos los archivos md, reconoce los links 
// y los regresa en forma de array
const findMarkdownFiles = (document) => {
  // convertir a ruta absoluta el path enviado por el usuario
  const absPath = path.isAbsolute(document) ? document : path.resolve(document)
  const itsAMDFile = path.extname(document)
  if (fs.statSync(absPath).isDirectory()) {
    const filesAndDirs = fs.readdirSync(absPath)
    let mdFiles = []
    filesAndDirs.forEach((fileAndDir) => {
      const newMdFiles = findMarkdownFiles(path.join(absPath, fileAndDir))
      mdFiles = mdFiles.concat(newMdFiles) 
    })
  } else if (itsAMDFile === '.md') {
      fs.readFile(document, 'utf8', function(err, data){
        const regexURL = /https?:\/\/[a-zA-Z\.\/-]+/gm;
        const URLs = data.match(regexURL)
        //funcion para mdLinks
        //validateInLinks(URLs)
        //funcion para flag validate
        //URLs.forEach(getValidate)
        //Funcion para flag stats
        URLs.forEach(getStats)
      });    
  }}
findMarkdownFiles(document);

const validateInLinks = (links) => {
    for(let link in links){
      const currentPath = (__filename)
      console.log('----------------------------------------------'.rainbow)
      console.log('link: '.bgYellow + links[link].slice(0,25).brightYellow + '  ---  '.rainbow + 'path: '.bgBlue + currentPath.brightBlue) 
 }}

 const getValidate = (links) => {
  fetch(links)
    .then(res => {
        const currentData = res
        currentPath = (__filename)
        const resStatus = (res.statusText)
        const statusCode = (res.status)
        //--------imprime la funcion de validate ------
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
        })};

const getStats = (links) => {
  fetch(links)
    .then(res => {
      const resStatus = (res.statusText)
      let objLinks = {
        url : links,
        status: resStatus
      }
        console.log(objLinks)
      //const uniqueArr = new Set(links)
      //console.log(uniqueArr)
        // const currentData = res
        // currentPath = (__filename)
        // const resStatus = (res.statusText)
        // console.log(resStatus)
        // const statusCode = (res.status)
        //--------imprime la funcion de validate ------
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
    })
    .catch(err => {
      console.log(err)
        })};


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


////////////////////////////////////////////
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
   forInLinks(URLs)
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
   // mdLinksFiles(document)

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

//Funciones para flag validate
//Funcion para el flag validate para un solo archivo
const validateLinks = (files)=> {
fs.readFile(files, 'utf8', function(err, data){
const regexURL = /\https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
const URLs = data.match(regexURL);
URLs.forEach(getValidateLinks)
})};
//validateLinks(document)

const getLinksAllMDs = (filePath) =>{
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
          console.log(file)
          onlyMds = path.join(directory, filePath, onlyMds)
          fs.readFile(onlyMds, 'utf8', function(err, data){
            const regexURL = /\https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
            const URLs = data.match(regexURL);
            //const linkStaText = URLs.forEach(link => mdLinksFile(link))
            URLs.forEach(getValidateLinks)
          })
        })
      }})
    }
  //getLinksAllMDs(document)

  const getValidateLinks = (links) => {
    fetch(links)
          .then(res => {
             const currentData = res
             //console.log(currentData)
              currentPath = (__filename)
              //console.log(res)
              const resStatus = (res.statusText)
              const statusCode = (res.status)
              for(link in currentData){
                console.log(link+currentData[link].url)

                console.log('-----')
              }
              //   console.log(link.status)
              // }

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


// Aqui empieza el codigo para imprimir stats
// const statsMdLinks = (links)=>{
  
// }
// statsMdLinks()


/////////////////////////////////////

const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

//Path con el que se esta trabajando
const document = './Files'
//const document = './Files/README.md'
//const document = 'prueba2.md'

const findMarkdownFiles = (document) => {
  // convertir a ruta absoluta el path enviado por el usuario
  const absPath = path.isAbsolute(document) ? document : path.resolve(document)
  if (fs.statSync(absPath).isDirectory()) {
    const filesAndDirs = fs.readdirSync(absPath)
    let mdFiles = []
    filesAndDirs.forEach((fileAndDir) => {
      const newMdFiles = findMarkdownFiles(path.join(absPath, fileAndDir))
      mdFiles = mdFiles.concat(newMdFiles) 
    })
  } else {
    console.log()
      fs.readFile(document, 'utf8', function(err, data){
          const regexURL = /\https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}$\gi/gm;
          const URLs = data.match(regexURL)
         console.log(URLs)
         //funcion para mdLinks
         //forInLinks(URLs)
         //funcion para flag validate
         //URLs.forEach(getValidateLinks)
      });    
  }
}
findMarkdownFiles(document);

const forInLinks = (links) => {
    //const regexURL2 = /\[([^[]+)\]\((.*)\)/;
    //console.log(links)
      for(let link in links){
        const currentPath = (__filename)
        console.log('----------------------------------------------'.rainbow)
        console.log('link: '.bgYellow + links[link].slice(0,25).brightYellow + '  ---  '.rainbow + 'path: '.bgBlue + currentPath.brightBlue) 
   }}
  
 
  //Funciones para flag validate
  //Funcion para el flag validate para un solo archivo
  const validateLinks = (files)=> {
  fs.readFile(files, 'utf8', function(err, data){
  const regexURL = /\https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
  const URLs = data.match(regexURL);
  URLs.forEach(getValidateLinks)
  })};
  //validateLinks(document)
  
  const getLinksAllMDs = (filePath) =>{
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
            console.log(file)
            onlyMds = path.join(directory, filePath, onlyMds)
            fs.readFile(onlyMds, 'utf8', function(err, data){
              const regexURL = /\https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
              const URLs = data.match(regexURL);
              //const linkStaText = URLs.forEach(link => mdLinksFile(link))
              URLs.forEach(getValidateLinks)
            })
          })
        }})
      }
    //getLinksAllMDs(document)
  
    const getValidateLinks = (links) => {
      fetch(links)
            .then(res => {
                currentPath = (__filename)
                //console.log(res)
                const resStatus = (res.statusText)
                const statusCode = (res.status)
                //--------imprime la funcion de validate ------
                console.log('URL'.bgYellow + res.url.brightYellow);
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
  
           
//////////////////////////////////////

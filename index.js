const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');
const readline = require('readline-sync')

//const document = './Files'
//const document = './Files/README.md'
const document = 'prueba2.md'

// Esta función excluye todos los archivos md, reconoce los links y los regresa en forma de array
const whatItIs = (document) => {
  // convertir a ruta absoluta el path enviado por el usuario
  const absPath = path.isAbsolute(document) ? document : path.resolve(document)
  const itsAMDFile = path.extname(document)
  if (fs.statSync(absPath).isDirectory()) {
    const filesAndDirs = fs.readdirSync(absPath)
    let mdFiles = []
    filesAndDirs.forEach((fileAndDir) => {
      const newMdFiles = whatItIs(path.join(absPath, fileAndDir))
      mdFiles = mdFiles.concat(newMdFiles) 
    })
  } else if (itsAMDFile === '.md') {
      fs.readFile(document, 'utf8', function(err, data){
        const regexURL = /https?:\/\/[a-zA-Z\.\/-]+/gm;
        const URLs = data.match(regexURL)
        switch (response){
          case 'mdlinks':
            console.log(mdLinks(URLs));
            break;
          case '--validate':
            console.log(getValidate(URLs));
            break;
          case '--stats':
            console.log(getStats(URLs));
            break;
          case '--stats --validate':
            console.log(getStatsValidate(URLs));
            break
        }   
        
      });    
  }}
whatItIs(document);

const mdLinks = (links) => {
  console.log('-------------------------------------------------------------------------'.rainbow)
   console.log('                    - - M D - L I N K S '.rainbow)
   console.log('_______________________________________________________________________'.rainbow)
    for(let link in links){
      const currentPath = (__filename)
      console.log('link: '.bgYellow + links[link].slice(0,25).brightYellow + '  ---  '.rainbow + 'path: '.bgBlue + currentPath.brightBlue) 
      console.log('----------------------------------------------'.rainbow)
    }}

 const getValidate = (links) => {
  console.log('-------------------------------------------------------------------------'.rainbow)
   console.log('                     - - V A L I D A T E '.rainbow)
   console.log('_______________________________________________________________________'.rainbow)
  links.forEach(links =>
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
      console.log('_____________________________________________________________'.rainbow)
        }))};

//Funcion para obtener option stats
const getStats = (links) => {
  console.log('-------------------------------------------------------------------------'.rainbow)
   console.log('                     - - S T A T S '.rainbow)
   console.log('_______________________________________________________________________'.rainbow)
  console.log('Total '.brightBlue +  links.length)
  const unique = [...new Set(links)].length
  console.log('Unique Links '.brightYellow + unique) };


//Función para obtener stats validate
const getStatsValidate = (links) => {
  console.log('-------------------------------------------------------------------------'.rainbow)
  console.log('                  - - S T A T S  - - V A L I D A T E'.rainbow)
  console.log('_______________________________________________________________________'.rainbow)
 console.log('Total '.brightBlue +  links.length)
 const unique = [...new Set(links)].length
 console.log('Unique Links '.brightYellow + unique)
 
 validateStatusLink(links)
 .then(result => {
  console.log(result)
 })
};
 
const validateStatusLink = (arrLinks) => {
  const promises = arrLinks.map(link => { // se genera un array de promesas
    return fetch(link)
      .then((response) => {
        if(response.status){
            return {
              status: response.status,
            };
        } else{
            return {
              status: response.status,
            }
        }
      })
      .catch((err) => {
        return {
          status: 404
        }
      });
  });
 
  return Promise.all(promises) //se resuelven todas las promesas
};

const route = readline.question('Ingresa la URL:  ')
console.log('mdlinks '.rainbow + 'para obtener el link y la ruta del archivo.'.brightBlue)
console.log('--validate '.rainbow + 'para obtener el link, la ruta y su status'.brightYellow)
console.log('--stats '.rainbow + 'para obtener una estadística del total de links y cuántos links únicos hay'.brightGreen)
console.log('--stats --validate '.rainbow + 'para obtener una estadística del total de links y cuántos links únicos hay'.brightMagenta)

response = readline.question('¿Qué operación deseas realizar?  '.brightRed);

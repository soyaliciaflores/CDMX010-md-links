const fs = require('fs');
const colors = require('colors');
const path = require('path');
const fetch = require('node-fetch');

const document = './Files'
//const document = './Files/README.md'
//const document = 'prueba2.md'


const readLinks = () => {
  fs.readFile(document, 'utf8', function (err, data) {
    if (err) {
      console.log('Este es un error en readLinks')
    }
    const regexURL = /\(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm
    const URLs = data.match(regexURL);
    console.log(URLs);
  })
};


const mdPaths = (document) => {
  fs.readdir(document, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if (path.extname(file) != ".md")
          return
        const onlyMds = file
        // const dirJoined = path.join(directory, document, onlyMds)
        // const mdAbsolutePath = dirJoined
        console.log(onlyMds)
        fs.readFile(document, 'utf8', function (err, data) {
          console.log(data)
        })
      })
    }
  })
}
//mdPaths(document)

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

    return mdFiles
  } else {
    if (absPath.endsWith('.md')) {
      return [absPath]
    } else {
      return []
    }
  }
}
// const regExpFiles = /^(.+)\/([^\/]+)$/m;
// const itsAMDFile = path.extname(document)
// if (document.match(regExpFiles)){
//   mdPaths(document);
// }
// else if (itsAMDFile === '.md'){
//   readLinks();
// }

console.log(findMarkdownFiles(document))


//---------Variables para ruta absoluta de los archivos en una carpeta-------
//const pathParse = path.parse(__filename);
//const directory = pathParse.dir
//------------------------------------------------








# must match name of the github repo
github_repo:= "gschleic.github.io" 

alias g:=gitp
alias b:=build
alias d:=deploy
alias o:=open 

set dotenv-load
set positional-arguments

##########
gitp:
  git add .
  git commit -m "build"
  git push origin master

deploy:
  just gitp
  echo "https://{{github_repo}}"

build:
  just bundleflu
  xparse -v -o ./docs/app.bin ./src/bundled.fluent
  just gen-index-html

open:
  open "https://{{github_repo}}"

bundleflu:
  #!/usr/bin/env zx
  const files = await fs.readdirSync(`./src`)
  let source = "";
  for (let fn of files) {
    if (fn.endsWith('.flu')) {
            const filesource = fs.readFileSync(`./src/${fn}`, 'utf8')
            source += `\n// source: ${fn}\n`;
            source += filesource;
        }    
    }
  fs.writeFileSync(`./src/bundled.fluent`, source);
  

gen-index-html:
  #!/usr/bin/env zx
  const template = `
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fluent Template</title>
  <script src="https://c.flu.run/core/latest/efn.js?latest"></script>
  <script src="https://c.flu.run/core/latest/ee-development.js?latest"></script>
  <link rel="manifest" href="manifest.json">
  </head>
  <style>
  body {
      margin: 0;
      padding: 0;
  }
  </style>
  <body>
  </body>
  <script>EE.boot("app.bin?latest")</script>
  </html>
  `;
  await fs.writeFile(`./docs/index.html`, template);

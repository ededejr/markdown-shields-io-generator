# Markdown Shield Generator
A simple Node.js script to generate shields for a markdown document.

## Making your own shields

#### Installing
1. `git clone https://github.com/dxede/markdown-shields-io-generator.git`
2. `cd markdown-shields-io-generator`
3. `npm install`
4. `npm start`

#### Notes
The `npm start` command will run the script and output to the `out.md` file. You can change the contents of `src/data.mjs` to build your own shields.

You can view the `src/config.mjs` file for how to configure a shield.


## Examples

### Basic Branded Shield
```
{
  message: 'JavaScript',
  options: {
    color: `F7DF1E`,
    logo: 'JavaScript',
    logoColor: 'black',
  }
}
```
#### Creates:
![JavaScript](https://img.shields.io/badge/JavaScript-informational?style=for-the-badge&color=F7DF1E&logo=JavaScript&logoColor=black)


### Label with Meta Shield
```
{
  label: 'JavaScript',
  meta: '90%',
  options: {
    labelColor: `F7DF1E`,
    color: 'black',
    logo: 'JavaScript',
    logoColor: 'black',
  }
}
```
#### Creates:
![JavaScript](https://img.shields.io/badge/JavaScript-A+-informational?style=for-the-badge&color=black&logo=JavaScript&logoColor=black&labelColor=F7DF1E)

### Meta and logo only
```
{
  meta: 'A+',
  options: {
    color: `black`,
    labelColor: '007ACC',
    logo: 'TypeScript',
    logoColor: 'white',
  }
}
```
#### Creates:
![](https://img.shields.io/badge/-A-informational?style=for-the-badge&color=black&logo=TypeScript&logoColor=white&labelColor=007ACC)

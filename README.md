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

### Basic Shield
```
{
  label: 'JavaScript',
}
```
#### Creates:
![JavaScript](https://img.shields.io/badge/JavaScript-informational?style=for-the-badge&color=rgba(0%2C0%2C0%2C%200.8)&logo=JavaScript&logoColor=F7DF1E)


### Label with Meta Shield
```
{
  label: 'JavaScript',
  meta: 'A+',
}
```
#### Creates:
![JavaScript](https://img.shields.io/badge/JavaScript-A%2B-informational?style=for-the-badge&color=rgba(0%2C0%2C0%2C%200.8)&logo=JavaScript&logoColor=F7DF1E)

### Styling Label and Meta example
```
{
  label: 'JavaScript',
  meta: 'A+',
  options: {
    color: 'F7DF1E',
    labelColor: 'black'
  }
}
```
#### Creates:
![JavaScript](https://img.shields.io/badge/JavaScript-A%2B-informational?style=for-the-badge&color=F7DF1E&logo=JavaScript&logoColor=F7DF1E&labelColor=black)


### Alternate Style
```
{
  label: 'JavaScript',
  meta: 'A+',
  options: {
    style: 'flat',
    logo: null,
    color: 'F7DF1E',
    labelColor: 'black'
  }
}
```
#### Creates:
![JavaScript](https://img.shields.io/badge/JavaScript-A%2B-informational?style=flat&color=F7DF1E&logoColor=F7DF1E&labelColor=black)
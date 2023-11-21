# Markdown Save

Markdown é uma linguagem de marcação usada para formatar texto na web e permite  que os usuários apliquem formatação básica utilizando uma sintaxe fácil de ler e escrever. Com sua simplicidade, o Markdown é amplamente utilizado em plataformas online para criar documentos, páginas da web e mensagens,facilitando a formatação de texto. Por exemplo esse texto que você está lendo foi escrito usando a linguagem markdown

Esse projeto funciona como um conversor de texto sem formatação em texto com a formatação markdown e foi desenvolvido inteiramente usando a biblioteca React

![markdownExample](https://github.com/eve4t00n/Texto-Markdown/assets/97269617/76b16e71-edee-4b4a-acde-8add31061b7f)

## Pacotes utilizados

- file-saver 
    - Para salvar o Markdown.txt
- react-markdown
    - Converter texto para Markdown

### file-saver

O pacote [file-saver](https://www.npmjs.com/package/file-saver) foi responsável pela funcionalidade de salvar o arquivo em texto formatado markdown.txt

Para visualizar é necessário apenas alguma aplicação que retorne o texto formatado em markdown como nessa aplicação. Caso contrário, a o texto formatado sairá dessa forma

![markdownexampleinput](https://github.com/eve4t00n/Texto-Markdown/assets/97269617/45f4e430-1e59-4681-a602-967f6916c91a)

Nessa imagem eu abri o arquivo de texto pelo bloco de notas

### react-markdown

O pacote [react-markdown](https://www.npmjs.com/package/react-markdown) foi responsável por receber a entrada da área de texto do lado esquerdo e renderiza para o texto formatado markdown do lado direito

Para isso eu salvei o texto digitado pelo usuário em um state(textoOriginal) e usei um useEffect que é executado todas as vezes que o usuário altera o valor do textoOriginal, nesse caso quando um novo caracter é digitado, e chama a função setTextoAlterado que atribui o valor do textoOriginal para o textoAlterado

```
useEffect(() => {
    setTextoAlterado(textoOriginal)
  },[textoOriginal])
```

Já para transformar em markdown o pacote faz isso automaticamente através do componente ReactMarkdown que recebe o textoAlterado

```
<ReactMarkdown className='textoAlterado'>{textoAlterado}</ReactMarkdown>
```
## Documentação

Para entender melhor como o Markdown funciona você pode acessar a documentação resumida [aqui](/blocoDeNotas/README.md) ou uma documentação mais detalhada nesse [link](https://markdown.net.br/sintaxe-basica/)

## Instalação

Caso deseje testar o código em seu computador esse é o passo a passo para executá-lo no VsCode:

- Faça um clone desse repositório

```
git clone https://github.com/eve4t00n/Texto-Markdown.git
code .
```
  
- Abra um terminal (Ctrl + Shift + ')
- Digite os seguintes comandos:

```
cd blocoDeNotas
npm i
npm run dev
```
- Abra uma nova aba no navegador com a seguinte url: localhost:5173

Pronto para usar, só testar

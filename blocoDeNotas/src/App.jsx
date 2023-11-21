import { useEffect, useState } from 'react'
import { saveAs } from 'file-saver'
import ReactMarkdown from 'react-markdown'

import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import Grid from '@mui/material/Grid'


import { BiDownload } from "react-icons/bi"

import './App.css'

export default function App() {

  const [textoOriginal, setTextoOriginal] = useState('')
  const [textoAlterado, setTextoAlterado] = useState('')
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    setTextoAlterado(textoOriginal)
  },[textoOriginal])

  function salvarArquivo(){
    if(titulo !== ''){
      const blobFile = new Blob([textoAlterado],
        {type: "text"})
      saveAs(blobFile, titulo)
    } else {
      alert('O arquivo precisa ter um Título')
    }
  }

  return(
    <div>
      <h1 className="appName">Texto para Markdown</h1>
        <Grid container className="container" spacing={3}>
          <Grid xs={2}>

          </Grid>
          <Grid xs={8}>
            <Grid container className='inputBody' spacing={2}>
              <Grid xs={6}>
                <TextareaAutosize 
                  className='markInput'
                  minRows={30}
                  placeholder='Insira Texto...'
                  value={textoOriginal}
                  onChange={e => setTextoOriginal(e.target.value)}
                />
              </Grid>
              <Grid xs={6}>
                <ReactMarkdown className='textoAlterado'>{textoAlterado}</ReactMarkdown>
              </Grid>
            </Grid>
            <input 
              className='markInput titulo'
              placeholder='Nome do Arquivo'
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
            <button onClick={salvarArquivo} title='Salvar'><BiDownload /></button>
          </Grid>
          <Grid xs={2}>

          </Grid>
        </Grid>
    </div>
  )
}

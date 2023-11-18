import { useEffect, useState } from 'react'
import { saveAs } from 'file-saver'
import ReactMarkdown from 'react-markdown'

import { TextareaAutosize } from '@mui/base/TextareaAutosize'

import { BiDownload } from "react-icons/bi"

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
      <div className='corpo'>
        <TextareaAutosize
          minRows={30}
          placeholder='Insira Texto...'
          value={textoOriginal}
          onChange={e => setTextoOriginal(e.target.value)}
        />
        <ReactMarkdown>{textoAlterado}</ReactMarkdown>
      </div>
      <input 
        placeholder='Nome do Arquivo'
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />
      <button onClick={salvarArquivo} title='Salvar'><BiDownload /></button>
    </div>
  )
}

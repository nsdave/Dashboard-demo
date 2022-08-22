import React from 'react'
import { HtmlEditor, Image, Inject, Link,
QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Editor = () => {
  const { currentColor } = useStateContext()

  return (
    <div
    className='m-2 md:m-10 mt-24 p-2 md:p-10 
    bg-white rounded-3xl'
    >
      <Header category={'App'} title='Text Editor' />
      <RichTextEditorComponent>
        <Inject services={[ HtmlEditor, Image, Toolbar,
        Link, QuickToolbar ]} />
      </RichTextEditorComponent>

      <h2 className='text-center font-medium mt-8 mb-3 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
      </h2>
    </div>
  )
}

export default Editor
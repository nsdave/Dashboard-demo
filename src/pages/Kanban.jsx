import React from 'react'
import {  KanbanComponent, ColumnDirective,
ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Kanban = () => {
  const { currentColor } = useStateContext() 

  return (
    <div
    className='m-2 md:m-10 mt-24 p-2 md:p-10 
    bg-white rounded-3xl'
    >
      <Header category={'App'} title='Kanban' />
      <KanbanComponent
      id='Kanban'
      dataSource={kanbanData}
      cardSettings={{ 
        contentField: 'Summary',
        headerField: 'Id'
       }}
      keyField="Status" 
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => 
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
      </KanbanComponent>

      <h2 className='text-center font-medium mt-8 mb-3 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
      </h2>
    </div>
  )
}

export default Kanban
import React from 'react'
import { GridComponent, ColumnsDirective,
ColumnDirective, Resize, Sort, ContextMenu,
Filter, Page, ExcelExport, PdfExport, Edit,
Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Orders = () => {
  const { currentColor } = useStateContext()

  return (
    <div
    className='mt-24 m-2 md:m-10 p-2 md:p-10
    bg-white rounded-3xl' 
    >
      <Header category='Page' title='Orders' />
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))} 
        </ColumnsDirective>
        <Inject 
        services={[ Resize, Sort, ContextMenu, Filter, Page,
        ExcelExport, PdfExport, Edit ]}
        />
      </GridComponent>

      <h2 className='text-center font-medium mt-8 mb-3 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
      </h2>
    </div>
  )
}

export default Orders
import React from 'react'
import { GridComponent, ColumnDirective, 
ColumnsDirective, Page, Selection, Inject,
Edit, Toolbar, Filter, Sort } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Customers = () => {
  const { currentColor } = useStateContext()

  return (
    <div className='mt-24 m-2 md:m-10 p-2 md:p-10 
    bg-white rounded-3xl' >
      <Header category={'Page'} title='Customers' />
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Selection, Edit,
        Filter, Sort ]} />
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

export default Customers
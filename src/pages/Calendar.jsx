import React from 'react'
import { ScheduleComponent,
Day, Week, WorkWeek, Month, Agenda, Resize,
DragAndDrop, 
Inject} from '@syncfusion/ej2-react-schedule'
import { useStateContext } from '../contexts/ContextProvider'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  const { currentColor } = useStateContext()

  return (
    <div
    className='m-2 md:m-10 mt-24 p-2 md:p-10 
    bg-white rounded-3xl'
    >
      <Header category={'App'} title='Calender' />
      <ScheduleComponent
      height={"650px"}
      // eventSettings={{ 
      //   dataSource: scheduleData
      //  }}
      // selectedDate={new Date(2021, 0 , 10)}
      >
        <Inject services={[ Day, Week, WorkWeek, Month, Agenda,
        Resize, DragAndDrop ]} />
      </ScheduleComponent>

      <h2 className='text-center font-medium mt-8 mb-3 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
      </h2>
    </div>
  )
}

export default Calendar
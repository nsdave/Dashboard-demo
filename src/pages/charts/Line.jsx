import React from 'react'
import { ChartsHeader, LineChart } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Line = () => {
  const { currentColor } = useStateContext()

  return (
    <div
    className='m-4 md:m-10 mt-24 p -10 bg-white
     rounded-3xl dark:bg-secondary-dark-bg ' 
    >
      <ChartsHeader category={'Line'} title='Inflation Rate' />
      <div className='w-full' >
        <LineChart />
      </div>

      <h2 className='text-center font-medium mt-8 mb-3 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
      </h2>
    </div>
  )
}

export default Line
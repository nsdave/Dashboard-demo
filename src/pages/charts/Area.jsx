import React from 'react'
import { ChartComponent, SeriesCollectionDirective,
SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend, } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryYAxis,
areaPrimaryXAxis } from '../../data/dummy'
import { ChartsHeader } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
  const { currentMode, currentColor } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p -10 bg-white
    rounded-3xl dark:bg-secondary-dark-bg ' >
      <ChartsHeader category={'Area'} title='Inflation Rate In Percentage' />
      <div className='w-full' />
      <ChartComponent
      id='area-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      >
        <Inject services={[ SplineAreaSeries, DateTime, Legend ]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => 
            <SeriesDirective key={index} {...item} />
          )}
        </SeriesCollectionDirective>
      </ChartComponent>

      <h2 className='text-center font-medium mt-8 mb-3 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
      </h2>
    </div>
  )
}

export default Area
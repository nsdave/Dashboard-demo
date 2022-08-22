import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine  } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ECommerce = () => {
  const { currentColor } = useStateContext()

  return (
    <div className='mt-24'>
      <div 
      className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div
        className='bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg h-44 rounded-xl
        w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern
        bg-no-repeat bg-cover bg-center'
        >
          <div
          className='flex justify-between items-center'
          >
            <div>
              <p className='font-bold text-grap-400' >Earnings</p>
              <p className='text-2x1' >₦54,876</p>  
            </div>
          </div>
          <div className='mt-6' >
            <Button 
            color="white"
            bgColor={currentColor} 
            text="Download"
            borderRadius="10px"
            size='md'
            />
          </div>
        </div>

        <div
        className='flex m-3 flex-wrap justify-center gap-1
        items-center'
        >
          {earningData.map((item) => (
            <div
            key={item.title}
            className='bg-white
            dark:text-gray-200 dark:bg-secondary-dark-bg
            md:w-56 p-4 pt-9 rounded-3xl'
            >
              <button type='button'
              style={{ color: item.iconColor, 
                backgroundColor: item.iconBg }} 
              className="text-2x1 opacity-0.9
              rounded-full p-4 hover:drop-shadow-xl"  
              >
                {item.icon}
              </button>
              <p className='mt-3' >
                <span className='text-lg 
                font-semibold' >
                  {item.amount}
                </span>
                <span
                className={`text-sm text-${item.pcColor} ml-2`}
                >
                  {item.percentage}
                </span>
              </p>
              <p
              className='text-sm text-gray-400 mt-1'
              >{ item.title }</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div
      className='flex gap-10 flex-wrap justify-center '
      >
        <div
        className='bg-white dark:text-gray-200 
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl
        md:w-780'
        >
          <div
          className='flex justify-between'
          >
            <p className='font-semibold pl-4 md:pl-6 text-xl' >
              Revenue Updates
            </p>

            <div className='flex flex-wrap items-center gap-4' >
              <p
              className='flex items-center gap-2 text-gray-600
              hover:drop-shadow-xl' 
              >
                <span> <GoPrimitiveDot /> </span>
                <span className='dark:text-white' >Expense</span>
              </p>
              <p
              className='flex items-center gap-2 text-green-400
              hover:drop-shadow-xl' 
              >
                <span> <GoPrimitiveDot /> </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div
          className='mt-10 flex gap-10 flex-wrap
          justify-center'
          >
            <div
            className='border-r-1 border-color m-4 pr-10' 
            >
              <div>
                <p>
                  <span
                  className='text-3x1 font-semibold'
                  >
                    ₦84,600
                  </span>
                  <span
                  className='p-1.5 hover:drop-shadow-xl
                  cursor-pointer rounded-full text-white
                  bg-green-400 ml-3 text-xs'
                  >23%</span>
                </p>
                
                <p className='text-gray-500 dark:text-gray-400 mt-1' >
                  Budget
                </p>
              </div>
              <div className='mt-8' >
                <p>
                  <span
                  className='text-3x1 font-semibold'
                  >
                    ₦44,746
                  </span>
                </p>
                <p className='text-gray-500 mt-1 dark:text-gray-400' >
                  Expense
                </p>
              </div>

              <div className='mt-5' >
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={ SparklineAreaData }
                  color={currentColor}
                />
              </div>
              <div className='mt-10' > 
                <Button
                color={'white'}
                bgColor={currentColor}
                text={"Download Report"}
                borderRadius="10px" 
                />
              </div>
            </div>

            <div>
              <Stacked 
              width="320px"
              height="360px"
              />
            </div>

          </div>

        </div>
      </div>      

        <h2 className='text-center font-medium mt-6 mb-6 ' >
          <span>Made By <a href='https://nsdavian.github.io/North-X-Studio/' 
          className='cursor-pointer'
          style={{ color: currentColor }}
           > North X Studio</a></span>
        </h2>
  
    </div>
  )
}

export default ECommerce
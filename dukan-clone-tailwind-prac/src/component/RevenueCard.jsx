export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return (
      <div>
        <div className='bg-white rounded shadow-md p-4'>
          <div className="text-gry-700">
            <div className="flex">
            {title}
            <svg class="h-6 w-6 text-gray-500 pt-2 "  fill="none" viewBox="0 0 30 30" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            </div>

          </div>
          <div className="flex justify-between pt-2">
              <div className="font-semibold text-2xl"> 
                ₹ {amount}
              </div>
                {orderCount ? <div className="flex cursor-pointer underline ">
                    <div className="flex">
                        <div className="text-blue-600">
                            {orderCount} order(s)
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 -1 21 21" stroke-width="2" stroke="#4c9cf4" class="size-6  pr-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    </div> : null} 
            </div>
        </div>
      </div>
    )
}
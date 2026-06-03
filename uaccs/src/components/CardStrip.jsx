/* Card strip component to display info on floating cards */
function CardStrip({items}) {
    /* items with the following attributes:
        - Icon
        - Color scheme
        - Title
        - Subtext
    */

    return (
        <div className = "grid grid-cols-4 grid-rows-1 max-w-6xl gap-10 w-full mt-20 text-center text-2xl rounded-md">
          {items.map((item, index) => {
            return (
                <div 
                key = {index} 
                className = {`bg-white h-52 border-6 border-solid py-5 shadow-custom_shadow flex flex-col items-center justify-between rounded-lg hover:-translate-y-2 hover:shadow-2xl hover:scale-102 duration-300 ease-in-out ${item.color}`}>
                    <div className = {`w-14 h-14 rounded-full flex items-center justify-center ${item.background} opacity-75`}>{item.icon}</div>
                    <h3 className = "text-2xl font-semibold font-nunito" >{item.title}</h3>
                    <div className = "text-gray-700 font-extralight text-[18px] ">
                        {item.subtext}
                    </div>
                </div>
            )
          })}  
        </div>
    )

}

export default CardStrip;
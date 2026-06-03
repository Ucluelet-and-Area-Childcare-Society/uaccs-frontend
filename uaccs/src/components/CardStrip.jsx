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

            const Icon = item.icon
            return (
                <div 
                key = {index} 
                className = {`bg-white h-52 border-6 py-5 shadow-custom_shadow flex flex-col items-center justify-between rounded-md`}>
                    <Icon size = {36} />
                    <h3 className = "text-2xl" >{item.title}</h3>
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
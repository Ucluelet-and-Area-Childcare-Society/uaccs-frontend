/* Card strip component to display info on floating cards */
function CardStrip({items}) {
    /* items with the following attributes:
        - Icon
        - Color scheme
        - Title
        - Subtext
    */

    return (
        <div className = "grid grid-cols-3 grid-rows-1 max-w-6xl gap-15 w-full mt-20 text-center font-dancing text-2xl">
          {items.map((item, index) => {

            const Icon = program.icon
            return (
                <div 
                key = {index} 
                className = {`bg-white h-64 border-6 py-5 shadow-custom_shadow flex flex-col items-center justify-between ${program.borderColor} ${program.textColor} ${program.shadowColor}`}>
                    <h3 className = "font-uaccs text-3xl" >{item.title}</h3>
                    <Icon size = {36} />
                    <div className = "text-gray-700 font-extralight text-[18px] font-schoolbell">
                        {program.ages}
                    </div>
                </div>
            )
          })}  
        </div>
    )

}

export default CardStrip;
interface IProp{
    positions:{
        x: number, 
        y: number
    }
}


const DropMenu = ({positions}:IProp) => {
    return(
           
           <ul className="bg-white text-black w-fit px-7 py-2 rounded-md"
           style={{
            position: 'absolute',
            left:positions.x,
            top:positions.y,
            
           }}>
            <li>close</li>
            <li>close all</li>
           </ul>
        
    )
}


export default DropMenu
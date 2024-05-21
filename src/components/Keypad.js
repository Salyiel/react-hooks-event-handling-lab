// Code Keypad Component Here

function Keypad (){
    function handleChangeEvent(){
        console.log("Entering password...")
    }
  
    return (
       <input type="password" onChange={handleChangeEvent} />
    )
}

export default Keypad;
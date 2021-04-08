// Code Keypad Component Here
function Keypad(){
    
    function handlePassword(){
        console.log("Entering password...")
    }
    
    return (
        <input type="password" onChange={handlePassword}>
        </input>
    )
}

export default Keypad;
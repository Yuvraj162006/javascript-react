export function Eventtodo()
{
    function handleClick(){
        alert("You just pressed a button");
    }
    return(
        <div>
            <h1>Event handling</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

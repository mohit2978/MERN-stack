import "./footer.css"

function Footer() {
    var count=0;
    var incrCount=()=>{
        count+=1;
        console.log(count);
    }
    return (
        <>
        <div className="footer">Count value is {count}</div>
        <button onClick={incrCount}>Count</button>
        </>
    )
}
export default Footer
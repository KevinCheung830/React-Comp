import Counter from "./Counter";

function ListGroup() {  
    const items =["F/SN UBW","FA","StenisGate","Gundam 00","Konosuba"];
    
    return (
        <div>
            <h1>List</h1>
            <ul className ="list-group">
            {items.map(item => 
            <li>
                {item}
                <Counter/>
            </li>)
            }
            
            </ul>
        </div>
    )
}
export default ListGroup;
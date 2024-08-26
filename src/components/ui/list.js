
const List =({items , action})=>{
return(
    <ul className="list-group d-block">
        {items.map((item,idx)=>(<li  key= {item.title} className="list-group-item d-flex justify-content-between align-items-center">
            <p>{item.title}</p>
            <div>{action(idx)}</div>
        </li>
    ))}

</ul>
)
}
export default List;
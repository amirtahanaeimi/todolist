
const Iconbutton = ({children ,...restp})=>{
    return(
    <button {...restp} type="button" className="btn btn-danger">{children}</button>
    );
}

export default Iconbutton;
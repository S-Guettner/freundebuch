import { Link } from "react-router-dom"

const ContactCard = ({id,setRenderTrigger,firstName,lastName,birthDate,mobileNumber,emailAdress,job,salary,selfEmployed,customer}) => {
    
    const deleteClickHandler = () => {
        fetch('http://localhost:9999/api/v1/contacts' , {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify
            (
                {
                    "id":id
                }
            )
        }
        ).then(() => setRenderTrigger(prev => !prev))
    }
    
    return ( 
        <Link className="border-2 p-2 w-44" to={`/details/${id}`}>
            <div>
                <p>{firstName + " " + lastName}</p>
                <p>{birthDate}</p>
                <p>{mobileNumber}</p>
                <p>{emailAdress}</p>
                <p>{job}</p>
                <p>{salary}</p>
                <p>{selfEmployed}</p>
                <p>{customer}</p>
            </div>
            <button className="border-2 p-1 rounded-xl mt-2 hover:bg-red-600 hover:text-white" onClick={deleteClickHandler}>Delete</button>
        </Link>
         )
}
 
export default ContactCard;
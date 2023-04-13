import { Link } from "react-router-dom";

const ContactCardDetails = ({firstName,lastName,birthDate,mobileNumber,emailAdress,job,salary,selfEmployed,customer}) => {
    return ( 
        <main>
                
            <div className="mb-4 text-center border-2 p-2">
                <p>Name:  {firstName + " " + lastName}</p>
                <p>Birthdate:  {birthDate}</p>
                <p>Mobile:  {mobileNumber}</p>
                <p>E-mail:  {emailAdress}</p>
                <p>Job:  {job}</p>
                <p>Salary:  {salary}€</p>
                <p>{selfEmployed === true ? "Self-employed" : "not Self-employed"}</p>
                <p>{customer === true ? "customer" : "Not a customer"}</p>
            </div>
                
                
                
                
            <Link className='border-2 rounded-xl p-2 hover:bg-neutral-300' to={'/'}>
            <svg className='inline' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
            <p className='inline ml-2'>Back to Contact overview</p>
            </Link>
        </main>
     )
}
 
export default ContactCardDetails;
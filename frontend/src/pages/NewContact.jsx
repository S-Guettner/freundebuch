import {useState} from 'react'
import { Link } from 'react-router-dom'

const NewContact = () => {
    
    

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [birthDate,setbirthDate] = useState("")
    const [mobileNumber,setMobileNumber] = useState("")
    const [emailAdress,setEmailAdress] = useState("")
    const [job,setJob] = useState("")
    const [salary,setSalary] = useState("")
    const [selfEmployed,setSelfEmployed] = useState(false)
    const [customer,setCustomer] = useState(false)

    /* changing date from yyyy/mm/dd to dd/mm/yyyy */
    const yearSlice = birthDate.slice(0,4)
    const daySlice = birthDate.slice(8,10)
    const monthSlice = birthDate.slice(4,8)
    const newDate = daySlice + monthSlice + yearSlice
    
    
    const clickHandler = () => {
        fetch(`https://freundebuch.vercel.app/api/v1/new-contact` , {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify
            (
                {
                    "firstName":firstName,
                    "lastName":lastName,
                    "birthDate":newDate,
                    "mobileNumber":mobileNumber,
                    "emailAdress":emailAdress,
                    "job":job,
                    "salary":salary,
                    "selfEmployed":selfEmployed,
                    "customer":customer
                }
            )
        })
    }


    
    return ( 
        <main className='flex justify-center items-center h-screen'>
            <form className='w-80 text-center'>
                <h1 className='text-4xl mb-4'>New Contact</h1>
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setFirstName(e.target.value)} placeholder='firstName' type="text" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setLastName(e.target.value)} placeholder='lastName' type="text" />
                <input 
                className='border-2 m-2 text-center block w-full text-[#9ca3af]'
                onChange={(e) => setbirthDate(e.target.value)} type="date" name="" id="" placeholder=''/>
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setMobileNumber((e.target.value).toString())} placeholder='mobileNumber' type="number" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setEmailAdress(e.target.value)} placeholder='emailAdress' type="email" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setJob(e.target.value)} placeholder='job' type="text" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setSalary((e.target.value).toString())} placeholder='salary' type="number" />
                <div className='text-[#9ca3af]'>
                    <p>self employed ?</p>
                    <label htmlFor="selfEmployedTrue">True</label>
                    <input className='cursor-pointer m-4' 
                    onChange={(e) => setSelfEmployed(e.target.value === "true" ? true : "" )} id='selfEmployedTrue' type="radio" name="selfEmployed" value="true"/>
                    <label htmlFor="selfEmployedFalse">False</label>
                    <input className='cursor-pointer m-4' 
                    onChange={(e) => setSelfEmployed(e.target.value === "false" ? false : "" )} id='selfEmployedFalse' type="radio" name="selfEmployed" value="false" defaultChecked/>
                </div>
                <div className='text-[#9ca3af]'>
                    <p>customer?</p>
                    <label htmlFor="customerTrue">True</label>
                    <input className='cursor-pointer m-4' 
                    onChange={(e) => setCustomer(e.target.value === "true" ? true : "" )} id='customerTrue' type="radio" name="customer" value="true"/>
                    <label htmlFor="customerFalse">False</label>
                    <input className='cursor-pointer m-4' 
                    onChange={(e) => setCustomer(e.target.value === "false" ? false : "" )} id='customerFalse' type="radio" name="customer" value="false" defaultChecked/>
                </div>
                <button className='hover:bg-zinc-200 hover:text-black border-2 p-2 mb-24 rounded-md m-2 text-center block w-full text-[#9ca3af]' onClick={clickHandler} >Create new Contact
                <svg className='inline m-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                </button>


                
                <Link className='border-2 rounded-xl p-2 hover:bg-neutral-300' to={'/'}>
                <svg className='inline' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                <p className='inline ml-2'>Back to Contact overview</p>
                </Link>
            </form>
        </main>
     )
}
 
export default NewContact



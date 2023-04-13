import {useState} from 'react'

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
        fetch(`http://localhost:9999/api/v1/new-contact` , {
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
                onChange={(e) => setMobileNumber(e.target.value)} placeholder='mobileNumber' type="text" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setEmailAdress(e.target.value)} placeholder='emailAdress' type="text" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setJob(e.target.value)} placeholder='job' type="text" />
                <input 
                className='border-2 m-2 text-center block w-full'
                onChange={(e) => setSalary(e.target.value)} placeholder='salary' type="text" />
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
                <button className='hover:bg-zinc-200 hover:text-black border-2 p-2 rounded-md m-2 text-center block w-full text-[#9ca3af]' onClick={clickHandler} >Create new Contact</button>


                
            </form>
        </main>
     )
}
 
export default NewContact
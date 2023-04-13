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

    console.log(customer , "customer state")
    console.log(selfEmployed , "selfEmployed state")
    
    
    return ( 
        <main>
            <form>
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setFirstName(e.target.value)} placeholder='firstName' type="text" />
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setLastName(e.target.value)} placeholder='lastName' type="text" />
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setbirthDate(e.target.value)} placeholder='birthDate' type="text" />
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setMobileNumber(e.target.value)} placeholder='mobileNumber' type="text" />
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setEmailAdress(e.target.value)} placeholder='emailAdress' type="text" />
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setJob(e.target.value)} placeholder='job' type="text" />
                <input 
                className='border-2 m-2 text-center block'
                onChange={(e) => setSalary(e.target.value)} placeholder='salary' type="text" />
                <div>
                    <p>self employed ?</p>
                    <label htmlFor="selfEmployedTrue">True</label>
                    <input onChange={(e) => setSelfEmployed(e.target.value === "true" ? true : "" )} id='selfEmployedTrue' type="radio" name="selfEmployed" value="true"/>
                    <label htmlFor="selfEmployedFalse">False</label>
                    <input onChange={(e) => setSelfEmployed(e.target.value === "false" ? false : "" )} id='selfEmployedFalse' type="radio" name="selfEmployed" value="false" defaultChecked/>
                </div>
                <div>
                    <p>customer?</p>
                    <label htmlFor="customerTrue">True</label>
                    <input onChange={(e) => setCustomer(e.target.value === "true" ? true : "" )} id='customerTrue' type="radio" name="customer" value="true"/>
                    <label htmlFor="customerFalse">False</label>
                    <input onChange={(e) => setCustomer(e.target.value === "false" ? false : "" )} id='customerFalse' type="radio" name="customer" value="false" defaultChecked/>
                </div>

            </form>
        </main>
     )
}
 
export default NewContact
import { Envelope } from 'phosphor-react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label

} from 'keep-react'
import { DocumentTitle } from '../pages'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'sonner';
function Contact() {
  DocumentTitle("Contact | Gadget Heaven")
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  


 const handelsubmit = ()=>{
  if( name !== '' && email !== '' && message !== '' ){
    navigate('/')
    toast.success( 'submitted successfully Thank you')
}
 }

  return (
    <> 
     <div className=" text-center container mx-auto bg-[#9538e2] py-5 text-white">
        <div className=" md:w-1/2 p-2 mx-auto">
          <h1 className="text-3xl font-bold p-2">Contact</h1>
          <p>
          Feel free to contact us if you have any questions or need help. We are here to help!
          </p>
          
        </div>
      </div>

      <div className='md:flex justify-center container mx-auto items-center'>
        <div className='md:w-[40%]'>
           <img className='' src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-1850.jpg?t=st=1730878577~exp=1730882177~hmac=e046c08bb38439f48c6c51a6e51d283d5e194a9a80f9476d891d988a1a8a8177&w=740" alt="contact image" />
        </div>

       <form  className='md:w-[60%]  mx-auto '>
        <Card className="max-w-sm mx-auto my-5">
    <CardContent className="space-y-3">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription> fill up these field and click on send button.</CardDescription>
      </CardHeader>
      
      <Divider>***</Divider>
      <div className="space-y-2">

      <fieldset className="max-w-md space-y-1">
      <Label htmlFor="name">Name*</Label>
      <Input onChange={(e)=>setName(e.target.value)} id="name"  required placeholder="Enter name" type="text" />
    </fieldset>

        <fieldset className="space-y-1">
          <Label htmlFor="email">Email*</Label>
          <div className="relative">
            <Input onChange={(e)=>setEmail(e.target.value)} required id="email" type="email" placeholder="Enter email" className="ps-11" />
            <InputIcon>
              <Envelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>

        <fieldset className="max-w-md space-y-1">
      <Label htmlFor="name">Enter Name</Label> <br />
      <textarea onChange={(e)=>setMessage(e.target.value)} required className='border p-2 w-full resize-none focus:outline-slate-200 rounded-lg' id="name" placeholder="Enter name" type="text" />
    </fieldset>


          <Button onClick={handelsubmit}  type="submit" className={`!mt-3 text-center rounded-lg py-2 font-semibold text-white block w-full bg-purple-500`} >
          send
        </Button>
      </div>
    </CardContent>
  </Card>
       </form>

        
      </div>
    
 
    

  </>
  )
}

export default Contact
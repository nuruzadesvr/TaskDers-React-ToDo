import './App.css'

import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
function App() {
 

  return (
    <>
    <div className='todolist'>
      <p className='list__text'>TO-DO LIST</p>

     

   <div className='input'>
   <div><Input className='inputcontainer' placeholder='ADD TO HERE' /></div>

<div > <Button className='addbtn' colorScheme='teal' size='sm'> + </Button> </div>
   </div>
    </div>


    

 
   
    </>
  )
}

export default App

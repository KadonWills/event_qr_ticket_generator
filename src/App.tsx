import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg' 
import EventForm from './components/EventForm'
import Ticket from './components/Ticket'
import { ITicketProps } from './utils/props'

function App() { 

  const [ticket, setTicket] = useState<ITicketProps>({category:"classic", event_name:"", first_name:"", last_name:"", company:"TBS"});

  useEffect(() => {
    //alert(ticket.first_name)
  
  }, [ticket])
  

  return (
    <main className="relative flex flex-col m-0 p-8 bg-gradient-to-br from-blue-500  to-indigo-600 max-w-screen overflow-x-hidden min-h-screen text-white">
      <div>
        <h1 className="text-2xl font-mono capitalize text-center w-full">
        🎫 SmarTicket
        </h1>
        <h3 className='italic text-center'>
          Create tickets for your events
        </h3>
      </div>


      <div className='bg-white mt-24 lg:mx-20 hover:bg-gray-800 shadow-xl hover:shadow-none cursor-pointer w-[80%] rounded-xl flex flex-col sm:flex-row  overflow-hidden' >
        <div className="bg-slate-50 w-full">
          <EventForm ticket={ticket} handler={ (t) => setTicket(t) }  />
        </div>
        <div className="bg-slate-50 w-full">
          <Ticket {...ticket} />
        </div>
      </div>
    </main>
  )
}

export default App

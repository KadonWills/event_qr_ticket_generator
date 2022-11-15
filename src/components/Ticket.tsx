import QRCode from "react-qr-code"
import React, { useEffect, useState } from 'react'
import { ITicketProps } from '../utils/props'
import jsPDF from "jspdf"

const blankTicket: ITicketProps = { first_name: "", last_name: "", category: "", company: "", event_name: "", cost: 0.0 }
const ticketTypes = [
  {
    name: "normal",
    title: "CLASSIC 🥳",
    color: "#000",
  },
  {
    name: "vip",
    title: "VIP 👑",
    color: "#F60",
  },
  {
    name: "premium",
    title: "PREMIUM 💎",
    color: "#06F",
  }
]

const doc = new jsPDF({
  orientation: "landscape",
});



const Ticket: React.FC<ITicketProps> = (data) => {

  const [downloadable, setDownloadable] = useState(false)
  const [ticket, setTicket] = useState(data)


  const type = ticketTypes.find(tt => tt.name == data.category.toLowerCase()) || { color: "#000", title: "CLASSIC 🥳" }

  useEffect(() => {
    setDownloadable((data.category != "" && (data.first_name != "" || data.last_name != "") && data.event_name != ""))

  }, [data])


  const downloadTicket = () => {
    let filename = `Ticket-${data.first_name}-${data.last_name}-${data.event_name}-${data.company}-DEC-2022.pdf`

    let htmlTicket = document.querySelector('#ticketCard')?.innerHTML as string;
    
    doc.html(`<html><head><title>${filename}</title></head><body>` + htmlTicket + `</body></html>`)
    
    doc.save(filename)
  }



  return (
    <div className='text-slate-200 w-full grid place-content-center h-full' >
      <div className="flex -space-x-1" id="ticketCard">
        <div key={'ticketCard'} className="bg-white grid place-content-center w-[150px] h-[150px] border-4 rounded-lg" style={{ borderColor: type.color }}>
          <div className="" style={{ height: 120, margin: "auto auto", maxWidth: 120, width: "100%" }}>
            <QRCode
              size={450}
              style={{ height: "auto", maxWidth: "100%", width: "100%", }}
              fgColor={type.color}
              value={JSON.stringify(data)}
              viewBox={`0 0 450 450`} />
          </div>
        </div>
        <div className="ticket relative w-[300px] p-2 bg-clip-border border-2  bg-slate-800 rounded-lg h-[150px] " style={{ borderColor: type.color }}>
          <h1 className='font-bold uppercase mb-4' >{` ${data.company}`} </h1>
          {data.first_name.trim() != "" && <p>Nom: {` ${data.first_name} ${data.last_name}`} </p>}
          {data.first_name.trim() != "" && <p>Event: {` ${data.event_name}`} </p>}

          <div className='absolute top-0 right-0 text-xs p-1 text-white font-mono font-bold  rounded-bl-md' style={{ backgroundColor: type.color }}>
            {type.title}
          </div>

        </div>
      </div>

      <div className='w-full min-w-full mt-5 flex justify-evenly' >
        {
          downloadable &&
          <a onClick={() => downloadTicket()}  download={`Ticket-${data.first_name}-${data.last_name}-${data.event_name}-${data.company}-DEC-2022.pdf`} className='py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-md'>
            Download
          </a>
        }
        <button className='py-2 px-3 text-red-600 hover:bg-slate-200 bg-white uppercase rounded-md'>
          Cancel
        </button>

      </div>
    </div>
  )
}

export default Ticket
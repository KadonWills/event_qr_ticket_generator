import React, { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { ITicketProps } from '../utils/props'

type IEventForm = {
    ticket: ITicketProps,
    handler: Dispatch<SetStateAction<ITicketProps>>
}

const EventForm: React.FC<IEventForm> = ({ticket, handler }) => {

    const { register, handleSubmit, formState } = useForm<ITicketProps>()

    

    return (
        <div className='p-8 flex' >
            <form
                className='flex-row space-y-4 w-full lg:mx-2'
                onSubmit={handleSubmit((data) => console.log(data))}>
                <div>
                    {
                        formState.errors.first_name
                        &&
                        <span className='text-red-600'>
                            {formState.errors.first_name.message}
                        </span>
                    }

                    <input
                        onChange={
                            (e) => {
                                const {value} = e.target
                                handler({...ticket, first_name: value})
                            }
                        }
                        //{...register('first_name', { required: "First name is required", minLength: 5 })}
                        className="w-full rounded-lg border-none bg-opacity-70 bg-slate-300"
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="Prénoms"
                    />
                </div>
                <div>
                    {
                        formState.errors.last_name
                        &&
                        <span className='text-red-600'>
                            {formState.errors.last_name.message}
                        </span>
                    }

                    <input
                        onChange={
                            (e) => {
                                const {value} = e.target
                                handler({...ticket, last_name: value})
                            }
                        }
                        //{...register('last_name', { required: "Last name is required", minLength: 5 })}
                        className="w-full rounded-lg border-none bg-opacity-70 bg-slate-300"
                        id="last_name"
                        type="text"
                        name="last_name"
                        placeholder="Nom"
                    />
                </div>
                <div>
                    {
                        formState.errors.company
                        &&
                        <span className='text-red-600'>
                            {formState.errors.company.message}
                        </span>
                    }

                    <input
                        onChange={
                            (e) => {
                                const {value} = e.target
                                handler({...ticket, company: value})
                            }
                        }
                        //{...register('company', { required: "Company is required", minLength: 5 })}
                        className="w-full rounded-lg border-none bg-opacity-70 bg-slate-300"
                        id="company"
                        type="text"
                        name="company"
                        placeholder="Entreprise e.g. Tribal SwaGG, TBS ...etc"
                    />
                </div>
                <div>
                    {
                        formState.errors.event_name
                        &&
                        <span className='text-red-600'>
                            {formState.errors.event_name.message}
                        </span>
                    }

                    <input
                        onChange={
                            (e) => {
                                const {value} = e.target
                                handler({...ticket, event_name: value})
                            }
                        }
                        //{...register('company', { required: "Company is required", minLength: 5 })}
                        className="w-full rounded-lg border-none bg-opacity-70 bg-slate-300"
                        id="event_name"
                        type="text"
                        name="event_name"
                        placeholder="Nom de l'evenement"
                    />
                </div>
                <div className='mt-4'>
                    {
                        formState.errors.category
                        &&
                        <span className='text-red-600'>
                            {formState.errors.category.message}
                        </span>
                    }

                    <span className='text-sm text-left text-slate-700'>Type de billet:</span>
                    <select   id="category"  defaultValue={"classic"}
                    onChange={
                        (e) => {
                            const {value} = e.target
                            handler({...ticket, category: value})
                        }
                    }
                    //{...register('category', { required: "Category is required" })}
                    className="w-full rounded-lg border-none bg-opacity-70  bg-slate-300 text-slate-800"
                    >
                        <option value="classic">Normal</option>
                        <option value="vip">VIP</option>
                        <option value="premium">PREMIUM</option>
                    </select>
                </div>

            
                
            
                {/* <button type="submit"> Send Message </button> */}
            
            </form>
        </div>
    )
}

export default EventForm
export interface ITicketProps {
    first_name: string,
    last_name?: string,
    category: string,
    company?: string,
    event_name: string,

    cost?: number
}

export interface IFormProps {
    first_name: string,
    last_name?: string,
    ticket_type: string,
    company?: string,
    event_name: string,
    cost?: number
}
//  IFormProps;
// ITicketProps;
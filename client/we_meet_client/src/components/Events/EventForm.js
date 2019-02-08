import React, { Component } from 'react';
import axios from "axios";


class CreateEventForm extends Component {

  constructor(props) {
   super(props);
   this.state = {
     title: '',
     description: '',
     location: '',
     date: '',
     time: ''
   };
   this.onChange = this.onChange.bind(this)
   this.createEventHandler = this.props.createEventHandler.bind(this)
 }

   onChange(e) {
   this.setState({ [e.target.name]: e.target.value })
 }

  createEvent(e) {
   e.preventDefault();
   const event = {
     title: this.state.title,
     description: this.state.description,
     location: this.state.location,
     date: this.state.date,
     time: this.state.time
   }
   this.createEventHandler(event);
 }


  render() {
    return (
      <div className="fixed z-50 pin overflow-auto bg-smoke-dark flex">
        <div className="fixed shadow-inner max-w-md pin-b pin-x align-top m-auto justify-end p-8 bg-white w-full flex flex-col relative justify-center rounded h-auto shadow">
          <button onClick={this.props.hideFormHandler} className="modal_close">X</button>
          <form id="create-event-form" className="w-full max-w-md" onSubmit={this.createEvent.bind(this)}>
            <h1 className="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">Create an Event</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
                </input>
              </div>
 
               <div className='w-full px-3 mb-6 md:mb-0'>
                <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                  Description
                </label>
                <textarea
                  type="textarea"
                  name="description"
                  onChange={this.onChange}
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
                </textarea>
             </div>

             <div className='w-full px-3 mb-6 md:mb-0'>
               <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                 Location
               </label>
               <input
                 type="text"
                 name="location"
                 onChange={this.onChange}
                 className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
               </input>
             </div>

             <div className='w-full px-3 mb-6 md:mb-0'>
               <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                 date
               </label>
               <input
                 type="text"
                 name="date"
                 onChange={this.onChange}
                 className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
               </input>
             </div>

             <div className='w-full px-3 mb-6 md:mb-0'>
               <label className="block uppercase tracking-wide text-grey-darker text-xs mb-2">
                 Time
               </label>
               <input
                 type="text"
                 name="time"
                 onChange={this.onChange}
                 className="appearance-none block w-full bg-grey-lighter text-grey-darker rounded py-3 px-4 mb-3 leading-tight">
               </input>
             </div>

              <div className='w-full px-3 mb-6 md:mb-0'>
               <input type="submit" value="Submit" className="select-none inline-block border border-transparent border-teal leading-tight px-4 py-2 rounded no-underline text-teal hover:bg-teal focus:bg-teal hover:text-white focus:text-white focus:shadow-outline">
               </input>
             </div>
           </div>
         </form>
       </div>
     </div>
   )
 }
}

export default CreateEventForm
 
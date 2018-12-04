import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now = moment();

class ExpenseForm extends Component {

        state = {
            description : '',
            note : '',
            amount: '',
            createAt: moment(),
            calendarFocused:false
        }

        _onDescriptionChange = (e) => {
            const description = e.target.value;
            this.setState( () => ({ description }) );

        }

        _onNoteChange = (e) => {
            console.log(e.target.value);
            const note = e.target.value;
            this.setState( () => ({ note }) );  
        }

        _onAmountChange = (e) => {
            console.log(e.target.value)
            const amount = e.target.value;
            if(amount.match(/^\d*(?:\.\d{0,2})?$/))   this.setState( () => ({ amount })  )    
        }

        _onDateChange = (createAt) => {
            this.setState( () => ({createAt}) );
        }

        _onFocusChange = ({focused}) => {
            this.setState( () => ({ calendarFocused:focused }) );
        }


        render(){
            return (
                <div> 
                    <form>
                        <input
                            type="text"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this._onDescriptionChange}
                            autoFocus
                        />
                        <input
                            type="text"
                            placeholder="amount"
                            value={this.state.amount}
                            onChange={this._onAmountChange}
                        />
                        <SingleDatePicker 
                            date={this.state.createAt}
                            onDateChange={this._onAmountChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this._onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange=
                        />
                        <textarea 
                            placeholder="Add note for your expense (optional)"
                            onChange={this._onNoteChange }
                        >

                        </textarea>
                        <button>Add expense</button>
                    </form>
                </div>
            )
        }

}

export default  ExpenseForm;



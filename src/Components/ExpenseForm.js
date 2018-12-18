import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now = moment();

class ExpenseForm extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                description: props.expense ? props.expense.description : '',
                note: props.expense ? props.expense.note : '',
                amount: props.expense ? (props.expense.amount / 100 ).toString(): '',
                createAt: props.expense ? moment(props.expense.createAt) :moment(),
                calendarFocused:false,
                error:''
            }
        }

        _onDescriptionChange = (e) => {
            const description = e.target.value;
            this.setState( () => ({ description }) );

        }

        _onNoteChange = (e) => {
            
            const note = e.target.value;
            this.setState( () => ({ note }) );  
        }

        _onAmountChange = (e) => {
            const amount = e.target.value;

            if (amount.match(!amount || /^\d{1,}(\.\d{0,2})?$/)) {
                this.setState(() => ({ amount }));
            }
        }

        _onDateChange = (createAt) => {
            if (createAt) this.setState(() => ({ createAt }));
        }

        _onFocusChange = ({focused}) => {
            this.setState( () => ({ calendarFocused:focused }) );
        }

        _onSubmit = (e) => {
            e.preventDefault();

            if(!this.state.amount || !this.state.description){
                this.setState(() => ({ error: "please provide description and amount"}));
            }else{
                this.setState(() => ({ error: "" }));
                this.props.onSubmit({
                    description: this.state.description,
                    amount: parseFloat(this.state.amount,10) * 100,
                    createAt: this.state.createAt.valueOf(),
                    note:this.state.note
                });
            }
        }    
        render(){
            return (
                <div> 
                    <form onSubmit={this._onSubmit}>
                        <input
                            type="text"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this._onDescriptionChange}
                            autoFocus
                        />
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this._onAmountChange.bind(this)}
                        />
                        <SingleDatePicker 
                            date={this.state.createAt}
                            onDateChange={this._onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this._onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false }
                        />
                        <textarea 
                            placeholder="Add note for your expense (optional)"
                            onChange={this._onNoteChange }
                        >

                        </textarea>
                        <button>Add expense</button>
                    </form>
                    { 
                        this.state.error  && <p>{this.state.error}</p>  
                    }

                </div>
            )
        }

}

export default  ExpenseForm;



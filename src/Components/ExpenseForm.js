import React, { Component } from 'react';

class ExpenseForm extends Component {

        state = {
            description : '',
            note : '',
            amount: ''
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
            const amount = e.target.value;
            if(amount.match(/^\d*(?:\.\d{0,2})?$/))   this.setState( () => ({ amount })  )    
        }

        render(){
            return (
                <div> 
                    <form>
                        <input
                            type="text"
                            placeholder="description"
                            value={this.state.description}
                            onChange={ this._onDescriptionChange }
                            autoFocus
                        />
                        <input
                            type="text"
                            placeholder="amount"
                            value={  this.state.amount  }
                            onChange={ this._onAmountChange }
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



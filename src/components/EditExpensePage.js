import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense, editExpense, removeExpense} from '../actions/expenses';
import {AddExpensePage} from "./AddExpensePage";

//refactor to class
//setup mapdispatchprops editExpense & remove expense

export class EditExpensePage extends React.Component{

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = (expense) =>{
    this.props.removeExpense({ id: this.props.expense.id });
    props.history.push('/');
  };
  render() {
    return (
        <div>
          <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>

    );
  }
};
/*const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};*/

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch,props) =>({
  editExpense :(id,expense) => dispatch(editExpense(id,expense)),
  removeExpense : (id) => dispatch(removeExpense(id))
});
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);

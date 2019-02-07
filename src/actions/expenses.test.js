import { addExpense, editExpense, removeExpense} from "./expenses";

test('should set up remove expense action object',() => {
  const action = removeExpense({id : '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense object',() => {
  const action = editExpense('123abc',{note:'new note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'new note'
    }
  });
});

test('set up add expense dta with provided values',() =>{
  const expenseData ={
    description:'Rent',
      amount: 1000,
      createdAt:1000,
      note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        ...expenseData,
      id: expect.any(String)
    }
  });
});
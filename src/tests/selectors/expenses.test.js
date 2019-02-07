import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id:'1',
  description : 'Gum',
  note:'',
  amount : 195,
  createAt:moment(0)
  },
  {
    id:'2',
    description : 'rent',
    note:'',
    amount : 1400,
    createAt:moment('2021-04-23T09:54:51')
  },
  {
    id:'3',
    description : 'credit card',
    note:'',
    amount : 200,
    createAt:moment('2019-04-23T09:54:51')
  }];

test('should filter by text value',()=>{
  const filter ={
    text :'e',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
  };
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[1],expenses[2]]);
});

test('should filter by start date',()=>{
  const filter ={
    text :'',
    sortBy:'date',
    startDate:moment('2019-01-10T09:54:51'),
    endDate:undefined
  };
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[1],expenses[2]]);
});

test('should filter by end date',()=>{
  const filter ={
    text :'',
    sortBy:'',
    startDate:undefined,
    endDate:moment('2019-01-23T09:54:51')
  };
  const result1 = selectExpenses(expenses,filter);
  expect(result1).toEqual([expenses[2],expenses[1]]);
});

test('should sort by date',()=>{
  const filter ={
    text :'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
  };
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);
});

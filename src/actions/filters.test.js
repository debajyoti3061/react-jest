import moment from 'moment';
import {setStartDate,setEndDate,sortByDate,setTextFilter} from "./filters";


test('should generate set start date',()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  });
});

test('should generate set end date',()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
  });
});

test('should sort by date',()=>{
  const action =sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set text filer',()=>{
  const text='somthing';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

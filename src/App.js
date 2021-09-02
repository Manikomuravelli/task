import React, {useEffect,useState} from 'react';
import './App.css'
import AddClass from './components/AddClass';
import ListClassItem from './components/ListClassItem';

const App = () => {

  const [teachersClasses, setTeachersClasses]  =  useState([])

  return (
    <>
      <AddClass currentClass={teachersClasses} classes={setTeachersClasses} />
      <ListClassItem listClasses={teachersClasses} />
    </>
  )
}

export default App;

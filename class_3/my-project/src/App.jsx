import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from "./components/count" 
import List from './components/list'

function App() {
  let list_ = ["imroz", "aadil", "aman", "faisal"];


  return <>
      <Count></Count>
      <List list={list_}></List>
      </>
}

export default App

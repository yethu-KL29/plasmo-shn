import { Button } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react'
import { Button, Tab, Tabs } from "@mui/material";
import "./app.css"
import Form from './Form';
import Todolist from './Todolist';


const App = () => {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [longBreakInterval, setLongBreakInterval] = useState(4);
  const [input, setinput] = useState("")
  const [todos, settodos] = useState([])
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(25 * 60);
    setIsBreak(false);
  };

  const handleToggle = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    if (timer === 0) {
      if (isBreak) {
        if (pomodoroCount === longBreakInterval - 1) {
          setTimer(15 * 60); // long break: 15 minutes in seconds
          setPomodoroCount(0);
        } else {
          setTimer(5 * 60); // short break: 5 minutes in seconds
          setPomodoroCount((prev) => prev + 1);
        }
      } else {
        setTimer(25 * 60); // 25 minutes in seconds
        setIsBreak(true);
      }
    }
  }, [timer, isBreak, pomodoroCount, longBreakInterval]);
	return (
		<div className='container'>
			<div className='home'>
			
			<div className="home-top">
				<Tabs>
						<Tab sx={{
							color:"black",
						}} label="Promodoro"/>   
					</Tabs> 
					<Tabs>
						<Tab onClick={()=>setok(!ok)} sx={{
							color:"black",
						}} label="Shortbreak"/>   
					</Tabs> 
					<Tabs>
						<Tab sx={{
							color:"black",
						}} label="longbreak"/>   
					
				</Tabs> 
				
			

				</div>
				<div className='App'>
					<h2>{Math.floor(timer / 60).toString().padStart(2, '0')}:{(timer % 60).toString().padStart(2, '0')}</h2>
					<div className='button'>
					<Button   variant="contained" onClick={handleToggle}>{isRunning ? 'Stop' : 'Start'}</Button>
					<Button variant="contained" onClick={resetTimer}>Reset</Button>
					</div>
				</div>
				
			</div>
			<div className='todo'>
				<h2>Todo</h2>
        <Form

        input={input}
        todos={todos}
        settodos={settodos}
        setinput={setinput}
        
        />
         <Todolist todos={todos}
         settodos={settodos}/>   
			
			</div>
		</div>
			
		
	)
}

export default App;
import { useState } from 'react'




const Button = (props) => 
  

  (
  
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
  


const Statistics = (props) => {
  console.log(props)
  let all = props.good+ props.bad + props.neutral
  let positive = props.good/all*100
  let average = (props.good - props.bad)/all
  if (all === 0){
    return (
      <div> No feedback given</div>
    )
  }
  else {
  return(

    
    <div>
      <tr>
        <td>good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{average}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{positive}%</td>
      </tr>
    </div>
  
  )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App
import { useState } from 'react'
import './index.css';
import loremIpsumData from './data'

function App() {
  const [ number, setNumber] = useState(0);
  const [ data , setData ] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
    let newNumber=parseInt(number)
    if(newNumber<=0){
      newNumber = 1
    }

    let newData = []
    while(newData.length<newNumber){
      let randomNumber = Math.floor(Math.random()*8)
      newData.push(loremIpsumData[randomNumber]);
    }
    setData(newData)    
  }
  return(
    <section className='form-section'>
      <h2>tired of boring lorem ipsum?</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Paragraphs:</label>
        <input autoFocus type="number" name="paragraph" id="paragraph" onChange={(e)=>setNumber(e.target.value)}/>
        <button onClick={handleSubmit} className='generate-btn'>generate</button>
      </form>
      {data.map((text,index)=>{
        return (<article key={index} className='lorem-text'>
          <p>{text}</p>
        </article>)
      })}
    </section>
  )
}

export default App

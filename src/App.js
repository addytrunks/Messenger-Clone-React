import React,{useState,useEffect,} from 'react'
import { FormControl,Input,InputLabel,IconButton } from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import './App.css'

const App = () => {
  
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([
    {username:'',message:''},
  ])
  const [username,setUsername] = useState('')

    // Fires of as soon as the page loads
    useEffect(() => {
      const user = prompt('Please enter your name')
      user === ''?setUsername('Anonymous'):setUsername(user)
    }, [])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    })
  })
  
  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <>
      <img src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/p960x960/44703408_2210757212377280_90543103215140864_o.jpg?_nc_cat=1&ccb=2&_nc_sid=7aed08&_nc_ohc=Uf0ce5CwhlwAX8oXakt&_nc_ht=scontent.fmaa1-2.fna&tp=6&oh=c35c5ab3a11e1e8ff914e9ca48cfa2eb&oe=5FF1F0E4" height={100} width={100} />
      <h1 className="display-4">Messenger</h1>
      <h2 className="display-5"> Welcome {username}</h2>  

      <form className='app__form'>
        <FormControl class="app__formControl">
          <Input  placeholder="Enter a message..." className="mb-3 app__input" value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className="app__iconButton" disabled={input.length === 0} variant='outlined' color='primary' type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
  
        <FlipMove>
          {messages.map(({message,id}) => (
            <Message key={id} username={username}  message={message} />
          ) )}
        </FlipMove>
      </>
    </div>
  );
}

export default App;

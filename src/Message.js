import { Card, CardContent, Typography } from '@material-ui/core'
import React,{forwardRef} from 'react'
import './Message.css'

const Message = forwardRef(({message,username},ref) => {

    const isUser = username === message.username
    return (
        <div className='wrap'>
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            {!isUser && <small className='text-muted'>{message.username}</small> }
             <Card className={isUser ? 'message__userCard' : 'message__guestCard'} >
                <CardContent>

                    <Typography variant="h5" color="white" component="h5">
                        <span id={isUser? `text` : null}>{message.message}</span>
                    </Typography>
        
                </CardContent>
            </Card>
        </div>
        </div>
        
    )
})

export default Message

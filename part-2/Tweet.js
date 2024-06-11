const Tweet = ({username, name, date, message}) => (
    <div className="tweet">
        
        <span>{name}:</span> 
        <p>{message}</p>
        <p className ="username">{username}</p>
        <p className="date">{date}</p><br></br>
        
    </div>
)

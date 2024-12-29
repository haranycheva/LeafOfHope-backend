const aiChatLengthCheck = ({messages}) => {
    const filteredMesseges = messages.filter((el) => {})
    if(filteredMesseges.length < 2){
        return filteredMesseges
    }
   const slicedMessages = filteredMesseges.slice(filteredMesseges.length - 3)
   return slicedMessages
}

export default aiChatLengthCheck
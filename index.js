function shout(string) {
    return string.toUpperCase();
  }
shout("Hello")

function whisper(string) {
    return string.toLowerCase();
  }
whisper("Hello")





function logWhisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
  }

  console.log(logWhisper("Hello"))

  function logShout(string) {
    console.log(string.toUpperCase());
    return string.toUpperCase();
  }

  console.log(logShout("Hello"))




  function sayHiToHeadphonedRoommate(string) {
    if (string==string.toLowerCase()){
        return "I can't hear you!"
    
    }
    else if(string == string.toUpperCase()){
        return "YES INDEED!" 
    }
    else if(string ==  "Let's have dinner together!"){
        return "I would love to!"
    }
    
  }
  sayHiToHeadphonedRoommate("hello") 


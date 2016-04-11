var isNumber = function(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); 
}


var validateForm = function() {
    var validPhone = true
    
    var x = document.forms["contact_form"]["phone"].value;
    if (x[3] !== '-' || x[7] !== '-') {
        validPhone = false
    }
    
    alert(validPhone ? 'Good phone number!' : 'Incorrect phone number format! \n\nCorrect format: XXX-XXX-XXXX')   
    
    var validBirth = true
    
    var bd = document.forms["contact_form"]["birthdate"].value;
    if (bd[2] !== '/' || bd[5] !== '/') {
        validBirth = false
    }    
    
    alert(validBirth ? 'That\'s my birthday too!' : 'Incorrect birth date ! \n\nCorrect format: MM/DD/YY')
    
    var validPost = true
    
    var zipcode = document.forms["contact_form"]["zipcode"].value;
    
    if (zipcode.length !== 5)  {
        
        validPost = false
        if (zipcode.length === 10 && zipcode[5] === '-') {
            validPost = true
        }
    }
      
    
    alert(validPost ? 'Great zip code!' : 'Incorrect zipcode length! \n\nCorrect format: XXXXX or XXXXX-XXXX')    
    
   
    // Array of state abbreviations
    var states = ["AL", "AR", "AK", "AZ", "CA", "CO", "CT", "DE", "DC", "FL", "GA",
                  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA",
                  "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",
                  "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TX",
                  "TN", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]   
   
    var stateAbbr = document.forms["contact_form"]["state"].value;   
    
    alert(states.indexOf(stateAbbr) > -1 ? 'I live there too!' : 'Where the hell is that?')
    
    
    var married = document.forms["contact_form"]["married"].value;       
    if (married.toLowerCase() === 'yes' || married.toLowerCase() === 'no'){
        alert("I'm sorry!")
    }
    else{
        alert('Good!')
    }    
    
    // var state = document.forms["contact_form"]["state"].value;
    // if (bd[2] !== '/' || bd[5] !== '/') {
    //     alert("Incorrect birth date ! \n\nCorrect format: MM/DD/YY");
    //     formok = false
    // }   
    
    // var married = document.forms["contact_form"]["married"].value;
    // if (bd[2] !== '/' || bd[5] !== '/') {
    //     alert("Incorrect birth date ! \n\nCorrect format: MM/DD/YY");
    //     formok = false
    // }       
    
    return false
    
}

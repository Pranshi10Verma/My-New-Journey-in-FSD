function validateEmail()    {
    const val = e.target.value;
    const res = val.split("@");
    if(res[1]=='abes.org') {
        document.body.style.backgroundColor="blue";
    }else {
        document.body.style.backgroundColor="red";
    }
}

function validateRollNo() {
    const val = e.target.value;
    if(isNaN(val) || val.length!=7) {
        document.body.style.backgroundColor="red";
    }else {
        document.body.style.backgroundColor="blue";
    }
}
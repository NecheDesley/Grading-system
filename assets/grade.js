

const app = "==============\nWelcome to IMSU grading system with Javascript\n==============\n\n"



var fullname = prompt(app + 'Enter your fullname')

while (true) {
    if (fullname == null) {
        fullname = prompt('Something went wrong, Please provide your fullname')
    }
    else if (fullname == "") {
        fullname = prompt('Please, this field is required enter your full name')
    }

    else {
        break

    }
}



var studentClass = prompt('Enter your class')

while (true) {
    if (studentClass == null) {
        studentClass = prompt('Please provide your class')
    }
    else if (studentClass == "") {
        studentClass = prompt('Please, this field is required enter your class')
    }

    else {
        break

    }
}





const English = prompt('Enter your English score')
const eng = Number.parseInt(English)
while (true) {
    if (eng == "" || English == null)
        eng = prompt('please, your English score is required')
    else {
        break
    }
}


const Maths = prompt('Enter your Maths score')
const mths = Number.parseInt(Maths)
while (true) {
    if (mths == "" || mths == null)
        mths = prompt('please, your English score is required')
    else {
        break
    }
}



const Physics = prompt('Enter your Physics score')
const phy = Number.parseInt(Physics)
while (true) {
    if (phy == "" || phy == null)
        phy = prompt('please, your English score is required')
    else {
        break
    }
}



const Chemistry = prompt('Enter your Chemistry score')
const chem = Number.parseInt(Chemistry)
while (true) {
    if (chem == "" || chem == null)
        chem = prompt('please, your English score is required')
    else {
        break
    }
}





const Computer = prompt('Enter your Computer score')
const comp = Number.parseInt(Computer)
while (true) {
    if (comp == "" || comp == null)
        comp = prompt('please, your English score is required')
    else {
        break
    }
}




// for the average
const Average = (eng + mths + phy + chem + comp) / 5


// To get check your grade
if (Average >= 70) {
    alert(fullname + ' in ' + studentClass + '  Your grade is A and your avearge score is ' + Average)
}

else if (Average >= 60) {
    alert(fullname + ' in ' + studentClass + '  Your grade is B and your avearge score is ' + Average)
}

else if (Average >= 50) {
    alert(fullname + ' in ' + studentClass + '  Your grade is C and your avearge score is ' + Average)
}

else if (Average >= 45) {
    alert(username + ' in ' + studentClass + '  Your grade is D and your avearge score is ' + Average)
}

else if (Average >= 40) {
    alert(fullname + ' in ' + studentClass + '  Your grade is E and your avearge score is ' + Average)
}

else if (Average <= 39) {
    alert(fullname + ' in ' + studentClass + '  Your grade is F and your avearge score is ' + Average)
}
else {
    alert('Sorry, you do not have a score')
}


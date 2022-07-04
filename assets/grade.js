const app = "==============\nWelcome to IMSU grading system with Javascript\n==============\n\n"

const name = prompt(app + ' Please enter your fullname')
if (name== null){
    alert('Please input your name')




    const level = prompt('please enter your class in senior secondary either SS1, SS2 OR SS3')


    const English = prompt('Enter your English score')
    const eng = Number.parseInt(English)
    
    const Maths = prompt('Enter your Maths score')
    const mths = Number.parseInt(Maths)
    
    const Physics = prompt('Enter your Physics score')
    const phy = Number.parseInt(Physics)
    
    const Chemistry = prompt('Enter your Chemistry score')
    const chem = Number.parseInt(Chemistry)
    
    const Computer = prompt('Enter your Computer score')
    const comp = Number.parseInt(Computer)
    
    
    // for the average
    const Average = (eng + mths + phy + chem + comp) / 5
    
    
    // To get check your grade
    if (Average >= 70) {
        alert(name + ' in ' + level + '  Your grade is A and your avearge score is ' + Average)
    }
    
    else if (Average >= 60) {
        alert(name + ' in ' + level + '  Your grade is B and your avearge score is ' + Average)
    }
    
    else if (Average >= 50) {
        alert(name + ' in ' + level + '  Your grade is C and your avearge score is ' + Average)
    }
    
    else if (Average >= 45) {
        alert(name + ' in ' + level + '  Your grade is D and your avearge score is ' + Average)
    }
    
    else if (Average >= 40) {
        alert(name + ' in ' + level + '  Your grade is E and your avearge score is ' + Average)
    }
    
    else if (Average <= 39) {
        alert(name + ' in ' + level + '  Your grade is F and your avearge score is ' + Average)
    }
    
    else {
        alert('Sorry, you do not have a score')
    }


}

else{
    alert("you've been logged out 🙄")
}

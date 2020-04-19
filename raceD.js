# race-day

let runnerName = 'Joan'

let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = false 

let runnerAge = 18

if (regEarly && runnerAge > 18){raceNumber += 1000;
}
if (regEarly && runnerAge > 18){
  console.log(`Hi ${runnerName} , your runner ID is ${raceNumber} and you will race at 9:30 AM`)
}

else if (!regEarly && runnerAge > 18){
  console.log(`Hi ${runnerName} , your runner ID is ${raceNumber} and you will race at 11:00 AM`)
}

else if (runnerAge < 18){
  console.log(`Hi ${runnerName} , your runner ID is ${raceNumber} and you will race at 12:30 AM`)
}

else{
  console.log(`Hi ${runnerName},visit  the registration desk`)
}

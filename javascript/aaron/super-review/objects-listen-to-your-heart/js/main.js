//Create a stopwatch object that has four properties and three methods


let stopwatch = {}
    stopwatch.color = 'black',
    stopwatch.brand ='visio',
    stopwatch.model = 'gt-50',
    stopwatch.age = '2years'

    stopwatch.stopTime = function(){
    console.log("time stopped")
}
    stopwatch.startTime = function(){
        console.log('Timer has started')
    }
    stopwatch.alert = function(){
        console.log('Alarm set for 5 minutes')
    }
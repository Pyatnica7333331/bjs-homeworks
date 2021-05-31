class AlarmClock {
    constructor(alarmCollection, id) {
        this.alarmCollection = [];
        this.timerId = null
    };
    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error("Не передано значение идентификатора")
        } else if (this.alarmCollection.find(bell => bell.id === id)) {
            console.error("Этот будильник уже установлен")
        } else {
            this.alarmCollection.push({
            time : time,
            id : id,
            callback: callback 
            });
        };
    };
    removeClock (id) {
        
        if (this.alarmCollection.find(bell => bell.id  === id)) {
            this.alarmCollection.splice(this.alarmCollection.findIndex(bell => bell.id  === id));
            return true + "Будильник удален"
        } else {
            return false + "Будильник не удалось удалить"
        }
        
    };
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    };
    start() {
        function checkClock(bell){
            if (bell.time === this.getCurrentFormattedTime()) {
                return bell.callback()
            };
        };
        
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(bell => checkClock(bell));
            }, 1000);
            
        };
           
    };
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null
        };

    };
    printAlarms () {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}\n`);
        this.alarmCollection.forEach(bell => console.log(
            `Будильник №${bell.id} заведен на ${bell.time}\n`)
        );
    };
    clearAlarms(){
        this.stop(); 
        this.alarmCollection = [];
    };
};
const phoneAlarm = new AlarmClock();
function testCase() {
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("Пора вставать"), 1);
    
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime() + 1, () => {console.log("Вставай уже");
    phoneAlarm.removeClock(2)}, 2);

    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime() + 2, () => {console.log("Вставай, а то проспишь!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms()}, 3);

    phoneAlarm.printAlarms();
}
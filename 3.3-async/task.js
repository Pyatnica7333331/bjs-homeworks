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
        this.alarmCollection.find(bell => {
            if (bell.id === id) {
                this.alarmCollection.splice(this.alarmCollection.indexOf(id));
                return "Будильник удален"
            } else {
                return "Будильник не удалось удалить"
            }
        });
    };
    getCurrentFormattedTime (){
        return new Date().toLocaleTimeString().slice(0,-3);
    };
    start() {
        function checkClock(bell){
            if (bell.time = new Date().toLocaleTimeString().slice(0,-3)) {
                return bell.callback()
            };
        };
        function setInterval() {
            () => { };
            
        };

        if (!this.timerId) {
            this.alarmCollection.forEach(bell => checkClock(bell));
            this.timerId = setInterval(); 
        };
           
    };
    stop() {
        function clearInterval() {
            delete this.alarmCollection.id
        };
        if (this.timerId) {
            clearInterval();
            delete this.timerId
        };

    };
    printAlarms () {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}/n`);
        this.alarmCollection.forEach(bell => console.log(
            `Будильник №${bell.id} заведен на ${getCurrentFormattedTime()}/n`)
        );
    };
    clearAlarms(){
        stop(); 
        this.alarmCollection.splice();
    };
};
const bell = new AlarmClock();
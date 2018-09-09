const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
const months =  [ "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября","декабря" ]
const pairWindow = new pair("", "");
const topPairs = [
    [], // vsk
    [], // pon
    [
        new pair("Лекция у Коряги", "1439"),
        new pair("Физра", "спортзальчик"),
        new pair("Практ по микре", "1а116"),
        new pair("Практ по микре", "1а116"),
    ], // vtr
    [
        pairWindow,
        pairWindow,
        new pair("Практ по физколлоидной", "1a403"),
        new pair("Англицкий", "1402")
    ], // sre
    [
        pairWindow,
        new pair("Беология", "1а118"),
        new pair("Англицкий", "1402"),
        new pair("Рррр тигр", "1а312"),
        new pair("Блоть физика", "2820"),
    ], // tcet
    [
        pairWindow,
        new pair("Физра", "спортзальчик"),
        new pair("Феласафия", "1411"),
        new pair("Блоть физика", "2520")
    ], // piat
    [] // sub
]
const bottomPairs = [
    [], // vsk
    [], // pon
    [
        new pair("Фибра", "1а239"),
        new pair("Практика по фибре", "1а120"),
        new pair("Практика по фибре", "1а120")
    ], // vtr
    [
        pairWindow,
        new pair("Практ по метеохуйне", "1505"),
        new pair("Практ по физколлоидной", "1a403"),
        new pair("Лекция по метеохуйне", "1538")
    ], // sre
    [
        new pair("Лекция по микре", "1а329"),
        new pair("Рррр тигр", "1а312"),
        new pair("Англицкий", "1402"),
        new pair("Лекция у бабайкова", "1а329"),
        new pair("Блоть физика", "2820"),
    ], // tcet
    [
        new pair("Феласафия (лекция)", "1106"),
        new pair("Физра", "спортзальчик"),
        new pair("Феласафия", "1411"),
        new pair("Блоть физика", "2520")
    ], // piat
    [] // sub
]

function pair(name, room) {
    this.name = name;
    this.room = room;
}

function write(text) {
    document.write(text);
}

function getDayOfWeekName(dayOfWeek) {
    return days[dayOfWeek];
}

function getMonthName(monthNumber) {
    return months[monthNumber];
}

function makeTodayBlock() {
    var nowDate = new Date();
    return "Сегодня " + nowDate.getDate() +
        " " + getMonthName(nowDate.getMonth()) +
        ",  " + getDayOfWeekName(nowDate.getDay()) + "<br>";
}

function getDayWithOffset(offset) {
    var result = new Date();
    result.setDate(result.getDate() + offset);
    return result;
}

function getNextDay() {
    return getDayWithOffset(1)
}

function isTop() {
    var day = getDayWithOffset(0);
    var dayOfWeek = day.getDay();

    day.setDate(day.getDate() - dayOfWeek + 1);

    return day.getDate() % 2 == 0;
}

function getCurrentWeek() {
    var day = getDayWithOffset(0);
    var dayOfWeek = day.getDay();

    day.setDate(day.getDate() - dayOfWeek + 1);

    if(isTop()){
        return "Эта неделя по верху";
    }
    return "Эта неделя по низу";
}

function getNextWeek() {
    var day = getDayWithOffset(1);
    var dayOfWeek = day.getDay();

    if(dayOfWeek != 0) {
        day.setDate(day.getDate() + (8 - dayOfWeek));
    }  
    else {
        day.setDate(day.getDate() + 1);
    }

    if(day.getDate() % 2 == 0){
        return "Следующая неделя по верху";
    }
    return "Следующая неделя по низу";
}

function getSource() {
    if(isTop()){
        return topPairs;
    }
    return bottomPairs;
}

function getOnToday() {
    var source = getSource();

    source = source[getDayWithOffset(0).getDay()];

    return buildTable(source);
}

function getOnNextDay() {
    var source = getSource();

    source = source[getDayWithOffset(1).getDay()];

    if(source.length == 0)
        return "пар нет";

    return buildTable(source);
}

function buildTable(source) {
    var result = "<br><table class='pure-table pure-table-horizontal'><tbody>"

    for (let index = 0; index < source.length; index++) {
        const element = source[index];
        result += "<tr><td>" + (index + 1) + "</td><td>" + element.name + "</td><td>" + element.room + "</td></tr>";
    }

    return result + "</tbody></table>";
}

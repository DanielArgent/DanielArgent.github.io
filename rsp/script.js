var Pair = /** @class */ (function () {
    function Pair(name, room) {
        this.name = name;
        this.room = room;
    }
    return Pair;
}());

var days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var pairWindow = new Pair("", "");
var topPairs = [
    [],
    [],
    [
        new Pair("Лекция у Коряги", "1439"),
        new Pair("Физра", "спортзальчик"),
        new Pair("Практ по микре", "1а116"),
        new Pair("Практ по микре", "1а116"),
    ],
    [
        pairWindow,
        pairWindow,
        new Pair("Практ по физколлоидной", "1a403"),
        new Pair("Англицкий", "1402")
    ],
    [
        pairWindow,
        new Pair("Беология", "1а118"),
        new Pair("Англицкий", "1402"),
        new Pair("Рррр тигр", "1а312"),
        new Pair("Блоть физика", "2820"),
    ],
    [
        pairWindow,
        new Pair("Физра", "спортзальчик"),
        new Pair("Феласафия", "1411"),
        new Pair("Блоть физика", "2520")
    ],
    [] // sub
];
var bottomPairs = [
    [],
    [],
    [
        new Pair("Фибра", "1а239"),
        new Pair("Практика по фибре", "1а120"),
        new Pair("Практика по фибре", "1а120")
    ],
    [
        pairWindow,
        new Pair("Практ по метеохуйне", "1505"),
        new Pair("Практ по физколлоидной", "1a403"),
        new Pair("Лекция по метеохуйне", "1538")
    ],
    [
        new Pair("Лекция по микре", "1а329"),
        new Pair("Рррр тигр", "1а312"),
        new Pair("Англицкий", "1402"),
        new Pair("Лекция у бабайкова", "1а329"),
        new Pair("Блоть физика", "2820"),
    ],
    [
        new Pair("Феласафия (лекция)", "1106"),
        new Pair("Физра", "спортзальчик"),
        new Pair("Феласафия", "1411"),
        new Pair("Блоть физика", "2520")
    ],
    [] // sub
];
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
function normalize(data) {
    return data == 0 ? 7 : data;
}
function getDateWithOffset(offset) {
    var result = new Date();
    result.setDate(result.getDate() + offset);
    return result;
}
function getNextDay() {
    return getDateWithOffset(1);
}
function isTop(offset) {
    var day = getDateWithOffset(offset);
    var dayOfWeek = normalize(day.getDay());
    day.setDate(day.getDate() - dayOfWeek + 1);
    return day.getDate() % 2 == 0;
}
function getCurrentWeek() {
    if (!isTop(0)) {
        return "Эта неделя по верху";
    }
    return "Эта неделя по низу";
}
function getNextWeek() {
    var day = getDateWithOffset(0);
    var dayOfWeek = normalize(day.getDay());
    var date = day.getDate() + (8 - dayOfWeek);
    if (date % 2 == 0) {
        return "Следующая неделя по верху";
    }
    return "Следующая неделя по низу";
}
function getSource() {
    if (!isTop(0)) {
        return topPairs;
    }
    return bottomPairs;
}
function getOnToday() {
    var source = getSource();
    var xsource = source[getDateWithOffset(0).getDay()];
    return buildTable(xsource);
}
function getOnNextDay() {
    var source = getSource();
    var xsource = source[getDateWithOffset(1).getDay()];
    if (xsource.length == 0)
        return "пар нет";
    return buildTable(xsource);
}
function buildTable(source) {
    var result = "<br><table class='pure-table pure-table-horizontal'><tbody>";
    for (var index = 0; index < source.length; index++) {
        var element = source[index];
        result += "<tr><td>" + (index + 1) + "</td><td>" + element.name + "</td><td>" + element.room + "</td></tr>";
    }
    return result + "</tbody></table>";
}

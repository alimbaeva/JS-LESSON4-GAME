var record = []; //история ответов
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    return true;
}

function answer(que, ans1, ans2) {
    var ok = false;
    do {
        event = +prompt(que + ans1 + ans2 + '-1 - Выход из игы');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1: record.push([que, ans1]);
            break;
        case 2: record.push([que, ans2]);
            break;
        case -1: record.push([que, 'Вышли из игры']);
            break;
    }
    return event;
}

///////////////////////////

switch (answer(works.a00, works.a1, works.a2)) {
    case 1:// Первое действие - если в первом окне ввели 1 то открывается серия окон - щлно  2
        switch (answer(works.b00, works.b1, works.b2)) {
            case 1:// второе действие - если во  2 окне ввели 1 то переходим на 4 окно
            case 2: // если ввели 2 то так же переходим на 4 окно
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // второе действие
                break;
            default:
                alert('Ощибка');
        }
        break;
    case 2: // Первое действие если в 1 окне ввели 2 то переходим на 3 окну
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1: // второе действие, если во втором окне ввели 1 то переходим на 4 окно
            case 2: // если ввели 2 то так же переходим на 4 окно
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // второе действие
                break;
            default:
                alert('Ощибка');
        }
        break;
    case -1: // первое действие
        break;
    default:
        alert('ошибка');

}
alert('Спасибо за игру');
console.log(record);
var stepHistory = 'В ходе №' + step + ' ' + record[step - 1][0] + 'Ваш выбор' + record[step - 1][1];
alert(stepHistory);

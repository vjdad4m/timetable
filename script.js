const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const gifs = ['https://media.giphy.com/media/RgnTXvE24wFjUhB3Dt/giphy.gif',
            'https://media.giphy.com/media/T1zgJ7cp8tWla/giphy.gif',
            'https://media.giphy.com/media/F3BeiZNq6VbDwyxzxF/giphy.gif',
            'https://media.giphy.com/media/3o6Zt62PeJeFUDwBUI/giphy.gif',
            'https://media.giphy.com/media/TfWhFbURIirNegNN4t/giphy.gif'];

       
import timetable from './timetable.json' assert {type: 'json'};

function update() {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    const d = new Date();

    let day = d.getDay();
    let hrs = ("0" + d.getHours()).slice(-2);
    let min = ("0" + d.getMinutes()).slice(-2);
    let sec = ("0" + d.getSeconds()).slice(-2);
    
    var h = document.getElementById('day');
    var t = document.getElementById('time');
    var c = document.getElementById('class');
    var n = document.getElementById('next');
    var p = document.getElementById('gif');

    h.innerText = days[day];
    t.innerText = hrs + ':' + min + ':' + sec
    p.innerHTML = '<img width=420 height=420 src=".">'.replace('.', randomGif);

    let msg = '';
    let next = '';

    if (hrs < 5) {
        msg = '<i>Bro go to sleep...</i>';    
    } else {
        if (day == 0 | day == 7) {
            msg = '<i>Dude it is the weekend...</i>'
        }
        else {
            msg = timetable[day][hrs];
            if (msg == undefined) {
                if (hrs < 8) {
                    msg = '<i>School is starting soon!</i>';
                } else {
                    msg = '<i>School is over!</i>';
                }
            }
            next = timetable[day][hrs+1]
            if (next == undefined) {
                next = '<i>School is over!</i>'
            }
        }
    }

    c.innerHTML = '<span>Currently:</span><br>' + msg.replaceAll('\n', '<br>');
    if (next != '' && next != undefined) {
        n.innerHTML = '<span>Next up:</span><br>' + next.replaceAll('\n', '<br>');
    }

}

update();
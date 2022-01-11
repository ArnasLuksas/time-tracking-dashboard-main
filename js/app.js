const daily = document.querySelector('.daily');
const week = document.querySelector('.week');
const month = document.querySelector('.month');

const output = document.querySelector('.timeTrack_container');


daily.addEventListener('click', getDaily);
week.addEventListener('click', getWeek);
month.addEventListener('click', getMonth);



const work = `class = "work"`;
const play = `class = "play"`;
const study = `class = "study"`;
const exercise = `class = "exercise"`;
const social = `class = "social"`;
const self_care = `class = "self_care"`;


function getDaily() {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            let card = '';
            let x = '';

            data.forEach(item => {
                if (item.title === "Work") {
                    x = work;
                } else if (item.title === "Play") {
                    x = play;
                } else if (item.title === 'Study') {
                    x = study;
                } else if (item.title === 'Exercise') {
                    x = exercise;
                } else if (item.title === 'Social') {
                    x = social;
                } else if (item.title === 'Self Care') {
                    x = self_care;
                };
                card += `
    <div ${x}>
    <div class = "json_data">
        <div class="title_hours">
            <h3>${item.title}</h3>
            <p>${item.timeframes.daily.current}hrs<p>
</div>

        <div class="last_week">
        <img src="/images/icon-ellipsis.svg" alt="">
<p>Last week - ${item.timeframes.daily.previous}hrs<p>
        </div>
        </div>

      </div> `
            });
            output.innerHTML = card;
        })
}
getDaily();


function getWeek() {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            let card = '';
            let x = '';

            data.forEach(item => {
                if (item.title === "Work") {
                    x = work;
                } else if (item.title === "Play") {
                    x = play;
                } else if (item.title === 'Study') {
                    x = study;
                } else if (item.title === 'Exercise') {
                    x = exercise;
                } else if (item.title === 'Social') {
                    x = social;
                } else if (item.title === 'Self Care') {
                    x = self_care;
                }
                card += `
        <div ${x}>
        <div class = "json_data">

            <div class="title_hours">
            <h3>${item.title}</h3>
            <p>${item.timeframes.weekly.current}hrs<p>
        </div>
            <div class="last_week">
            <img src="/images/icon-ellipsis.svg" alt="">
            <p>Last week - ${item.timeframes.weekly.previous}hrs<p>
      
            </div>
            </div>
            </div>
            `
            })
            output.innerHTML = card;
        })
}


function getMonth() {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            let card = '';
            let x = '';

            data.forEach(item => {
                if (item.title === "Work") {
                    x = work;
                } else if (item.title === "Play") {
                    x = play;
                } else if (item.title === 'Study') {
                    x = study;
                } else if (item.title === 'Exercise') {
                    x = exercise;
                } else if (item.title === 'Social') {
                    x = social;
                } else if (item.title === 'Self Care') {
                    x = self_care;
                };
                card += `
    <div ${x}>
    <div class = "json_data">
        <div class="title_hours">
            <h3>${item.title}</h3>
            <p>${item.timeframes.monthly.current}hrs<p>
        </div>


        <div class="last_week">
        <img src="/images/icon-ellipsis.svg" alt="">
            <p>Last week - ${item.timeframes.monthly.previous}hrs<p>
            

        </div>
        </div>
      </div> `
            });
            output.innerHTML = card;
        })
}
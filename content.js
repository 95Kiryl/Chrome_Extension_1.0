const titles = document.querySelectorAll(".story-wrap");
let idWeather = 1,
    create = true,
    modals = null;

titles.forEach(title => {
    const elem = document.createElement('div');
    elem.className = 'weather';
    elem.setAttribute('id', idWeather);
    idWeather++;
    elem.style.cssText = 'width:50px; cursor:pointer; color:red; font-size:45px';
    elem.innerHTML = '🌎';
    title.after(elem);
})

const getModals = () => {
    modals = document.querySelectorAll('.modalWindow');
    return modals;
}

const balls = document.querySelectorAll('.weather');

const createModal = (id, ball) => {
    const div = document.createElement('div');
    div.className = 'modalWindow';
    div.setAttribute('id', id);
    div.innerHTML = 'Погода в Минске на сегодня +30';
    div.style.cssText = 'width: 203px; height: 50px; cursor: pointer; color: black; font-size: 15px; background: #f9dada; margin-top: 5px;';
    ball.after(div);
    if (!modals.length) {
        create = true;
    } else {
        create = false;
    }
}

balls.forEach(ball => {
    ball.addEventListener('click', (event) => {
        getModals();
        if (modals.length !== 0) {
            modals.forEach(modal => {
                if (modal.id === ball.id) {
                    modal.remove();
                    create = false;
                }
            })
            if (ball.id === event.currentTarget.id && create === true) {
                createModal(ball.id, ball);
            }
            create = true;
        } else if (ball.id === event.currentTarget.id) {
            createModal(ball.id, ball);
        }
    })
})

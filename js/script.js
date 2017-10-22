function next() {

    var toHide = document.getElementsByClassName('visible')[0];


    if(toHide.nextElementSibling.tagName === 'null')
        document.getElementById('nextBtn').disabled  = true;
    else {
        toHide.classList.remove('visible');
        toHide.classList.add('hidden');

        var toShow = toHide.nextElementSibling;
        toShow.classList.remove('hidden');
        toShow.classList.add('visible');

    }


};

function prev() {

    var toHide = document.getElementsByClassName('visible')[0];

    if(toHide.previousElementSibling.tagName === 'null')
        document.getElementById('prevBtn').disabled  = true;
    else {
        toHide.classList.remove('visible');
        toHide.classList.add('hidden');

        var toShow = toHide.previousElementSibling;
        toShow.classList.remove('hidden');
        toShow.classList.add('visible');
    }


};

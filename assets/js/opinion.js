/**
 * Created by av on 6/7/17.
 */

let pollListElement;
let opolls = [];

function newopolls(qpoll) {
    this.OPoll = qpoll;
}

$(function () {

    let btnAdd = $('#btn-add-opoll');
    let newPoll = $('#input-new-opoll');

    pollListElement = $('.opinion');

    refreshPolls(true);

    btnAdd.click(function () {
        addOPolls(newPoll.val());
    });
});



function refreshPolls(firstPageLoad = false) {
    if(!firstPageLoad){
        saveOPolls();
    }
    console.log("First Refresh");
    if(!pollListElement){
        return;
    }
    retrievePolls();
    pollListElement.empty();
    for(i in opolls){
        let opollItem = createNewOPollElement(i);
        pollListElement.append(opollItem);
    }
}


function createNewOPollElement(i) {
    let opollItem = $(`<div class="col-sm-4">
                            <div class="card text-center">
                                <a href="#">
                                    <img class="card-image-top" src=" http://via.placeholder.com/350x150?text=Poll+Section" alt="PollTopic">
                                </a>
                                <div class="card-block" data-id="${i}">
                                    <h4 class="card-text">${opolls[i].OPoll}</h4>
                                    <a class="btn btn-success btn-primary btn-just-icon" onclick="thumbsUP(${i})">
                                        <i class="material-icons">thumbs_up_down</i>
                                    </a>
                                </div>
                            </div>
                    </div>`);

    return opollItem

}


function retrievePolls() {
    let savedPolls = localStorage.getItem('opolls');
    if(savedPolls){
        opolls = JSON.parse(savedPolls);
    }
}

function saveOPolls() {
    localStorage.setItem("opolls",JSON.stringify(opolls));
}

function addOPolls(opoll) {
    opolls.push(new newopolls(opoll));
    refreshPolls();
}
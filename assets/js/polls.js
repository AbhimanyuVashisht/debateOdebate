/**
 * Created by av on 6/7/17.
 */

let polls = [];
let pollListElement;

function newpolls(qpoll) {
    this.QPoll = qpoll;
    this.yes = 0;
    this.no = 0;
}


$(function () {

   let btnAdd = $('#btn-add-qpoll');
   let newPoll = $('#input-new-qpoll');
   let voteUP = $('.thumbup');
   pollListElement = $('.polls');

   refreshPolls(true);

   btnAdd.click(function () {
      addQPolls(newPoll.val());
   });
});

function refreshPolls(firstPageLoad = false) {
    if(!firstPageLoad){
        savePolls();
    }
    console.log("First Refresh")
    if(!pollListElement){
       return;
    }
    retrievePolls();
    pollListElement.empty();
    for(i in polls){
       let pollItem = createNewPollElement(i);
       pollListElement.append(pollItem);
    }
}


function thumbsUP(pollId) {
    polls[pollId].yes ++;
    refreshPolls();
}

function thumbsDown(pollId) {
   polls[pollId].no ++;
   refreshPolls();
}
function createNewPollElement(i) {
   let yesPercent = Math.round((polls[i].yes/(polls[i].yes+polls[i].no))*100);
   let noPercent = Math.round((polls[i].no/(polls[i].yes+polls[i].no))*100);
   let pollItem = $(`<div class="col-sm-4">
                            <!--Polls-->
                            <div class="card text-center">
                                <a href="currentpolls.html">
                                    <img class="card-image-top" src=" http://via.placeholder.com/350x150?text=Poll+Section" alt="PollTopic">
                                </a>
                                <div class="card-block" data-id="${i}">
                                    <h4 class="card-text">${polls[i].QPoll}</h4>
                                    <a class="btn btn-success btn-primary btn-just-icon" onclick="thumbsUP(${i})">
                                        <i class="material-icons">thumb_up</i>&nbsp;${checkNAN(yesPercent)}%
                                    </a>
                                    <a class="btn btn-success btn-primary btn-just-icon" onclick="thumbsDown(${i})">
                                        <i class="material-icons">thumb_down</i>&nbsp;${checkNAN(noPercent)}%
                                    </a>
                                </div>
                            </div>
                    </div>`);

    return pollItem

}

function checkNAN(num) {
    if(isNaN(num)){
       return 0;
    }
    return num
}

function retrievePolls() {
   let savedPolls = localStorage.getItem('polls');
   if(savedPolls){
      polls = JSON.parse(savedPolls);
   }
}

function savePolls() {
   localStorage.setItem("polls",JSON.stringify(polls));
}

function addQPolls(qpoll) {
   polls.push(new newpolls(qpoll));
   refreshPolls();
   console.log(polls);
}
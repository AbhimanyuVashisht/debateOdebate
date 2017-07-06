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

   pollListElement = $('.polls');

   refreshPolls(true);

   btnAdd.click(function () {
      addQPolls(newPoll.val());
   })

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

function createNewPollElement(i) {
   let pollItem = $(`<div class="col-sm-4 ">
                            <!--Polls-->
                            <div class="card text-center">
                                <a href="currentpolls.html">
                                    <img class="card-image-top" src=" http://via.placeholder.com/350x150?text=Poll+Section" alt="debatetopicpoll">
                                </a>
                                <div class="card-block" data-id="${i}">
                                    <h4 class="card-text">${polls[i].QPoll}</h4>
                                    <a class="btn btn-success btn-primary btn-just-icon thumbup">
                                        <i class="material-icons">thumb_up</i>
                                    </a>
                                    <a class="btn btn-success btn-primary btn-just-icon thumbdown">
                                        <i class="material-icons">thumb_down</i>
                                    </a>
                                </div>
                            </div>
                    </div>`);

    return pollItem

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
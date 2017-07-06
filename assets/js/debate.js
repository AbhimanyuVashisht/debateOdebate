/**
 * Created by av on 6/7/17.
 */

let debates = [];
let debateListElement;

function debate(topic,stand) {
    this.topic = topic;
    this.stand = stand;
}
$(function () {
    let btnAdd = $('#btn-add-debTopic');
    let newdTopic = $('#input-new-debTopic');
    let stand = $('#input-new-stand')
    debateListElement = $('.debate-topic')

    refreshDebate(true);

    btnAdd.click(function () {
        console.log("dcfvgbhjk");
        addDebTopic(newdTopic.val(), stand.val());
    })
});

function refreshDebate(firstPageLoad = false) {
    if(!firstPageLoad){
        saveDebates();
    }
    if(!debateListElement){
        return;
    }
    retrieveDebates();
    debateListElement.empty();
    for(i in debates){
        let debateItem = createNewDebateElement(i);
        debateListElement.append(debateItem);
    }
}

function createNewDebateElement(i) {

    let debateItem = $(`<div class="card" ">
                            <div class="card-block">
                                <h3 class="card-title">${debates[i].topic}</h3>
                                <p class="card-text"><i class="material-icons">comment</i> 0 comments</p>
                         </div>
                        </div>`);
    return debateItem
}

function retrieveDebates() {
    let savedDebates = localStorage.getItem('debates');
    if(savedDebates){
        debates = JSON.parse(savedDebates);
    }
}

function saveDebates() {
    localStorage.setItem("debates",JSON.stringify(debates));
}

function addDebTopic(debTopic, debatorStand) {
    debates.push(new debate(debTopic, debatorStand));
    refreshDebate();
}
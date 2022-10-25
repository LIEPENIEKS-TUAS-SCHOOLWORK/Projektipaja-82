questions = []
testQCounter = 0;
correctQuestion = null;
title = null;
selectedQuestion = null;

function addQMultiple() {
    let container = $("#qTestContainer");

    let element = `<div class="p-2">
                        <label id="cQL">Question 1:</label>
                        <input id="cQ" type="text">
                    </div>`

    container.append(element);

    $("#cQL").attr("id", "cQL" + testQCounter);
    $("#cQL" + testQCounter).html("Question" + testQCounter);
    $("#cQ").attr("id", "cQ" + testQCounter);

    let option = `
        <option value=" ` + testQCounter + `">
                    ` + testQCounter + `
        </option>`

    $("#q-select").append(option)

    testQCounter += 1;
}

function saveQuestions() {
    title = $("#title-input").val();
    $("#title").html(title);
    desc = $("#desc-input").val();
    $("#desc").html(desc);

    qContainer = $("#q-container");

    for (let i = 0; i < testQCounter; i += 1) {
        let questionData = $("#cQ" + i)
        let val = questionData.val()

        let qObject = {
            num: i,
            id: "#cQ" + i,
            value: val
        };
        questions.push(qObject);

        let element = `
                <button class="m-1" onclick="selectQuestion(event)" value="` +
            qObject.num + `">` +
            qObject.value + `</button>`;


        $("#q-container").append(element);
        correctQuestion = parseInt($("#q-select").val());


    }


}

function selectQuestion(e) {
    selectedQuestion = parseInt(e.target.getAttribute("value"));
}

function submit() {
    if (selectedQuestion == correctQuestion) {
        $("#desc").html("correct")
        $("#desc").addClass("correct-alert")
    } else {
        $("#desc").html("incorrect")
        $("#desc").addClass("incorrect-alert")

    }
}

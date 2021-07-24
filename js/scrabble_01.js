// 01. WHEN button is clicked, THEN the quiz starts
function start_button() {
    let btn_init = document.getElementById('btn_init_id');
    btn_init.addEventListener('click',function(){
        let part_01 = document.getElementById('part_01');
        part_01.style.display = 'none';
        console.log('BTN: Start quiz.');
        retrieve_name();
    });
}
start_button();

// 02. WHEN user enters his name, THEN validation starts
let input_name = document.getElementById('input_name_id').value;

function retrieve_name(event) {
    let part_02 = document.getElementById('part_02');
    let btn_quiz_01 = document.getElementById('btn_quiz_01');
    part_02.style.display = "block";
    event.preventDefault();
    if (input_name == null) {
        //let input_msg = document.children[0].children[1].children[1].children[0].children[2].createElement('h6');
        //input_msg.appendChild('input_msg');
        //input_msg.textContent = 'You must enter your name.';
        console.log('NO DATA');
    }
    else if (!/^[a-zA-Z]+$/.test(input_name)) {
        //let input_msg = document.children[0].children[1].children[1].children[0].createElement('h6');
        //input_msg.appendChild('input_msg');
        //input_msg.textContent = 'Only letters.';
        console.log('NO DATA');
    }
    else {
        console.log('NAME: ' + input_name);
        document.getElementById('question_01').style.display = 'none';
        quiz_init();
    }
}

function quiz_init(event){
    let part_03 = document.getElementById('part_03');
    part_03.style.display = "block";
    event.preventDefault();
}

//let q01 = document.getElementById('input_question_01');


// ENTER user's name and validate to run the program
// THEN quiz starts
// WHEN user enters an incorrect data, the warning message appears
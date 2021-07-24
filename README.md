
// 02. WHEN user enters his name, THEN validation starts
let input_name = document.getElementById('input_name_id').value;            // NAME value from the input
function retrieve_name() {                                                            // N
    let input_msg = document.children[2].children[0].children[3];
    if (input_name == null) {
        input_msg.textContent = 'You must type your aka or name.';
        console.log('NO DATA');
    }
    else if (!/^[a-zA-Z]+$/.test(input_name)) {
        input_msg.textContent = 'You cannot enter numbers or symbols.';
        console.log('NO DATA');
    }
    else {
        console.log('NAME: ' + input_name);                                               // NAME is valid then
        document.getElementById('question_01').style.display = 'none';     // ID style is display block and
        quiz_init();                                                                 // Initialize the questions
    }
}

let q01 = document.getElementById('input_question_01');



// 01. WHEN button is clicked, THEN the quiz starts
function start_button() {
    let btn_init = document.getElementById('btn_init_id');
    btn_init.addEventListener('click',function(){
        retrieve_name();
    });
}
start_button();

// ENTER user's name and validate to run the program
// THEN quiz starts
// WHEN user enters an incorrect data, the warning message appears
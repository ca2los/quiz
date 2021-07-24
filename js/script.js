    let time_remaining = 240;
    let time_penalize = 10;
    let total_points = 0;

    // A. WHEN button is clicked, THEN the quiz starts
    function start_button() {
        let btn_init = document.getElementById('btn_init_id');
        btn_init.addEventListener('click',function(){
            let step_01 = document.getElementById('step_01');
            step_01.style.display = 'none';
            retrieve_name();
            console.log('FORM: Initialize');
        });
    }
    start_button();

    // B. WHEN user enters his name, THEN validation starts
    function retrieve_name() {
        let step_02 = document.getElementById('step_02');
        let submit = document.getElementById('btn_quiz_start');
        step_02.style.display = "block";
        submit.addEventListener("click", function(event){
            input_name = document.getElementById('input_name_id').value;
            document.getElementById('name').innerHTML = input_name;
            step_02.style.display = 'none';
            retrieve_quiz_01();
            console.log('QUIZ: Initialize');
            countdown();
            event.preventDefault();
        });
    }

    // C. WHEN button is clicked, THEN the quiz restarts
    function restart_button() {
        let btn_init = document.getElementById('btn_restart_id');
        btn_init.addEventListener('click',function(){
            location.reload()
        });
    }
    restart_button();

    // Question #1
    function retrieve_quiz_01() {
        // Prints the question
        let part_01 = document.getElementById('part_01');
        part_01.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_01');
        submit.addEventListener("click", function(event){
            let answer_01 = document.getElementById('answer_01').value.toUpperCase();
            if (answer_01 === "STATEMENTS" || answer_01 === "STATEMENT") {
                part_01.style.display = 'none';
                console.log('CORRECT ');
                points();
                retrieve_quiz_02();
                event.preventDefault();
            }
            else {
                time_remaining = time_remaining - time_penalize;
                console.log('WRONG:' + ' -' + time_penalize + " seconds" );
                part_01.style.display = 'none';
                retrieve_quiz_02();
                event.preventDefault();
            }
        });
    }

    // Question #2
    function retrieve_quiz_02() {
        // Prints the question
        let part_02 = document.getElementById('part_02');
        part_02.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_02_d');
        let wrong_1 = document.getElementById('btn_submit_02_a');
        let wrong_2 = document.getElementById('btn_submit_02_b');
        let wrong_3 = document.getElementById('btn_submit_02_c');

        submit.addEventListener("click", function(event){
            part_02.style.display = 'none';
            console.log('CORRECT ');
            points();
            retrieve_quiz_03();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_02.style.display = 'none';
            retrieve_quiz_03();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_02.style.display = 'none';
            retrieve_quiz_03();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_02.style.display = 'none';
            retrieve_quiz_03();
            event.preventDefault();
        });
    }

    // Question #3
    function retrieve_quiz_03() {
        let part_03 = document.getElementById('part_03');
        part_03.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_03');
        submit.addEventListener("click", function(event){
            let answer_03 = document.getElementById('answer_03').value.toUpperCase();
            if (answer_03 === "SWITCH") {
                part_03.style.display = 'none';
                console.log('CORRECT ');
                points();
                retrieve_quiz_04();
                event.preventDefault();
            }
            else {
                time_remaining = time_remaining - time_penalize;
                console.log('WRONG:' + ' -' + time_penalize + " seconds" );
                part_03.style.display = 'none';
                retrieve_quiz_04();
                event.preventDefault();
            }
        });
    }

    // Question #4
    function retrieve_quiz_04() {
        let part_04 = document.getElementById('part_04');
        part_04.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_04_b');
        let wrong_1 = document.getElementById('btn_submit_04_a');
        let wrong_2 = document.getElementById('btn_submit_04_c');
        let wrong_3 = document.getElementById('btn_submit_04_d');

        submit.addEventListener("click", function(event){
            part_04.style.display = 'none';
            console.log('CORRECT ');
            points();
            retrieve_quiz_05();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_04.style.display = 'none';
            retrieve_quiz_05();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_04.style.display = 'none';
            retrieve_quiz_05();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_04.style.display = 'none';
            retrieve_quiz_05();
            event.preventDefault();
        });
    }

    // Question #5
    function retrieve_quiz_05() {
        let part_05 = document.getElementById('part_05');
        part_05.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_05');
        submit.addEventListener("click", function(event){
            let answer_05 = document.getElementById('answer_05').value.toUpperCase();
            if (answer_05 === "BOOLEAN") {
                part_05.style.display = 'none';
                console.log('CORRECT ');
                points();
                retrieve_quiz_06();
                event.preventDefault();
            }
            else {
                time_remaining = time_remaining - time_penalize;
                console.log('WRONG:' + ' -' + time_penalize + " seconds" );
                part_05.style.display = 'none';
                retrieve_quiz_06();
                event.preventDefault();
            }
        });
    }

    // Question #6
    function retrieve_quiz_06() {
        let part_06 = document.getElementById('part_06');
        part_06.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_06_c');
        let wrong_1 = document.getElementById('btn_submit_06_a');
        let wrong_2 = document.getElementById('btn_submit_06_b');
        let wrong_3 = document.getElementById('btn_submit_06_d');

        submit.addEventListener("click", function(event){
            part_06.style.display = 'none';
            console.log('CORRECT ');
            points();
            retrieve_quiz_07();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_06.style.display = 'none';
            retrieve_quiz_07();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_06.style.display = 'none';
            retrieve_quiz_07();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_06.style.display = 'none';
            retrieve_quiz_07();
            event.preventDefault();
        });
    }

    // Question #7
    function retrieve_quiz_07() {
        let part_07 = document.getElementById('part_07');
        part_07.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_07_a');
        let wrong_1 = document.getElementById('btn_submit_07_b');
        let wrong_2 = document.getElementById('btn_submit_07_c');
        let wrong_3 = document.getElementById('btn_submit_07_d');

        submit.addEventListener("click", function(event){
            part_07.style.display = 'none';
            console.log('CORRECT ');
            points();
            retrieve_quiz_08();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_07.style.display = 'none';
            retrieve_quiz_08();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_07.style.display = 'none';
            retrieve_quiz_08();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_07.style.display = 'none';
            retrieve_quiz_08();
            event.preventDefault();
        });
    }

    // Question #8
    function retrieve_quiz_08() {
        let part_08 = document.getElementById('part_08');
        part_08.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_08_b');
        let wrong_1 = document.getElementById('btn_submit_08_a');
        let wrong_2 = document.getElementById('btn_submit_08_c');
        let wrong_3 = document.getElementById('btn_submit_08_d');

        submit.addEventListener("click", function(event){
            part_08.style.display = 'none';
            console.log('CORRECT ');
            points();
            retrieve_quiz_09();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_08.style.display = 'none';
            retrieve_quiz_09();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_08.style.display = 'none';
            retrieve_quiz_09();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_08.style.display = 'none';
            retrieve_quiz_09();
            event.preventDefault();
        });
    }

    // Question #9
    function retrieve_quiz_09() {
        let part_09 = document.getElementById('part_09');
        part_09.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_09_d');
        let wrong_1 = document.getElementById('btn_submit_09_a');
        let wrong_2 = document.getElementById('btn_submit_09_b');
        let wrong_3 = document.getElementById('btn_submit_09_c');

        submit.addEventListener("click", function(event){
            part_09.style.display = 'none';
            console.log('CORRECT ');
            points();
            retrieve_quiz_10();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_09.style.display = 'none';
            retrieve_quiz_10();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_09.style.display = 'none';
            retrieve_quiz_10();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_09.style.display = 'none';
            retrieve_quiz_10();
            event.preventDefault();
        });
    }

    // Question #10
    function retrieve_quiz_10() {
        let part_10 = document.getElementById('part_10');
        part_10.style.display = "block";

        // Answer validation
        let submit = document.getElementById('btn_submit_10_a');
        let wrong_1 = document.getElementById('btn_submit_10_b');
        let wrong_2 = document.getElementById('btn_submit_10_c');
        let wrong_3 = document.getElementById('btn_submit_10_d');

        submit.addEventListener("click", function(event){
            part_10.style.display = 'none';
            console.log('CORRECT ');
            points();
            stats();
            event.preventDefault();
        });
        wrong_1.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_10.style.display = 'none';
            stats();
            event.preventDefault();
        });
        wrong_2.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_10.style.display = 'none';
            stats();
            event.preventDefault();
        });
        wrong_3.addEventListener("click", function(event){
            time_remaining = time_remaining - time_penalize;
            console.log('WRONG:' + ' -' + time_penalize + " seconds" );
            part_10.style.display = 'none';
            stats();
            event.preventDefault();
        });
    }

    // Time goes by
    function countdown() {
        let timer_sec = document.getElementById('timer');
        let counting = setInterval(function () {
            time_remaining--;
            timer_sec.style.display = 'block';
            timer_sec.textContent = time_remaining + " sec."
            if (time_remaining === 0) {
                clearInterval(counting);
                stats();
            }
        },1000);
    }

    // Stats
    function stats() {
        let timer_sec = document.getElementById('timer');
        let step_03 = document.getElementById('step_03');
        step_03.style.display = "block";
        timer_sec.style.display = 'none';

        document.getElementById('timer').style.display = 'none';
        document.getElementById('part_01').style.display = 'none';
        document.getElementById('part_02').style.display = 'none';
        document.getElementById('part_03').style.display = 'none';
        document.getElementById('part_04').style.display = 'none';
        document.getElementById('part_05').style.display = 'none';
        document.getElementById('part_06').style.display = 'none';
        document.getElementById('part_07').style.display = 'none';
        document.getElementById('part_08').style.display = 'none';
        document.getElementById('part_09').style.display = 'none';
        document.getElementById('part_10').style.display = 'none';
    }

    // Points
    function points() {
        total_points = total_points + 10;
        document.getElementById('points').innerHTML = total_points + " PTS";
    }
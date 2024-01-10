//Make string input an int list so numbers can be found in excelsheet, split numbers with every space
    function make_numbers(input){
        var numbers = [];
        var results = input.split(" ");
        for (const result of results){
            var number = parseInt(result);
            if (!isNaN(number)){
                numbers.push(number); 
            }  
        }
        return numbers;
    }

    function profile_score(numbers, score, positive){
        // If positive, then 1 else -1
        value = positive ? 1 : -1;
        for (const number of numbers){
            score[0] += value * data[number][3]
            score[1] += value * data[number][4]
            score[2] += value * data[number][5]
            score[3] += value * data[number][6]
            score[4] += value * data[number][7]
        }
        return score;
    }

    
    function calculate_max_index(score){
        var max_score = -100; //-100 because score will never be that low
        var index = 0;
        var column = -1;
        while (index < score.length){
            if (score[index]>=max_score){
                max_score = score[index];
                column = index;
            }
            index++;
        }
        return column;        
    }

    function calculate_score(){
        var score = [0,0,0,0,0]
        positiveinput = document.getElementById("positive_tokens").value;
        negativeinput = document.getElementById("negative_tokens").value;
        score = profile_score(make_numbers(positiveinput), score, true)
        score = profile_score(make_numbers(negativeinput), score, false)

        document.getElementById("result").innerHTML = "Score: " + score;
        
        
        type = data[0][calculate_max_index(score)+3];
        document.getElementById("type").innerHTML = "Type: " + type;    
    
    }

// yes.no.null button

function tristate1(control) {
    tristate(control, image(image/checkmark.png), '\u2705', '\u274C');
}


/**
 *  loops thru the given 3 values for the given control
 */
function tristate(control, value1, value2, value3) {
    switch (control.value.charAt(0)) {
        case value1:
            control.value = value2;
            break;
        case value2:
            control.value = value3;
            break;
        case value3:
            control.value = value1;
            break;
        default:
            // display the current value if it's unexpected
            alert(control.value);
    }
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


  var input_tokens = Array(data.length-1).fill("0");
  function tristate(buttons) {
    switch (input_tokens[buttons.id-1]) {
      case "0":
        input_tokens[buttons.id-1] = "1";
        break;
      case "1":
        if (data[buttons.id][1] === "ProfielKeuze") {
          input_tokens[buttons.id-1] = "0";
        } else {
          input_tokens[buttons.id-1] = "-1";
        }
        break;
      case "-1":
        if (data[buttons.id][1] === "Stelling") {
          input_tokens[buttons.id-1] = "0";
        } else {
          input_tokens[buttons.id-1] = "3";
        }
        break;
      case "3":
        input_tokens[buttons.id-1] = "0";
        break;
    }
    buttons.innerHTML = '<img src="image/tokens/img' + buttons.id + '.' + input_tokens[buttons.id-1] + '.png" />';
  }

  function profile_score(input_tokens){
      var score = [0,0,0,0,0];
      index = 1;
      for (token of input_tokens){
          number =parseInt(token);
          score[0] += number * data[index][3]
          score[1] += number * data[index][4]
          score[2] += number * data[index][5]
          score[3] += number * data[index][6]
          score[4] += number * data[index][7]
          index++;
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
  
  function count_tokens(score_type){
    var counts = 0;
    for (token of input_tokens){
      if (token === score_type){
        counts++;
      }
    }
    return counts;
  }


  function calculate_score() {
      if (count_tokens("3") > 4){
        alert("Teveel favorieten, je mag max 4");
      } else if (count_tokens("-1") > 12){
        alert("Teveel negatieve kaartjes, je mag max 4");
      } else {
        score = profile_score(input_tokens);
        document.getElementById("result").innerHTML = "Je score is: " + score;        
        type1 = data[0][calculate_max_index(score)+3];
        type2 = data[0][calculate_max_index(score)+3];
        type3 = data[0][calculate_max_index(score)+3];
        document.getElementById("type").innerHTML = "Jou score is: " + type1 + ", " + type2 + ", " + type3; 
      
      }
  }

  function myFunction(){
    calculate_score();
    openCity(evt, cityName);
}
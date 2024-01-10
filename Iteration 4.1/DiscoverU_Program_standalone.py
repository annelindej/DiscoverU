import pandas as pd

#import excel sheet with qualifications
df = pd.read_excel("Data_prototype1.xlsx")

#Check if input are all numbers and spaces 
def checknumber(result):
    try:
        int(result)
        return int(result)
    except ValueError:
        print("Invoer is geen getal, dus overgeslagen: '", result, "'")

#Make string input a int list so numbers can be found in excelsheet, split numbers with every space
def makenumbers(input):
    numbers = []
    results = input.split(" ")
    for result in results:
        number = checknumber(result)
        if number is not None:
            numbers.append(number)
    return numbers

#
def profilescore(numbers, score, positive):
    value = 1 if positive else -1 
    for number in numbers:
        score[0] += value * df.loc[number-1]["Vernieuwers"]
        score[1] += value * df.loc[number-1]["Maatschappelijke Toepassers"]
        score[2] += value * df.loc[number-1]["Doeners"]
        score[3] += value * df.loc[number-1]["Ontdekkers"]
        score[4] += value * df.loc[number-1]["Creatieve Makers"]
    return score

score = [0,0,0,0,0]

positiveinput = input()
score = profilescore(makenumbers(positiveinput), score, True)

negativeinput = input()
score = profilescore(makenumbers(negativeinput), score, False)
print("Jouw score is ",score)
print("Vul dit in bij vragenlijst")


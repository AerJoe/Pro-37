class Question {

  constructor() {
    this.title = createElement('h1')
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    this.input1 = createInput("Enter Your Name Here....")
   //Create a input box to enter the number
    this.input2 = createInput("Enter Option Number Here...")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.input2.hide()
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  handleMousePressed() {
    this.button.mousePressed(()=>{
      this.input1.hide()
      this.input2.hide()
      this.button.hide()
      var submitMessage = `
      Thank you ${this.input1.value()}!
        </br> your answer has been submitted...`;
        this.message.html(submitMessage)
      })
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.question.position(300,50)
    this.question.html("Which of these is not a U.S. President?")
    this.option1.position(200,100)
    this.option1.html("1: Winston Churchill")
    this.option2.position(400,100)
    this.option2.html("2: Joe Biden")
    this.option3.position(200,150)
    this.option3.html("3: Millard Fillmore")
    this.option4.position(400,150)
    this.option4.html('4: Abraham Lincoln')
    this.handleMousePressed()


    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.input2.position(350,230)
    this.button.position(310, 270);

    // Add a mousepressed action when the button is clicked Display the this.message
  
   this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
  });
  }
}
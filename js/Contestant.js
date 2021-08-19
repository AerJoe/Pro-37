class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  /*addContestant() {
    var contestantIndex = "contestants/contestant" + this.index

    if (this.index === 1) {
      this.positionX = width / 2 - 100
    } else {
      this.positionX. = width/2 + 100
    }
  }*/
  
  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value", data => {
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value", data => {
      allContestants = data.val();
    })
  }
}

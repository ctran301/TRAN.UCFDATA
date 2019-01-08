// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
 var roster = [{
   name: "Doug",
   position: "Quarterback",
   madeTeam: true
 },
 {
   name: "Antonio",
   position: "Tight End",
   madeTeam: true
 },
 {
   name: "Nick",
   position: "Kicker",
   madeTeam: false
 },
 {
   name: "Ereck",
   position: "Offensive Live",
   madeTeam: false
 },
 {
   name: "AJ",
   position: "Line Backer",
   madeTeam: true
 }];

// YOUR CODE HERE

team_roster = []

function madeCut(player) {
    return player.madeTeam;

    var playersOnTeam = roster.filter(madeCut);
}

var playersOnTeam = playerOnTeam.length;

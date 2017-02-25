/////////////////////////////////////////////////////////////////////////////////////////
//																					  //
//								Crystal Collector									  //
//																					  //
////////////////////////////////////////////////////////////////////////////////////////


var randomNum = 0;
var win = 0;
var loses = 0;
var ruby = 0;
var diamond = 0;
var saphire = 0;
var emerald = 0;
var totalScore;
var newDiv;

//////////////////////////////////////////////////////////////////////////////////////
//																				   //
//								All Functions									   //
//																				  //
////////////////////////////////////////////////////////////////////////////////////

function gameInit()
{
	// Calculate the random number
	randomNum = Math.floor(Math.random() * (120- 19 + 1)) + 19;
	console.log(randomNum)
	ruby = Math.floor(Math.random() * (12- 1 + 1)) + 1;
	diamond = Math.floor(Math.random() * (12- 1 + 1)) + 1;
	saphire = Math.floor(Math.random() * (12- 1 + 1)) + 1;
	emerald = Math.floor(Math.random() * (12- 1 + 1)) + 1;
	totalScore = 0;
	console.log(ruby);
	console.log(diamond);
	console.log(saphire);
	console.log(emerald);
	$("#numberToMatch").html(randomNum);
}

function game()
{
	if(totalScore === randomNum)
	{
		win = win + 1;
		alert("You Won");
		gameInit();
	}
	else if (totalScore > randomNum)
	{
		loses = loses + 1;
		alert("You Lost");
		gameInit();
	}
}
// Function to manipulate the DOM
function printInfo()
{
	
	$("#totalScore").html(totalScore);
	$("#Wins").html(win);
	$("#Loses").html(loses);
}

$(document).ready(function(){
///__--  Get the value of ruby and adds to totalScore
	$("#ruby").on("click", function()
	{
		totalScore = totalScore + ruby;
		console.log("Total: " +totalScore );
		//$("#totalScore").html(totalScore);
		game();
		printInfo();

	});
///__--  Get the value of emerald and adds to totalScore
	$("#emerald").on("click", function()
	{
		totalScore = totalScore + emerald;
		console.log("Total: " + totalScore);
		//$("#totalScore").html(totalScore);
		game();
		printInfo();

	});
//__-- Get the value of diamond and adds to totalScore
	$("#diamond").on("click", function()
	{
		totalScore = totalScore + diamond;
		console.log("Total: " + totalScore);
		//$("#totalScore").html(totalScore);
		game();
		printInfo();


	});
//__-- Get the value of saphire and adds to totalScore
	$("#saphire").on("click", function()
	{
		totalScore = totalScore + saphire;
		console.log("Total: " + totalScore);
		//$("#totalScore").html(totalScore);
		game();
		printInfo();

	});


	





 	 gameInit();

	//$("#numberToMatch").html(randomNum);





});
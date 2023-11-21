let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	ties: 0,
	total: 0,
};
update_table_score();

let stats = JSON.parse(localStorage.getItem("stats")) || [];
update_table_stats();

function pickComputerMove() {
	const randomNumber = Math.random();
	if (randomNumber < 1 / 3) {
		return "rock";
	}
	if (randomNumber < 2 / 3) {
		return "paper";
	}
	return "scissors";
}

function update_table_score() {
	document.querySelector(
		".table-score"
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}, Total: ${score.total}`;
}

function get_emoji_image(move) {
	return `<img src="../images/${move}-emoji.png" class="small-image" />`;
}

function update_table_stats() {
	const tableHeader = `<tr>
							<th>Player Move</th>
							<th>Computer Move</th>
							<th>Result</th>
						</tr>`;
	const tableData = stats
		.map((value) => {
			return `<tr>
        <td>${get_emoji_image(value.playerMove)}</td>
        <td>${get_emoji_image(value.computerMove)}</td>
        <td>${value.result}</td>
        </tr>`;
		})
		.join("");

	const tableBody = document.querySelector(".table-stats");
	tableBody.innerHTML = tableHeader + tableData;
}

function playGame(playerMove) {
	const computerMove = pickComputerMove();
	let result = "";

	if (playerMove === computerMove) {
		result = "Tie";
	} else {
		if (playerMove === "rock") {
			if (computerMove === "scissors") {
				result = "You win";
			} else {
				result = "You lose";
			}
		} else if (playerMove === "paper") {
			if (computerMove === "scissors") {
				result = "You lose";
			} else {
				result = "You win";
			}
		} else {
			if (computerMove === "rock") {
				result = "You lose";
			} else {
				result = "You win";
			}
		}
	}
	stats.push({
		playerMove: playerMove,
		computerMove: computerMove,
		result: result,
	});
	console.log(stats);
	console.log(result);
	if (result === "You win") {
		score.wins += 1;
	} else if (result === "Tie") {
		score.ties += 1;
	} else {
		score.losses += 1;
	}
	score.total += 1;
	update_table_score();
	update_table_stats();
}

function reset_stats() {
	score = {
		wins: 0,
		losses: 0,
		ties: 0,
		total: 0,
	};

	stats = [];
	update_table_score();
	update_table_stats();
}

let isAutoPlaying = false;
let intervalId;

function autoplay() {
	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
			const playerMove = pickComputerMove();
			playGame(playerMove);
		}, 1000);
		isAutoPlaying = true;
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
}

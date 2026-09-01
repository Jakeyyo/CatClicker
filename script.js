 let nameBoxContainer1 = document.getElementById("nameBoxContainer1");
        let nameBoxContainer2 = document.getElementById("nameBoxContainer2");
        let nameBoxContainer3 = document.getElementById("nameBoxContainer3");
        let highScoresContainer = document.getElementById("highScoresContainer");
        let bestTimeContainer = document.getElementById("bestTimeContainer");
        
        let greyBox1 = document.createElement("div");
        greyBox1.style.height = "600px";
        greyBox1.style.width = "1000px";
        greyBox1.style.backgroundColor = "lightgrey";
        nameBoxContainer1.appendChild(greyBox1);

        let greyBox2 = document.createElement("div");
        greyBox2.style.position = "absolute";
        greyBox2.style.left = "250px";
        greyBox2.style.top = "125px";
        greyBox2.style.height = "300px";
        greyBox2.style.width = "500px";
        greyBox2.style.backgroundColor = "black";
        nameBoxContainer2.appendChild(greyBox2);

        let nameBox = document.createElement("input");
        nameBox.type = "text";
        nameBox.style.position = "absolute";
        nameBox.style.left = "420px";
        nameBox.style.top = "250px";
        nameBox.placeholder = "Enter your name";
        nameBoxContainer3.appendChild(nameBox);

        let nameButton = document.createElement("button");
        nameButton.innerHTML = "Enter";
        nameButton.style.position = "absolute";
        nameButton.style.left = "418px";
        nameButton.style.top = "275px";
        nameButton.addEventListener("click", startGame);
        nameBoxContainer3.appendChild(nameButton);

        let heavenButton;
        let hellButton;

        function startGame() {

        let gameCounter = 0;
        let gameCounterStored = localStorage.getItem("gameCounterSaved");
        let nameStored = localStorage.getItem("nameSaved");
        let gameCounterStored2;
        let gameInterval;

        if (gameCounterStored !== null) {
        gameCounterStored = Number(gameCounterStored); 
        gameCounterStored2 = new Date(gameCounterStored * 1000);
        gameCounterStored2 = gameCounterStored2.toISOString().substr(11, 8);
        }

        gameInterval = setInterval(() => {
            gameCounter++;
        }, 1000);

        let name = nameBox.value;
 
        nameBoxContainer1.removeChild(greyBox1);
        nameBoxContainer2.removeChild(greyBox2);
        nameBoxContainer3.removeChild(nameButton);
        nameBoxContainer3.removeChild(nameBox);
        
        let testMode = false;

        let highScoresText = document.getElementById("highScoresText");
        highScoresText.addEventListener("mouseover", cursorBackgroundColor);
        highScoresText.addEventListener("mouseout", cursorBackgroundColor);
        highScoresText.addEventListener("click", viewHighScores);

        let highScoresBox;
        let highestScoreText;
        let exitX;

        function viewHighScores() {

            highScoresBox = document.createElement("div");
            highScoresBox.style.position = "absolute";
            highScoresBox.style.left = "500px";
            highScoresBox.style.top = "100px";
            highScoresBox.style.backgroundColor = "darkgrey";
            highScoresBox.style.height = "500px";
            highScoresBox.style.width = "300px";
            highScoresContainer.appendChild(highScoresBox);

            highestScoreText = document.createElement("h1");
            highestScoreText.style.position = "absolute";
            highestScoreText.style.left = "505px";
            highestScoreText.style.top = "100px";
            highestScoreText.style.color = "black";
            highestScoreText.innerHTML = "Leaderboard: " + "<br>" + "<br>" + nameStored + " " + gameCounterStored2;
            bestTimeContainer.appendChild(highestScoreText);

            exitX = document.createElement("h3");
            exitX.style.position = "absolute";
            exitX.id = "exitX";
            exitX.style.left = "760px";
            exitX.style.top = "100px";
            exitX.innerHTML = "X";
            exitX.addEventListener("click", closeHighScores);
            exitX.addEventListener("mouseover", cursorBackgroundColor);
            exitX.addEventListener("mouseout", cursorBackgroundColor);
            bestTimeContainer.appendChild(exitX);
        }

        function closeHighScores() {
            highScoresContainer.removeChild(highScoresBox);
            bestTimeContainer.removeChild(highestScoreText);
            bestTimeContainer.removeChild(exitX);
        }

        let cursorCounterContainer = document.getElementById("cursorCounterContainer");
        let scratcherCounterContainer = document.getElementById("scratcherCounterContainer");
        let catToyCounterContainer = document.getElementById("catToyCounterContainer");
        let catSnacksCounterContainer = document.getElementById("catSnacksCounterContainer");

        let kitten = document.getElementById("kitten");
        kitten.addEventListener("click", addToCounter);
        let counter = document.getElementById("counter");
        let meowsPerSec = document.getElementById("meowsPerSec");
        
        let cursorContainer = document.getElementById("cursorContainer");
        let cursorContainer2 = document.getElementById("cursorContainer2");
        let newCursor;
        let newCursorUpgrade1;
        let newCursorUpgrade2;

        let cursorShopContainer = document.getElementById("cursorShopContainer");
        let scratcherShopContainer = document.getElementById("scratcherShopContainer");

        let cursorLabel = document.createElement("label");
        cursorLabel.id = "cursorLabel";
        cursorLabel.setAttribute("for", "cursor");
        cursorLabel.textContent = "Buy Cursor(10)";
        cursorShopContainer.appendChild(cursorLabel);

        let cursor = document.createElement("img");
        cursor.src = "cursor.gif";
        cursor.id = "cursor";
        cursor.name = "grey";
        cursor.classList.add("cursor");
        cursorShopContainer.appendChild(cursor);
        
        let scratcherContainer = document.getElementById("scratcherContainer");
        let scratcherContainer2 = document.getElementById("scratcherContainer2");

        let scratcherLabel = document.createElement("label");
        scratcherLabel.id = "scratcherLabel";
        scratcherLabel.setAttribute("for", "scratcher");
        scratcherLabel.textContent = "Buy Scratcher(50)";
        scratcherShopContainer.appendChild(scratcherLabel);

        let scratcher = document.createElement("img");
        scratcher.src = "scratcher.gif";
        scratcher.id = "scratcher";
        scratcher.name = "grey";
        scratcher.classList.add("cursor");
        scratcherShopContainer.appendChild(scratcher);

        cursor.addEventListener("mouseover", cursorBackgroundColor);
        cursor.addEventListener("mouseout", cursorBackgroundColor);
        cursor.addEventListener("click", buyCursor);
        cursorLabel.addEventListener("mouseover", cursorBackgroundColor);
        cursorLabel.addEventListener("mouseout", cursorBackgroundColor);
        cursorLabel.addEventListener("click", buyCursor);

        scratcher.addEventListener("mouseover", cursorBackgroundColor);
        scratcher.addEventListener("mouseout", cursorBackgroundColor);
        scratcher.addEventListener("click", buyScratcher);
        scratcherLabel.addEventListener("mouseover", cursorBackgroundColor);
        scratcherLabel.addEventListener("mouseout", cursorBackgroundColor);
        scratcherLabel.addEventListener("click", buyScratcher);

        let cursorUpgrade1Container = document.getElementById("cursorUpgrade1Container");
        let scratcherUpgrade1Container = document.getElementById("scratcherUpgrade1Container");
        let catToyUpgrade1ShopContainer = document.getElementById("catToyUpgrade1ShopContainer");
        let catSnacksUpgrade1ShopContainer = document.getElementById("catSnacksUpgrade1ShopContainer");

        let swordUpgrade1ShopContainer = document.getElementById("swordUpgrade1ShopContainer");
        let armorUpgrade1ShopContainer = document.getElementById("armorUpgrade1ShopContainer");
        let codexUpgrade1ShopContainer = document.getElementById("codexUpgrade1ShopContainer");
        let castleUpgrade1ShopContainer = document.getElementById("castleUpgrade1ShopContainer");

        let crownUpgrade1ShopContainer = document.getElementById("crownUpgrade1ShopContainer");
        let sceptreUpgrade1ShopContainer = document.getElementById("sceptreUpgrade1ShopContainer");
        let academyUpgrade1ShopContainer = document.getElementById("academyUpgrade1ShopContainer");
        let kingdomUpgrade1ShopContainer = document.getElementById("kingdomUpgrade1ShopContainer");

        let devilUpgrade1ShopContainer = document.getElementById("devilUpgrade1ShopContainer");
        let chainsUpgrade1ShopContainer = document.getElementById("chainsUpgrade1ShopContainer");
        let cerberusUpgrade1ShopContainer = document.getElementById("cerberusUpgrade1ShopContainer");
        let gatesOfHellUpgrade1ShopContainer = document.getElementById("gatesOfHellUpgrade1ShopContainer");

        let angelUpgrade1ShopContainer = document.getElementById("angelUpgrade1ShopContainer");
        let haloUpgrade1ShopContainer = document.getElementById("haloUpgrade1ShopContainer");
        let visionUpgrade1ShopContainer = document.getElementById("visionUpgrade1ShopContainer");
        let gatesOfHeavenUpgrade1ShopContainer = document.getElementById("gatesOfHeavenUpgrade1ShopContainer");

        let rocketUpgrade1ShopContainer = document.getElementById("rocketUpgrade1ShopContainer");
        let satelliteUpgrade1ShopContainer = document.getElementById("satelliteUpgrade1ShopContainer");
        let moonUpgrade1ShopContainer = document.getElementById("moonUpgrade1ShopContainer");
        let nebulosaUpgrade1ShopContainer = document.getElementById("nebulosaUpgrade1ShopContainer");

        let cursorUpgrade2Container = document.getElementById("cursorUpgrade2Container");
        let scratcherUpgrade2Container = document.getElementById("scratcherUpgrade2Container");
        let catToyUpgrade2ShopContainer = document.getElementById("catToyUpgrade2ShopContainer");
        let catSnacksUpgrade2ShopContainer = document.getElementById("catSnacksUpgrade2ShopContainer");

        let swordUpgrade2ShopContainer = document.getElementById("swordUpgrade2ShopContainer");
        let armorUpgrade2ShopContainer = document.getElementById("armorUpgrade2ShopContainer");
        let codexUpgrade2ShopContainer = document.getElementById("codexUpgrade2ShopContainer");
        let castleUpgrade2ShopContainer = document.getElementById("castleUpgrade2ShopContainer");

        let crownUpgrade2ShopContainer = document.getElementById("crownUpgrade2ShopContainer");
        let sceptreUpgrade2ShopContainer = document.getElementById("sceptreUpgrade2ShopContainer");
        let academyUpgrade2ShopContainer = document.getElementById("academyUpgrade2ShopContainer");
        let kingdomUpgrade2ShopContainer = document.getElementById("kingdomUpgrade2ShopContainer");

        let devilUpgrade2ShopContainer = document.getElementById("devilUpgrade2ShopContainer");
        let chainsUpgrade2ShopContainer = document.getElementById("chainsUpgrade2ShopContainer");
        let cerberusUpgrade2ShopContainer = document.getElementById("cerberusUpgrade2ShopContainer");
        let gatesOfHellUpgrade2ShopContainer = document.getElementById("gatesOfHellUpgrade2ShopContainer");
        
        let angelUpgrade2ShopContainer = document.getElementById("angelUpgrade2ShopContainer");
        let haloUpgrade2ShopContainer = document.getElementById("haloUpgrade2ShopContainer");
        let visionUpgrade2ShopContainer = document.getElementById("visionUpgrade2ShopContainer");
        let gatesOfHeavenUpgrade2ShopContainer = document.getElementById("gatesOfHeavenUpgrade2ShopContainer");

        let rocketUpgrade2ShopContainer = document.getElementById("rocketUpgrade2ShopContainer");
        let satelliteUpgrade2ShopContainer = document.getElementById("satelliteUpgrade2ShopContainer");
        let moonUpgrade2ShopContainer = document.getElementById("moonUpgrade2ShopContainer");
        let nebulosaUpgrade2ShopContainer = document.getElementById("nebulosaUpgrade2ShopContainer");

        let catToyContainer = document.getElementById("catToyContainer");
        let catToyContainer2 = document.getElementById("catToyContainer2");
        let catSnacksContainer = document.getElementById("catSnacksContainer");
        let catSnacksContainer2 = document.getElementById("catSnacksContainer2");
        
        let swordContainer = document.getElementById("swordContainer");
        let swordContainer2 = document.getElementById("swordContainer2");
        let armorContainer = document.getElementById("armorContainer");
        let armorContainer2 = document.getElementById("armorContainer2");
        let codexContainer = document.getElementById("codexContainer");
        let codexContainer2 = document.getElementById("codexContainer2");
        let castleContainer = document.getElementById("castleContainer");
        let castleContainer2 = document.getElementById("castleContainer2");

        let crownContainer = document.getElementById("crownContainer");
        let crownContainer2 = document.getElementById("crownContainer2");
        let sceptreContainer = document.getElementById("sceptreContainer");
        let sceptreContainer2 = document.getElementById("sceptreContainer2");
        let academyContainer = document.getElementById("academyContainer");
        let academyContainer2 = document.getElementById("academyContainer2");
        let kingdomContainer = document.getElementById("kingdomContainer");
        let kingdomContainer2 = document.getElementById("kingdomContainer2");

        let devilContainer = document.getElementById("devilContainer");
        let devilContainer2 = document.getElementById("devilContainer2");
        let chainsContainer = document.getElementById("chainsContainer");
        let chainsContainer2 = document.getElementById("chainsContainer2");
        let cerberusContainer = document.getElementById("cerberusContainer");
        let cerberusContainer2 = document.getElementById("cerberusContainer2");
        let gatesOfHellContainer = document.getElementById("gatesOfHellContainer");
        let gatesOfHellContainer2 = document.getElementById("gatesOfHellContainer2");

        let angelContainer = document.getElementById("angelContainer");
        let angelContainer2 = document.getElementById("angelContainer2");
        let haloContainer = document.getElementById("haloContainer");
        let haloContainer2 = document.getElementById("haloContainer2");
        let visionContainer = document.getElementById("visionContainer");
        let visionContainer2 = document.getElementById("visionContainer2");
        let gatesOfHeavenContainer = document.getElementById("gatesOfHeavenContainer");
        let gatesOfHeavenContainer2 = document.getElementById("gatesOfHeavenContainer2");

        let rocketContainer = document.getElementById("rocketContainer");
        let rocketContainer2 = document.getElementById("rocketContainer2");
        let satelliteContainer = document.getElementById("satelliteContainer");
        let satelliteContainer2 = document.getElementById("satelliteContainer2");
        let moonContainer = document.getElementById("moonContainer");
        let moonContainer2 = document.getElementById("moonContainer2");
        let nebulosaContainer = document.getElementById("nebulosaContainer");
        let nebulosaContainer2 = document.getElementById("nebulosaContainer2");

        let shopForm = document.getElementById("shopForm");
        let shopElements = shopForm.elements;

        let catToyShopContainer = document.getElementById("catToyShopContainer");
        let catSnacksShopContainer = document.getElementById("catSnacksShopContainer");
        let swordShopContainer = document.getElementById("swordShopContainer");
        let armorShopContainer = document.getElementById("armorShopContainer");
        let codexShopContainer = document.getElementById("codexShopContainer");
        let castleShopContainer = document.getElementById("castleShopContainer");
        let crownShopContainer = document.getElementById("crownShopContainer");
        let sceptreShopContainer = document.getElementById("sceptreShopContainer");
        let academyShopContainer = document.getElementById("academyShopContainer");
        let kingdomShopContainer = document.getElementById("kingdomShopContainer");
        let devilShopContainer = document.getElementById("devilShopContainer");
        let chainsShopContainer = document.getElementById("chainsShopContainer");
        let cerberusShopContainer = document.getElementById("cerberusShopContainer");
        let gatesOfHellShopContainer = document.getElementById("gatesOfHellShopContainer");
        let angelShopContainer = document.getElementById("angelShopContainer");
        let haloShopContainer = document.getElementById("haloShopContainer");
        let visionShopContainer = document.getElementById("visionShopContainer");
        let gatesOfHeavenShopContainer = document.getElementById("gatesOfHeavenShopContainer");
        let rocketShopContainer = document.getElementById("rocketShopContainer");
        let satelliteShopContainer = document.getElementById("satelliteShopContainer");
        let moonShopContainer = document.getElementById("moonShopContainer");
        let nebulosaShopContainer = document.getElementById("nebulosaShopContainer");

        let shopWarning = document.getElementById("shopWarning");

        let ascensionProgressHeader = document.getElementById("ascensionProgressHeader");
        let ascensionProgressContainer = document.getElementById("ascensionProgressContainer");
        let sacrificialEnterBoxContainer = document.getElementById("sacrificialEnterBoxContainer");
        let sacrificialButtonContainer = document.getElementById("sacrificialButtonContainer");
        
        let counterNumber = 0;
        let meowsPerSecCounter = 0;
        
        let cursorCounter = 0;
        let scratcherCounter = 0;
        let catToyCounter = 0;
        let catSnacksCounter = 0;
        let swordCounter = 0;
        let armorCounter = 0;
        let codexCounter = 0;
        let castleCounter = 0;
        let crownCounter = 0;
        let sceptreCounter = 0;
        let academyCounter = 0;
        let kingdomCounter = 0;
        let devilCounter = 0;
        let chainsCounter = 0;
        let cerberusCounter = 0;
        let gatesOfHellCounter = 0;
        let angelCounter = 0;
        let haloCounter = 0;
        let visionCounter = 0;
        let gatesOfHeavenCounter = 0;
        let rocketCounter = 0;
        let satelliteCounter = 0;
        let moonCounter = 0;
        let nebulosaCounter = 0;

        const cursorSpeed = 1;
        const scratcherSpeed = 5;
        const catToySpeed = 20;
        const catSnacksSpeed = 100;
        const swordSpeed = 10000;
        const armorSpeed = 50000;
        const codexSpeed = 200000;
        const castleSpeed = 1000000;
        const crownSpeed = 100000000;
        const sceptreSpeed = 500000000;
        const academySpeed = 2000000000;
        const kingdomSpeed = 10000000000;
        const devilSpeed = 1000000000000;
        const chainsSpeed = 5000000000000;
        const cerberusSpeed = 20000000000000;
        const gatesOfHellSpeed = 100000000000000;
        const angelSpeed = 1000000000000;
        const haloSpeed = 5000000000000;
        const visionSpeed = 20000000000000;
        const gatesOfHeavenSpeed = 100000000000000;
        const rocketSpeed = 10000000000000000;
        const satelliteSpeed = 50000000000000000;
        const moonSpeed = 200000000000000000;
        const nebulosaSpeed = 1000000000000000000;

        const cursorUpgrade1Speed = 10;
        const scratcherUpgrade1Speed = 50;
        const catToyUpgrade1Speed = 200;
        const catSnacksUpgrade1Speed = 1000;

        const swordUpgrade1Speed = 100000;
        const armorUpgrade1Speed = 500000;
        const codexUpgrade1Speed = 2000000;
        const castleUpgrade1Speed = 10000000;

        const crownUpgrade1Speed = 1000000000;
        const sceptreUpgrade1Speed = 5000000000;
        const academyUpgrade1Speed = 20000000000;
        const kingdomUpgrade1Speed = 100000000000;

        const devilUpgrade1Speed = 10000000000000;
        const chainsUpgrade1Speed = 50000000000000;
        const cerberusUpgrade1Speed = 200000000000000;
        const gatesOfHellUpgrade1Speed = 1000000000000000;

        const angelUpgrade1Speed = 10000000000000;
        const haloUpgrade1Speed = 50000000000000;
        const visionUpgrade1Speed = 200000000000000;
        const gatesOfHeavenUpgrade1Speed = 1000000000000000;

        const rocketUpgrade1Speed = 100000000000000000;
        const satelliteUpgrade1Speed = 500000000000000000;
        const moonUpgrade1Speed = 2000000000000000000;
        const nebulosaUpgrade1Speed = 10000000000000000000;

        const cursorUpgrade2Speed = 100;
        const scratcherUpgrade2Speed = 500;
        const catToyUpgrade2Speed = 2000;
        const catSnacksUpgrade2Speed = 10000;

        const swordUpgrade2Speed = 1000000;
        const armorUpgrade2Speed = 5000000;
        const codexUpgrade2Speed = 20000000;
        const castleUpgrade2Speed = 100000000;

        const crownUpgrade2Speed = 10000000000;
        const sceptreUpgrade2Speed = 50000000000;
        const academyUpgrade2Speed = 200000000000;
        const kingdomUpgrade2Speed = 1000000000000;

        const devilUpgrade2Speed = 100000000000000;
        const chainsUpgrade2Speed = 500000000000000;
        const cerberusUpgrade2Speed = 2000000000000000;
        const gatesOfHellUpgrade2Speed = 10000000000000000;

        const angelUpgrade2Speed = 100000000000000;
        const haloUpgrade2Speed = 500000000000000;
        const visionUpgrade2Speed = 2000000000000000;
        const gatesOfHeavenUpgrade2Speed = 10000000000000000;

        const rocketUpgrade2Speed = 1000000000000000000;
        const satelliteUpgrade2Speed = 5000000000000000000;
        const moonUpgrade2Speed = 20000000000000000000;
        const nebulosaUpgrade2Speed = 100000000000000000000;


        let cursorSpeedInterval = 1000 / cursorSpeed;
        let scratcherSpeedInterval = 1000 / scratcherSpeed;
        let catToySpeedInterval = 1000 / catToySpeed;
        let catSnacksSpeedInterval = 1000 / catSnacksSpeed;

        let cursorUpgrade1SpeedInterval = 1000 / cursorUpgrade1Speed;
        let scratcherUpgrade1SpeedInterval = 1000 / scratcherUpgrade1Speed;
        let catToyUpgrade1SpeedInterval = 1000 / catToyUpgrade1Speed;
        let catSnacksUpgrade1SpeedInterval = 1000 / catSnacksUpgrade1Speed;

        let cursorUpgrade2SpeedInterval = 1000 / cursorUpgrade2Speed;
        let scratcherUpgrade2SpeedInterval = 1000 / scratcherUpgrade2Speed;
        let catToyUpgrade2SpeedInterval = 1000 / catToyUpgrade2Speed;
        let catSnacksUpgrade2SpeedInterval = 1000 / catSnacksUpgrade2Speed;

        const blueMonsterEnters = 1000;
        
        const catPic1Enters = 100;
        const catPic2Enters = 1000;
        const catPic3Enters = 10000;
        const catPic4Enters = 100000;
        
        const ascensionsEnters = 50;
        
        const catToyEnters = 80;
        const catSnacksEnters = 400;
        const armorEnters = 250000;
        const codexEnters = 800000;
        const castleEnters = 4000000;
        const sceptreEnters = 2500000000;
        const academyEnters = 8000000000;
        const kingdomEnters = 40000000000;
        const chainsEnters = 25000000000000;
        const cerberusEnters = 80000000000000;
        const gatesOfHellEnters = 400000000000000;
        const haloEnters = 25000000000000;
        const visionEnters = 80000000000000;
        const gatesOfHeavenEnters = 400000000000000;
        const satelliteEnters = 250000000000000000;
        const moonEnters = 800000000000000000;
        const nebulosaEnters = 4000000000000000000;
 
        const cursorUpgrade1Enters = 500;
        const cursorUpgrade2Enters = 5000;
        const scratcherUpgrade1Enters = 2500;
        const scratcherUpgrade2Enters = 25000;
        const catToyUpgrade1Enters = 800;
        const catToyUpgrade2Enters = 8000;
        const catSnacksUpgrade1Enters = 4000;
        const catSnacksUpgrade2Enters = 40000;

        const swordUpgrade1Enters = 5000000;
        const swordUpgrade2Enters = 50000000;
        const armorUpgrade1Enters = 25000000;
        const armorUpgrade2Enters = 250000000;
        const codexUpgrade1Enters = 8000000;
        const codexUpgrade2Enters = 80000000;
        const castleUpgrade1Enters = 40000000;
        const castleUpgrade2Enters = 400000000;

        const crownUpgrade1Enters = 50000000000;
        const crownUpgrade2Enters = 500000000000;
        const sceptreUpgrade1Enters = 250000000000;
        const sceptreUpgrade2Enters = 2500000000000;
        const academyUpgrade1Enters = 800000000000;
        const academyUpgrade2Enters = 8000000000000;
        const kingdomUpgrade1Enters = 4000000000000;
        const kingdomUpgrade2Enters = 40000000000000;

        const devilUpgrade1Enters = 500000000000000;
        const devilUpgrade2Enters = 5000000000000000;
        const chainsUpgrade1Enters = 2500000000000000;
        const chainsUpgrade2Enters = 25000000000000000;
        const cerberusUpgrade1Enters = 8000000000000000;
        const cerberusUpgrade2Enters = 80000000000000000;
        const gatesOfHellUpgrade1Enters = 40000000000000000;
        const gatesOfHellUpgrade2Enters = 400000000000000000;

        const angelUpgrade1Enters = 500000000000000;
        const angelUpgrade2Enters = 5000000000000000;
        const haloUpgrade1Enters = 2500000000000000;
        const haloUpgrade2Enters = 25000000000000000;
        const visionUpgrade1Enters = 8000000000000000;
        const visionUpgrade2Enters = 80000000000000000;
        const gatesOfHeavenUpgrade1Enters = 40000000000000000;
        const gatesOfHeavenUpgrade2Enters = 400000000000000000;

        const rocketUpgrade1Enters = 5000000000000000000;
        const rocketUpgrade2Enters = 50000000000000000000;
        const satelliteUpgrade1Enters = 25000000000000000000;
        const satelliteUpgrade2Enters = 250000000000000000000;
        const moonUpgrade1Enters = 80000000000000000000;
        const moonUpgrade2Enters = 800000000000000000000;
        const nebulosaUpgrade1Enters = 400000000000000000000;
        const nebulosaUpgrade2Enters = 4000000000000000000000;

        const cursorCosts = 10;
        const scratcherCosts = 50;
        const swordCosts = 100000;
        const armorCosts = 500000;
        const crownCosts = 1000000000;
        const sceptreCosts = 5000000000;
        const devilCosts = 10000000000000;
        const chainsCosts = 50000000000000;
        const angelCosts = 10000000000000;
        const haloCosts = 50000000000000;
        const rocketCosts = 100000000000000000;
        const satelliteCosts = 500000000000000000;
 
        const cursorUpgraded1Costs = 100;
        const cursorUpgraded2Costs = 1000;
        const scratcherUpgraded1Costs = 500;
        const scratcherUpgraded2Costs = 5000;

        const swordUpgraded1Costs = 1000000;
        const swordUpgraded2Costs = 10000000;
        const armorUpgraded1Costs = 5000000;
        const armorUpgraded2Costs = 50000000;

        const crownUpgraded1Costs = 10000000000;
        const crownUpgraded2Costs = 100000000000;
        const sceptreUpgraded1Costs = 50000000000;
        const sceptreUpgraded2Costs = 500000000000;

        const devilUpgraded1Costs = 100000000000000;
        const devilUpgraded2Costs = 1000000000000000;
        const chainsUpgraded1Costs = 500000000000000;
        const chainsUpgraded2Costs = 5000000000000000;

        const angelUpgraded1Costs = 100000000000000;
        const angelUpgraded2Costs = 1000000000000000;
        const haloUpgraded1Costs = 500000000000000;
        const haloUpgraded2Costs = 5000000000000000;

        const rocketUpgraded1Costs = 1000000000000000000;
        const rocketUpgraded2Costs = 10000000000000000000;
        const satelliteUpgraded1Costs = 5000000000000000000;
        const satelliteUpgraded2Costs = 50000000000000000000;

        const cursorUpgrade1Costs = 1000;
        const cursorUpgrade2Costs = 10000;
        const scratcherUpgrade1Costs = 5000;
        const scratcherUpgrade2Costs = 50000;
        const catToyUpgrade1Costs = 1600;
        const catToyUpgrade2Costs = 16000;
        const catSnacksUpgrade1Costs = 8000;
        const catSnacksUpgrade2Costs = 80000;

        const swordUpgrade1Costs = 10000000;
        const swordUpgrade2Costs = 100000000;
        const armorUpgrade1Costs = 50000000;
        const armorUpgrade2Costs = 500000000;
        const codexUpgrade1Costs = 160000000;
        const codexUpgrade2Costs = 1600000000;
        const castleUpgrade1Costs = 800000000;
        const castleUpgrade2Costs = 8000000000;

        const crownUpgrade1Costs = 100000000000;
        const crownUpgrade2Costs = 1000000000000;
        const sceptreUpgrade1Costs = 500000000000;
        const sceptreUpgrade2Costs = 5000000000000;
        const academyUpgrade1Costs = 1600000000000;
        const academyUpgrade2Costs = 16000000000000;
        const kingdomUpgrade1Costs = 8000000000000;
        const kingdomUpgrade2Costs = 80000000000000;

        const devilUpgrade1Costs = 1000000000000000;
        const devilUpgrade2Costs = 10000000000000000;
        const chainsUpgrade1Costs = 5000000000000000;
        const chainsUpgrade2Costs = 50000000000000000;
        const cerberusUpgrade1Costs = 16000000000000000;
        const cerberusUpgrade2Costs = 160000000000000000;
        const gatesOfHellUpgrade1Costs = 80000000000000000;
        const gatesOfHellUpgrade2Costs = 800000000000000000;

        const angelUpgrade1Costs = 1000000000000000;
        const angelUpgrade2Costs = 10000000000000000;
        const haloUpgrade1Costs = 5000000000000000;
        const haloUpgrade2Costs = 50000000000000000;
        const visionUpgrade1Costs = 16000000000000000;
        const visionUpgrade2Costs = 160000000000000000;
        const gatesOfHeavenUpgrade1Costs = 80000000000000000;
        const gatesOfHeavenUpgrade2Costs = 800000000000000000;

        const rocketUpgrade1Costs = 10000000000000000000;
        const rocketUpgrade2Costs = 100000000000000000000;
        const satelliteUpgrade1Costs = 50000000000000000000;
        const satelliteUpgrade2Costs = 500000000000000000000;
        const moonUpgrade1Costs = 160000000000000000000;
        const moonUpgrade2Costs = 1600000000000000000000;
        const nebulosaUpgrade1Costs = 800000000000000000000;
        const nebulosaUpgrade2Costs = 8000000000000000000000;

        const evolution1Costs = 500000;
        const evolution2Costs = 50000000000;
        const evolution3Costs = 500000000000000;
        const evolutionAlienCosts = 5000000000000000000;
        const evolutionEndCosts = 50000000000000000000000;
        const ascensionUpgrade1Costs = 50000000;
        
        let cursorInterval;
        let scratcherInterval;
        let catToyInterval;
        let catSnacksInterval;
        let swordInterval;
        let armorInterval;
        let codexInterval;
        let castleInterval;
        let crownInterval;
        let sceptreInterval;
        let academyInterval;
        let kingdomInterval;
        let devilInterval;
        let chainsInterval;
        let cerberusInterval;
        let gatesOfHellInterval;
        let angelInterval;
        let haloInterval;
        let visionInterval;
        let gatesOfHeavenInterval;
        let rocketInterval;
        let satelliteInterval;
        let moonInterval;
        let nebulosaInterval;

        let catToy;
        let catToyLabel;
        let catToyCursor;

        let catSnacks;
        let catSnacksLabel;
        let catSnacksScratcher;

        let sword;
        let swordLabel;

        let armor;
        let armorLabel;

        let codex;
        let codexLabel;
        let codexSword;

        let castle;
        let castleLabel;
        let castleArmor;

        let crown;
        let crownLabel;

        let sceptre;
        let sceptreLabel;

        let academy;
        let academyLabel;
        let academyCrown;

        let kingdom;
        let kingdomLabel;
        let kingdomSceptre;

        let devil;
        let devilLabel;

        let chains;
        let chainsLabel;

        let cerberus;
        let cerberusLabel;
        let cerberusDevil;

        let gatesOfHell;
        let gatesOfHellLabel;
        let gatesOfHellChains;

        let angel;
        let angelLabel;

        let halo;
        let haloLabel;

        let vision;
        let visionLabel;
        let visionAngel;

        let gatesOfHeaven;
        let gatesOfHeavenLabel;
        let gatesOfHeavenHalo;

        let rocket;
        let rocketLabel;

        let satellite;
        let satelliteLabel;

        let moon;
        let moonLabel;
        let moonRocket;

        let nebulosa;
        let nebulosaLabel;
        let nebulosaSatellite;

        let catPic1Exists = false;
        let catPic2Exists = false;
        let catPic3Exists = false;
        let catPic4Exists = false;
        let catWarriorPicExists = false;
        let catNoblePicExists = false;
        let catGodPicExists = false;
        let catAlienPicExists = false;
        
        let catToyExists = false;
        let catSnacksExists = false;
        let swordExists = false;
        let armorExists = false;
        let codexExists = false;
        let castleExists = false;
        let crownExists = false;
        let sceptreExists = false;
        let academyExists = false;
        let kingdomExists = false;
        let devilExists = false;
        let chainsExists = false;
        let cerberusExists = false;
        let gatesOfHellExists = false;
        let angelExists = false;
        let haloExists = false;
        let visionExists = false;
        let gatesOfHeavenExists = false;
        let rocketExists = false;
        let satelliteExists = false;
        let moonExists = false;
        let nebulosaExists = false;

        let cursorUpgrade1Exists = false;
        let cursorUpgrade1Exists2 = false;
        let scratcherUpgrade1Exists = false;
        let scratcherUpgrade1Exists2 = false;
        let catToyUpgrade1Exists = false;
        let catToyUpgrade1Exists2 = false;
        let catSnacksUpgrade1Exists = false;
        let catSnacksUpgrade1Exists2 = false;

        let cursorUpgrade2Exists = false;
        let cursorUpgrade2Exists2; //do not change
        let scratcherUpgrade2Exists = false;
        let scratcherUpgrade2Exists2; //do not change
        let catToyUpgrade2Exists = false;
        let catToyUpgrade2Exists2 = false;
        let catSnacksUpgrade2Exists = false;
        let catSnacksUpgrade2Exists2 = false;

        let swordUpgrade1Exists = false;
        let swordUpgrade1Exists2 = false;
        let armorUpgrade1Exists = false;
        let armorUpgrade1Exists2 = false;
        let codexUpgrade1Exists = false;
        let codexUpgrade1Exists2 = false;
        let castleUpgrade1Exists = false;
        let castleUpgrade1Exists2 = false;

        let swordUpgrade2Exists = false;
        let swordUpgrade2Exists2 = false;
        let armorUpgrade2Exists = false;
        let armorUpgrade2Exists2 = false;
        let codexUpgrade2Exists = false;
        let codexUpgrade2Exists2 = false;
        let castleUpgrade2Exists = false;
        let castleUpgrade2Exists2 = false;

        let crownUpgrade1Exists = false;
        let crownUpgrade1Exists2 = false;
        let sceptreUpgrade1Exists = false;
        let sceptreUpgrade1Exists2 = false;
        let academyUpgrade1Exists = false;
        let academyUpgrade1Exists2 = false;
        let kingdomUpgrade1Exists = false;
        let kingdomUpgrade1Exists2 = false;

        let crownUpgrade2Exists = false;
        let crownUpgrade2Exists2 = false;
        let sceptreUpgrade2Exists = false;
        let sceptreUpgrade2Exists2 = false;
        let academyUpgrade2Exists = false;
        let academyUpgrade2Exists2 = false;
        let kingdomUpgrade2Exists = false;
        let kingdomUpgrade2Exists2 = false;

        let devilUpgrade1Exists = false;
        let devilUpgrade1Exists2 = false;
        let chainsUpgrade1Exists = false;
        let chainsUpgrade1Exists2 = false;
        let cerberusUpgrade1Exists = false;
        let cerberusUpgrade1Exists2 = false;
        let gatesOfHellUpgrade1Exists = false;
        let gatesOfHellUpgrade1Exists2 = false;

        let devilUpgrade2Exists = false;
        let devilUpgrade2Exists2 = false;  
        let chainsUpgrade2Exists = false;
        let chainsUpgrade2Exists2 = false;
        let cerberusUpgrade2Exists = false;
        let cerberusUpgrade2Exists2 = false;
        let gatesOfHellUpgrade2Exists = false;
        let gatesOfHellUpgrade2Exists2 = false;

        let angelUpgrade1Exists = false;
        let angelUpgrade1Exists2 = false;
        let haloUpgrade1Exists = false;
        let haloUpgrade1Exists2 = false;
        let visionUpgrade1Exists = false;
        let visionUpgrade1Exists2 = false;
        let gatesOfHeavenUpgrade1Exists = false;
        let gatesOfHeavenUpgrade1Exists2 = false;

        let angelUpgrade2Exists = false;
        let angelUpgrade2Exists2 = false;
        let haloUpgrade2Exists = false;
        let haloUpgrade2Exists2 = false;
        let visionUpgrade2Exists = false;
        let visionUpgrade2Exists2 = false;
        let gatesOfHeavenUpgrade2Exists = false;
        let gatesOfHeavenUpgrade2Exists2 = false;

        let rocketUpgrade1Exists = false;
        let rocketUpgrade1Exists2 = false;
        let satelliteUpgrade1Exists = false;
        let satelliteUpgrade1Exists2 = false;
        let moonUpgrade1Exists = false;
        let moonUpgrade1Exists2 = false;
        let nebulosaUpgrade1Exists = false;
        let nebulosaUpgrade1Exists2 = false;

        let rocketUpgrade2Exists = false;
        let rocketUpgrade2Exists2 = false;
        let satelliteUpgrade2Exists = false;
        let satelliteUpgrade2Exists2 = false;
        let moonUpgrade2Exists = false;
        let moonUpgrade2Exists2 = false;
        let nebulosaUpgrade2Exists = false;
        let nebulosaUpgrade2Exists2 = false;

        let ascensionProgressExists = false;
        
        let sacrificialEnterBoxExists = false;
        let ascensionProgress = 0;
        let ascensionProgressSaved = 0;
        let enterBox;  

        let evolutionReset1 = false;
        let evolution1Exists = false;
        let evolutionReset2 = false;
        let evolution2Exists = false;
        let evolutionReset3 = false;
        let evolution3Exists = false;
        let evolutionHeavenExists = false;
        let evolutionHellExists = false;
        let evolutionAlienExists = false;
        let evolutionEndExists = false;

        let cursorIntervals = []; 
        let scratcherIntervals = [];
        let catToyIntervals = [];
        let catSnacksIntervals = [];
        let swordIntervals = [];
        let armorIntervals = [];
        let codexIntervals = [];
        let castleIntervals = [];
        let crownIntervals = [];
        let sceptreIntervals = [];
        let academyIntervals = [];
        let kingdomIntervals = [];
        let devilIntervals = [];
        let chainsIntervals = [];
        let cerberusIntervals = [];
        let gatesOfHellIntervals = [];
        let angelIntervals = [];
        let haloIntervals = [];
        let visionIntervals = [];
        let gatesOfHeavenIntervals = [];
        let rocketIntervals = [];
        let satelliteIntervals = [];
        let moonIntervals = [];
        let nebulosaIntervals = [];

        let monsterBlue;
        let monsterBlueHealthBar;
        let monsterRed;
        let monsterGreen;
        let monsterDevil;
        let monsterAngel;
        let monsterAlien;

        let meowsPerSecCounterSaved;
        
        let monsterBlueContainer = document.getElementById("monsterBlueContainer");
        let monsterBlueHealthBarContainer = document.getElementById("monsterBlueHealthBarContainer");
        let monsterWarning = document.getElementById("monsterWarning");
        
        let monsterIntervalCounter = Math.floor(Math.random() * 10);
        let monsterIntervalCounter2 = Math.floor(Math.random() * 10);
        let monsterDecrementInterval;

        const monsterBlueDelaySpeed = 50;

        let monsterBlueExists = false;
        let anyMonsterExists = false;  
        let monsterBlueIntervalExists = false;
        let monsterRedInervalExists = false;
        let monsterDecrementIntervalExists = false;

       function startMonsterIntervalCounter() {
         monsterIntervalCounter = Math.floor(Math.random() * monsterBlueDelaySpeed);
         monsterIntervalCounter2 = Math.floor(Math.random() * monsterBlueDelaySpeed);

         if (monsterIntervalCounter == monsterIntervalCounter2 && !monsterBlueExists && evolutionAlienExists) {
                monsterAlien = document.createElement("img");
                monsterAlien.src = "monsterAlien.gif";
                monsterAlien.id = "monsterAlien";
                monsterAlien.classList.add("over");
                monsterAlien.style.position = "relative";
                monsterAlien.style.left = Math.floor(Math.random() * 500) + "px";
                monsterAlien.style.top = Math.floor(Math.random() * 500) + "px";
                monsterBlueContainer.appendChild(monsterAlien);

                monsterBlueHealthBar = document.createElement("progress");
                monsterBlueHealthBar.max = "10";
                monsterBlueHealthBar.value = monsterBlueHealthBar.max;
                monsterBlueHealthBar.style.position = "relative";
                monsterBlueHealthBar.style.left = monsterAlien.style.left;
                monsterBlueHealthBar.style.top = monsterAlien.style.top;
                monsterBlueHealthBarContainer.appendChild(monsterBlueHealthBar);

                monsterWarning.style.position = "relative";
                monsterWarning.style.left = monsterAlien.style.left;
                monsterWarning.style.top = monsterAlien.style.top;

                meowsPerSec.style.color = "red";

                meowsPerSecCounterSaved = meowsPerSecCounter;
                meowsPerSecCounter = meowsPerSecCounter * 2;
                meowsPerSec.innerHTML = "Meows/second: Help, there is a monster!";

                monsterAlien.addEventListener("click", damageMonsterBlue);

                monsterBlueExists = true;
                anyMonsterExists = true;
            }
        
        else if (monsterIntervalCounter == monsterIntervalCounter2 && !monsterBlueExists && evolutionHeavenExists) {
                monsterAngel = document.createElement("img");
                monsterAngel.src = "monsterAngel.gif";
                monsterAngel.id = "monsterAngel";
                monsterAngel.classList.add("over");
                monsterAngel.style.position = "relative";
                monsterAngel.style.left = Math.floor(Math.random() * 500) + "px";
                monsterAngel.style.top = Math.floor(Math.random() * 500) + "px";
                monsterBlueContainer.appendChild(monsterAngel);

                monsterBlueHealthBar = document.createElement("progress");
                monsterBlueHealthBar.max = "10";
                monsterBlueHealthBar.value = monsterBlueHealthBar.max;
                monsterBlueHealthBar.style.position = "relative";
                monsterBlueHealthBar.style.left = monsterAngel.style.left;
                monsterBlueHealthBar.style.top = monsterAngel.style.top;
                monsterBlueHealthBarContainer.appendChild(monsterBlueHealthBar);

                monsterWarning.style.position = "relative";
                monsterWarning.style.left = monsterAngel.style.left;
                monsterWarning.style.top = monsterAngel.style.top;

                meowsPerSec.style.color = "red";

                meowsPerSecCounterSaved = meowsPerSecCounter;
                meowsPerSecCounter = meowsPerSecCounter * 2;
                meowsPerSec.innerHTML = "Meows/second: Help, there is a monster!";

                monsterAngel.addEventListener("click", damageMonsterBlue);

                monsterBlueExists = true;
                anyMonsterExists = true;
            }

         else if (monsterIntervalCounter == monsterIntervalCounter2 && !monsterBlueExists && evolutionHellExists) {
                monsterDevil = document.createElement("img");
                monsterDevil.src = "monsterDevil.gif";
                monsterDevil.id = "monsterDevil";
                monsterDevil.classList.add("over");
                monsterDevil.style.position = "relative";
                monsterDevil.style.left = Math.floor(Math.random() * 500) + "px";
                monsterDevil.style.top = Math.floor(Math.random() * 500) + "px";
                monsterBlueContainer.appendChild(monsterDevil);

                monsterBlueHealthBar = document.createElement("progress");
                monsterBlueHealthBar.max = "10";
                monsterBlueHealthBar.value = monsterBlueHealthBar.max;
                monsterBlueHealthBar.style.position = "relative";
                monsterBlueHealthBar.style.left = monsterDevil.style.left;
                monsterBlueHealthBar.style.top = monsterDevil.style.top;
                monsterBlueHealthBarContainer.appendChild(monsterBlueHealthBar);

                monsterWarning.style.position = "relative";
                monsterWarning.style.left = monsterDevil.style.left;
                monsterWarning.style.top = monsterDevil.style.top;

                meowsPerSec.style.color = "red";

                meowsPerSecCounterSaved = meowsPerSecCounter;
                meowsPerSecCounter = meowsPerSecCounter * 2;
                meowsPerSec.innerHTML = "Meows/second: Help, there is a monster!";

                monsterDevil.addEventListener("click", damageMonsterBlue);

                monsterBlueExists = true;
                anyMonsterExists = true;
            }

               else if (monsterIntervalCounter == monsterIntervalCounter2 && !monsterBlueExists && evolution2Exists) {
                monsterGreen = document.createElement("img");
                monsterGreen.src = "monsterGreen.gif";
                monsterGreen.id = "monsterGreen";
                monsterGreen.classList.add("over");
                monsterGreen.style.position = "relative";
                monsterGreen.style.left = Math.floor(Math.random() * 500) + "px";
                monsterGreen.style.top = Math.floor(Math.random() * 500) + "px";
                monsterBlueContainer.appendChild(monsterGreen);

                monsterBlueHealthBar = document.createElement("progress");
                monsterBlueHealthBar.max = "10";
                monsterBlueHealthBar.value = monsterBlueHealthBar.max;
                monsterBlueHealthBar.style.position = "relative";
                monsterBlueHealthBar.style.left = monsterGreen.style.left;
                monsterBlueHealthBar.style.top = monsterGreen.style.top;
                monsterBlueHealthBarContainer.appendChild(monsterBlueHealthBar);

                monsterWarning.style.position = "relative";
                monsterWarning.style.left = monsterGreen.style.left;
                monsterWarning.style.top = monsterGreen.style.top;

                meowsPerSec.style.color = "red";

                meowsPerSecCounterSaved = meowsPerSecCounter;
                meowsPerSecCounter = meowsPerSecCounter * 2;
                meowsPerSec.innerHTML = "Meows/second: Help, there is a monster!";

                monsterGreen.addEventListener("click", damageMonsterBlue);

                monsterBlueExists = true;
                anyMonsterExists = true;
            }

               else if (monsterIntervalCounter == monsterIntervalCounter2 && !monsterBlueExists && evolution1Exists) {
                monsterRed = document.createElement("img");
                monsterRed.src = "monsterRed.gif";
                monsterRed.id = "monsterRed";
                monsterRed.classList.add("over");
                monsterRed.style.position = "relative";
                monsterRed.style.left = Math.floor(Math.random() * 500) + "px";
                monsterRed.style.top = Math.floor(Math.random() * 500) + "px";
                monsterBlueContainer.appendChild(monsterRed);

                monsterBlueHealthBar = document.createElement("progress");
                monsterBlueHealthBar.max = "7";
                monsterBlueHealthBar.value = monsterBlueHealthBar.max;
                monsterBlueHealthBar.style.position = "relative";
                monsterBlueHealthBar.style.left = monsterRed.style.left;
                monsterBlueHealthBar.style.top = monsterRed.style.top;
                monsterBlueHealthBarContainer.appendChild(monsterBlueHealthBar);

                monsterWarning.style.position = "relative";
                monsterWarning.style.left = monsterRed.style.left;
                monsterWarning.style.top = monsterRed.style.top;

                meowsPerSec.style.color = "red";

                meowsPerSecCounterSaved = meowsPerSecCounter;
                meowsPerSecCounter = meowsPerSecCounter * 2;
                meowsPerSec.innerHTML = "Meows/second: Help, there is a monster!";

                monsterRed.addEventListener("click", damageMonsterBlue);

                monsterBlueExists = true;
                anyMonsterExists = true;
            }

            else {
            if (monsterIntervalCounter == monsterIntervalCounter2 && !monsterBlueExists) {
                monsterBlue = document.createElement("img");
                monsterBlue.src = "monsterBlue.gif";
                monsterBlue.id = "monsterBlue";
                monsterBlue.classList.add("over");
                monsterBlue.style.position = "relative";
                monsterBlue.style.left = Math.floor(Math.random() * 500) + "px";
                monsterBlue.style.top = Math.floor(Math.random() * 500) + "px";
                monsterBlueContainer.appendChild(monsterBlue);

                monsterBlueHealthBar = document.createElement("progress");
                monsterBlueHealthBar.max = "5";
                monsterBlueHealthBar.value = monsterBlueHealthBar.max;
                monsterBlueHealthBar.style.position = "relative";
                monsterBlueHealthBar.style.left = monsterBlue.style.left;
                monsterBlueHealthBar.style.top = monsterBlue.style.top;
                monsterBlueHealthBarContainer.appendChild(monsterBlueHealthBar);

                monsterWarning.style.position = "relative";
                monsterWarning.style.left = monsterBlue.style.left;
                monsterWarning.style.top = monsterBlue.style.top;

                meowsPerSec.style.color = "red";

                meowsPerSecCounterSaved = meowsPerSecCounter;
                meowsPerSecCounter = meowsPerSecCounter * 2;
                meowsPerSec.innerHTML = "Meows/second: Help, there is a monster!";

                monsterBlue.addEventListener("click", damageMonsterBlue);

                monsterBlueExists = true;
                anyMonsterExists = true;
            }
        }
       }

       function damageMonsterBlue(e) {

            if (monsterBlueHealthBar.value <= 1 && e.target.id == "monsterBlue") {
                monsterBlueContainer.removeChild(monsterBlue);
                monsterBlueHealthBarContainer.removeChild(monsterBlueHealthBar);
                clearInterval(monsterDecrementInterval);
                meowsPerSec.style.color = "black";
                meowsPerSecCounter = meowsPerSecCounterSaved;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                
                monsterBlueExists = false;
                anyMonsterExists = false;
                monsterDecrementIntervalExists = false;
            }

            if (monsterBlueHealthBar.value <= 1 && e.target.id == "monsterRed") {
                monsterBlueContainer.removeChild(monsterRed);
                monsterBlueHealthBarContainer.removeChild(monsterBlueHealthBar);
                clearInterval(monsterDecrementInterval);
                meowsPerSec.style.color = "black";
                meowsPerSecCounter = meowsPerSecCounterSaved;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                
                monsterBlueExists = false;
                anyMonsterExists = false;
                monsterDecrementIntervalExists = false;
            }

            if (monsterBlueHealthBar.value <= 1 && e.target.id == "monsterGreen") {
                monsterBlueContainer.removeChild(monsterGreen);
                monsterBlueHealthBarContainer.removeChild(monsterBlueHealthBar);
                clearInterval(monsterDecrementInterval);
                meowsPerSec.style.color = "black";
                meowsPerSecCounter = meowsPerSecCounterSaved;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                
                monsterBlueExists = false;
                anyMonsterExists = false;
                monsterDecrementIntervalExists = false;
            }

            if (monsterBlueHealthBar.value <= 1 && e.target.id == "monsterDevil") {
                monsterBlueContainer.removeChild(monsterDevil);
                monsterBlueHealthBarContainer.removeChild(monsterBlueHealthBar);
                clearInterval(monsterDecrementInterval);
                meowsPerSec.style.color = "black";
                meowsPerSecCounter = meowsPerSecCounterSaved;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                
                monsterBlueExists = false;
                anyMonsterExists = false;
                monsterDecrementIntervalExists = false;
            }

            if (monsterBlueHealthBar.value <= 1 && e.target.id == "monsterAngel") {
                monsterBlueContainer.removeChild(monsterAngel);
                monsterBlueHealthBarContainer.removeChild(monsterBlueHealthBar);
                clearInterval(monsterDecrementInterval);
                meowsPerSec.style.color = "black";
                meowsPerSecCounter = meowsPerSecCounterSaved;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                
                monsterBlueExists = false;
                anyMonsterExists = false;
                monsterDecrementIntervalExists = false;
            }

            if (monsterBlueHealthBar.value <= 1 && e.target.id == "monsterAlien") {
                monsterBlueContainer.removeChild(monsterAlien);
                monsterBlueHealthBarContainer.removeChild(monsterBlueHealthBar);
                clearInterval(monsterDecrementInterval);
                meowsPerSec.style.color = "black";
                meowsPerSecCounter = meowsPerSecCounterSaved;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                
                monsterBlueExists = false;
                anyMonsterExists = false;
                monsterDecrementIntervalExists = false;
            }

            else {
            monsterBlueHealthBar.value -= 1;
            }

            monsterWarning.innerHTML = "";
       }

       function monsterDecrement() {
        counterNumber += (meowsPerSecCounterSaved - meowsPerSecCounter);
        if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 10000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }
       }

        function addToCounter() {

            shopWarning.innerHTML = "";
            counterNumber++;
            counter.innerHTML = counterNumber + " meows";


            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }

            if (counterNumber >= catPic1Enters && !catPic1Exists) {
                kitten.src = "cat1.gif"
                catPic1Exists = true;
            }
            
            if (counterNumber >= catPic2Enters && !catPic1Exists) {
            kitten.src = "cat2.gif";
            catPic2Exists = true;
        }
        }

        function addToCounterAutomatic() {

            counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }

            if (testMode) {
                cursorCounterContainer.innerHTML = "Cursor counter: " + cursorCounter;
                scratcherCounterContainer.innerHTML = "Scratcher counter " + scratcherCounter;
                catToyCounterContainer.innerHTML = "Cat toy counter: " + catToyCounter;
                catSnacksCounterContainer.innerHTML = "Cat snacks counter: " + catSnacksCounter;
            }

            if (counterNumber >= blueMonsterEnters && !monsterBlueIntervalExists) {
            setInterval(startMonsterIntervalCounter, 1000);
            monsterBlueIntervalExists = true;
            }
            
            if (!anyMonsterExists) {

            counterNumber++;
            }

            else if (anyMonsterExists && !monsterDecrementIntervalExists) {
               monsterDecrementInterval = setInterval(monsterDecrement, 1000);
               monsterDecrementIntervalExists = true;
            }
            
            if (counterNumber >= catPic1Enters && !catPic1Exists) {
                kitten.src = "cat1.gif";
                catPic1Exists = true;
            }
            
            if (counterNumber >= catPic2Enters && !catPic2Exists) {
                kitten.src = "cat2.gif";
                catPic2Exists = true;
            }

            if (counterNumber >= catPic3Enters && !catPic3Exists) {
                kitten.src = "cat3.gif";
                catPic3Exists = true;
            }

            if (counterNumber >= catPic4Enters && !catPic4Exists) {
                kitten.src = "cat4.gif";
                catPic4Exists = true;
            }

            if (counterNumber >= ascensionsEnters && !ascensionProgressExists) {

                ascensionProgressHeader.innerHTML = "Evolution Progress:";
                ascensionProgress = document.createElement("progress");
                ascensionProgress.max = evolution1Costs;
                ascensionProgress.value = "0";
                ascensionProgressContainer.appendChild(ascensionProgress);
                ascensionProgressExists = true;

                sacrificialEnterBoxContainer.innerHTML = "Make your sacrifice: "
                enterBox = document.createElement("input");
                enterBox.type = "number";
                sacrificialEnterBoxContainer.appendChild(enterBox);

                let sacrificialButton = document.createElement("button");
                sacrificialButton.innerHTML = "Sacrifice";
                sacrificialButton.addEventListener("click", addToProgress);
                sacrificialButtonContainer.appendChild(sacrificialButton);
            }

            if (ascensionProgress.value >= evolution1Costs & !catWarriorPicExists) {
                kitten.src = "catWarrior.gif";
                catWarriorPicExists = true;
            }

            if (ascensionProgress.value >= evolution1Costs && !evolution1Exists) {
                    ascensionProgressHeader.innerHTML = "YOU ARE A CAT WARRIOR";
                    
                    ascensionProgress.value = 0;
                    ascensionProgress.max = evolution2Costs;
                    setTimeout(() => {
                     ascensionProgressHeader.innerHTML = "Evolution Progress:";
                    }, 5000);
                    evolution1Exists = true;
                    monsterBlueIntervalExists = true;
                    evolution1Clear();
                }

                if (ascensionProgress.value >= evolution2Costs & !catNoblePicExists) {
                kitten.src = "catNoble.gif";
                catNoblePicExists = true;
            }

            if (ascensionProgress.value >= evolution2Costs && !evolution2Exists) {
                    ascensionProgressHeader.innerHTML = "YOU ARE A CAT NOBLE";
                    
                    ascensionProgress.value = 0;
                    ascensionProgress.max = evolution3Costs;
                    setTimeout(() => {
                     ascensionProgressHeader.innerHTML = "Evolution Progress:";
                    }, 5000);
                    evolution2Exists = true;
                    monsterBlueIntervalExists = true;
                    evolution2Clear();
                }

            if (ascensionProgress.value >= evolution3Costs && !evolution3Exists) {
                    
                    ascensionProgress.value = 0;
                    ascensionProgress.max = evolutionAlienCosts;
                   
                    nameBoxContainer1.appendChild(greyBox1);
                    nameBoxContainer2.appendChild(greyBox2);

                    heavenButton= document.createElement("button");
                    heavenButton.innerHTML = "I embrace holiness";
                    heavenButton.style.position = "absolute";
                    heavenButton.style.left = "410px";
                    heavenButton.style.top = "250px";
                    heavenButton.style.width = "200px";
                    heavenButton.addEventListener("click", heaven);

                    hellButton= document.createElement("button");
                    hellButton.innerHTML = "I embrace evil";
                    hellButton.style.position = "absolute";
                    hellButton.style.left = "410px";
                    hellButton.style.top = "275px";
                    hellButton.style.width = "200px";
                    hellButton.addEventListener("click", hell);

                    nameBoxContainer3.appendChild(heavenButton);
                    nameBoxContainer3.appendChild(hellButton);

                    evolution3Exists = true;
                    monsterBlueIntervalExists = true;
                    evolution3Clear();
                    
                }
                
                if (ascensionProgress.value >= evolutionAlienCosts & !catAlienPicExists) {
                kitten.src = "catAlien.gif";
                catAlienPicExists = true;
            }
   
            if (ascensionProgress.value >= evolutionAlienCosts && !evolutionAlienExists) {
                    ascensionProgressHeader.innerHTML = "YOU ARE A CAT ALIEN";
                    
                    ascensionProgress.value = 0;
                    ascensionProgress.max = evolutionEndCosts;
                    setTimeout(() => {
                     ascensionProgressHeader.innerHTML = "Evolution Progress:";
                    }, 5000);
                    evolutionAlienExists = true;
                    monsterBlueIntervalExists = true;
                    evolutionAlienClear();
                }

                if (ascensionProgress.value >= evolutionEndCosts && !evolutionEndExists) {
                    
                    nameBoxContainer1.appendChild(greyBox1);

                    let endText = document.createElement("h1");
                    endText.innerHTML = "YOU WIN" + "<br><br>" + "Made by Jacey";
                    endText.style.position = "absolute";
                    endText.style.left = "410px";
                    endText.style.top = "275px";
                    endText.style.width = "200px";

                    nameBoxContainer3.appendChild(endText);

                    clearGameInterval();
                    evolutionEndExists = true;
                    
                }

            if (counterNumber >= catToyEnters && !catToyExists) {

               catToy = document.createElement("img");
               catToy.src = "catToy.gif";
               catToy.id = "catToy";
               catToy.name = "grey";
               catToy.classList.add("cursor");
               catToyShopContainer.appendChild(catToy);
               
               catToyLabel = document.createElement("label");
               catToyLabel.id = "catToyLabel";
               catToyLabel.name = "grey";
               catToyLabel.setAttribute("for", "catToy");
               catToyLabel.textContent = "Buy Cat Toy (16x";
               catToy.parentNode.insertBefore(catToyLabel, catToy);

               catToyCursor = document.createElement("img");
               catToyCursor.src = "cursor.gif";
               catToyCursor.id = "catToyCursor";
               catToyCursor.name = "catToyCursor";
               catToyCursor.classList.add("cursor");
               catToy.parentNode.insertBefore(catToyCursor, catToy);

               let catToyLabel2 = document.createElement("label");
               catToyLabel2.id = "catToyLabel2";
               catToyLabel2.name = "catToyLabel2";
               catToyLabel2.setAttribute("for", "catToy");
               catToyLabel2.textContent = ")";
               catToy.parentNode.insertBefore(catToyLabel2, catToy);
               

               catToy.addEventListener("mouseover", cursorBackgroundColor);
               catToy.addEventListener("mouseout", cursorBackgroundColor);
               catToyLabel.addEventListener("mouseover", cursorBackgroundColor);
               catToyLabel.addEventListener("mouseout", cursorBackgroundColor);
               catToy.addEventListener("click", buyCatToy);
               catToyLabel.addEventListener("click", buyCatToy);

               catToyExists = true;
            }

            if (counterNumber >= catSnacksEnters && !catSnacksExists) {

            catSnacks = document.createElement("img");
            catSnacks.src = "catSnacks.gif";
            catSnacks.id = "catSnacks";
            catSnacks.name = "grey";
            catSnacks.classList.add("cursor");
            catSnacksShopContainer.appendChild(catSnacks);

            catSnacksLabel = document.createElement("label");
            catSnacksLabel.id = "catSnacksLabel";
            catSnacksLabel.name = "grey";
            catSnacksLabel.setAttribute("for", "catSnacks");
            catSnacksLabel.textContent = "Buy Cat Snacks (16x";
            catSnacks.parentNode.insertBefore(catSnacksLabel, catSnacks);

            catSnacksScratcher = document.createElement("img");
            catSnacksScratcher.src = "scratcher.gif";
            catSnacksScratcher.id = "catSnacksScratcher";
            catSnacksScratcher.name = "catSnacksScratcher";
            catSnacksScratcher.classList.add("cursor");
            catSnacks.parentNode.insertBefore(catSnacksScratcher, catSnacks);

            let catSnacksLabel2 = document.createElement("label");
            catSnacksLabel2.id = "catSnacksLabel2";
            catSnacksLabel2.name = "catSnacksLabel2";
            catSnacksLabel2.setAttribute("for", "catSnacks");
            catSnacksLabel2.textContent = ")";
            catSnacks.parentNode.insertBefore(catSnacksLabel2, catSnacks);


            catSnacks.addEventListener("mouseover", cursorBackgroundColor);
            catSnacks.addEventListener("mouseout", cursorBackgroundColor);
            catSnacksLabel.addEventListener("mouseover", cursorBackgroundColor);
            catSnacksLabel.addEventListener("mouseout", cursorBackgroundColor);
            catSnacks.addEventListener("click", buyCatSnacks);
            catSnacksLabel.addEventListener("click", buyCatSnacks);

            catSnacksExists = true;
            }

            if (counterNumber >= cursorUpgrade1Enters && !cursorUpgrade1Exists) {
                let cursorUpgrade1 = document.createElement("img");
                cursorUpgrade1.src = "cursorUpgrade1Shop.gif";
                cursorUpgrade1.id = "cursorUpgrade1";
                cursorUpgrade1.name = "cursorUpgrade1";
                cursorUpgrade1.classList.add("cursor");
                cursorUpgrade1Container.appendChild(cursorUpgrade1);

                let cursorUpgrade1Label = document.createElement("label");
                cursorUpgrade1Label.id = "cursorUpgrade1Label";
                cursorUpgrade1Label.name = "cursorUpgrade1Label";
                cursorUpgrade1Label.setAttribute("for", "cursorUpgrade1");
                cursorUpgrade1Label.textContent = "Upgrade(" + cursorUpgrade1Costs + ")";
                cursorUpgrade1.parentNode.insertBefore(cursorUpgrade1Label, cursorUpgrade1);

                cursorUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                cursorUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                cursorUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                cursorUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                cursorUpgrade1.addEventListener("click", buyCursorUpgrade1);
                cursorUpgrade1Label.addEventListener("click", buyCursorUpgrade1);

                cursorUpgrade1Exists = true;
            }

            if (counterNumber >= cursorUpgrade2Enters && !cursorUpgrade2Exists) {

                let cursorUpgrade2 = document.createElement("img");
                cursorUpgrade2.src = "cursorUpgrade2.gif";
                cursorUpgrade2.id = "cursorUpgrade2";
                cursorUpgrade2.name = "cursorUpgrade2";
                cursorUpgrade2.classList.add("cursor");
                cursorUpgrade2Container.appendChild(cursorUpgrade2);

                let cursorUpgrade2Label = document.createElement("label");
                cursorUpgrade2Label.id = "cursorUpgrade2Label";
                cursorUpgrade2Label.name = "cursorUpgrade2Label";
                cursorUpgrade2Label.setAttribute("for", "cursorUpgrade2");
                cursorUpgrade2Label.textContent = "Upgrade(" + cursorUpgrade2Costs + ")";
                cursorUpgrade2.parentNode.insertBefore(cursorUpgrade2Label, cursorUpgrade2);

                cursorUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                cursorUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                cursorUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                cursorUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                cursorUpgrade2.addEventListener("click", buyCursorUpgrade2);
                cursorUpgrade2Label.addEventListener("click", buyCursorUpgrade2);

                cursorUpgrade2Exists = true;

            }

            if (counterNumber >= scratcherUpgrade1Enters && !scratcherUpgrade1Exists) {
                let scratcherUpgrade1 = document.createElement("img");
                scratcherUpgrade1.src = "scratcherUpgrade1.gif";
                scratcherUpgrade1.id = "scratcherUpgrade1";
                scratcherUpgrade1.name = "scratcherUpgrade1";
                scratcherUpgrade1.classList.add("cursor");
                scratcherUpgrade1Container.appendChild(scratcherUpgrade1);

                let scratcherUpgrade1Label = document.createElement("label");
                scratcherUpgrade1Label.id = "scratcherUpgrade1Label";
                scratcherUpgrade1Label.name = "scratcherUpgrade1Label";
                scratcherUpgrade1Label.setAttribute("for", "scratcherUpgrade1");
                scratcherUpgrade1Label.textContent = "Upgrade(" + scratcherUpgrade1Costs + ")";
                scratcherUpgrade1.parentNode.insertBefore(scratcherUpgrade1Label, scratcherUpgrade1);

                scratcherUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                scratcherUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                scratcherUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                scratcherUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                scratcherUpgrade1.addEventListener("click", buyScratcherUpgrade1);
                scratcherUpgrade1Label.addEventListener("click", buyScratcherUpgrade1);
                
                scratcherUpgrade1Exists = true;
            }

            if (counterNumber >= scratcherUpgrade2Enters && !scratcherUpgrade2Exists) {
                let scratcherUpgrade2 = document.createElement("img");
                scratcherUpgrade2.src = "scratcherUpgrade2.gif";
                scratcherUpgrade2.id = "scratcherUpgrade2";
                scratcherUpgrade2.name = "scratcherUpgrade2";
                scratcherUpgrade2.classList.add("cursor");
                scratcherUpgrade2Container.appendChild(scratcherUpgrade2);

                let scratcherUpgrade2Label = document.createElement("label");
                scratcherUpgrade2Label.id = "scratcherUpgrade2Label";
                scratcherUpgrade2Label.name = "scratcherUpgrade2Label";
                scratcherUpgrade2Label.setAttribute("for", "scratcherUpgrade2");
                scratcherUpgrade2Label.textContent = "Upgrade(" + scratcherUpgrade2Costs + ")";
                scratcherUpgrade2.parentNode.insertBefore(scratcherUpgrade2Label, scratcherUpgrade2);

                scratcherUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                scratcherUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                scratcherUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                scratcherUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                scratcherUpgrade2.addEventListener("click", buyScratcherUpgrade2);
                scratcherUpgrade2Label.addEventListener("click", buyScratcherUpgrade2);
                
                scratcherUpgrade2Exists = true;
            }

            if (counterNumber >= catToyUpgrade1Enters && !catToyUpgrade1Exists) {
                
                let catToyUpgrade1 = document.createElement("img");
                catToyUpgrade1.src = "catToyUpgrade1.gif";
                catToyUpgrade1.id = "catToyUpgrade1";
                catToyUpgrade1.name = "catToyUpgrade1";
                catToyUpgrade1.classList.add("cursor");
                catToyUpgrade1ShopContainer.appendChild(catToyUpgrade1);

                let catToyUpgrade1Label = document.createElement("label");
                catToyUpgrade1Label.id = "catToyUpgrade1Label";
                catToyUpgrade1Label.name = "catToyUpgrade1Label";
                catToyUpgrade1Label.setAttribute("for", "catToyUpgrade1");
                catToyUpgrade1Label.textContent = "Upgrade(" + catToyUpgrade1Costs + ")";
                catToyUpgrade1.parentNode.insertBefore(catToyUpgrade1Label, catToyUpgrade1);

                catToyUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                catToyUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                catToyUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                catToyUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                catToyUpgrade1.addEventListener("click", buyCatToyUpgrade1);
                catToyUpgrade1Label.addEventListener("click", buyCatToyUpgrade1);

                catToyUpgrade1Exists = true;
            }

            if (counterNumber >= catToyUpgrade2Enters && !catToyUpgrade2Exists) {
                
                let catToyUpgrade2 = document.createElement("img");
                catToyUpgrade2.src = "catToyUpgrade2.gif";
                catToyUpgrade2.id = "catToyUpgrade2";
                catToyUpgrade2.name = "catToyUpgrade2";
                catToyUpgrade2.classList.add("cursor");
                catToyUpgrade2ShopContainer.appendChild(catToyUpgrade2);

                let catToyUpgrade2Label = document.createElement("label");
                catToyUpgrade2Label.id = "catToyUpgrade2Label";
                catToyUpgrade2Label.name = "catToyUpgrade2Label";
                catToyUpgrade2Label.setAttribute("for", "catToyUpgrade2");
                catToyUpgrade2Label.textContent = "Upgrade(" + catToyUpgrade2Costs + ")";
                catToyUpgrade2.parentNode.insertBefore(catToyUpgrade2Label, catToyUpgrade2);

                catToyUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                catToyUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                catToyUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                catToyUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                catToyUpgrade2.addEventListener("click", buyCatToyUpgrade2);
                catToyUpgrade2Label.addEventListener("click", buyCatToyUpgrade2);

                catToyUpgrade2Exists = true;
            }

            if (counterNumber >= catSnacksUpgrade1Enters && !catSnacksUpgrade1Exists) {
                
                let catSnacksUpgrade1 = document.createElement("img");
                catSnacksUpgrade1.src = "catSnacksUpgrade1.gif";
                catSnacksUpgrade1.id = "catSnacksUpgrade1";
                catSnacksUpgrade1.name = "catSnacksUpgrade1";
                catSnacksUpgrade1.classList.add("cursor");
                catSnacksUpgrade1ShopContainer.appendChild(catSnacksUpgrade1);

                let catSnacksUpgrade1Label = document.createElement("label");
                catSnacksUpgrade1Label.id = "catSnacksUpgrade1Label";
                catSnacksUpgrade1Label.name = "catSnacksUpgrade1Label";
                catSnacksUpgrade1Label.setAttribute("for", "catSnacksUpgrade1");
                catSnacksUpgrade1Label.textContent = "Upgrade(" + catSnacksUpgrade1Costs + ")";
                catSnacksUpgrade1.parentNode.insertBefore(catSnacksUpgrade1Label, catSnacksUpgrade1);

                catSnacksUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                catSnacksUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                catSnacksUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                catSnacksUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                catSnacksUpgrade1.addEventListener("click", buyCatSnacksUpgrade1);
                catSnacksUpgrade1Label.addEventListener("click", buyCatSnacksUpgrade1);

                catSnacksUpgrade1Exists = true;
        }

        if (counterNumber >= catSnacksUpgrade2Enters && !catSnacksUpgrade2Exists) {
                
                let catSnacksUpgrade2 = document.createElement("img");
                catSnacksUpgrade2.src = "catSnacksUpgrade2.gif";
                catSnacksUpgrade2.id = "catSnacksUpgrade2";
                catSnacksUpgrade2.name = "catSnacksUpgrade2";
                catSnacksUpgrade2.classList.add("cursor");
                catSnacksUpgrade2ShopContainer.appendChild(catSnacksUpgrade2);

                let catSnacksUpgrade2Label = document.createElement("label");
                catSnacksUpgrade2Label.id = "catSnacksUpgrade2Label";
                catSnacksUpgrade2Label.name = "catSnacksUpgrade2Label";
                catSnacksUpgrade2Label.setAttribute("for", "catSnacksUpgrade2");
                catSnacksUpgrade2Label.textContent = "Upgrade(" + catSnacksUpgrade2Costs + ")";
                catSnacksUpgrade2.parentNode.insertBefore(catSnacksUpgrade2Label, catSnacksUpgrade2);

                catSnacksUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                catSnacksUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                catSnacksUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                catSnacksUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                catSnacksUpgrade2.addEventListener("click", buyCatSnacksUpgrade2);
                catSnacksUpgrade2Label.addEventListener("click", buyCatSnacksUpgrade2);

                catSnacksUpgrade2Exists = true;
        }

        if (ascensionProgressSaved >= swordCosts && !swordExists) {
                
                sword = document.createElement("img");
                sword.src = "sword.gif";
                sword.id = "sword";
                sword.name = "grey";
                sword.classList.add("cursor");
                swordShopContainer.appendChild(sword);

                swordLabel = document.createElement("label");
                swordLabel.id = "swordLabel";
                swordLabel.setAttribute("for", "sword");
                swordLabel.textContent = "Buy Sword(100K)";
                sword.parentNode.insertBefore(swordLabel, sword);

                sword.addEventListener("mouseover", cursorBackgroundColor);
                sword.addEventListener("mouseout", cursorBackgroundColor);
                swordLabel.addEventListener("mouseover", cursorBackgroundColor);
                swordLabel.addEventListener("mouseout", cursorBackgroundColor);
                sword.addEventListener("click", buySword);
                swordLabel.addEventListener("click", buySword);

                swordExists = true;
        }

        if (counterNumber >= swordUpgrade1Enters && !swordUpgrade1Exists && ascensionProgressSaved >= swordCosts) {
                let swordUpgrade1 = document.createElement("img");
                swordUpgrade1.src = "swordUpgrade1.gif";
                swordUpgrade1.id = "swordUpgrade1";
                swordUpgrade1.classList.add("cursor");
                swordUpgrade1ShopContainer.appendChild(swordUpgrade1);

                let swordUpgrade1Label = document.createElement("label");
                swordUpgrade1Label.id = "swordUpgrade1Label";
                swordUpgrade1Label.setAttribute("for", "swordUpgrade1");
                swordUpgrade1Label.textContent = "Upgrade(10M)";
                swordUpgrade1.parentNode.insertBefore(swordUpgrade1Label, swordUpgrade1);

                swordUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                swordUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                swordUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                swordUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                swordUpgrade1.addEventListener("click", buySwordUpgrade1);
                swordUpgrade1Label.addEventListener("click", buySwordUpgrade1);

                swordUpgrade1Exists = true;
            }

            if (counterNumber >= swordUpgrade2Enters && !swordUpgrade2Exists && ascensionProgressSaved >= swordCosts) {
                let swordUpgrade2 = document.createElement("img");
                swordUpgrade2.src = "swordUpgrade2.gif";
                swordUpgrade2.id = "swordUpgrade2";
                swordUpgrade2.classList.add("cursor");
                swordUpgrade2ShopContainer.appendChild(swordUpgrade2);

                let swordUpgrade2Label = document.createElement("label");
                swordUpgrade2Label.id = "swordUpgrade2Label";
                swordUpgrade2Label.setAttribute("for", "swordUpgrade2");
                swordUpgrade2Label.textContent = "Upgrade(100M)";
                swordUpgrade2.parentNode.insertBefore(swordUpgrade2Label, swordUpgrade2);

                swordUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                swordUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                swordUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                swordUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                swordUpgrade2.addEventListener("click", buySwordUpgrade2);
                swordUpgrade2Label.addEventListener("click", buySwordUpgrade2);

                swordUpgrade2Exists = true;
            }

        if (evolution1Exists && !armorExists && counterNumber >= armorEnters) {
                
                armor = document.createElement("img");
                armor.src = "armor.gif";
                armor.id = "armor";
                armor.name = "grey";
                armor.classList.add("cursor");
                armorShopContainer.appendChild(armor);

                armorLabel = document.createElement("label");
                armorLabel.id = "armorLabel";
                armorLabel.setAttribute("for", "armor");
                armorLabel.textContent = "Buy Armor(500K)";
                armor.parentNode.insertBefore(armorLabel, armor);

                armor.addEventListener("mouseover", cursorBackgroundColor);
                armor.addEventListener("mouseout", cursorBackgroundColor);
                armorLabel.addEventListener("mouseover", cursorBackgroundColor);
                armorLabel.addEventListener("mouseout", cursorBackgroundColor);
                armor.addEventListener("click", buyArmor);
                armorLabel.addEventListener("click", buyArmor);

                armorExists = true;
        }

        if (counterNumber >= armorUpgrade1Enters && !armorUpgrade1Exists && ascensionProgressSaved >= swordCosts) {
                let armorUpgrade1 = document.createElement("img");
                armorUpgrade1.src = "armorUpgrade1.gif";
                armorUpgrade1.id = "armorUpgrade1";
                armorUpgrade1.classList.add("cursor");
                armorUpgrade1ShopContainer.appendChild(armorUpgrade1);

                let armorUpgrade1Label = document.createElement("label");
                armorUpgrade1Label.id = "armorUpgrade1Label";
                armorUpgrade1Label.setAttribute("for", "armorUpgrade1");
                armorUpgrade1Label.textContent = "Upgrade(50M)";
                armorUpgrade1.parentNode.insertBefore(armorUpgrade1Label, armorUpgrade1);

                armorUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                armorUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                armorUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                armorUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                armorUpgrade1.addEventListener("click", buyArmorUpgrade1);
                armorUpgrade1Label.addEventListener("click", buyArmorUpgrade1);

                armorUpgrade1Exists = true;
            }

            if (counterNumber >= armorUpgrade2Enters && !armorUpgrade2Exists && ascensionProgressSaved >= swordCosts) {
                let armorUpgrade2 = document.createElement("img");
                armorUpgrade2.src = "armorUpgrade2.gif";
                armorUpgrade2.id = "armorUpgrade2";
                armorUpgrade2.classList.add("cursor");
                armorUpgrade2ShopContainer.appendChild(armorUpgrade2);

                let armorUpgrade2Label = document.createElement("label");
                armorUpgrade2Label.id = "armorUpgrade2Label";
                armorUpgrade2Label.setAttribute("for", "armorUpgrade2");
                armorUpgrade2Label.textContent = "Upgrade(500M)";
                armorUpgrade2.parentNode.insertBefore(armorUpgrade2Label, armorUpgrade2);

                armorUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                armorUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                armorUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                armorUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                armorUpgrade2.addEventListener("click", buyArmorUpgrade2);
                armorUpgrade2Label.addEventListener("click", buyArmorUpgrade2);

                armorUpgrade2Exists = true;
            }

        if (evolution1Exists && !codexExists && counterNumber >= codexEnters) {
               codex = document.createElement("img");
               codex.src = "codex.gif";
               codex.id = "codex";
               codex.name = "grey";
               codex.classList.add("cursor");
               codexShopContainer.appendChild(codex);
               
               codexLabel = document.createElement("label");
               codexLabel.id = "codexLabel";
               codexLabel.setAttribute("for", "codex");
               codexLabel.textContent = "Buy Codex (16x";
               codex.parentNode.insertBefore(codexLabel, codex);

               codexSword = document.createElement("img");
               codexSword.src = "sword.gif";
               codexSword.id = "codexSword";
               codexSword.classList.add("cursor");
               codex.parentNode.insertBefore(codexSword, codex);

               let codexLabel2 = document.createElement("label");
               codexLabel2.id = "codexLabel2";
               codexLabel2.setAttribute("for", "codex");
               codexLabel2.textContent = ")";
               codex.parentNode.insertBefore(codexLabel2, codex);
               

               codex.addEventListener("mouseover", cursorBackgroundColor);
               codex.addEventListener("mouseout", cursorBackgroundColor);
               codexLabel.addEventListener("mouseover", cursorBackgroundColor);
               codexLabel.addEventListener("mouseout", cursorBackgroundColor);
               codex.addEventListener("click", buyCodex);
               codexLabel.addEventListener("click", buyCodex);

               codexExists = true;
        }

        if (counterNumber >= codexUpgrade1Enters && !codexUpgrade1Exists && ascensionProgressSaved >= swordCosts) {

            let codexUpgrade1 = document.createElement("img");
                codexUpgrade1.src = "codexUpgrade1.gif";
                codexUpgrade1.id = "codexUpgrade1";
                codexUpgrade1.classList.add("cursor");
                codexUpgrade1ShopContainer.appendChild(codexUpgrade1);

                let codexUpgrade1Label = document.createElement("label");
                codexUpgrade1Label.id = "codexUpgrade1Label";
                codexUpgrade1Label.setAttribute("for", "codexUpgrade1");
                codexUpgrade1Label.textContent = "Upgrade(160M)";
                codexUpgrade1.parentNode.insertBefore(codexUpgrade1Label, codexUpgrade1);

                codexUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                codexUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                codexUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                codexUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                codexUpgrade1.addEventListener("click", buyCodexUpgrade1);
                codexUpgrade1Label.addEventListener("click", buyCodexUpgrade1);

                codexUpgrade1Exists = true;
            }

            if (counterNumber >= codexUpgrade2Enters && !codexUpgrade2Exists && ascensionProgressSaved >= swordCosts) {

                let codexUpgrade2 = document.createElement("img");
                codexUpgrade2.src = "codexUpgrade2.gif";
                codexUpgrade2.id = "codexUpgrade2";
                codexUpgrade2.classList.add("cursor");
                codexUpgrade2ShopContainer.appendChild(codexUpgrade2);

                let codexUpgrade2Label = document.createElement("label");
                codexUpgrade2Label.id = "codexUpgrade2Label";
                codexUpgrade2Label.setAttribute("for", "codexUpgrade2");
                codexUpgrade2Label.textContent = "Upgrade(1600M)";
                codexUpgrade2.parentNode.insertBefore(codexUpgrade2Label, codexUpgrade2);

                codexUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                codexUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                codexUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                codexUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                codexUpgrade2.addEventListener("click", buyCodexUpgrade2);
                codexUpgrade2Label.addEventListener("click", buyCodexUpgrade2);

                codexUpgrade2Exists = true;
            }

        if (evolution1Exists && !castleExists && counterNumber >= castleEnters) {
               castle = document.createElement("img");
               castle.src = "castle.gif";
               castle.id = "castle";
               castle.name = "grey";
               castle.classList.add("cursor");
               castleShopContainer.appendChild(castle);
               
               castleLabel = document.createElement("label");
               castleLabel.id = "castleLabel";
               castleLabel.setAttribute("for", "castle");
               castleLabel.textContent = "Buy Castle (16x";
               castle.parentNode.insertBefore(castleLabel, castle);

               castleArmor = document.createElement("img");
               castleArmor.src = "armor.gif";
               castleArmor.id = "castleArmor";
               castleArmor.classList.add("cursor");
               castle.parentNode.insertBefore(castleArmor, castle);

               let castleLabel2= document.createElement("label");
               castleLabel2.id = "castleLabel2";
               castleLabel2.setAttribute("for", "castle");
               castleLabel2.textContent = ")";
               castle.parentNode.insertBefore(castleLabel2, castle);
               

               castle.addEventListener("mouseover", cursorBackgroundColor);
               castle.addEventListener("mouseout", cursorBackgroundColor);
               castleLabel.addEventListener("mouseover", cursorBackgroundColor);
               castleLabel.addEventListener("mouseout", cursorBackgroundColor);
               castle.addEventListener("click", buyCastle);
               castleLabel.addEventListener("click", buyCastle);

               castleExists = true;
        }

        if (counterNumber >= castleUpgrade1Enters && !castleUpgrade1Exists && ascensionProgressSaved >= swordCosts) {

            let castleUpgrade1 = document.createElement("img");
                castleUpgrade1.src = "castleUpgrade1.gif";
                castleUpgrade1.id = "castleUpgrade1";
                castleUpgrade1.classList.add("cursor");
                castleUpgrade1ShopContainer.appendChild(castleUpgrade1);

                let castleUpgrade1Label = document.createElement("label");
                castleUpgrade1Label.id = "castleUpgrade1Label";
                castleUpgrade1Label.setAttribute("for", "castleUpgrade1");
                castleUpgrade1Label.textContent = "Upgrade(800M)";
                castleUpgrade1.parentNode.insertBefore(castleUpgrade1Label, castleUpgrade1);

                castleUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                castleUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                castleUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                castleUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                castleUpgrade1.addEventListener("click", buyCastleUpgrade1);
                castleUpgrade1Label.addEventListener("click", buyCastleUpgrade1);

                castleUpgrade1Exists = true;
            }

            if (counterNumber >= castleUpgrade2Enters && !castleUpgrade2Exists && ascensionProgressSaved >= swordCosts) {

            let castleUpgrade2 = document.createElement("img");
                castleUpgrade2.src = "castleUpgrade2.gif";
                castleUpgrade2.id = "castleUpgrade2";
                castleUpgrade2.classList.add("cursor");
                castleUpgrade2ShopContainer.appendChild(castleUpgrade2);

                let castleUpgrade2Label = document.createElement("label");
                castleUpgrade2Label.id = "castleUpgrade2Label";
                castleUpgrade2Label.setAttribute("for", "castleUpgrade2");
                castleUpgrade2Label.textContent = "Upgrade(8000M)";
                castleUpgrade2.parentNode.insertBefore(castleUpgrade2Label, castleUpgrade2);

                castleUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                castleUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                castleUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                castleUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                castleUpgrade2.addEventListener("click", buyCastleUpgrade2);
                castleUpgrade2Label.addEventListener("click", buyCastleUpgrade2);

                castleUpgrade2Exists = true;
            }

            if (ascensionProgressSaved >= crownCosts && !crownExists && evolution2Exists) {
                
                crown = document.createElement("img");
                crown.src = "crown.gif";
                crown.id = "crown";
                crown.name = "grey";
                crown.classList.add("cursor");
                crownShopContainer.appendChild(crown);

                crownLabel = document.createElement("label");
                crownLabel.id = "crownLabel";
                crownLabel.setAttribute("for", "crown");
                crownLabel.textContent = "Buy Crown(1B)";
                crown.parentNode.insertBefore(crownLabel, crown);

                crown.addEventListener("mouseover", cursorBackgroundColor);
                crown.addEventListener("mouseout", cursorBackgroundColor);
                crownLabel.addEventListener("mouseover", cursorBackgroundColor);
                crownLabel.addEventListener("mouseout", cursorBackgroundColor);
                crown.addEventListener("click", buyCrown);
                crownLabel.addEventListener("click", buyCrown);

                crownExists = true;
        }

        if (counterNumber >= crownUpgrade1Enters && !crownUpgrade1Exists && evolution2Exists) {
                let crownUpgrade1 = document.createElement("img");
                crownUpgrade1.src = "crownUpgrade1.gif";
                crownUpgrade1.id = "crownUpgrade1";
                crownUpgrade1.classList.add("cursor");
                crownUpgrade1ShopContainer.appendChild(crownUpgrade1);

                let crownUpgrade1Label = document.createElement("label");
                crownUpgrade1Label.id = "crownUpgrade1Label";
                crownUpgrade1Label.setAttribute("for", "crownUpgrade1");
                crownUpgrade1Label.textContent = "Upgrade(100B)";
                crownUpgrade1.parentNode.insertBefore(crownUpgrade1Label, crownUpgrade1);

                crownUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                crownUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                crownUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                crownUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                crownUpgrade1.addEventListener("click", buyCrownUpgrade1);
                crownUpgrade1Label.addEventListener("click", buyCrownUpgrade1);

                crownUpgrade1Exists = true;
            }

            if (counterNumber >= crownUpgrade2Enters && !crownUpgrade2Exists && evolution2Exists) {
            let crownUpgrade2 = document.createElement("img");
            crownUpgrade2.src = "crownUpgrade2.gif";
            crownUpgrade2.id = "crownUpgrade2";
            crownUpgrade2.classList.add("cursor");
            crownUpgrade2ShopContainer.appendChild(crownUpgrade2);

            let crownUpgrade2Label = document.createElement("label");
            crownUpgrade2Label.id = "crownUpgrade2Label";
            crownUpgrade2Label.setAttribute("for", "crownUpgrade2");
            crownUpgrade2Label.textContent = "Upgrade(1000B)";
            crownUpgrade2.parentNode.insertBefore(crownUpgrade2Label, crownUpgrade2);

            crownUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            crownUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            crownUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            crownUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            crownUpgrade2.addEventListener("click", buyCrownUpgrade2);
            crownUpgrade2Label.addEventListener("click", buyCrownUpgrade2);

            crownUpgrade2Exists = true;
        }


        if (evolution2Exists && !sceptreExists && counterNumber >= sceptreEnters) {
                
                sceptre = document.createElement("img");
                sceptre.src = "sceptre.gif";
                sceptre.id = "sceptre";
                sceptre.name = "grey";
                sceptre.classList.add("cursor");
                sceptreShopContainer.appendChild(sceptre);

                sceptreLabel = document.createElement("label");
                sceptreLabel.id = "sceptreLabel";
                sceptreLabel.setAttribute("for", "sceptre");
                sceptreLabel.textContent = "Buy Sceptre(5B)";
                sceptre.parentNode.insertBefore(sceptreLabel, sceptre);

                sceptre.addEventListener("mouseover", cursorBackgroundColor);
                sceptre.addEventListener("mouseout", cursorBackgroundColor);
                sceptreLabel.addEventListener("mouseover", cursorBackgroundColor);
                sceptreLabel.addEventListener("mouseout", cursorBackgroundColor);
                sceptre.addEventListener("click", buySceptre);
                sceptreLabel.addEventListener("click", buySceptre);

                sceptreExists = true;
        }

           if (counterNumber >= sceptreUpgrade1Enters && !sceptreUpgrade1Exists && evolution2Exists) {
                let sceptreUpgrade1 = document.createElement("img");
                sceptreUpgrade1.src = "sceptreUpgrade1.gif";
                sceptreUpgrade1.id = "sceptreUpgrade1";
                sceptreUpgrade1.classList.add("cursor");
                sceptreUpgrade1ShopContainer.appendChild(sceptreUpgrade1);

                let sceptreUpgrade1Label = document.createElement("label");
                sceptreUpgrade1Label.id = "sceptreUpgrade1Label";
                sceptreUpgrade1Label.setAttribute("for", "sceptreUpgrade1");
                sceptreUpgrade1Label.textContent = "Upgrade(500B)";
                sceptreUpgrade1.parentNode.insertBefore(sceptreUpgrade1Label, sceptreUpgrade1);

                sceptreUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                sceptreUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                sceptreUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                sceptreUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                sceptreUpgrade1.addEventListener("click", buySceptreUpgrade1);
                sceptreUpgrade1Label.addEventListener("click", buySceptreUpgrade1);

                sceptreUpgrade1Exists = true;
            }

            if (counterNumber >= sceptreUpgrade2Enters && !sceptreUpgrade2Exists && evolution2Exists) {
            let sceptreUpgrade2 = document.createElement("img");
            sceptreUpgrade2.src = "sceptreUpgrade2.gif";
            sceptreUpgrade2.id = "sceptreUpgrade2";
            sceptreUpgrade2.classList.add("cursor");
            sceptreUpgrade2ShopContainer.appendChild(sceptreUpgrade2);

            let sceptreUpgrade2Label = document.createElement("label");
            sceptreUpgrade2Label.id = "sceptreUpgrade2Label";
            sceptreUpgrade2Label.setAttribute("for", "sceptreUpgrade2");
            sceptreUpgrade2Label.textContent = "Upgrade(5000B)";
            sceptreUpgrade2.parentNode.insertBefore(sceptreUpgrade2Label, sceptreUpgrade2);
-
            sceptreUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            sceptreUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            sceptreUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            sceptreUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            sceptreUpgrade2.addEventListener("click", buySceptreUpgrade2);
            sceptreUpgrade2Label.addEventListener("click", buySceptreUpgrade2);

            sceptreUpgrade2Exists = true;
        }

        if (evolution2Exists && !academyExists && counterNumber >= academyEnters) {
               academy = document.createElement("img");
               academy.src = "academy.gif";
               academy.id = "academy";
               academy.name = "grey";
               academy.classList.add("cursor");
               academyShopContainer.appendChild(academy);
               
               academyLabel = document.createElement("label");
               academyLabel.id = "academyLabel";
               academyLabel.setAttribute("for", "academy");
               academyLabel.textContent = "Buy Academy(16x";
               academy.parentNode.insertBefore(academyLabel, academy);

               academyCrown = document.createElement("img");
               academyCrown.src = "crown.gif";
               academyCrown.id = "academyCrown";
               academyCrown.classList.add("cursor");
               academy.parentNode.insertBefore(academyCrown, academy);

               let academyLabel2 = document.createElement("label");
               academyLabel2.id = "academyLabel2";
               academyLabel2.setAttribute("for", "academy");
               academyLabel2.textContent = ")";
               academy.parentNode.insertBefore(academyLabel2, academy);
               
               academy.addEventListener("mouseover", cursorBackgroundColor);
               academy.addEventListener("mouseout", cursorBackgroundColor);
               academyLabel.addEventListener("mouseover", cursorBackgroundColor);
               academyLabel.addEventListener("mouseout", cursorBackgroundColor);
               academy.addEventListener("click", buyAcademy);
               academyLabel.addEventListener("click", buyAcademy);

               academyExists = true;
        }

        if (counterNumber >= academyUpgrade1Enters && !academyUpgrade1Exists && evolution2Exists) {

        let academyUpgrade1 = document.createElement("img");
        academyUpgrade1.src = "academyUpgrade1.gif";
        academyUpgrade1.id = "academyUpgrade1";
        academyUpgrade1.classList.add("cursor");
        academyUpgrade1ShopContainer.appendChild(academyUpgrade1);

        let academyUpgrade1Label = document.createElement("label");
        academyUpgrade1Label.id = "academyUpgrade1Label";
        academyUpgrade1Label.setAttribute("for", "academyUpgrade1");
        academyUpgrade1Label.textContent = "Upgrade(1600B)";
        academyUpgrade1.parentNode.insertBefore(academyUpgrade1Label, academyUpgrade1);

        academyUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
        academyUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
        academyUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
        academyUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
        academyUpgrade1.addEventListener("click", buyAcademyUpgrade1);
        academyUpgrade1Label.addEventListener("click", buyAcademyUpgrade1);

        academyUpgrade1Exists = true;
        }

        if (counterNumber >= academyUpgrade2Enters && !academyUpgrade2Exists && evolution2Exists) {
        let academyUpgrade2 = document.createElement("img");
        academyUpgrade2.src = "academyUpgrade2.gif";
        academyUpgrade2.id = "academyUpgrade2";
        academyUpgrade2.classList.add("cursor");
        academyUpgrade2ShopContainer.appendChild(academyUpgrade2);

        let academyUpgrade2Label = document.createElement("label");
        academyUpgrade2Label.id = "academyUpgrade2Label";
        academyUpgrade2Label.setAttribute("for", "academyUpgrade2");
        academyUpgrade2Label.textContent = "Upgrade(16000B)";
        academyUpgrade2.parentNode.insertBefore(academyUpgrade2Label, academyUpgrade2);

        academyUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
        academyUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
        academyUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
        academyUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
        academyUpgrade2.addEventListener("click", buyAcademyUpgrade2);
        academyUpgrade2Label.addEventListener("click", buyAcademyUpgrade2);

        academyUpgrade2Exists = true;
    }


        if (evolution2Exists && !kingdomExists && counterNumber >= kingdomEnters) {
               kingdom = document.createElement("img");
               kingdom.src = "kingdom.gif";
               kingdom.id = "kingdom";
               kingdom.name = "grey";
               kingdom.classList.add("cursor");
               kingdomShopContainer.appendChild(kingdom);
               
               kingdomLabel = document.createElement("label");
               kingdomLabel.id = "kingdomLabel";
               kingdomLabel.setAttribute("for", "kingdom");
               kingdomLabel.textContent = "Buy Kingdom(16x";
               kingdom.parentNode.insertBefore(kingdomLabel, kingdom);

               kingdomSceptre = document.createElement("img");
               kingdomSceptre.src = "sceptre.gif";
               kingdomSceptre.id = "kingdomSceptre";
               kingdomSceptre.classList.add("cursor");
               kingdom.parentNode.insertBefore(kingdomSceptre, kingdom);

               let kingdomLabel2 = document.createElement("label");
               kingdomLabel2.id = "kingdomLabel2";
               kingdomLabel2.setAttribute("for", "kingdom");
               kingdomLabel2.textContent = ")";
               kingdom.parentNode.insertBefore(kingdomLabel2, kingdom);
               
               kingdom.addEventListener("mouseover", cursorBackgroundColor);
               kingdom.addEventListener("mouseout", cursorBackgroundColor);
               kingdomLabel.addEventListener("mouseover", cursorBackgroundColor);
               kingdomLabel.addEventListener("mouseout", cursorBackgroundColor);
               kingdom.addEventListener("click", buyKingdom);
               kingdomLabel.addEventListener("click", buyKingdom);

               kingdomExists = true;
        }

        if (counterNumber >= kingdomUpgrade1Enters && !kingdomUpgrade1Exists && evolution2Exists) {

        let kingdomUpgrade1 = document.createElement("img");
        kingdomUpgrade1.src = "kingdomUpgrade1.gif";
        kingdomUpgrade1.id = "kingdomUpgrade1";
        kingdomUpgrade1.classList.add("cursor");
        kingdomUpgrade1ShopContainer.appendChild(kingdomUpgrade1);

        let kingdomUpgrade1Label = document.createElement("label");
        kingdomUpgrade1Label.id = "kingdomUpgrade1Label";
        kingdomUpgrade1Label.setAttribute("for", "kingdomUpgrade1");
        kingdomUpgrade1Label.textContent = "Upgrade(8000B)";
        kingdomUpgrade1.parentNode.insertBefore(kingdomUpgrade1Label, kingdomUpgrade1);

        kingdomUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
        kingdomUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
        kingdomUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
        kingdomUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
        kingdomUpgrade1.addEventListener("click", buyKingdomUpgrade1);
        kingdomUpgrade1Label.addEventListener("click", buyKingdomUpgrade1);

        kingdomUpgrade1Exists = true;
        }

        if (counterNumber >= kingdomUpgrade2Enters && !kingdomUpgrade2Exists && evolution2Exists) {
        let kingdomUpgrade2 = document.createElement("img");
        kingdomUpgrade2.src = "kingdomUpgrade2.gif";
        kingdomUpgrade2.id = "kingdomUpgrade2";
        kingdomUpgrade2.classList.add("cursor");
        kingdomUpgrade2ShopContainer.appendChild(kingdomUpgrade2);

        let kingdomUpgrade2Label = document.createElement("label");
        kingdomUpgrade2Label.id = "kingdomUpgrade2Label";
        kingdomUpgrade2Label.setAttribute("for", "kingdomUpgrade2");
        kingdomUpgrade2Label.textContent = "Upgrade(80000B)";
        kingdomUpgrade2.parentNode.insertBefore(kingdomUpgrade2Label, kingdomUpgrade2);

        kingdomUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
        kingdomUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
        kingdomUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
        kingdomUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
        kingdomUpgrade2.addEventListener("click", buyKingdomUpgrade2);
        kingdomUpgrade2Label.addEventListener("click", buyKingdomUpgrade2);

        kingdomUpgrade2Exists = true;
    }

    if (ascensionProgressSaved >= devilCosts && !devilExists && evolutionHellExists) {
        devil = document.createElement("img");
        devil.src = "devil.gif";
        devil.id = "devil";
        devil.name = "grey";
        devil.classList.add("cursor");
        devilShopContainer.appendChild(devil);

        devilLabel = document.createElement("label");
        devilLabel.id = "devilLabel";
        devilLabel.setAttribute("for", "devil");
        devilLabel.textContent = "Buy Devil(10T)";
        devil.parentNode.insertBefore(devilLabel, devil);

        devil.addEventListener("mouseover", cursorBackgroundColor);
        devil.addEventListener("mouseout", cursorBackgroundColor);
        devilLabel.addEventListener("mouseover", cursorBackgroundColor);
        devilLabel.addEventListener("mouseout", cursorBackgroundColor);
        devil.addEventListener("click", buyDevil);
        devilLabel.addEventListener("click", buyDevil);

        devilExists = true;
    }

    if (counterNumber >= devilUpgrade1Enters && !devilUpgrade1Exists && evolutionHellExists) {
        let devilUpgrade1 = document.createElement("img");
        devilUpgrade1.src = "devilUpgrade1.gif";
        devilUpgrade1.id = "devilUpgrade1";
        devilUpgrade1.classList.add("cursor");
        devilUpgrade1ShopContainer.appendChild(devilUpgrade1);

        let devilUpgrade1Label = document.createElement("label");
        devilUpgrade1Label.id = "devilUpgrade1Label";
        devilUpgrade1Label.setAttribute("for", "devilUpgrade1");
        devilUpgrade1Label.textContent = "Upgrade(1000T)";
        devilUpgrade1.parentNode.insertBefore(devilUpgrade1Label, devilUpgrade1);

        devilUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
        devilUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
        devilUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
        devilUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
        devilUpgrade1.addEventListener("click", buyDevilUpgrade1);
        devilUpgrade1Label.addEventListener("click", buyDevilUpgrade1);

        devilUpgrade1Exists = true;
    }

            if (counterNumber >= devilUpgrade2Enters && !devilUpgrade2Exists && evolutionHellExists) {
            let devilUpgrade2 = document.createElement("img");
            devilUpgrade2.src = "devilUpgrade2.gif";
            devilUpgrade2.id = "devilUpgrade2";
            devilUpgrade2.classList.add("cursor");
            devilUpgrade2ShopContainer.appendChild(devilUpgrade2);

            let devilUpgrade2Label = document.createElement("label");
            devilUpgrade2Label.id = "devilUpgrade2Label";
            devilUpgrade2Label.setAttribute("for", "devilUpgrade2");
            devilUpgrade2Label.textContent = "Upgrade(10000T)";
            devilUpgrade2.parentNode.insertBefore(devilUpgrade2Label, devilUpgrade2);

            devilUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            devilUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            devilUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            devilUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            devilUpgrade2.addEventListener("click", buyDevilUpgrade2);
            devilUpgrade2Label.addEventListener("click", buyDevilUpgrade2);

            devilUpgrade2Exists = true;
        }

        if (counterNumber >= chainsEnters && !chainsExists && evolutionHellExists) {
        chains = document.createElement("img");
        chains.src = "chains.gif";
        chains.id = "chains";
        chains.name = "grey";
        chains.classList.add("cursor");
        chainsShopContainer.appendChild(chains);

        chainsLabel = document.createElement("label");
        chainsLabel.id = "chainsLabel";
        chainsLabel.setAttribute("for", "chains");
        chainsLabel.textContent = "Buy Chains(50T)";
        chains.parentNode.insertBefore(chainsLabel, chains);

        chains.addEventListener("mouseover", cursorBackgroundColor);
        chains.addEventListener("mouseout", cursorBackgroundColor);
        chainsLabel.addEventListener("mouseover", cursorBackgroundColor);
        chainsLabel.addEventListener("mouseout", cursorBackgroundColor);
        chains.addEventListener("click", buyChains);
        chainsLabel.addEventListener("click", buyChains);

        chainsExists = true;
    }

            if (counterNumber >= chainsUpgrade1Enters && !chainsUpgrade1Exists && evolutionHellExists) {
            let chainsUpgrade1 = document.createElement("img");
            chainsUpgrade1.src = "chainsUpgrade1.gif";
            chainsUpgrade1.id = "chainsUpgrade1";
            chainsUpgrade1.classList.add("cursor");
            chainsUpgrade1ShopContainer.appendChild(chainsUpgrade1);

            let chainsUpgrade1Label = document.createElement("label");
            chainsUpgrade1Label.id = "chainsUpgrade1Label";
            chainsUpgrade1Label.setAttribute("for", "chainsUpgrade1");
            chainsUpgrade1Label.textContent = "Upgrade(500T)";
            chainsUpgrade1.parentNode.insertBefore(chainsUpgrade1Label, chainsUpgrade1);

            chainsUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
            chainsUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
            chainsUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
            chainsUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
            chainsUpgrade1.addEventListener("click", buyChainsUpgrade1);
            chainsUpgrade1Label.addEventListener("click", buyChainsUpgrade1);

            chainsUpgrade1Exists = true;
        }

        if (counterNumber >= chainsUpgrade2Enters && !chainsUpgrade2Exists && evolutionHellExists) {
                let chainsUpgrade2 = document.createElement("img");
                chainsUpgrade2.src = "chainsUpgrade2.gif";
                chainsUpgrade2.id = "chainsUpgrade2";
                chainsUpgrade2.classList.add("cursor");
                chainsUpgrade2ShopContainer.appendChild(chainsUpgrade2);

                let chainsUpgrade2Label = document.createElement("label");
                chainsUpgrade2Label.id = "chainsUpgrade2Label";
                chainsUpgrade2Label.setAttribute("for", "chainsUpgrade2");
                chainsUpgrade2Label.textContent = "Upgrade(5000T)";
                chainsUpgrade2.parentNode.insertBefore(chainsUpgrade2Label, chainsUpgrade2);

                chainsUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                chainsUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                chainsUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                chainsUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                chainsUpgrade2.addEventListener("click", buyChainsUpgrade2);
                chainsUpgrade2Label.addEventListener("click", buyChainsUpgrade2);

                chainsUpgrade2Exists = true;
            }

    if (evolutionHellExists && !cerberusExists && counterNumber >= cerberusEnters) {
        cerberus = document.createElement("img");
        cerberus.src = "cerberus.gif";
        cerberus.id = "cerberus";
        cerberus.name = "grey";
        cerberus.classList.add("cursor");
        cerberusShopContainer.appendChild(cerberus);

        cerberusLabel = document.createElement("label");
        cerberusLabel.id = "cerberusLabel";
        cerberusLabel.setAttribute("for", "cerberus");
        cerberusLabel.textContent = "Buy Cerberus(16x";
        cerberus.parentNode.insertBefore(cerberusLabel, cerberus);

        cerberusDevil = document.createElement("img");
        cerberusDevil.src = "devil.gif";
        cerberusDevil.id = "cerberusDevil";
        cerberusDevil.classList.add("cursor");
        cerberus.parentNode.insertBefore(cerberusDevil, cerberus);

        let cerberusLabel2 = document.createElement("label");
        cerberusLabel2.id = "cerberusLabel2";
        cerberusLabel2.setAttribute("for", "cerberus");
        cerberusLabel2.textContent = ")";
        cerberus.parentNode.insertBefore(cerberusLabel2, cerberus);

        cerberus.addEventListener("mouseover", cursorBackgroundColor);
        cerberus.addEventListener("mouseout", cursorBackgroundColor);
        cerberusLabel.addEventListener("mouseover", cursorBackgroundColor);
        cerberusLabel.addEventListener("mouseout", cursorBackgroundColor);
        cerberus.addEventListener("click", buyCerberus);
        cerberusLabel.addEventListener("click", buyCerberus);

        cerberusExists = true;
    }

    if (counterNumber >= cerberusUpgrade1Enters && !cerberusUpgrade1Exists && evolutionHellExists) {
        let cerberusUpgrade1 = document.createElement("img");
        cerberusUpgrade1.src = "cerberusUpgrade1.gif";
        cerberusUpgrade1.id = "cerberusUpgrade1";
        cerberusUpgrade1.classList.add("cursor");
        cerberusUpgrade1ShopContainer.appendChild(cerberusUpgrade1);

        let cerberusUpgrade1Label = document.createElement("label");
        cerberusUpgrade1Label.id = "cerberusUpgrade1Label";
        cerberusUpgrade1Label.setAttribute("for", "cerberusUpgrade1");
        cerberusUpgrade1Label.textContent = "Upgrade(16000T)";
        cerberusUpgrade1.parentNode.insertBefore(cerberusUpgrade1Label, cerberusUpgrade1);

        cerberusUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
        cerberusUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
        cerberusUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
        cerberusUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
        cerberusUpgrade1.addEventListener("click", buyCerberusUpgrade1);
        cerberusUpgrade1Label.addEventListener("click", buyCerberusUpgrade1);

        cerberusUpgrade1Exists = true;
    }

            if (counterNumber >= cerberusUpgrade2Enters && !cerberusUpgrade2Exists && evolutionHellExists) {
            let cerberusUpgrade2 = document.createElement("img");
            cerberusUpgrade2.src = "cerberusUpgrade2.gif";
            cerberusUpgrade2.id = "cerberusUpgrade2";
            cerberusUpgrade2.classList.add("cursor");
            cerberusUpgrade2ShopContainer.appendChild(cerberusUpgrade2);

            let cerberusUpgrade2Label = document.createElement("label");
            cerberusUpgrade2Label.id = "cerberusUpgrade2Label";
            cerberusUpgrade2Label.setAttribute("for", "cerberusUpgrade2");
            cerberusUpgrade2Label.textContent = "Upgrade(160000T)";
            cerberusUpgrade2.parentNode.insertBefore(cerberusUpgrade2Label, cerberusUpgrade2);

            cerberusUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            cerberusUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            cerberusUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            cerberusUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            cerberusUpgrade2.addEventListener("click", buyCerberusUpgrade2);
            cerberusUpgrade2Label.addEventListener("click", buyCerberusUpgrade2);

            cerberusUpgrade2Exists = true;
        }

        if (evolutionHellExists && !gatesOfHellExists && counterNumber >= gatesOfHellEnters) {
        gatesOfHell = document.createElement("img");
        gatesOfHell.src = "gatesOfHell.gif";
        gatesOfHell.id = "gatesOfHell";
        gatesOfHell.name = "grey";
        gatesOfHell.classList.add("cursor");
        gatesOfHellShopContainer.appendChild(gatesOfHell);

        gatesOfHellLabel = document.createElement("label");
        gatesOfHellLabel.id = "gatesOfHellLabel";
        gatesOfHellLabel.setAttribute("for", "gatesOfHell");
        gatesOfHellLabel.textContent = "Buy Gates of Hell(16x";
        gatesOfHell.parentNode.insertBefore(gatesOfHellLabel, gatesOfHell);

        gatesOfHellChains = document.createElement("img");
        gatesOfHellChains.src = "chains.gif";
        gatesOfHellChains.id = "gatesOfHellChains";
        gatesOfHellChains.classList.add("cursor");
        gatesOfHell.parentNode.insertBefore(gatesOfHellChains, gatesOfHell);

        let gatesOfHellLabel2 = document.createElement("label");
        gatesOfHellLabel2.id = "gatesOfHellLabel2";
        gatesOfHellLabel2.setAttribute("for", "gatesOfHell");
        gatesOfHellLabel2.textContent = ")";
        gatesOfHell.parentNode.insertBefore(gatesOfHellLabel2, gatesOfHell);

        gatesOfHell.addEventListener("mouseover", cursorBackgroundColor);
        gatesOfHell.addEventListener("mouseout", cursorBackgroundColor);
        gatesOfHellLabel.addEventListener("mouseover", cursorBackgroundColor);
        gatesOfHellLabel.addEventListener("mouseout", cursorBackgroundColor);
        gatesOfHell.addEventListener("click", buyGatesOfHell);
        gatesOfHellLabel.addEventListener("click", buyGatesOfHell);

        gatesOfHellExists = true;
    }

            if (counterNumber >= gatesOfHellUpgrade1Enters && !gatesOfHellUpgrade1Exists && evolutionHellExists) {
            let gatesOfHellUpgrade1 = document.createElement("img");
            gatesOfHellUpgrade1.src = "gatesOfHellUpgrade1.gif";
            gatesOfHellUpgrade1.id = "gatesOfHellUpgrade1";
            gatesOfHellUpgrade1.classList.add("cursor");
            gatesOfHellUpgrade1ShopContainer.appendChild(gatesOfHellUpgrade1);

            let gatesOfHellUpgrade1Label = document.createElement("label");
            gatesOfHellUpgrade1Label.id = "gatesOfHellUpgrade1Label";
            gatesOfHellUpgrade1Label.setAttribute("for", "gatesOfHellUpgrade1");
            gatesOfHellUpgrade1Label.textContent = "Upgrade(80000T)";
            gatesOfHellUpgrade1.parentNode.insertBefore(gatesOfHellUpgrade1Label, gatesOfHellUpgrade1);

            gatesOfHellUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHellUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHellUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHellUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHellUpgrade1.addEventListener("click", buyGatesOfHellUpgrade1);
            gatesOfHellUpgrade1Label.addEventListener("click", buyGatesOfHellUpgrade1);

            gatesOfHellUpgrade1Exists = true;
        }

        if (counterNumber >= gatesOfHellUpgrade2Enters && !gatesOfHellUpgrade2Exists && evolutionHellExists) {
            let gatesOfHellUpgrade2 = document.createElement("img");
            gatesOfHellUpgrade2.src = "gatesOfHellUpgrade2.gif";
            gatesOfHellUpgrade2.id = "gatesOfHellUpgrade2";
            gatesOfHellUpgrade2.classList.add("cursor");
            gatesOfHellUpgrade2ShopContainer.appendChild(gatesOfHellUpgrade2);

            let gatesOfHellUpgrade2Label = document.createElement("label");
            gatesOfHellUpgrade2Label.id = "gatesOfHellUpgrade2Label";
            gatesOfHellUpgrade2Label.setAttribute("for", "gatesOfHellUpgrade2");
            gatesOfHellUpgrade2Label.textContent = "Upgrade(800000T)";
            gatesOfHellUpgrade2.parentNode.insertBefore(gatesOfHellUpgrade2Label, gatesOfHellUpgrade2);

            gatesOfHellUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHellUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHellUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHellUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHellUpgrade2.addEventListener("click", buyGatesOfHellUpgrade2);
            gatesOfHellUpgrade2Label.addEventListener("click", buyGatesOfHellUpgrade2);

            gatesOfHellUpgrade2Exists = true;
        }

        if (ascensionProgressSaved >= angelCosts && !angelExists && evolutionHeavenExists) {
            angel = document.createElement("img");
            angel.src = "angel.gif";
            angel.id = "angel";
            angel.name = "grey";
            angel.classList.add("cursor");
            angelShopContainer.appendChild(angel);

            angelLabel = document.createElement("label");
            angelLabel.id = "angelLabel";
            angelLabel.setAttribute("for", "angel");
            angelLabel.textContent = "Buy Angel(10T)";
            angel.parentNode.insertBefore(angelLabel, angel);

            angel.addEventListener("mouseover", cursorBackgroundColor);
            angel.addEventListener("mouseout", cursorBackgroundColor);
            angelLabel.addEventListener("mouseover", cursorBackgroundColor);
            angelLabel.addEventListener("mouseout", cursorBackgroundColor);
            angel.addEventListener("click", buyAngel);
            angelLabel.addEventListener("click", buyAngel);

            angelExists = true;
        }

        if (counterNumber >= angelUpgrade1Enters && !angelUpgrade1Exists && evolutionHeavenExists) {
            let angelUpgrade1 = document.createElement("img");
            angelUpgrade1.src = "angelUpgrade1.gif";
            angelUpgrade1.id = "angelUpgrade1";
            angelUpgrade1.classList.add("cursor");
            angelUpgrade1ShopContainer.appendChild(angelUpgrade1);

            let angelUpgrade1Label = document.createElement("label");
            angelUpgrade1Label.id = "angelUpgrade1Label";
            angelUpgrade1Label.setAttribute("for", "angelUpgrade1");
            angelUpgrade1Label.textContent = "Upgrade(1000T)";
            angelUpgrade1.parentNode.insertBefore(angelUpgrade1Label, angelUpgrade1);

            angelUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
            angelUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
            angelUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
            angelUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
            angelUpgrade1.addEventListener("click", buyAngelUpgrade1);
            angelUpgrade1Label.addEventListener("click", buyAngelUpgrade1);

            angelUpgrade1Exists = true;
        }

        if (counterNumber >= angelUpgrade2Enters && !angelUpgrade2Exists && evolutionHeavenExists) {
            let angelUpgrade2 = document.createElement("img");
            angelUpgrade2.src = "angelUpgrade2.gif";
            angelUpgrade2.id = "angelUpgrade2";
            angelUpgrade2.classList.add("cursor");
            angelUpgrade2ShopContainer.appendChild(angelUpgrade2);

            let angelUpgrade2Label = document.createElement("label");
            angelUpgrade2Label.id = "angelUpgrade2Label";
            angelUpgrade2Label.setAttribute("for", "angelUpgrade2");
            angelUpgrade2Label.textContent = "Upgrade(10000T)";
            angelUpgrade2.parentNode.insertBefore(angelUpgrade2Label, angelUpgrade2);

            angelUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            angelUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            angelUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            angelUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            angelUpgrade2.addEventListener("click", buyAngelUpgrade2);
            angelUpgrade2Label.addEventListener("click", buyAngelUpgrade2);

            angelUpgrade2Exists = true;
        }

        if (counterNumber >= haloEnters && !haloExists && evolutionHeavenExists) {
            halo = document.createElement("img");
            halo.src = "halo.gif";
            halo.id = "halo";
            halo.name = "grey";
            halo.classList.add("cursor");
            haloShopContainer.appendChild(halo);

            haloLabel = document.createElement("label");
            haloLabel.id = "haloLabel";
            haloLabel.setAttribute("for", "halo");
            haloLabel.textContent = "Buy Halo(50T)";
            halo.parentNode.insertBefore(haloLabel, halo);

            halo.addEventListener("mouseover", cursorBackgroundColor);
            halo.addEventListener("mouseout", cursorBackgroundColor);
            haloLabel.addEventListener("mouseover", cursorBackgroundColor);
            haloLabel.addEventListener("mouseout", cursorBackgroundColor);
            halo.addEventListener("click", buyHalo);
            haloLabel.addEventListener("click", buyHalo);

            haloExists = true;
        }

        if (counterNumber >= haloUpgrade1Enters && !haloUpgrade1Exists && evolutionHeavenExists) {
            let haloUpgrade1 = document.createElement("img");
            haloUpgrade1.src = "haloUpgrade1.gif";
            haloUpgrade1.id = "haloUpgrade1";
            haloUpgrade1.classList.add("cursor");
            haloUpgrade1ShopContainer.appendChild(haloUpgrade1);

            let haloUpgrade1Label = document.createElement("label");
            haloUpgrade1Label.id = "haloUpgrade1Label";
            haloUpgrade1Label.setAttribute("for", "haloUpgrade1");
            haloUpgrade1Label.textContent = "Upgrade(500T)";
            haloUpgrade1.parentNode.insertBefore(haloUpgrade1Label, haloUpgrade1);

            haloUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
            haloUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
            haloUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
            haloUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
            haloUpgrade1.addEventListener("click", buyHaloUpgrade1);
            haloUpgrade1Label.addEventListener("click", buyHaloUpgrade1);

            haloUpgrade1Exists = true;
        }

        if (counterNumber >= haloUpgrade2Enters && !haloUpgrade2Exists && evolutionHeavenExists) {
            let haloUpgrade2 = document.createElement("img");
            haloUpgrade2.src = "haloUpgrade2.gif";
            haloUpgrade2.id = "haloUpgrade2";
            haloUpgrade2.classList.add("cursor");
            haloUpgrade2ShopContainer.appendChild(haloUpgrade2);

            let haloUpgrade2Label = document.createElement("label");
            haloUpgrade2Label.id = "haloUpgrade2Label";
            haloUpgrade2Label.setAttribute("for", "haloUpgrade2");
            haloUpgrade2Label.textContent = "Upgrade(5000T)";
            haloUpgrade2.parentNode.insertBefore(haloUpgrade2Label, haloUpgrade2);

            haloUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            haloUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            haloUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            haloUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            haloUpgrade2.addEventListener("click", buyHaloUpgrade2);
            haloUpgrade2Label.addEventListener("click", buyHaloUpgrade2);

            haloUpgrade2Exists = true;
        }

        if (evolutionHeavenExists && !visionExists && counterNumber >= visionEnters) {
            vision = document.createElement("img");
            vision.src = "vision.gif";
            vision.id = "vision";
            vision.name = "grey";
            vision.classList.add("cursor");
            visionShopContainer.appendChild(vision);

            visionLabel = document.createElement("label");
            visionLabel.id = "visionLabel";
            visionLabel.setAttribute("for", "vision");
            visionLabel.textContent = "Buy Vision(16x";
            vision.parentNode.insertBefore(visionLabel, vision);

            visionAngel = document.createElement("img");
            visionAngel.src = "angel.gif";
            visionAngel.id = "visionAngel";
            visionAngel.classList.add("cursor");
            vision.parentNode.insertBefore(visionAngel, vision);

            let visionLabel2 = document.createElement("label");
            visionLabel2.id = "visionLabel2";
            visionLabel2.setAttribute("for", "vision");
            visionLabel2.textContent = ")";
            vision.parentNode.insertBefore(visionLabel2, vision);

            vision.addEventListener("mouseover", cursorBackgroundColor);
            vision.addEventListener("mouseout", cursorBackgroundColor);
            visionLabel.addEventListener("mouseover", cursorBackgroundColor);
            visionLabel.addEventListener("mouseout", cursorBackgroundColor);
            vision.addEventListener("click", buyVision);
            visionLabel.addEventListener("click", buyVision);

            visionExists = true;
        }

        if (counterNumber >= visionUpgrade1Enters && !visionUpgrade1Exists && evolutionHeavenExists) {
            let visionUpgrade1 = document.createElement("img");
            visionUpgrade1.src = "visionUpgrade1.gif";
            visionUpgrade1.id = "visionUpgrade1";
            visionUpgrade1.classList.add("cursor");
            visionUpgrade1ShopContainer.appendChild(visionUpgrade1);

            let visionUpgrade1Label = document.createElement("label");
            visionUpgrade1Label.id = "visionUpgrade1Label";
            visionUpgrade1Label.setAttribute("for", "visionUpgrade1");
            visionUpgrade1Label.textContent = "Upgrade(16000T)";
            visionUpgrade1.parentNode.insertBefore(visionUpgrade1Label, visionUpgrade1);

            visionUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
            visionUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
            visionUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
            visionUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
            visionUpgrade1.addEventListener("click", buyVisionUpgrade1);
            visionUpgrade1Label.addEventListener("click", buyVisionUpgrade1);

            visionUpgrade1Exists = true;
        }

        if (counterNumber >= visionUpgrade2Enters && !visionUpgrade2Exists && evolutionHeavenExists) {
            let visionUpgrade2 = document.createElement("img");
            visionUpgrade2.src = "visionUpgrade2.gif";
            visionUpgrade2.id = "visionUpgrade2";
            visionUpgrade2.classList.add("cursor");
            visionUpgrade2ShopContainer.appendChild(visionUpgrade2);

            let visionUpgrade2Label = document.createElement("label");
            visionUpgrade2Label.id = "visionUpgrade2Label";
            visionUpgrade2Label.setAttribute("for", "visionUpgrade2");
            visionUpgrade2Label.textContent = "Upgrade(160000T)";
            visionUpgrade2.parentNode.insertBefore(visionUpgrade2Label, visionUpgrade2);

            visionUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            visionUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            visionUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            visionUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            visionUpgrade2.addEventListener("click", buyVisionUpgrade2);
            visionUpgrade2Label.addEventListener("click", buyVisionUpgrade2);

            visionUpgrade2Exists = true;
        }

        if (evolutionHeavenExists && !gatesOfHeavenExists && counterNumber >= gatesOfHeavenEnters) {
            gatesOfHeaven = document.createElement("img");
            gatesOfHeaven.src = "gatesOfHeaven.gif";
            gatesOfHeaven.id = "gatesOfHeaven";
            gatesOfHeaven.name = "grey";
            gatesOfHeaven.classList.add("cursor");
            gatesOfHeavenShopContainer.appendChild(gatesOfHeaven);

            gatesOfHeavenLabel = document.createElement("label");
            gatesOfHeavenLabel.id = "gatesOfHeavenLabel";
            gatesOfHeavenLabel.setAttribute("for", "gatesOfHeaven");
            gatesOfHeavenLabel.textContent = "Buy Gates of Heaven(16x";
            gatesOfHeaven.parentNode.insertBefore(gatesOfHeavenLabel, gatesOfHeaven);

            gatesOfHeavenHalo = document.createElement("img");
            gatesOfHeavenHalo.src = "halo.gif";
            gatesOfHeavenHalo.id = "gatesOfHeavenHalo";
            gatesOfHeavenHalo.classList.add("cursor");
            gatesOfHeaven.parentNode.insertBefore(gatesOfHeavenHalo, gatesOfHeaven);

            let gatesOfHeavenLabel2 = document.createElement("label");
            gatesOfHeavenLabel2.id = "gatesOfHeavenLabel2";
            gatesOfHeavenLabel2.setAttribute("for", "gatesOfHeaven");
            gatesOfHeavenLabel2.textContent = ")";
            gatesOfHeaven.parentNode.insertBefore(gatesOfHeavenLabel2, gatesOfHeaven);

            gatesOfHeaven.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHeaven.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHeavenLabel.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHeavenLabel.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHeaven.addEventListener("click", buyGatesOfHeaven);
            gatesOfHeavenLabel.addEventListener("click", buyGatesOfHeaven);

            gatesOfHeavenExists = true;
        }

        if (counterNumber >= gatesOfHeavenUpgrade1Enters && !gatesOfHeavenUpgrade1Exists && evolutionHeavenExists) {
            let gatesOfHeavenUpgrade1 = document.createElement("img");
            gatesOfHeavenUpgrade1.src = "gatesOfHeavenUpgrade1.gif";
            gatesOfHeavenUpgrade1.id = "gatesOfHeavenUpgrade1";
            gatesOfHeavenUpgrade1.classList.add("cursor");
            gatesOfHeavenUpgrade1ShopContainer.appendChild(gatesOfHeavenUpgrade1);

            let gatesOfHeavenUpgrade1Label = document.createElement("label");
            gatesOfHeavenUpgrade1Label.id = "gatesOfHeavenUpgrade1Label";
            gatesOfHeavenUpgrade1Label.setAttribute("for", "gatesOfHeavenUpgrade1");
            gatesOfHeavenUpgrade1Label.textContent = "Upgrade(80000T)";
            gatesOfHeavenUpgrade1.parentNode.insertBefore(gatesOfHeavenUpgrade1Label, gatesOfHeavenUpgrade1);

            gatesOfHeavenUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHeavenUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHeavenUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHeavenUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHeavenUpgrade1.addEventListener("click", buyGatesOfHeavenUpgrade1);
            gatesOfHeavenUpgrade1Label.addEventListener("click", buyGatesOfHeavenUpgrade1);

            gatesOfHeavenUpgrade1Exists = true;
        }

        if (counterNumber >= gatesOfHeavenUpgrade2Enters && !gatesOfHeavenUpgrade2Exists && evolutionHeavenExists) {
            let gatesOfHeavenUpgrade2 = document.createElement("img");
            gatesOfHeavenUpgrade2.src = "gatesOfHeavenUpgrade2.gif";
            gatesOfHeavenUpgrade2.id = "gatesOfHeavenUpgrade2";
            gatesOfHeavenUpgrade2.classList.add("cursor");
            gatesOfHeavenUpgrade2ShopContainer.appendChild(gatesOfHeavenUpgrade2);

            let gatesOfHeavenUpgrade2Label = document.createElement("label");
            gatesOfHeavenUpgrade2Label.id = "gatesOfHeavenUpgrade2Label";
            gatesOfHeavenUpgrade2Label.setAttribute("for", "gatesOfHeavenUpgrade2");
            gatesOfHeavenUpgrade2Label.textContent = "Upgrade(800000T)";
            gatesOfHeavenUpgrade2.parentNode.insertBefore(gatesOfHeavenUpgrade2Label, gatesOfHeavenUpgrade2);

            gatesOfHeavenUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHeavenUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHeavenUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHeavenUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
            gatesOfHeavenUpgrade2.addEventListener("click", buyGatesOfHeavenUpgrade2);
            gatesOfHeavenUpgrade2Label.addEventListener("click", buyGatesOfHeavenUpgrade2);

            gatesOfHeavenUpgrade2Exists = true;
        }

        if (ascensionProgressSaved >= rocketCosts && !rocketExists && evolutionAlienExists) {
            rocket = document.createElement("img");
            rocket.src = "rocket.gif";
            rocket.id = "rocket";
            rocket.name = "grey";
            rocket.classList.add("cursor");
            rocketShopContainer.appendChild(rocket);

            rocketLabel = document.createElement("label");
            rocketLabel.id = "rocketLabel";
            rocketLabel.setAttribute("for", "rocket");
            rocketLabel.textContent = "Buy Rocket(100000T)";
            rocket.parentNode.insertBefore(rocketLabel, rocket);

            rocket.addEventListener("mouseover", cursorBackgroundColor);
            rocket.addEventListener("mouseout", cursorBackgroundColor);
            rocketLabel.addEventListener("mouseover", cursorBackgroundColor);
            rocketLabel.addEventListener("mouseout", cursorBackgroundColor);
            rocket.addEventListener("click", buyRocket);
            rocketLabel.addEventListener("click", buyRocket);

            rocketExists = true;
        }

        if (counterNumber >= rocketUpgrade1Enters && !rocketUpgrade1Exists && evolutionAlienExists) {
                let rocketUpgrade1 = document.createElement("img");
                rocketUpgrade1.src = "rocketUpgrade1.gif";
                rocketUpgrade1.id = "rocketUpgrade1";
                rocketUpgrade1.classList.add("cursor");
                rocketUpgrade1ShopContainer.appendChild(rocketUpgrade1);

                let rocketUpgrade1Label = document.createElement("label");
                rocketUpgrade1Label.id = "rocketUpgrade1Label";
                rocketUpgrade1Label.setAttribute("for", "rocketUpgrade1");
                rocketUpgrade1Label.textContent = "Upgrade(10000000T)";
                rocketUpgrade1.parentNode.insertBefore(rocketUpgrade1Label, rocketUpgrade1);

                rocketUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                rocketUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                rocketUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                rocketUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                rocketUpgrade1.addEventListener("click", buyRocketUpgrade1);
                rocketUpgrade1Label.addEventListener("click", buyRocketUpgrade1);

                rocketUpgrade1Exists = true;
            }

            if (counterNumber >= rocketUpgrade2Enters && !rocketUpgrade2Exists && evolutionAlienExists) {
                let rocketUpgrade2 = document.createElement("img");
                rocketUpgrade2.src = "rocketUpgrade2.gif";
                rocketUpgrade2.id = "rocketUpgrade2";
                rocketUpgrade2.classList.add("cursor");
                rocketUpgrade2ShopContainer.appendChild(rocketUpgrade2);

                let rocketUpgrade2Label = document.createElement("label");
                rocketUpgrade2Label.id = "rocketUpgrade2Label";
                rocketUpgrade2Label.setAttribute("for", "rocketUpgrade2");
                rocketUpgrade2Label.textContent = "Upgrade(100000000T)";
                rocketUpgrade2.parentNode.insertBefore(rocketUpgrade2Label, rocketUpgrade2);

                rocketUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                rocketUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                rocketUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                rocketUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                rocketUpgrade2.addEventListener("click", buyRocketUpgrade2);
                rocketUpgrade2Label.addEventListener("click", buyRocketUpgrade2);

                rocketUpgrade2Exists = true;
            }

            if (counterNumber >= satelliteEnters && !satelliteExists && evolutionAlienExists) {
                satellite = document.createElement("img");
                satellite.src = "satellite.gif";
                satellite.id = "satellite";
                satellite.name = "grey";
                satellite.classList.add("cursor");
                satelliteShopContainer.appendChild(satellite);

                satelliteLabel = document.createElement("label");
                satelliteLabel.id = "satelliteLabel";
                satelliteLabel.setAttribute("for", "satellite");
                satelliteLabel.textContent = "Buy Satellite(500000T)";
                satellite.parentNode.insertBefore(satelliteLabel, satellite);

                satellite.addEventListener("mouseover", cursorBackgroundColor);
                satellite.addEventListener("mouseout", cursorBackgroundColor);
                satelliteLabel.addEventListener("mouseover", cursorBackgroundColor);
                satelliteLabel.addEventListener("mouseout", cursorBackgroundColor);
                satellite.addEventListener("click", buySatellite);
                satelliteLabel.addEventListener("click", buySatellite);

                satelliteExists = true;
            }

            if (counterNumber >= satelliteUpgrade1Enters && !satelliteUpgrade1Exists && evolutionAlienExists) {
                let satelliteUpgrade1 = document.createElement("img");
                satelliteUpgrade1.src = "satelliteUpgrade1.gif";
                satelliteUpgrade1.id = "satelliteUpgrade1";
                satelliteUpgrade1.classList.add("cursor");
                satelliteUpgrade1ShopContainer.appendChild(satelliteUpgrade1);

                let satelliteUpgrade1Label = document.createElement("label");
                satelliteUpgrade1Label.id = "satelliteUpgrade1Label";
                satelliteUpgrade1Label.setAttribute("for", "satelliteUpgrade1");
                satelliteUpgrade1Label.textContent = "Upgrade(50000000T)";
                satelliteUpgrade1.parentNode.insertBefore(satelliteUpgrade1Label, satelliteUpgrade1);

                satelliteUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                satelliteUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                satelliteUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                satelliteUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                satelliteUpgrade1.addEventListener("click", buySatelliteUpgrade1);
                satelliteUpgrade1Label.addEventListener("click", buySatelliteUpgrade1);

                satelliteUpgrade1Exists = true;
            }

            if (counterNumber >= satelliteUpgrade2Enters && !satelliteUpgrade2Exists && evolutionAlienExists) {
                let satelliteUpgrade2 = document.createElement("img");
                satelliteUpgrade2.src = "satelliteUpgrade2.gif";
                satelliteUpgrade2.id = "satelliteUpgrade2";
                satelliteUpgrade2.classList.add("cursor");
                satelliteUpgrade2ShopContainer.appendChild(satelliteUpgrade2);

                let satelliteUpgrade2Label = document.createElement("label");
                satelliteUpgrade2Label.id = "satelliteUpgrade2Label";
                satelliteUpgrade2Label.setAttribute("for", "satelliteUpgrade2");
                satelliteUpgrade2Label.textContent = "Upgrade(500000000T)";
                satelliteUpgrade2.parentNode.insertBefore(satelliteUpgrade2Label, satelliteUpgrade2);

                satelliteUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                satelliteUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                satelliteUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                satelliteUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                satelliteUpgrade2.addEventListener("click", buySatelliteUpgrade2);
                satelliteUpgrade2Label.addEventListener("click", buySatelliteUpgrade2);

                satelliteUpgrade2Exists = true;
            }

            if (evolutionAlienExists && !moonExists && counterNumber >= moonEnters) {
                    moon = document.createElement("img");
                    moon.src = "moon.gif";
                    moon.id = "moon";
                    moon.name = "grey";
                    moon.classList.add("cursor");
                    moonShopContainer.appendChild(moon);

                    moonLabel = document.createElement("label");
                    moonLabel.id = "moonLabel";
                    moonLabel.setAttribute("for", "moon");
                    moonLabel.textContent = "Buy Moon(16x";
                    moon.parentNode.insertBefore(moonLabel, moon);

                    moonRocket = document.createElement("img");
                    moonRocket.src = "rocket.gif";
                    moonRocket.id = "moonRocket";
                    moonRocket.classList.add("cursor");
                    moon.parentNode.insertBefore(moonRocket, moon);

                    let moonLabel2 = document.createElement("label");
                    moonLabel2.id = "moonLabel2";
                    moonLabel2.setAttribute("for", "moon");
                    moonLabel2.textContent = ")";
                    moon.parentNode.insertBefore(moonLabel2, moon);

                    moon.addEventListener("mouseover", cursorBackgroundColor);
                    moon.addEventListener("mouseout", cursorBackgroundColor);
                    moonLabel.addEventListener("mouseover", cursorBackgroundColor);
                    moonLabel.addEventListener("mouseout", cursorBackgroundColor);
                    moon.addEventListener("click", buyMoon);
                    moonLabel.addEventListener("click", buyMoon);

                    moonExists = true;
                }

                if (counterNumber >= moonUpgrade1Enters && !moonUpgrade1Exists && evolutionAlienExists) {
                    let moonUpgrade1 = document.createElement("img");
                    moonUpgrade1.src = "moonUpgrade1.gif";
                    moonUpgrade1.id = "moonUpgrade1";
                    moonUpgrade1.classList.add("cursor");
                    moonUpgrade1ShopContainer.appendChild(moonUpgrade1);

                    let moonUpgrade1Label = document.createElement("label");
                    moonUpgrade1Label.id = "moonUpgrade1Label";
                    moonUpgrade1Label.setAttribute("for", "moonUpgrade1");
                    moonUpgrade1Label.textContent = "Upgrade(160000000T)";
                    moonUpgrade1.parentNode.insertBefore(moonUpgrade1Label, moonUpgrade1);

                    moonUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                    moonUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                    moonUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                    moonUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                    moonUpgrade1.addEventListener("click", buyMoonUpgrade1);
                    moonUpgrade1Label.addEventListener("click", buyMoonUpgrade1);

                    moonUpgrade1Exists = true;
                }

                if (counterNumber >= moonUpgrade2Enters && !moonUpgrade2Exists && evolutionAlienExists) {
                    let moonUpgrade2 = document.createElement("img");
                    moonUpgrade2.src = "moonUpgrade2.gif";
                    moonUpgrade2.id = "moonUpgrade2";
                    moonUpgrade2.classList.add("cursor");
                    moonUpgrade2ShopContainer.appendChild(moonUpgrade2);

                    let moonUpgrade2Label = document.createElement("label");
                    moonUpgrade2Label.id = "moonUpgrade2Label";
                    moonUpgrade2Label.setAttribute("for", "moonUpgrade2");
                    moonUpgrade2Label.textContent = "Upgrade(1600000000T)";
                    moonUpgrade2.parentNode.insertBefore(moonUpgrade2Label, moonUpgrade2);

                    moonUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                    moonUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                    moonUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                    moonUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                    moonUpgrade2.addEventListener("click", buyMoonUpgrade2);
                    moonUpgrade2Label.addEventListener("click", buyMoonUpgrade2);

                    moonUpgrade2Exists = true;
                }

                if (evolutionAlienExists && !nebulosaExists && counterNumber >= nebulosaEnters) {
                nebulosa = document.createElement("img");
                nebulosa.src = "nebulosa.gif";
                nebulosa.id = "nebulosa";
                nebulosa.name = "grey";
                nebulosa.classList.add("cursor");
                nebulosaShopContainer.appendChild(nebulosa);

                nebulosaLabel = document.createElement("label");
                nebulosaLabel.id = "nebulosaLabel";
                nebulosaLabel.setAttribute("for", "nebulosa");
                nebulosaLabel.textContent = "Buy Nebulosa(16x";
                nebulosa.parentNode.insertBefore(nebulosaLabel, nebulosa);

                nebulosaSatellite = document.createElement("img");
                nebulosaSatellite.src = "satellite.gif";
                nebulosaSatellite.id = "nebulosaSatellite";
                nebulosaSatellite.classList.add("cursor");
                nebulosa.parentNode.insertBefore(nebulosaSatellite, nebulosa);

                let nebulosaLabel2 = document.createElement("label");
                nebulosaLabel2.id = "nebulosaLabel2";
                nebulosaLabel2.setAttribute("for", "nebulosa");
                nebulosaLabel2.textContent = ")";
                nebulosa.parentNode.insertBefore(nebulosaLabel2, nebulosa);

                nebulosa.addEventListener("mouseover", cursorBackgroundColor);
                nebulosa.addEventListener("mouseout", cursorBackgroundColor);
                nebulosaLabel.addEventListener("mouseover", cursorBackgroundColor);
                nebulosaLabel.addEventListener("mouseout", cursorBackgroundColor);
                nebulosa.addEventListener("click", buyNebulosa);
                nebulosaLabel.addEventListener("click", buyNebulosa);

                nebulosaExists = true;
            }

            if (counterNumber >= nebulosaUpgrade1Enters && !nebulosaUpgrade1Exists && evolutionAlienExists) {
                let nebulosaUpgrade1 = document.createElement("img");
                nebulosaUpgrade1.src = "nebulosaUpgrade1.gif";
                nebulosaUpgrade1.id = "nebulosaUpgrade1";
                nebulosaUpgrade1.classList.add("cursor");
                nebulosaUpgrade1ShopContainer.appendChild(nebulosaUpgrade1);

                let nebulosaUpgrade1Label = document.createElement("label");
                nebulosaUpgrade1Label.id = "nebulosaUpgrade1Label";
                nebulosaUpgrade1Label.setAttribute("for", "nebulosaUpgrade1");
                nebulosaUpgrade1Label.textContent = "Upgrade(800000000T)";
                nebulosaUpgrade1.parentNode.insertBefore(nebulosaUpgrade1Label, nebulosaUpgrade1);

                nebulosaUpgrade1.addEventListener("mouseover", cursorBackgroundColor);
                nebulosaUpgrade1.addEventListener("mouseout", cursorBackgroundColor);
                nebulosaUpgrade1Label.addEventListener("mouseover", cursorBackgroundColor);
                nebulosaUpgrade1Label.addEventListener("mouseout", cursorBackgroundColor);
                nebulosaUpgrade1.addEventListener("click", buyNebulosaUpgrade1);
                nebulosaUpgrade1Label.addEventListener("click", buyNebulosaUpgrade1);

                nebulosaUpgrade1Exists = true;
            }

            if (counterNumber >= nebulosaUpgrade2Enters && !nebulosaUpgrade2Exists && evolutionAlienExists) {
                let nebulosaUpgrade2 = document.createElement("img");
                nebulosaUpgrade2.src = "nebulosaUpgrade2.gif";
                nebulosaUpgrade2.id = "nebulosaUpgrade2";
                nebulosaUpgrade2.classList.add("cursor");
                nebulosaUpgrade2ShopContainer.appendChild(nebulosaUpgrade2);

                let nebulosaUpgrade2Label = document.createElement("label");
                nebulosaUpgrade2Label.id = "nebulosaUpgrade2Label";
                nebulosaUpgrade2Label.setAttribute("for", "nebulosaUpgrade2");
                nebulosaUpgrade2Label.textContent = "Upgrade(8000000000T)";
                nebulosaUpgrade2.parentNode.insertBefore(nebulosaUpgrade2Label, nebulosaUpgrade2);

                nebulosaUpgrade2.addEventListener("mouseover", cursorBackgroundColor);
                nebulosaUpgrade2.addEventListener("mouseout", cursorBackgroundColor);
                nebulosaUpgrade2Label.addEventListener("mouseover", cursorBackgroundColor);
                nebulosaUpgrade2Label.addEventListener("mouseout", cursorBackgroundColor);
                nebulosaUpgrade2.addEventListener("click", buyNebulosaUpgrade2);
                nebulosaUpgrade2Label.addEventListener("click", buyNebulosaUpgrade2);

                nebulosaUpgrade2Exists = true;
            }
    }

        function cursorBackgroundColor(e) {

            if (e.target.id == "highScoresText") {
                if (e.type == "mouseover") {
                    highScoresText.style.color = "blue";
                } else if (e.type == "mouseout") {
                    highScoresText.style.color = "black";
                }
            }

            if (e.target.id == "exitX") {
                if (e.type == "mouseover") {
                    exitX.style.color = "blue";
                } else if (e.type == "mouseout") {
                    exitX.style.color = "black";
                }
            }

            if (e.target.id == "cursor" || e.target.id == "cursorLabel") {
                if (e.type == "mouseover") {
                    cursor.classList.add("backgroundBlue");
                } else if (e.type == "mouseout") {
                    cursor.classList.remove("backgroundBlue");
                }
            }

            if (e.target.id == "cursorUpgrade1" || e.target.id == "cursorUpgrade1Label") {
                if (e.type == "mouseover") {
                    cursorUpgrade1.src = "cursorUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    cursorUpgrade1.src = "cursorUpgrade1Shop.gif";
                }
            }

            if (e.target.id == "cursorUpgrade1Shop" || e.target.id == "cursorUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    cursorUpgrade1Shop.src = "cursorUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    cursorUpgrade1Shop.src = "cursorUpgrade1Shop.gif";
                }
            }

            if (e.target.id == "cursorUpgrade2" || e.target.id == "cursorUpgrade2Label") {
                if (e.type == "mouseover") {
                    cursorUpgrade2.src = "cursorUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    cursorUpgrade2.src = "cursorUpgrade2.gif";
                }
            }

            if (e.target.id == "cursorUpgrade2Shop" || e.target.id == "cursorUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    cursorUpgrade2Shop.src = "cursorUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    cursorUpgrade2Shop.src = "cursorUpgrade2.gif";
                }
            }

            if (e.target.id == "scratcher" || e.target.id == "scratcherLabel") {
                if (e.type == "mouseover") {
                    scratcher.src = "scratcherBlue.gif";
                } else if (e.type == "mouseout") {
                    scratcher.src = "scratcher.gif";
                }
            }

            if (e.target.id == "scratcherUpgrade1" || e.target.id == "scratcherUpgrade1Label") {
                if (e.type == "mouseover") {
                    scratcherUpgrade1.src = "scratcherUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    scratcherUpgrade1.src = "scratcherUpgrade1.gif";
                }
            }

            if (e.target.id == "scratcherUpgrade1Shop" || e.target.id == "scratcherUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    scratcher.src = "scratcherUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    scratcher.src = "scratcherUpgrade1.gif";
                }
            }

            if (e.target.id == "catToy" || e.target.id == "catToyLabel") {
                if (e.type == "mouseover") {
                    catToy.src = "catToyBlue.gif";
                } else if (e.type == "mouseout") {
                    catToy.src = "catToy.gif";
                }
            }

            if (e.target.id == "scratcherUpgrade2" || e.target.id == "scratcherUpgrade2Label") {
                if (e.type == "mouseover") {
                    scratcherUpgrade2.src = "scratcherUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    scratcherUpgrade2.src = "scratcherUpgrade2.gif";
                }
            }

            if (e.target.id == "scratcherUpgrade2Shop" || e.target.id == "scratcherUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    scratcherUpgrade2Shop.src = "scratcherUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    scratcherUpgrade2Shop.src = "scratcherUpgrade2.gif";
                }
            }

            if (e.target.id == "catToyUpgrade1" || e.target.id == "catToyUpgrade1Label") {
                if (e.type == "mouseover") {
                    catToyUpgrade1.src = "catToyUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    catToyUpgrade1.src = "catToyUpgrade1.gif";
                }
            }

            if (e.target.id == "catToyUpgrade1Shop" || e.target.id == "catToyUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    catToy.src = "catToyUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    catToy.src = "catToyUpgrade1.gif";
                }
            }

            if (e.target.id == "catToyUpgrade2" || e.target.id == "catToyUpgrade2Label") {
                if (e.type == "mouseover") {
                    catToyUpgrade2.src = "catToyUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    catToyUpgrade2.src = "catToyUpgrade2.gif";
                }
            }

            if (e.target.id == "catToyUpgrade2Shop" || e.target.id == "catToyUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    catToy.src = "catToyUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    catToy.src = "catToyUpgrade2.gif";
                }
            }

            if (e.target.id == "catSnacks" || e.target.id == "catSnacksLabel") {
                if (e.type == "mouseover") {
                    catSnacks.src = "catSnacksBlue.gif";
                } else if (e.type == "mouseout") {
                    catSnacks.src = "catSnacks.gif";
                }
            }

            if (e.target.id == "catSnacksUpgrade1" || e.target.id == "catSnacksUpgrade1Label") {
                if (e.type == "mouseover") {
                    catSnacksUpgrade1.src = "catSnacksUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    catSnacksUpgrade1.src = "catSnacksUpgrade1.gif";
                }
            }

            if (e.target.id == "catSnacksUpgrade1Shop" || e.target.id == "catSnacksUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    catSnacks.src = "catSnacksUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    catSnacks.src = "catSnacksUpgrade1.gif";
                }
            }

            if (e.target.id == "catSnacksUpgrade2" || e.target.id == "catSnacksUpgrade2Label") {
                if (e.type == "mouseover") {
                    catSnacksUpgrade2.src = "catSnacksUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    catSnacksUpgrade2.src = "catSnacksUpgrade2.gif";
                }
            }

            if (e.target.id == "catSnacksUpgrade2Shop" || e.target.id == "catSnacksUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    catSnacks.src = "catSnacksUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    catSnacks.src = "catSnacksUpgrade2.gif";
                }
            }

            if (e.target.id == "sword" || e.target.id == "swordLabel") {
                if (e.type == "mouseover") {
                    sword.src = "swordBlue.gif";
                } else if (e.type == "mouseout") {
                    sword.src = "sword.gif";
                }
            }

            if (e.target.id == "swordUpgrade1" || e.target.id == "swordUpgrade1Label") {
                if (e.type == "mouseover") {
                    swordUpgrade1.src = "swordUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    swordUpgrade1.src = "swordUpgrade1.gif";
                }
            }

            if (e.target.id == "swordUpgrade1Shop" || e.target.id == "swordUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    swordUpgrade1Shop.src = "swordUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    swordUpgrade1Shop.src = "swordUpgrade1.gif";
                }
            }

            if (e.target.id == "swordUpgrade2" || e.target.id == "swordUpgrade2Label") {
                if (e.type == "mouseover") {
                    swordUpgrade2.src = "swordUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    swordUpgrade2.src = "swordUpgrade2.gif";
                }
            }

            if (e.target.id == "swordUpgrade2Shop" || e.target.id == "swordUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    swordUpgrade2Shop.src = "swordUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    swordUpgrade2Shop.src = "swordUpgrade2.gif";
                }
            }

            if (e.target.id == "armor" || e.target.id == "armorLabel") {
                if (e.type == "mouseover") {
                    armor.src = "armorBlue.gif";
                } else if (e.type == "mouseout") {
                    armor.src = "armor.gif";
                }
            }

            if (e.target.id == "armorUpgrade1" || e.target.id == "armorUpgrade1Label") {
                if (e.type == "mouseover") {
                    armorUpgrade1.src = "armorUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    armorUpgrade1.src = "armorUpgrade1.gif";
                }
            }

            if (e.target.id == "armorUpgrade1Shop" || e.target.id == "armorUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    armorUpgrade1Shop.src = "armorUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    armorUpgrade1Shop.src = "armorUpgrade1.gif";
                }
            }

            if (e.target.id == "armorUpgrade2" || e.target.id == "armorUpgrade2Label") {
                if (e.type == "mouseover") {
                    armorUpgrade2.src = "armorUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    armorUpgrade2.src = "armorUpgrade2.gif";
                }
            }

            if (e.target.id == "armorUpgrade2Shop" || e.target.id == "armorUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    armorUpgrade2Shop.src = "armorUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    armorUpgrade2Shop.src = "armorUpgrade2.gif";
                }
            }

            if (e.target.id == "codex" || e.target.id == "codexLabel") {
                if (e.type == "mouseover") {
                    codex.src = "codexBlue.gif";
                } else if (e.type == "mouseout") {
                    codex.src = "codex.gif";
                }
            }

            if (e.target.id == "codexUpgrade1" || e.target.id == "codexUpgrade1Label") {
                if (e.type == "mouseover") {
                    codexUpgrade1.src = "codexUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    codexUpgrade1.src = "codexUpgrade1.gif";
                }
            }

            if (e.target.id == "codexUpgrade1Shop" || e.target.id == "codexUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    codex.src = "codexUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    codex.src = "codexUpgrade1.gif";
                }
            }

            if (e.target.id == "codexUpgrade2" || e.target.id == "codexUpgrade2Label") {
                if (e.type == "mouseover") {
                    codexUpgrade2.src = "codexUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    codexUpgrade2.src = "codexUpgrade2.gif";
                }
            }

            if (e.target.id == "codexUpgrade2Shop" || e.target.id == "codexUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    codex.src = "codexUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    codex.src = "codexUpgrade2.gif";
                }
            }

            if (e.target.id == "castle" || e.target.id == "castleLabel") {
                if (e.type == "mouseover") {
                    castle.src = "castleBlue.gif";
                } else if (e.type == "mouseout") {
                    castle.src = "castle.gif";
                }
            }

            if (e.target.id == "castleUpgrade1" || e.target.id == "castleUpgrade1Label") {
                if (e.type == "mouseover") {
                    castleUpgrade1.src = "castleUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    castleUpgrade1.src = "castleUpgrade1.gif";
                }
            }

            if (e.target.id == "castleUpgrade1Shop" || e.target.id == "castleUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    castle.src = "castleUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    castle.src = "castleUpgrade1.gif";
                }
            }

            if (e.target.id == "castleUpgrade2" || e.target.id == "castleUpgrade2Label") {
                if (e.type == "mouseover") {
                    castleUpgrade2.src = "castleUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    castleUpgrade2.src = "castleUpgrade2.gif";
                }
            }

            if (e.target.id == "castleUpgrade2Shop" || e.target.id == "castleUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    castle.src = "castleUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    castle.src = "castleUpgrade2.gif";
                }
            }

            if (e.target.id == "crown" || e.target.id == "crownLabel") {
                if (e.type == "mouseover") {
                    crown.src = "crownBlue.gif";
                } else if (e.type == "mouseout") {
                    crown.src = "crown.gif";
                }
            }

            if (e.target.id == "crownUpgrade1" || e.target.id == "crownUpgrade1Label") {
                if (e.type == "mouseover") {
                    crownUpgrade1.src = "crownUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    crownUpgrade1.src = "crownUpgrade1.gif";
                }
            }

            if (e.target.id == "crownUpgrade1Shop" || e.target.id == "crownUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    crownUpgrade1Shop.src = "crownUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    crownUpgrade1Shop.src = "crownUpgrade1.gif";
                }
            }

            if (e.target.id == "crownUpgrade2" || e.target.id == "crownUpgrade2Label") {
            if (e.type == "mouseover") {
                crownUpgrade2.src = "crownUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                crownUpgrade2.src = "crownUpgrade2.gif";
            }
        }

        if (e.target.id == "crownUpgrade2Shop" || e.target.id == "crownUpgrade2LabelShop") {
            if (e.type == "mouseover") {
                crownUpgrade2Shop.src = "crownUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                crownUpgrade2Shop.src = "crownUpgrade2.gif";
            }
        }

            if (e.target.id == "sceptre" || e.target.id == "sceptreLabel") {
                if (e.type == "mouseover") {
                    sceptre.src = "sceptreBlue.gif";
                } else if (e.type == "mouseout") {
                    sceptre.src = "sceptre.gif";
                }
            }
            
            if (e.target.id == "sceptreUpgrade1" || e.target.id == "sceptreUpgrade1Label") {
                if (e.type == "mouseover") {
                    sceptreUpgrade1.src = "sceptreUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    sceptreUpgrade1.src = "sceptreUpgrade1.gif";
                }
            }

            if (e.target.id == "sceptreUpgrade1Shop" || e.target.id == "sceptreUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    sceptreUpgrade1Shop.src = "sceptreUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    sceptreUpgrade1Shop.src = "sceptreUpgrade1.gif";
                }
            }

            if (e.target.id == "sceptreUpgrade2" || e.target.id == "sceptreUpgrade2Label") {
            if (e.type == "mouseover") {
                sceptreUpgrade2.src = "sceptreUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                sceptreUpgrade2.src = "sceptreUpgrade2.gif";
            }
        }

        if (e.target.id == "sceptreUpgrade2Shop" || e.target.id == "sceptreUpgrade2LabelShop") {
            if (e.type == "mouseover") {
                sceptreUpgrade2Shop.src = "sceptreUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                sceptreUpgrade2Shop.src = "sceptreUpgrade2.gif";
            }
        }

            if (e.target.id == "academy" || e.target.id == "academyLabel") {
                if (e.type == "mouseover") {
                    academy.src = "academyBlue.gif";
                } else if (e.type == "mouseout") {
                    academy.src = "academy.gif";
                }
            }

            if (e.target.id == "academyUpgrade1" || e.target.id == "academyUpgrade1Label") {
            if (e.type == "mouseover") {
                academyUpgrade1.src = "academyUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                academyUpgrade1.src = "academyUpgrade1.gif";
            }
        }

        if (e.target.id == "academyUpgrade1Shop" || e.target.id == "academyUpgrade1LabelShop") {
            if (e.type == "mouseover") {
                academy.src = "academyUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                academy.src = "academyUpgrade1.gif";
            }
        }

        if (e.target.id == "academyUpgrade2" || e.target.id == "academyUpgrade2Label") {
            if (e.type == "mouseover") {
                academyUpgrade2.src = "academyUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                academyUpgrade2.src = "academyUpgrade2.gif";
            }
        }

        if (e.target.id == "academyUpgrade2Shop" || e.target.id == "academyUpgrade2LabelShop") {
            if (e.type == "mouseover") {
                academyUpgrade2Shop.src = "academyUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                academyUpgrade2Shop.src = "academyUpgrade2.gif";
            }
        }

            if (e.target.id == "kingdom" || e.target.id == "kingdomLabel") {
                if (e.type == "mouseover") {
                    kingdom.src = "kingdomBlue.gif";
                } else if (e.type == "mouseout") {
                    kingdom.src = "kingdom.gif";
                }
            }

            if (e.target.id == "kingdomUpgrade1" || e.target.id == "kingdomUpgrade1Label") {
            if (e.type == "mouseover") {
                kingdomUpgrade1.src = "kingdomUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                kingdomUpgrade1.src = "kingdomUpgrade1.gif";
            }
        }

        if (e.target.id == "kingdomUpgrade1Shop" || e.target.id == "kingdomUpgrade1LabelShop") {
            if (e.type == "mouseover") {
                kingdom.src = "kingdomUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                kingdom.src = "kingdomUpgrade1.gif";
            }
        }

        if (e.target.id == "kingdomUpgrade2" || e.target.id == "kingdomUpgrade2Label") {
            if (e.type == "mouseover") {
                kingdomUpgrade2.src = "kingdomUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                kingdomUpgrade2.src = "kingdomUpgrade2.gif";
            }
        }

        if (e.target.id == "kingdomUpgrade2Shop" || e.target.id == "kingdomUpgrade2LabelShop") {
            if (e.type == "mouseover") {
                kingdomUpgrade2Shop.src = "kingdomUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                kingdomUpgrade2Shop.src = "kingdomUpgrade2.gif";
            }
        }

        if (e.target.id == "devil" || e.target.id == "devilLabel") {
            if (e.type == "mouseover") {
                devil.src = "devilBlue.gif";
            } else if (e.type == "mouseout") {
                devil.src = "devil.gif";
            }
            }

            if (e.target.id == "devilUpgrade1" || e.target.id == "devilUpgrade1Label") {
                if (e.type == "mouseover") {
                    devilUpgrade1.src = "devilUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    devilUpgrade1.src = "devilUpgrade1.gif";
                }
            }

            if (e.target.id == "devilUpgrade1Shop" || e.target.id == "devilUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    devilUpgrade1Shop.src = "devilUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    devilUpgrade1Shop.src = "devilUpgrade1.gif";
                }
            }

            if (e.target.id == "devilUpgrade2" || e.target.id == "devilUpgrade2Label") {
                if (e.type == "mouseover") {
                    devilUpgrade2.src = "devilUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    devilUpgrade2.src = "devilUpgrade2.gif";
                }
            }

            if (e.target.id == "devilUpgrade2Shop" || e.target.id == "devilUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    devilUpgrade2Shop.src = "devilUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    devilUpgrade2Shop.src = "devilUpgrade2.gif";
                }
            }

            if (e.target.id == "chains" || e.target.id == "chainsLabel") {
            if (e.type == "mouseover") {
                chains.src = "chainsBlue.gif";
            } else if (e.type == "mouseout") {
                chains.src = "chains.gif";
            }
        }

        if (e.target.id == "chainsUpgrade1" || e.target.id == "chainsUpgrade1Label") {
                if (e.type == "mouseover") {
                    chainsUpgrade1.src = "chainsUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    chainsUpgrade1.src = "chainsUpgrade1.gif";
                }
            }

            if (e.target.id == "chainsUpgrade1Shop" || e.target.id == "chainsUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    chainsUpgrade1Shop.src = "chainsUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    chainsUpgrade1Shop.src = "chainsUpgrade1.gif";
                }
            }

            if (e.target.id == "chainsUpgrade2" || e.target.id == "chainsUpgrade2Label") {
                if (e.type == "mouseover") {
                    chainsUpgrade2.src = "chainsUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    chainsUpgrade2.src = "chainsUpgrade2.gif";
                }
            }

            if (e.target.id == "chainsUpgrade2Shop" || e.target.id == "chainsUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    chainsUpgrade2Shop.src = "chainsUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    chainsUpgrade2Shop.src = "chainsUpgrade2.gif";
                }
            }

        if (e.target.id == "cerberus" || e.target.id == "cerberusLabel") {
            if (e.type == "mouseover") {
                cerberus.src = "cerberusBlue.gif";
            } else if (e.type == "mouseout") {
                cerberus.src = "cerberus.gif";
            }
        }

                if (e.target.id == "cerberusUpgrade1" || e.target.id == "cerberusUpgrade1Label") {
            if (e.type == "mouseover") {
                cerberusUpgrade1.src = "cerberusUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                cerberusUpgrade1.src = "cerberusUpgrade1.gif";
            }
        }

        if (e.target.id == "cerberusUpgrade1Shop" || e.target.id == "cerberusUpgrade1LabelShop") {
            if (e.type == "mouseover") {
                cerberus.src = "cerberusUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                cerberus.src = "cerberusUpgrade1.gif";
            }
        }

                if (e.target.id == "cerberusUpgrade2" || e.target.id == "cerberusUpgrade2Label") {
            if (e.type == "mouseover") {
                cerberusUpgrade2.src = "cerberusUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                cerberusUpgrade2.src = "cerberusUpgrade2.gif";
            }
        }

        if (e.target.id == "cerberusUpgrade2Shop" || e.target.id == "cerberusUpgrade2LabelShop") {
            if (e.type == "mouseover") {
                cerberus.src = "cerberusUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                cerberus.src = "cerberusUpgrade2.gif";
            }
        }

        if (e.target.id == "gatesOfHell" || e.target.id == "gatesOfHellLabel") {
            if (e.type == "mouseover") {
                gatesOfHell.src = "gatesOfHellBlue.gif";
            } else if (e.type == "mouseout") {
                gatesOfHell.src = "gatesOfHell.gif";
            }
        }

                if (e.target.id == "gatesOfHellUpgrade1" || e.target.id == "gatesOfHellUpgrade1Label") {
            if (e.type == "mouseover") {
                gatesOfHellUpgrade1.src = "gatesOfHellUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                gatesOfHellUpgrade1.src = "gatesOfHellUpgrade1.gif";
            }
        }

        if (e.target.id == "gatesOfHellUpgrade1Shop" || e.target.id == "gatesOfHellUpgrade1LabelShop") {
            if (e.type == "mouseover") {
                gatesOfHell.src = "gatesOfHellUpgrade1Blue.gif";
            } else if (e.type == "mouseout") {
                gatesOfHell.src = "gatesOfHellUpgrade1.gif";
            }
        }

                if (e.target.id == "gatesOfHellUpgrade2" || e.target.id == "gatesOfHellUpgrade2Label") {
            if (e.type == "mouseover") {
                gatesOfHellUpgrade2.src = "gatesOfHellUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                gatesOfHellUpgrade2.src = "gatesOfHellUpgrade2.gif";
            }
        }

        if (e.target.id == "gatesOfHellUpgrade2Shop" || e.target.id == "gatesOfHellUpgrade2LabelShop") {
            if (e.type == "mouseover") {
                gatesOfHell.src = "gatesOfHellUpgrade2Blue.gif";
            } else if (e.type == "mouseout") {
                gatesOfHell.src = "gatesOfHellUpgrade2.gif";
            }
        }

        if (e.target.id == "angel" || e.target.id == "angelLabel") {
                if (e.type == "mouseover") {
                    angel.src = "angelBlue.gif";
                } else if (e.type == "mouseout") {
                    angel.src = "angel.gif";
                }
            }

            if (e.target.id == "angelUpgrade1" || e.target.id == "angelUpgrade1Label") {
                if (e.type == "mouseover") {
                    angelUpgrade1.src = "angelUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    angelUpgrade1.src = "angelUpgrade1.gif";
                }
            }

            if (e.target.id == "angelUpgrade1Shop" || e.target.id == "angelUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    angelUpgrade1Shop.src = "angelUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    angelUpgrade1Shop.src = "angelUpgrade1.gif";
                }
            }

            if (e.target.id == "angelUpgrade2" || e.target.id == "angelUpgrade2Label") {
                if (e.type == "mouseover") {
                    angelUpgrade2.src = "angelUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    angelUpgrade2.src = "angelUpgrade2.gif";
                }
            }

            if (e.target.id == "angelUpgrade2Shop" || e.target.id == "angelUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    angelUpgrade2Shop.src = "angelUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    angelUpgrade2Shop.src = "angelUpgrade2.gif";
                }
            }

            if (e.target.id == "halo" || e.target.id == "haloLabel") {
                if (e.type == "mouseover") {
                    halo.src = "haloBlue.gif";
                } else if (e.type == "mouseout") {
                    halo.src = "halo.gif";
                }
            }

            if (e.target.id == "haloUpgrade1" || e.target.id == "haloUpgrade1Label") {
                if (e.type == "mouseover") {
                    haloUpgrade1.src = "haloUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    haloUpgrade1.src = "haloUpgrade1.gif";
                }
            }

            if (e.target.id == "haloUpgrade1Shop" || e.target.id == "haloUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    haloUpgrade1Shop.src = "haloUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    haloUpgrade1Shop.src = "haloUpgrade1.gif";
                }
            }

            if (e.target.id == "haloUpgrade2" || e.target.id == "haloUpgrade2Label") {
                if (e.type == "mouseover") {
                    haloUpgrade2.src = "haloUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    haloUpgrade2.src = "haloUpgrade2.gif";
                }
            }

            if (e.target.id == "haloUpgrade2Shop" || e.target.id == "haloUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    haloUpgrade2Shop.src = "haloUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    haloUpgrade2Shop.src = "haloUpgrade2.gif";
                }
            }

            if (e.target.id == "vision" || e.target.id == "visionLabel") {
                if (e.type == "mouseover") {
                    vision.src = "visionBlue.gif";
                } else if (e.type == "mouseout") {
                    vision.src = "vision.gif";
                }
            }

            if (e.target.id == "visionUpgrade1" || e.target.id == "visionUpgrade1Label") {
                if (e.type == "mouseover") {
                    visionUpgrade1.src = "visionUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    visionUpgrade1.src = "visionUpgrade1.gif";
                }
            }

            if (e.target.id == "visionUpgrade1Shop" || e.target.id == "visionUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    vision.src = "visionUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    vision.src = "visionUpgrade1.gif";
                }
            }

            if (e.target.id == "visionUpgrade2" || e.target.id == "visionUpgrade2Label") {
                if (e.type == "mouseover") {
                    visionUpgrade2.src = "visionUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    visionUpgrade2.src = "visionUpgrade2.gif";
                }
            }

            if (e.target.id == "visionUpgrade2Shop" || e.target.id == "visionUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    vision.src = "visionUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    vision.src = "visionUpgrade2.gif";
                }
            }

            if (e.target.id == "gatesOfHeaven" || e.target.id == "gatesOfHeavenLabel") {
                if (e.type == "mouseover") {
                    gatesOfHeaven.src = "gatesOfHeavenBlue.gif";
                } else if (e.type == "mouseout") {
                    gatesOfHeaven.src = "gatesOfHeaven.gif";
                }
            }

            if (e.target.id == "gatesOfHeavenUpgrade1" || e.target.id == "gatesOfHeavenUpgrade1Label") {
                if (e.type == "mouseover") {
                    gatesOfHeavenUpgrade1.src = "gatesOfHeavenUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    gatesOfHeavenUpgrade1.src = "gatesOfHeavenUpgrade1.gif";
                }
            }

            if (e.target.id == "gatesOfHeavenUpgrade1Shop" || e.target.id == "gatesOfHeavenUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    gatesOfHeaven.src = "gatesOfHeavenUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    gatesOfHeaven.src = "gatesOfHeavenUpgrade1.gif";
                }
            }

            if (e.target.id == "gatesOfHeavenUpgrade2" || e.target.id == "gatesOfHeavenUpgrade2Label") {
                if (e.type == "mouseover") {
                    gatesOfHeavenUpgrade2.src = "gatesOfHeavenUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    gatesOfHeavenUpgrade2.src = "gatesOfHeavenUpgrade2.gif";
                }
            }

            if (e.target.id == "gatesOfHeavenUpgrade2Shop" || e.target.id == "gatesOfHeavenUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    gatesOfHeaven.src = "gatesOfHeavenUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    gatesOfHeaven.src = "gatesOfHeavenUpgrade2.gif";
                }
            }

            if (e.target.id == "rocket" || e.target.id == "rocketLabel") {
                if (e.type == "mouseover") {
                    rocket.src = "rocketBlue.gif";
                } else if (e.type == "mouseout") {
                    rocket.src = "rocket.gif";
                }
            }

            if (e.target.id == "rocketUpgrade1" || e.target.id == "rocketUpgrade1Label") {
                if (e.type == "mouseover") {
                    rocketUpgrade1.src = "rocketUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    rocketUpgrade1.src = "rocketUpgrade1.gif";
                }
            }

            if (e.target.id == "rocketUpgrade1Shop" || e.target.id == "rocketUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    rocketUpgrade1Shop.src = "rocketUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    rocketUpgrade1Shop.src = "rocketUpgrade1.gif";
                }
            }

            if (e.target.id == "rocketUpgrade2" || e.target.id == "rocketUpgrade2Label") {
                if (e.type == "mouseover") {
                    rocketUpgrade2.src = "rocketUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    rocketUpgrade2.src = "rocketUpgrade2.gif";
                }
            }

            if (e.target.id == "rocketUpgrade2Shop" || e.target.id == "rocketUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    rocketUpgrade2Shop.src = "rocketUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    rocketUpgrade2Shop.src = "rocketUpgrade2.gif";
                }
            }

            if (e.target.id == "satellite" || e.target.id == "satelliteLabel") {
                if (e.type == "mouseover") {
                    satellite.src = "satelliteBlue.gif";
                } else if (e.type == "mouseout") {
                    satellite.src = "satellite.gif";
                }
            }

            if (e.target.id == "satelliteUpgrade1" || e.target.id == "satelliteUpgrade1Label") {
                if (e.type == "mouseover") {
                    satelliteUpgrade1.src = "satelliteUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    satelliteUpgrade1.src = "satelliteUpgrade1.gif";
                }
            }

            if (e.target.id == "satelliteUpgrade1Shop" || e.target.id == "satelliteUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    satelliteUpgrade1Shop.src = "satelliteUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    satelliteUpgrade1Shop.src = "satelliteUpgrade1.gif";
                }
            }

            if (e.target.id == "satelliteUpgrade2" || e.target.id == "satelliteUpgrade2Label") {
                if (e.type == "mouseover") {
                    satelliteUpgrade2.src = "satelliteUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    satelliteUpgrade2.src = "satelliteUpgrade2.gif";
                }
            }

            if (e.target.id == "satelliteUpgrade2Shop" || e.target.id == "satelliteUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    satelliteUpgrade2Shop.src = "satelliteUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    satelliteUpgrade2Shop.src = "satelliteUpgrade2.gif";
                }
            }

            if (e.target.id == "moon" || e.target.id == "moonLabel") {
                if (e.type == "mouseover") {
                    moon.src = "moonBlue.gif";
                } else if (e.type == "mouseout") {
                    moon.src = "moon.gif";
                }
            }

            if (e.target.id == "moonUpgrade1" || e.target.id == "moonUpgrade1Label") {
                if (e.type == "mouseover") {
                    moonUpgrade1.src = "moonUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    moonUpgrade1.src = "moonUpgrade1.gif";
                }
            }

            if (e.target.id == "moonUpgrade1Shop" || e.target.id == "moonUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    moon.src = "moonUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    moon.src = "moonUpgrade1.gif";
                }
            }

            if (e.target.id == "moonUpgrade2" || e.target.id == "moonUpgrade2Label") {
                if (e.type == "mouseover") {
                    moonUpgrade2.src = "moonUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    moonUpgrade2.src = "moonUpgrade2.gif";
                }
            }

            if (e.target.id == "moonUpgrade2Shop" || e.target.id == "moonUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    moon.src = "moonUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    moon.src = "moonUpgrade2.gif";
                }
            }

            if (e.target.id == "nebulosa" || e.target.id == "nebulosaLabel") {
                if (e.type == "mouseover") {
                    nebulosa.src = "nebulosaBlue.gif";
                } else if (e.type == "mouseout") {
                    nebulosa.src = "nebulosa.gif";
                }
            }

            if (e.target.id == "nebulosaUpgrade1" || e.target.id == "nebulosaUpgrade1Label") {
                if (e.type == "mouseover") {
                    nebulosaUpgrade1.src = "nebulosaUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    nebulosaUpgrade1.src = "nebulosaUpgrade1.gif";
                }
            }

            if (e.target.id == "nebulosaUpgrade1Shop" || e.target.id == "nebulosaUpgrade1LabelShop") {
                if (e.type == "mouseover") {
                    nebulosa.src = "nebulosaUpgrade1Blue.gif";
                } else if (e.type == "mouseout") {
                    nebulosa.src = "nebulosaUpgrade1.gif";
                }
            }

            if (e.target.id == "nebulosaUpgrade2" || e.target.id == "nebulosaUpgrade2Label") {
                if (e.type == "mouseover") {
                    nebulosaUpgrade2.src = "nebulosaUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    nebulosaUpgrade2.src = "nebulosaUpgrade2.gif";
                }
            }

            if (e.target.id == "nebulosaUpgrade2Shop" || e.target.id == "nebulosaUpgrade2LabelShop") {
                if (e.type == "mouseover") {
                    nebulosa.src = "nebulosaUpgrade2Blue.gif";
                } else if (e.type == "mouseout") {
                    nebulosa.src = "nebulosaUpgrade2.gif";
                }
            }
        }

        function buyCursor() {
           
            if (!anyMonsterExists) {

            if (cursor.id == "cursor") {
            if (counterNumber < cursorCosts) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (cursorCounter >= 16) {
            shopWarning.innerHTML = "Cursor limit reached";
           }

           else if (counterNumber >= cursorCosts && cursorCounter < 16) {
           cursorCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - cursorCosts;
           newCursor = document.createElement("img");
           newCursor.src = "cursor.gif";
           newCursor.classList.add("cursor");
           
           if (cursorCounter > 8) {
           cursorContainer.appendChild(newCursor);
           }
           else if (cursorCounter <= 8) {
            cursorContainer2.appendChild(newCursor);
           }

           cursorInterval = setInterval(addToCounterAutomatic, cursorSpeedInterval);
           cursorIntervals.push(cursorInterval);
           meowsPerSecCounter = meowsPerSecCounter + cursorSpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
        } 

            if (cursor.id == "cursorUpgrade1Shop") {
            if (counterNumber < cursorUpgraded1Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (cursorCounter >= 16) {
            shopWarning.innerHTML = "Cursor limit reached";
           }

           else if (counterNumber >= cursorUpgraded1Costs && cursorCounter < 16) {
           cursorCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - cursorUpgraded1Costs;
           newCursorUpgrade1 = document.createElement("img");
           newCursorUpgrade1.src = "cursorUpgrade1Shop.gif";
           newCursorUpgrade1.classList.add("cursor");
           
           if (cursorCounter > 8) {
           cursorContainer.appendChild(newCursorUpgrade1);
           }
           else if (cursorCounter <= 8) {
            cursorContainer2.appendChild(newCursorUpgrade1);
           }

           cursorInterval = setInterval(addToCounterAutomatic, cursorUpgrade1SpeedInterval);
           cursorIntervals.push(cursorInterval);
           meowsPerSecCounter = meowsPerSecCounter + cursorUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
          }

          if (cursor.id == "cursorUpgrade2Shop") {
            if (counterNumber < cursorUpgraded2Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (cursorCounter >= 16) {
            shopWarning.innerHTML = "Cursor limit reached";
           }

           else if (counterNumber >= cursorUpgraded2Costs && cursorCounter < 16) {
           cursorCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - cursorUpgraded2Costs;
           newCursorUpgrade2 = document.createElement("img");
           newCursorUpgrade2.src = "cursorUpgrade2.gif";
           newCursorUpgrade2.classList.add("cursor");
           
           if (cursorCounter > 8) {
           cursorContainer.appendChild(newCursorUpgrade2);
           }
           else if (cursorCounter <= 8) {
            cursorContainer2.appendChild(newCursorUpgrade2);
           }

           cursorInterval = setInterval(addToCounterAutomatic, cursorUpgrade2SpeedInterval);
           cursorIntervals.push(cursorInterval);
           meowsPerSecCounter = meowsPerSecCounter + cursorUpgrade2Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
          }
         }
         
         else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }

        }

        function buyCursorUpgrade1() {
            
            if (!anyMonsterExists) {

            if (counterNumber < cursorUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            cursor.src = "cursorUpgrade1Shop.gif";
            cursor.id = "cursorUpgrade1Shop";
            cursorLabel.id = "cursorUpgrade1LabelShop";
            cursorLabel.innerHTML = "Buy Cursor(" + cursorUpgraded1Costs + ")";
            cursor.name = "pink";
            cursorLabel.name = "pink";
            

            counterNumber = counterNumber - cursorUpgrade1Costs;

            cursor.addEventListener("mouseover", cursorBackgroundColor);
            cursor.addEventListener("mouseout", cursorBackgroundColor);

            cursorUpgrade1Container.style.display = "none";
            cursorUpgrade1Container.style.display = "none";

            clearAllCursorIntervals();

            let cursorsToRemove = cursorCounter;
            let cursorsCountSaved = cursorCounter;

            while (cursorsToRemove > 0 && cursorContainer.firstChild) {
            cursorContainer.removeChild(cursorContainer.firstChild);
            cursorsToRemove--;
            cursorCounter--;
            meowsPerSecCounter = meowsPerSecCounter - cursorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cursorsToRemove > 0 && cursorContainer2.firstChild) {
            cursorContainer2.removeChild(cursorContainer2.firstChild);
            cursorsToRemove--;
            cursorCounter--;
            meowsPerSecCounter = meowsPerSecCounter - cursorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

           while (cursorsCountSaved > 0) {
           cursorCounter++;
           cursorsCountSaved--;
           let newCursorUpgrade1 = document.createElement("img");
           newCursorUpgrade1.src = "cursorUpgrade1Shop.gif";
           newCursorUpgrade1.classList.add("cursor");
           cursorInterval = setInterval(addToCounterAutomatic, cursorUpgrade1SpeedInterval);
           cursorIntervals.push(cursorInterval);
           meowsPerSecCounter = meowsPerSecCounter + cursorUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

           if (cursorCounter > 8) {
           cursorContainer.appendChild(newCursorUpgrade1);
           }
           else if (cursorCounter <= 8) {
           cursorContainer2.appendChild(newCursorUpgrade1);
           }
           }
            cursorUpgrade1Exists2 = true;
        }
        }

        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
        }

        }
        
        function buyCursorUpgrade2 () {
            if (!anyMonsterExists) {

            if (!cursorUpgrade1Exists2) {
                shopWarning.innerHTML = "Incorrect upgrade order";
        }

                else if (counterNumber < cursorUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else  {
            shopWarning.innerHTML = "";
            cursor.src = "cursorUpgrade2.gif";
            cursor.id = "cursorUpgrade2Shop";
            cursorLabel.id = "cursorUpgrade2LabelShop";
            cursorLabel.innerHTML = "Buy Cursor(" + cursorUpgraded2Costs + ")";
            cursor.name = "blue";
            cursorLabel.name = "blue";


            counterNumber = counterNumber - cursorUpgrade2Costs;

            cursor.addEventListener("mouseover", cursorBackgroundColor);
            cursor.addEventListener("mouseout", cursorBackgroundColor);


            cursorUpgrade2Container.style.display = "none";
            cursorUpgrade2Container.style.display = "none";

            clearAllCursorIntervals();

            let cursorsToRemove = cursorCounter;
            let cursorsCountSaved = cursorCounter;

            while (cursorsToRemove > 0 && cursorContainer.firstChild) {
            cursorContainer.removeChild(cursorContainer.firstChild);
            cursorsToRemove--;
            cursorCounter--;
            meowsPerSecCounter = meowsPerSecCounter - cursorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cursorsToRemove > 0 && cursorContainer2.firstChild) {
            cursorContainer2.removeChild(cursorContainer2.firstChild);
            cursorsToRemove--;
            cursorCounter--;
            meowsPerSecCounter = meowsPerSecCounter - cursorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cursorsCountSaved > 0) {
            cursorCounter++;
            cursorsCountSaved--;
            let newCursorUpgrade2 = document.createElement("img");
            newCursorUpgrade2.src = "cursorUpgrade2.gif";
            newCursorUpgrade2.classList.add("cursor");
            cursorInterval = setInterval(addToCounterAutomatic, cursorUpgrade2SpeedInterval);
            cursorIntervals.push(cursorInterval);
            meowsPerSecCounter = meowsPerSecCounter + cursorUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (cursorCounter > 8) {
            cursorContainer.appendChild(newCursorUpgrade2);
            }
            else if (cursorCounter <= 8) {
            cursorContainer2.appendChild(newCursorUpgrade2);
            }
            }
            cursorUpgrade2Exists2 = true;
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyScratcher() {
            if (!anyMonsterExists) {

           if (scratcher.id == "scratcher") {
            if (counterNumber < scratcherCosts) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (scratcherCounter >= 16) {
            shopWarning.innerHTML = "Scratcher limit reached";
           }

           else if (counterNumber >= 50 && scratcherCounter < 16){
           scratcherCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - scratcherCosts;
           let newScratcher = document.createElement("img");
           newScratcher.src = "scratcher.gif";
           newScratcher.classList.add("cursor");
           
           if (scratcherCounter > 8) {
           scratcherContainer.appendChild(newScratcher);
           }
           else if (scratcherCounter <= 8) {
            scratcherContainer2.appendChild(newScratcher);
           }

           scratcherInterval = setInterval(addToCounterAutomatic, scratcherSpeedInterval);
           scratcherIntervals.push(scratcherInterval);
           meowsPerSecCounter = meowsPerSecCounter + scratcherSpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }
        }

        if (scratcher.id == "scratcherUpgrade1Shop") {
            if (counterNumber < scratcherUpgraded1Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (scratcherCounter >= 16) {
            shopWarning.innerHTML = "Scratcher limit reached";
           }

           else if (counterNumber >= scratcherUpgraded1Costs && scratcherCounter < 16) {
           scratcherCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - scratcherUpgraded1Costs;
           newScratcherUpgrade1 = document.createElement("img");
           newScratcherUpgrade1.src = "scratcherUpgrade1.gif";
           newScratcherUpgrade1.classList.add("cursor");
           
           if (scratcherCounter > 8) {
           scratcherContainer.appendChild(newScratcherUpgrade1);
           }
           else if (scratcherCounter <= 8) {
            scratcherContainer2.appendChild(newScratcherUpgrade1);
           }

           scratcherInterval = setInterval(addToCounterAutomatic, scratcherUpgrade1SpeedInterval);
           scratcherIntervals.push(scratcherInterval);
           meowsPerSecCounter = meowsPerSecCounter + scratcherUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
        } 

        if (scratcher.id == "scratcherUpgrade2Shop") {
            if (counterNumber < scratcherUpgraded2Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (scratcherCounter >= 16) {
            shopWarning.innerHTML = "Scratcher limit reached";
           }

           else if (counterNumber >= scratcherUpgraded2Costs && scratcherCounter < 16) {
           scratcherCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - scratcherUpgraded2Costs;
           newScratcherUpgrade2 = document.createElement("img");
           newScratcherUpgrade2.src = "scratcherUpgrade2.gif";
           newScratcherUpgrade2.classList.add("cursor");
           
           if (scratcherCounter > 8) {
           scratcherContainer.appendChild(newScratcherUpgrade2);
           }
           else if (scratcherCounter <= 8) {
            scratcherContainer2.appendChild(newScratcherUpgrade2);
           }

           scratcherInterval = setInterval(addToCounterAutomatic, scratcherUpgrade2SpeedInterval);
           scratcherIntervals.push(scratcherInterval);
           meowsPerSecCounter = meowsPerSecCounter + scratcherUpgrade2Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
        } 
    }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }

        }

        function buyScratcherUpgrade1() {

            if (!anyMonsterExists) {

            if (counterNumber < scratcherUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            scratcher.src = "scratcherUpgrade1.gif";
            scratcher.id = "scratcherUpgrade1Shop";
            scratcherLabel.id = "scratcherUpgrade1LabelShop";
            scratcherLabel.innerHTML = "Buy Scratcher(" + scratcherUpgraded1Costs + ")";
            scratcher.name = "pink";
            

            counterNumber = counterNumber - scratcherUpgrade1Costs;

            scratcher.addEventListener("mouseover", cursorBackgroundColor);
            scratcher.addEventListener("mouseout", cursorBackgroundColor);


            scratcherUpgrade1Container.style.display = "none";
            scratcherUpgrade1Container.style.display = "none";

            clearAllScratcherIntervals();

            let scratchersToRemove = scratcherCounter;
            let scratchersCountSaved = scratcherCounter;

            while (scratchersToRemove > 0 && scratcherContainer.firstChild) {
            scratcherContainer.removeChild(scratcherContainer.firstChild);
            scratchersToRemove--;
            scratcherCounter--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (scratchersToRemove > 0 && scratcherContainer2.firstChild) {
            scratcherContainer2.removeChild(scratcherContainer2.firstChild);
            scratchersToRemove--;
            scratcherCounter--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

           while (scratchersCountSaved > 0) {
           scratcherCounter++;
           scratchersCountSaved--;
           let newScratcherUpgrade1 = document.createElement("img");
           newScratcherUpgrade1.src = "scratcherUpgrade1.gif";
           newScratcherUpgrade1.classList.add("cursor");
           scratcherInterval = setInterval(addToCounterAutomatic, scratcherUpgrade1SpeedInterval);
           scratcherIntervals.push(scratcherInterval);
           meowsPerSecCounter = meowsPerSecCounter + scratcherUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

           if (scratcherCounter > 8) {
           scratcherContainer.appendChild(newScratcherUpgrade1);
           }
           else if (scratcherCounter <= 8) {
           scratcherContainer2.appendChild(newScratcherUpgrade1);
           }
           }
            
            scratcherUpgrade1Exists2 = true;
        }
    }
         else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }

        }

        function buyScratcherUpgrade2() {
            if (!anyMonsterExists) {

            if (!scratcherUpgrade1Exists2) {
                shopWarning.innerHTML = "Incorrect upgrade order";
            }

                else if (counterNumber < scratcherUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else  {
            shopWarning.innerHTML = "";
            scratcher.src = "scratcherUpgrade2.gif";
            scratcher.id = "scratcherUpgrade2Shop";
            scratcherLabel.id = "scrattcherUpgrade2LabelShop";
            scratcherLabel.innerHTML = "Buy Scratcher(" + scratcherUpgraded2Costs + ")";
            scratcher.name = "blue";


            counterNumber = counterNumber - scratcherUpgrade2Costs;

            scratcher.addEventListener("mouseover", cursorBackgroundColor);
            scratcher.addEventListener("mouseout", cursorBackgroundColor);


            scratcherUpgrade2Container.style.display = "none";
            scratcherUpgrade2Container.style.display = "none";

            clearAllScratcherIntervals();

            let scratchersToRemove = scratcherCounter;
            let scratcherCountSaved = scratcherCounter;

            while (scratchersToRemove > 0 && scratcherContainer.firstChild) {
            scratcherContainer.removeChild(scratcherContainer.firstChild);
            scratchersToRemove--;
            scratcherCounter--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (scratchersToRemove > 0 && scratcherContainer2.firstChild) {
            scratcherContainer2.removeChild(scratcherContainer2.firstChild);
            scratchersToRemove--;
            scratcherCounter--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (scratcherCountSaved > 0) {
            scratcherCounter++;
            scratcherCountSaved--;
            let newScratcherUpgrade2 = document.createElement("img");
            newScratcherUpgrade2.src = "scratcherUpgrade2.gif";
            newScratcherUpgrade2.classList.add("cursor");
            scratcherInterval = setInterval(addToCounterAutomatic, scratcherUpgrade2SpeedInterval);
            scratcherIntervals.push(scratcherInterval);
            meowsPerSecCounter = meowsPerSecCounter + scratcherUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (scratcherCounter > 8) {
            scratcherContainer.appendChild(newScratcherUpgrade2);
            }
            else if (scratcherCounter <= 8) {
            scratcherContainer2.appendChild(newScratcherUpgrade2);
            }
            }
            scratcherUpgrade2Exists2 = true;
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
            }
        
        function buyCatToy() {

            if (!anyMonsterExists) {
            
            if (cursor.name != catToy.name) {
                shopWarning.innerHTML = "Not enough cursors";
            }

            else {
           
            if (cursor.id == "cursor") {
            if (cursorCounter < 16 || catToyUpgrade1Exists2) {
            shopWarning.innerHTML = "Not enough cursors";
           }
           
           if (catToyCounter >= 16) {
            shopWarning.innerHTML = "Cat toy limit reached";
           }

           else if (cursorCounter >= 16 && catToyCounter < 16 && !catToyUpgrade1Exists2) {
           
            clearAllCursorIntervals();

            
            let cursorsToRemove = 16;

            while (cursorsToRemove > 0 && cursorContainer.firstChild) {
            cursorContainer.removeChild(cursorContainer.firstChild);
            cursorsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - cursorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cursorsToRemove > 0 && cursorContainer2.firstChild) {
            cursorContainer2.removeChild(cursorContainer2.firstChild);
            cursorsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - cursorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           catToyCounter++;
           shopWarning.innerHTML = "";
           cursorCounter = cursorCounter - 16;
           let newCatToy = document.createElement("img");
           newCatToy.src = "catToy.gif";
           newCatToy.classList.add("cursor");
           
           if (catToyCounter > 8) {
            catToyContainer.appendChild(newCatToy);
           }
           else if (catToyCounter <= 8) {
            catToyContainer2.appendChild(newCatToy);
           }
           catToyInterval = setInterval(addToCounterAutomatic, catToySpeedInterval);
           catToyIntervals.push(catToyInterval);
           meowsPerSecCounter = meowsPerSecCounter + catToySpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           shopWarning.innerHTML = "";
           }
           }
           
           
           else if (cursor.id != "cursorUpgrade1Shop" || cursor.id == "cursorUpgrade1Shop" && catToy.id != "catToyUpgrade1Shop" || cursorCounter < 16) {
            shopWarning.innerHTML = "Not enough cursors";
           }
           
           else if (catToyCounter >= 16) {
            shopWarning.innerHTML = "Cat toy limit reached";
           }

           else if (cursorCounter >= 16 && catToyCounter < 16 && catToyUpgrade1Exists2) {
           
            clearAllCursorIntervals();

            
            let cursorsToRemove = 16;

            while (cursorsToRemove > 0 && cursorContainer.firstChild) {
            cursorContainer.removeChild(cursorContainer.firstChild);
            cursorsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - cursorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cursorsToRemove > 0 && cursorContainer2.firstChild) {
            cursorContainer2.removeChild(cursorContainer2.firstChild);
            cursorsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - cursorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           catToyCounter++;
           shopWarning.innerHTML = "";
           cursorCounter = cursorCounter - 16;
           let newCatToyUpgrade1 = document.createElement("img");
           newCatToyUpgrade1.src = "catToyUpgrade1.gif";
           newCatToyUpgrade1.classList.add("cursor");
           
           if (catToyCounter > 8) {
            catToyContainer.appendChild(newCatToyUpgrade1);
           }
           else if (catToyCounter <= 8) {
            catToyContainer2.appendChild(newCatToyUpgrade1);
           }
           catToyInterval = setInterval(addToCounterAutomatic, catToyUpgrade1SpeedInterval);
           catToyIntervals.push(catToyInterval);
           meowsPerSecCounter = meowsPerSecCounter + catToyUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           shopWarning.innerHTML = "";
           }
        }

        if (cursorCounter == 0 ) {
            shopWarning.innerHTML = "";
        }
        else if (cursor.id != "cursorUpgrade2Shop" || cursor.id == "cursorUpgrade2Shop" && catToy.id != "catToyUpgrade2Shop" || cursorCounter < 16) {
            shopWarning.innerHTML = "Not enough cursors";
           }


           else if (catToyCounter >= 16) {
            shopWarning.innerHTML = "Cat toy limit reached";
           }

           else if (cursorCounter >= 16 && catToyCounter < 16 && catToyUpgrade2Exists2) {
           
            clearAllCursorIntervals();

            
            let cursorsToRemove = 16;

            while (cursorsToRemove > 0 && cursorContainer.firstChild) {
            cursorContainer.removeChild(cursorContainer.firstChild);
            cursorsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - cursorUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cursorsToRemove > 0 && cursorContainer2.firstChild) {
            cursorContainer2.removeChild(cursorContainer2.firstChild);
            cursorsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - cursorUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           catToyCounter++;
           shopWarning.innerHTML = "";
           cursorCounter = cursorCounter - 16;
           let newCatToyUpgrade2 = document.createElement("img");
           newCatToyUpgrade2.src = "catToyUpgrade2.gif";
           newCatToyUpgrade2.classList.add("cursor");
           
           if (catToyCounter > 8) {
            catToyContainer.appendChild(newCatToyUpgrade2);
           }
           else if (catToyCounter <= 8) {
            catToyContainer2.appendChild(newCatToyUpgrade2);
           }
           catToyInterval = setInterval(function() {
                    counterNumber += catToyUpgrade2Speed;
                    counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }
                }, 1000);
           catToyIntervals.push(catToyInterval);
           meowsPerSecCounter = meowsPerSecCounter + catToyUpgrade2Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           shopWarning.innerHTML = "";
           }
        }
        
        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }
        }

        function buyCatToyUpgrade1() {

            if (!anyMonsterExists) {

            if (counterNumber < catToyUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            catToy.src = "catToyUpgrade1.gif";
            catToyCursor.src = "cursorUpgrade1Shop.gif";
            catToy.id = "catToyUpgrade1Shop";
            catToyLabel.id = "catToyUpgrade1LabelShop";
            catToyLabel.innerHTML = "Buy Cat Toy(16x";
            catToy.name = "pink";
            catToyLabel.name = "pink";
            
            counterNumber = counterNumber - catToyUpgrade1Costs;

            catToy.addEventListener("mouseover", cursorBackgroundColor);
            catToy.addEventListener("mouseout", cursorBackgroundColor);

            catToyUpgrade1ShopContainer.style.display = "none";
            catToyUpgrade1ShopContainer.style.display = "none";

            clearAllCatToyIntervals();

            let catToysToRemove = catToyCounter;
            let catToysCountSaved = catToyCounter;

            while (catToysToRemove > 0 && catToyContainer.firstChild) {
            catToyContainer.removeChild(catToyContainer.firstChild);
            catToysToRemove--;
            catToyCounter--;
            meowsPerSecCounter = meowsPerSecCounter - catToySpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (catToysToRemove > 0 && catToyContainer2.firstChild) {
            catToyContainer2.removeChild(catToyContainer2.firstChild);
            catToysToRemove--;
            catToyCounter--;
            meowsPerSecCounter = meowsPerSecCounter - catToySpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

           while (catToysCountSaved > 0) {
           catToyCounter++;
           catToysCountSaved--;
           let newCatToyUpgrade1 = document.createElement("img");
           newCatToyUpgrade1.src = "catToyUpgrade1.gif";
           newCatToyUpgrade1.classList.add("cursor");
           catToyInterval = setInterval(addToCounterAutomatic, catToyUpgrade1SpeedInterval);
           catToyIntervals.push(catToyInterval);
           meowsPerSecCounter = meowsPerSecCounter + catToyUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

           if (catToyCounter > 8) {
           catToyContainer.appendChild(newCatToyUpgrade1);
           }
           else if (catToyCounter <= 8) {
           catToyContainer2.appendChild(newCatToyUpgrade1);
           }
           }
           catToyUpgrade1Exists2 = true;  
        }
    }

    else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }

    }

        function buyCatToyUpgrade2() {
                if (!anyMonsterExists) {

                if (counterNumber < catToyUpgrade2Costs) {
                    shopWarning.innerHTML = "Not enough meows";
                }

                else if (!catToyUpgrade1Exists2) {
                    shopWarning.innerHTML = "Incorrect upgrade order";
                }

                else {
                catToy.src = "catToyUpgrade2.gif";
                catToyCursor.src = "cursorUpgrade2.gif";
                catToy.id = "catToyUpgrade2Shop";
                catToyLabel.id = "catToyUpgrade2LabelShop";
                catToyLabel.innerHTML = "Buy Cat Toy(16x";
                catToy.name = "blue";
                catToyLabel.name = "blue";

                counterNumber = counterNumber - catToyUpgrade2Costs;

                catToy.addEventListener("mouseover", cursorBackgroundColor);
                catToy.addEventListener("mouseout", cursorBackgroundColor);

                catToyUpgrade2ShopContainer.style.display = "none";
                catToyUpgrade2ShopContainer.style.display = "none";

                clearAllCatToyIntervals();

                let catToysToRemove = catToyCounter;
                let catToysCountSaved = catToyCounter;

                while (catToysToRemove > 0 && catToyContainer.firstChild) {
                catToyContainer.removeChild(catToyContainer.firstChild);
                catToysToRemove--;
                catToyCounter--;
                meowsPerSecCounter = meowsPerSecCounter - catToyUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (catToysToRemove > 0 && catToyContainer2.firstChild) {
                catToyContainer2.removeChild(catToyContainer2.firstChild);
                catToysToRemove--;
                catToyCounter--;
                meowsPerSecCounter = meowsPerSecCounter - catToyUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (catToysCountSaved > 0) {
                catToyCounter++;
                catToysCountSaved--;
                let newCatToyUpgrade2 = document.createElement("img");
                newCatToyUpgrade2.src = "catToyUpgrade2.gif";
                newCatToyUpgrade2.classList.add("cursor");
                catToyInterval = setInterval(function() {
                    counterNumber += catToyUpgrade2Speed;
                    counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }

                }, 1000);
                catToyIntervals.push(catToyInterval);
                meowsPerSecCounter = meowsPerSecCounter + catToyUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (catToyCounter > 8) {
                catToyContainer.appendChild(newCatToyUpgrade2);
                }
                else if (catToyCounter <= 8) {
                catToyContainer2.appendChild(newCatToyUpgrade2);
                }
                }
                catToyUpgrade2Exists2 = true;  
                }
                }

                else if (anyMonsterExists) {
                monsterWarning.innerHTML = "There is a monster!";
                }
        }

        function buyCatSnacks() {

            if (!anyMonsterExists) {

            if (scratcher.name != catSnacks.name) {
                shopWarning.innerHTML = "Not enough scratchers";
            }

            else {

            if (scratcher.id == "scratcher") {
           if (scratcherCounter < 16 || catSnacksUpgrade1Exists2) {
            shopWarning.innerHTML = "Not enough scratchers";
           }
           
           if (catSnacksCounter >= 16) {
            shopWarning.innerHTML = "Cat snacks limit reached";
           }

           else if (scratcherCounter >= 16 && catSnacksCounter < 16 && !catSnacksUpgrade1Exists2) {
           
            clearAllScratcherIntervals();

            let scratchersToRemove = 16;

            while (scratchersToRemove > 0 && scratcherContainer.firstChild) {
            scratcherContainer.removeChild(scratcherContainer.firstChild);
            scratchersToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (scratchersToRemove > 0 && scratcherContainer2.firstChild) {
            scratcherContainer2.removeChild(scratcherContainer2.firstChild);
            scratchersToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           catSnacksCounter++;
           shopWarning.innerHTML = "";
           scratcherCounter = scratcherCounter - 16;
           let newCatSnacks = document.createElement("img");
           newCatSnacks.src = "catSnacks.gif";
           newCatSnacks.classList.add("cursor");
           catSnacksInterval = setInterval(addToCounterAutomatic, catSnacksSpeedInterval);
           catSnacksIntervals.push(catSnacksInterval);
           meowsPerSecCounter = meowsPerSecCounter + catSnacksSpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           
           if (catSnacksCounter > 8) {
            catSnacksContainer.appendChild(newCatSnacks);
           }
           else if (catSnacksCounter <= 8) {
            catSnacksContainer2.appendChild(newCatSnacks);
           }
           }
        }
        
        if (scratcher.id != "scratcherUpgrade1Shop" || scratcher.id == "cursorUpgrade1Shop" && catSnacks.id != "catToyUpgrade1Shop" || catSnacksUpgrade2Exists2 || scratcherCounter < 16) {
            shopWarning.innerHTML = "Not enough scratchers";
           }
           
           else if (catSnacksCounter >= 16) {
            shopWarning.innerHTML = "Cat snacks limit reached";
           }

           else if (scratcherCounter >= 16 && catSnacksCounter < 16 && catSnacksUpgrade1Exists2) {
           
            clearAllScratcherIntervals();

            let scratchersToRemove = 16;

            while (scratchersToRemove > 0 && scratcherContainer.firstChild) {
            scratcherContainer.removeChild(scratcherContainer.firstChild);
            scratchersToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (scratchersToRemove > 0 && scratcherContainer2.firstChild) {
            scratcherContainer2.removeChild(scratcherContainer2.firstChild);
            scratchersToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           catSnacksCounter++;
           shopWarning.innerHTML = "";
           scratcherCounter = scratcherCounter - 16;
           let newCatSnacksUpgrade1 = document.createElement("img");
           newCatSnacksUpgrade1.src = "catSnacksUpgrade1.gif";
           newCatSnacksUpgrade1.classList.add("cursor");
           
           if (catSnacksCounter > 8) {
            catSnacksContainer.appendChild(newCatSnacksUpgrade1);
           }
           else if (catSnacksCounter <= 8) {
            catSnacksContainer2.appendChild(newCatSnacksUpgrade1);
           }
           catSnacksInterval = setInterval(function() {
                counterNumber += catSnacksUpgrade1Speed;
                counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }

            }, 1000);
           catSnacksIntervals.push(catSnacksInterval);
           meowsPerSecCounter = meowsPerSecCounter + catSnacksUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }
           }

           if (scratcher.id != "scratcherUpgrade2Shop" || scratcher.id == "cursorUpgrade2Shop" && catSnacks.id != "catToyUpgrade2Shop" || scratcherCounter < 16) {
            shopWarning.innerHTML = "Not enough scratchers";
            if (scratcherCounter == 0) {
                shopWarning.innerHTML = "";
            }
           }
           
           else if (catSnacksCounter >= 16) {
            shopWarning.innerHTML = "Cat snacks limit reached";
           }

           else if (scratcherCounter >= 16 && catSnacksCounter < 16 && catSnacksUpgrade2Exists2) {
           
            clearAllScratcherIntervals();

            let scratchersToRemove = 16;

            while (scratchersToRemove > 0 && scratcherContainer.firstChild) {
            scratcherContainer.removeChild(scratcherContainer.firstChild);
            scratchersToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (scratchersToRemove > 0 && scratcherContainer2.firstChild) {
            scratcherContainer2.removeChild(scratcherContainer2.firstChild);
            scratchersToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - scratcherUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           catSnacksCounter++;
           shopWarning.innerHTML = "";
           scratcherCounter = scratcherCounter - 16;
           let newCatSnacksUpgrade2 = document.createElement("img");
           newCatSnacksUpgrade2.src = "catSnacksUpgrade2.gif";
           newCatSnacksUpgrade2.classList.add("cursor");
           
           if (catSnacksCounter > 8) {
            catSnacksContainer.appendChild(newCatSnacksUpgrade2);
           }
           else if (catSnacksCounter <= 8) {
            catSnacksContainer2.appendChild(newCatSnacksUpgrade2);
           }
           catSnacksInterval = setInterval(function() {
                counterNumber += catSnacksUpgrade2Speed;
                counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }
            }, 1000);
           catSnacksIntervals.push(catSnacksInterval);
           meowsPerSecCounter = meowsPerSecCounter + catSnacksUpgrade2Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }
        }
        
        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }
        }

        function buyCatSnacksUpgrade1() {

            if (!anyMonsterExists) {

            if (counterNumber < catSnacksUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            catSnacks.src = "catSnacksUpgrade1.gif";
            catSnacksScratcher.src = "scratcherUpgrade1.gif";
            catSnacks.id = "catSnacksUpgrade1Shop";
            catSnacksLabel.id = "catSnacksUpgrade1LabelShop";
            catSnacksLabel.innerHTML = "Buy Cat Snacks(16x";
            catSnacks.name = "pink";
            
            counterNumber = counterNumber - catSnacksUpgrade1Costs;

            catSnacks.addEventListener("mouseover", cursorBackgroundColor);
            catSnacks.addEventListener("mouseout", cursorBackgroundColor);

            catSnacksUpgrade1ShopContainer.style.display = "none";
            catSnacksUpgrade1ShopContainer.style.display = "none";

            clearAllCatSnacksIntervals();

            let catSnacksToRemove = catSnacksCounter;
            let catSnacksCountSaved = catSnacksCounter;

            while (catSnacksToRemove > 0 && catSnacksContainer.firstChild) {
            catSnacksContainer.removeChild(catSnacksContainer.firstChild);
            catSnacksToRemove--;
            catSnacksCounter--;
            meowsPerSecCounter = meowsPerSecCounter - catSnacksSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (catSnacksToRemove > 0 && catSnacksContainer2.firstChild) {
            catSnacksContainer2.removeChild(catSnacksContainer2.firstChild);
            catSnacksToRemove--;
            catSnacksCounter--;
            meowsPerSecCounter = meowsPerSecCounter - catSnacksSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (catSnacksCountSaved > 0) {
           catSnacksCounter++;
           catSnacksCountSaved--;
           let newCatSnacksUpgrade1 = document.createElement("img");
           newCatSnacksUpgrade1.src = "catSnacksUpgrade1.gif";
           newCatSnacksUpgrade1.classList.add("cursor");
           catSnacksInterval = setInterval(function() {
                counterNumber += catSnacksUpgrade1Speed;
                counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }
            }, 1000);
           catSnacksIntervals.push(catSnacksInterval);
           meowsPerSecCounter = meowsPerSecCounter + catSnacksUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

           if (catSnacksCounter > 8) {
           catSnacksContainer.appendChild(newCatSnacksUpgrade1);
           }
           else if (catSnacksCounter <= 8) {
           catSnacksContainer2.appendChild(newCatSnacksUpgrade1);
           }
           }
            
           catSnacksUpgrade1Exists2 = true;
    
            }
        }

        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }

        }

        function buyCatSnacksUpgrade2() {
            if (!anyMonsterExists) {

            if (counterNumber < catSnacksUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else if (!catSnacksUpgrade1Exists2) {
                    shopWarning.innerHTML = "Incorrect upgrade order";
                }

            else {
            catSnacks.src = "catSnacksUpgrade2.gif";
            catSnacksScratcher.src = "scratcherUpgrade2.gif";
            catSnacks.id = "catSnacksUpgrade2Shop";
            catSnacksLabel.id = "catSnacksUpgrade2LabelShop";
            catSnacksLabel.innerHTML = "Buy Cat Snacks(16x";
            catSnacks.name = "blue";

            counterNumber = counterNumber - catSnacksUpgrade2Costs;

            catSnacks.addEventListener("mouseover", cursorBackgroundColor);
            catSnacks.addEventListener("mouseout", cursorBackgroundColor);

            catSnacksUpgrade2ShopContainer.style.display = "none";
            catSnacksUpgrade2ShopContainer.style.display = "none";

            clearAllCatSnacksIntervals();


            let catSnacksToRemove = catSnacksCounter;
            let catSnacksCountSaved = catSnacksCounter;

            while (catSnacksToRemove > 0 && catSnacksContainer.firstChild) {
            catSnacksContainer.removeChild(catSnacksContainer.firstChild);
            catSnacksToRemove--;
            catSnacksCounter--;
            meowsPerSecCounter = meowsPerSecCounter - catSnacksUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (catSnacksToRemove > 0 && catSnacksContainer2.firstChild) {
            catSnacksContainer2.removeChild(catSnacksContainer2.firstChild);
            catSnacksToRemove--;
            catSnacksCounter--;
            meowsPerSecCounter = meowsPerSecCounter - catSnacksUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (catSnacksCountSaved > 0) {
            catSnacksCounter++;
            catSnacksCountSaved--;
            let newCatSnacksUpgrade2 = document.createElement("img");
            newCatSnacksUpgrade2.src = "catSnacksUpgrade2.gif";
            newCatSnacksUpgrade2.classList.add("cursor");
            catSnacksInterval = setInterval(function() {
                counterNumber += catSnacksUpgrade2Speed;
                counter.innerHTML = counterNumber + " meows";
            
            if (counterNumber >= 1000000) {
                counter.innerHTML = parseInt(counterNumber / 1000 ) + "K meows";
            }

            if (counterNumber >= 10000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000 ) + "M meows";
            }

            if (counterNumber >= 100000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000 ) + "B meows";
            }

            if (counterNumber >= 100000000000000) {
             counter.innerHTML = parseInt(counterNumber / 1000000000000 ) + "T meows";
            }
            }, 1000);
            catSnacksIntervals.push(catSnacksInterval);
            meowsPerSecCounter = meowsPerSecCounter + catSnacksUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (catSnacksCounter > 8) {
            catSnacksContainer.appendChild(newCatSnacksUpgrade2);
            }
            else if (catSnacksCounter <= 8) {
            catSnacksContainer2.appendChild(newCatSnacksUpgrade2);
            }
            }

            catSnacksUpgrade2Exists2 = true;

            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buySword() {
                if (!anyMonsterExists) {

            if (sword.id == "sword") {
            if (counterNumber < swordCosts) {
            shopWarning.innerHTML = "Not enough meows";
            }

            if (swordCounter >= 16) {
            shopWarning.innerHTML = "Sword limit reached";
            }

            else if (counterNumber >= swordCosts && swordCounter < 16) {
            swordCounter++;
            shopWarning.innerHTML = "";
            counterNumber = counterNumber - swordCosts;
            newSword = document.createElement("img");
            newSword.src = "sword.gif";
            newSword.classList.add("cursor");

            if (swordCounter > 8) {
            swordContainer.appendChild(newSword);
            }
            else if (swordCounter <= 8) {
            swordContainer2.appendChild(newSword);
            }

            swordInterval = setInterval(function() {
                counterNumber += swordSpeed;
            }, 1000);
            swordIntervals.push(swordInterval);
            meowsPerSecCounter = meowsPerSecCounter + swordSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
            } 

            if (sword.id == "swordUpgrade1Shop") {
            if (counterNumber < swordUpgraded1Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (swordCounter >= 16) {
            shopWarning.innerHTML = "Sword limit reached";
           }

           else if (counterNumber >= swordUpgraded1Costs && swordCounter < 16) {
           swordCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - swordUpgraded1Costs;
           newSwordUpgrade1 = document.createElement("img");
           newSwordUpgrade1.src = "swordUpgrade1.gif";
           newSwordUpgrade1.classList.add("cursor");
           
           if (swordCounter > 8) {
           swordContainer.appendChild(newSwordUpgrade1);
           }
           else if (swordCounter <= 8) {
            swordContainer2.appendChild(newSwordUpgrade1);
           }

           swordInterval = setInterval(function() {
                counterNumber += swordUpgrade1Speed;
            }, 1000);
           swordIntervals.push(swordInterval);
           meowsPerSecCounter = meowsPerSecCounter + swordUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
          }

          if (sword.id == "swordUpgrade2Shop") {
            if (counterNumber < swordUpgraded2Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (swordCounter >= 16) {
            shopWarning.innerHTML = "Sword limit reached";
           }

           else if (counterNumber >= swordUpgraded2Costs && swordCounter < 16) {
           swordCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - swordUpgraded2Costs;
           newSwordUpgrade2 = document.createElement("img");
           newSwordUpgrade2.src = "swordUpgrade2.gif";
           newSwordUpgrade2.classList.add("cursor");
           
           if (swordCounter > 8) {
           swordContainer.appendChild(newSwordUpgrade2);
           }
           else if (swordCounter <= 8) {
            swordContainer2.appendChild(newSwordUpgrade2);
           }

           swordInterval = setInterval(function() {
                counterNumber += swordUpgrade2Speed;
            }, 1000);
           swordIntervals.push(swordInterval);
           meowsPerSecCounter = meowsPerSecCounter + swordUpgrade2Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
          }
        }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buySwordUpgrade1() {
            if (!anyMonsterExists) {

            if (counterNumber < swordUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            sword.src = "swordUpgrade1.gif";
            sword.id = "swordUpgrade1Shop";
            swordLabel.id = "swordUpgrade1LabelShop";
            swordLabel.innerHTML = "Buy Sword(1000K)";
            sword.name = "pink";
            swordLabel.name = "pink";

            counterNumber = counterNumber - swordUpgrade1Costs;

            sword.addEventListener("mouseover", cursorBackgroundColor);
            sword.addEventListener("mouseout", cursorBackgroundColor);

            swordUpgrade1ShopContainer.style.display = "none";
            swordUpgrade1ShopContainer.style.display = "none";

            clearAllSwordIntervals();

            let swordsToRemove = swordCounter;
            let swordsCountSaved = swordCounter;

            while (swordsToRemove > 0 && swordContainer.firstChild) {
            swordContainer.removeChild(swordContainer.firstChild);
            swordsToRemove--;
            swordCounter--;
            meowsPerSecCounter = meowsPerSecCounter -swordSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (swordsToRemove > 0 && swordContainer2.firstChild) {
            swordContainer2.removeChild(swordContainer2.firstChild);
            swordsToRemove--;
            swordCounter--;
            meowsPerSecCounter = meowsPerSecCounter - swordSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (swordsCountSaved > 0) {
            swordCounter++;
            swordsCountSaved--;
            let newSwordUpgrade1 = document.createElement("img");
            newSwordUpgrade1.src = "swordUpgrade1.gif";
            newSwordUpgrade1.classList.add("cursor");
            swordInterval = setInterval(function() {
                counterNumber += swordUpgrade1Speed;
            }, 1000);
            swordIntervals.push(swordInterval);
            meowsPerSecCounter = meowsPerSecCounter + swordUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (swordCounter > 8) {
            swordContainer.appendChild(newSwordUpgrade1);
            }
            else if (swordCounter <= 8) {
            swordContainer2.appendChild(newSwordUpgrade1);
            }
            }
            swordUpgrade1Exists2 = true;
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buySwordUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < swordUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else if (!swordUpgrade1Exists2) {
                    shopWarning.innerHTML = "Incorrect upgrade order";
                }

        else {
        sword.src = "swordUpgrade2.gif";
        sword.id = "swordUpgrade2Shop";
        swordLabel.id = "swordUpgrade2LabelShop";
        swordLabel.innerHTML = "Buy Sword(10000K)";
        sword.name = "blue";

        counterNumber = counterNumber - swordUpgrade2Costs;

        sword.addEventListener("mouseover", cursorBackgroundColor);
        sword.addEventListener("mouseout", cursorBackgroundColor);

        swordUpgrade2ShopContainer.style.display = "none";
        swordUpgrade2ShopContainer.style.display = "none";

        clearAllSwordIntervals();

        let swordsToRemove = swordCounter;
        let swordsCountSaved = swordCounter;

        while (swordsToRemove > 0 && swordContainer.firstChild) {
        swordContainer.removeChild(swordContainer.firstChild);
        swordsToRemove--;
        swordCounter--;
        meowsPerSecCounter = meowsPerSecCounter -swordUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (swordsToRemove > 0 && swordContainer2.firstChild) {
        swordContainer2.removeChild(swordContainer2.firstChild);
        swordsToRemove--;
        swordCounter--;
        meowsPerSecCounter = meowsPerSecCounter - swordUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (swordsCountSaved > 0) {
        swordCounter++;
        swordsCountSaved--;
        let newSwordUpgrade2 = document.createElement("img");
        newSwordUpgrade2.src = "swordUpgrade2.gif";
        newSwordUpgrade2.classList.add("cursor");
        swordInterval = setInterval(function() {
            counterNumber += swordUpgrade2Speed;
        }, 1000);
        swordIntervals.push(swordInterval);
        meowsPerSecCounter = meowsPerSecCounter + swordUpgrade2Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

        if (swordCounter > 8) {
        swordContainer.appendChild(newSwordUpgrade2);
        }
        else if (swordCounter <= 8) {
        swordContainer2.appendChild(newSwordUpgrade2);
        }
        }
        swordUpgrade2Exists2 = true;
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }

        }

        function buyArmor() {
                if (!anyMonsterExists) {

                if (armor.id == "armor") {
                if (counterNumber < armorCosts) {
                shopWarning.innerHTML = "Not enough meows";
                }

                if (armorCounter >= 16) {
                shopWarning.innerHTML = "Armor limit reached";
                }

                else if (counterNumber >= armorCosts && armorCounter < 16) {
                armorCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - armorCosts;
                newArmor = document.createElement("img");
                newArmor.src = "armor.gif";
                newArmor.classList.add("cursor");

                if (armorCounter > 8) {
                armorContainer.appendChild(newArmor);
                }
                else if (armorCounter <= 8) {
                armorContainer2.appendChild(newArmor);
                }

                armorInterval = setInterval(function() {
                    counterNumber += armorSpeed;
                }, 1000);
                armorIntervals.push(armorInterval);
                meowsPerSecCounter = meowsPerSecCounter + armorSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }   
                } 

                if (armor.id == "armorUpgrade1Shop") {
                if (counterNumber < armorUpgraded1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }
            
            if (armorCounter >= 16) {
                shopWarning.innerHTML = "Armor limit reached";
            }

            else if (counterNumber >= armorUpgraded1Costs && armorCounter < 16) {
            armorCounter++;
            shopWarning.innerHTML = "";
            counterNumber = counterNumber - armorUpgraded1Costs;
            newArmorUpgrade1 = document.createElement("img");
            newArmorUpgrade1.src = "armorUpgrade1.gif";
            newArmorUpgrade1.classList.add("cursor");
            
            if (armorCounter > 8) {
            armorContainer.appendChild(newArmorUpgrade1);
            }
            else if (armorCounter <= 8) {
                armorContainer2.appendChild(newArmorUpgrade1);
            }

            armorInterval = setInterval(function() {
                    counterNumber += armorUpgrade1Speed;
                }, 1000);
            armorIntervals.push(armorInterval);
            meowsPerSecCounter = meowsPerSecCounter + armorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
            }

            if (armor.id == "armorUpgrade2Shop") {
                if (counterNumber < armorUpgraded2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }
            
            if (armorCounter >= 16) {
                shopWarning.innerHTML = "Armor limit reached";
            }

            else if (counterNumber >= armorUpgraded2Costs && armorCounter < 16) {
            armorCounter++;
            shopWarning.innerHTML = "";
            counterNumber = counterNumber - armorUpgraded2Costs;
            newArmorUpgrade2 = document.createElement("img");
            newArmorUpgrade2.src = "armorUpgrade2.gif";
            newArmorUpgrade2.classList.add("cursor");
            
            if (armorCounter > 8) {
            armorContainer.appendChild(newArmorUpgrade2);
            }
            else if (armorCounter <= 8) {
                armorContainer2.appendChild(newArmorUpgrade2);
            }

            armorInterval = setInterval(function() {
                    counterNumber += armorUpgrade2Speed;
                }, 1000);
            armorIntervals.push(armorInterval);
            meowsPerSecCounter = meowsPerSecCounter + armorUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
            }
        }
                else if (anyMonsterExists) {
                monsterWarning.innerHTML = "There is a monster!";
                }
        }

        function buyArmorUpgrade1() {
            if (!anyMonsterExists) {

            if (counterNumber < armorUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            armor.src = "armorUpgrade1.gif";
            armor.id = "armorUpgrade1Shop";
            armorLabel.id = "armorUpgrade1LabelShop";
            armorLabel.innerHTML = "Buy Armor(5000K)";
            armor.name = "pink";

            counterNumber = counterNumber - armorUpgrade1Costs;

            armor.addEventListener("mouseover", cursorBackgroundColor);
            armor.addEventListener("mouseout", cursorBackgroundColor);

            armorUpgrade1ShopContainer.style.display = "none";
            armorUpgrade1ShopContainer.style.display = "none";

            clearAllArmorIntervals();

            let armorToRemove = armorCounter;
            let armorCountSaved = armorCounter;

            while (armorToRemove > 0 && armorContainer.firstChild) {
            armorContainer.removeChild(armorContainer.firstChild);
            armorToRemove--;
            armorCounter--;
            meowsPerSecCounter = meowsPerSecCounter - armorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (armorToRemove > 0 && armorContainer2.firstChild) {
            armorContainer2.removeChild(armorContainer2.firstChild);
            armorToRemove--;
            armorCounter--;
            meowsPerSecCounter = meowsPerSecCounter - armorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (armorCountSaved > 0) {
            armorCounter++;
            armorCountSaved--;
            let newArmorUpgrade1 = document.createElement("img");
            newArmorUpgrade1.src = "armorUpgrade1.gif";
            newArmorUpgrade1.classList.add("cursor");
            armorInterval = setInterval(function() {
                counterNumber += armorUpgrade1Speed;
            }, 1000);
            swordIntervals.push(swordInterval);
            meowsPerSecCounter = meowsPerSecCounter + armorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (armorCounter > 8) {
            armorContainer.appendChild(newArmorUpgrade1);
            }
            else if (armorCounter <= 8) {
            armorContainer2.appendChild(newArmorUpgrade1);
            }
            }
            armorUpgrade1Exists2 = true;
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyArmorUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < armorUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else if (!armorUpgrade1Exists2) {
                    shopWarning.innerHTML = "Incorrect upgrade order";
                }

        else {
        armor.src = "armorUpgrade2.gif";
        armor.id = "armorUpgrade2Shop";
        armorLabel.id = "armorUpgrade2LabelShop";
        armorLabel.innerHTML = "Buy Armor(50000K)";
        armor.name = "blue";

        counterNumber = counterNumber - armorUpgrade2Costs;

        armor.addEventListener("mouseover", cursorBackgroundColor);
        armor.addEventListener("mouseout", cursorBackgroundColor);

        armorUpgrade2ShopContainer.style.display = "none";
        armorUpgrade2ShopContainer.style.display = "none";

        clearAllArmorIntervals();

        let armorToRemove = armorCounter;
        let armorCountSaved = armorCounter;

        while (armorToRemove > 0 && armorContainer.firstChild) {
        armorContainer.removeChild(armorContainer.firstChild);
        armorToRemove--;
        armorCounter--;
        meowsPerSecCounter = meowsPerSecCounter - armorUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (armorToRemove > 0 && armorContainer2.firstChild) {
        armorContainer2.removeChild(armorContainer2.firstChild);
        armorToRemove--;
        armorCounter--;
        meowsPerSecCounter = meowsPerSecCounter - armorUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (armorCountSaved > 0) {
        armorCounter++;
        armorCountSaved--;
        let newArmorUpgrade2 = document.createElement("img");
        newArmorUpgrade2.src = "armorUpgrade2.gif";
        newArmorUpgrade2.classList.add("cursor");
        armorInterval = setInterval(function() {
            counterNumber += armorUpgrade2Speed;
        }, 1000);
        swordIntervals.push(swordInterval);
        meowsPerSecCounter = meowsPerSecCounter + armorUpgrade2Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

        if (armorCounter > 8) {
        armorContainer.appendChild(newArmorUpgrade2);
        }
        else if (armorCounter <= 8) {
        armorContainer2.appendChild(newArmorUpgrade2);
        }
        }
        armorUpgrade2Exists2 = true;
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyCodex() {
            if (!anyMonsterExists) {
            
            if (sword.name != codex.name) {
                shopWarning.innerHTML = "Not enough swords";
            }

            else {
    
            if (swordCounter < 16) {
            shopWarning.innerHTML = "Not enough swords";
           }
           
           else if (codexCounter >= 16) {
            shopWarning.innerHTML = "Codex limit reached";
           }

           else {
           
            clearAllSwordIntervals();

            let swordsToRemove = 16;

            if (codex.name == "grey") {

            while (swordsToRemove > 0 && swordContainer.firstChild) {
            swordContainer.removeChild(swordContainer.firstChild);
            swordsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - swordSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (swordsToRemove > 0 && swordContainer2.firstChild) {
            swordContainer2.removeChild(swordContainer2.firstChild);
            swordsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - swordSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           codexCounter++;
           shopWarning.innerHTML = "";
           swordCounter = swordCounter - 16;
           let newCodex = document.createElement("img");
           newCodex.src = "codex.gif";
           newCodex.classList.add("cursor");
           
           if (codexCounter > 8) {
            codexContainer.appendChild(newCodex);
           }
           else if (codexCounter <= 8) {
            codexContainer2.appendChild(newCodex);
           }
           codexInterval = setInterval(function() {
                counterNumber += codexSpeed;
            }, 1000);
           codexIntervals.push(codexInterval);
           meowsPerSecCounter = meowsPerSecCounter + codexSpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           shopWarning.innerHTML = "";
           }

            if (codex.name == "pink") {

            while (swordsToRemove > 0 && swordContainer.firstChild) {
            swordContainer.removeChild(swordContainer.firstChild);
            swordsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - swordUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (swordsToRemove > 0 && swordContainer2.firstChild) {
            swordContainer2.removeChild(swordContainer2.firstChild);
            swordsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - swordUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            codexCounter++;
            shopWarning.innerHTML = "";
            swordCounter = swordCounter - 16;
            let newCodexUpgrade1 = document.createElement("img");
            newCodexUpgrade1.src = "codexUpgrade1.gif";
            newCodexUpgrade1.classList.add("cursor");

            if (codexCounter > 8) {
            codexContainer.appendChild(newCodexUpgrade1);
            }
            else if (codexCounter <= 8) {
            codexContainer2.appendChild(newCodexUpgrade1);
            }
            codexInterval = setInterval(function() {
                counterNumber += codexUpgrade1Speed;         
            }, 1000);
            codexIntervals.push(codexInterval);
            meowsPerSecCounter = meowsPerSecCounter + codexUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }

            if (codex.name == "blue") {

            while (swordsToRemove > 0 && swordContainer.firstChild) {
            swordContainer.removeChild(swordContainer.firstChild);
            swordsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - swordUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (swordsToRemove > 0 && swordContainer2.firstChild) {
            swordContainer2.removeChild(swordContainer2.firstChild);
            swordsToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - swordUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            codexCounter++;
            shopWarning.innerHTML = "";
            swordCounter = swordCounter - 16;
            let newCodexUpgrade2 = document.createElement("img");
            newCodexUpgrade2.src = "codexUpgrade2.gif";
            newCodexUpgrade2.classList.add("cursor");

            if (codexCounter > 8) {
            codexContainer.appendChild(newCodexUpgrade2);
            }
            else if (codexCounter <= 8) {
            codexContainer2.appendChild(newCodexUpgrade2);
            }
            codexInterval = setInterval(function() {
                counterNumber += codexUpgrade2Speed;         
            }, 1000);
            codexIntervals.push(codexInterval);
            meowsPerSecCounter = meowsPerSecCounter + codexUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }
        }
        }
        }

        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }
    }
    
        function buyCodexUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < codexUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else {
        codex.src = "codexUpgrade1.gif";
        codexSword.src = "swordUpgrade1.gif";
        codex.id = "codexUpgrade1Shop";
        codexLabel.id = "codexUpgrade1LabelShop";
        codexLabel.innerHTML = "Buy Codex (16x";
        codex.name = "pink";
        codex.name = "pink";

        counterNumber = counterNumber - codexUpgrade1Costs;

        codex.addEventListener("mouseover", cursorBackgroundColor);
        codex.addEventListener("mouseout", cursorBackgroundColor);

        codexUpgrade1ShopContainer.style.display = "none";
        codexUpgrade1ShopContainer.style.display = "none";

        clearAllCodexIntervals();

        let codexToRemove = codexCounter;
        let codexCountSaved = codexCounter;

        while (codexToRemove > 0 && codexContainer.firstChild) {
        codexContainer.removeChild(codexContainer.firstChild);
        codexToRemove--;
        codexCounter--;
        meowsPerSecCounter = meowsPerSecCounter - codexSpeed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (codexToRemove > 0 && codexContainer2.firstChild) {
        codexContainer2.removeChild(codexContainer2.firstChild);
        codexToRemove--;
        codexCounter--;
        meowsPerSecCounter = meowsPerSecCounter - codexSpeed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (codexCountSaved > 0) {
        codexCounter++;
        codexCountSaved--;
        let newCodexUpgrade1 = document.createElement("img");
        newCodexUpgrade1.src = "codexUpgrade1.gif";
        newCodexUpgrade1.classList.add("cursor");
        codexInterval = setInterval(function() {
                counterNumber += codexUpgrade1Speed;
            }, 1000);
        codexIntervals.push(codexInterval);
        meowsPerSecCounter = meowsPerSecCounter + codexUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

        if (codexCounter > 8) {
        codexContainer.appendChild(newCodexUpgrade1);
        }
        else if (codexCounter <= 8) {
        codexContainer2.appendChild(newCodexUpgrade1);
        }
        }
        codexUpgrade1Exists2 = true;  
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyCodexUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < codexUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else if (!codexUpgrade1Exists2) {
                    shopWarning.innerHTML = "Incorrect upgrade order";
                }

        else {
        codex.src = "codexUpgrade2.gif";
        codexSword.src = "swordUpgrade2.gif";
        codex.id = "codexUpgrade2Shop";
        codexLabel.id = "codexUpgrade2LabelShop";
        codexLabel.innerHTML = "Buy Codex (16x";
        codex.name = "blue";

        counterNumber = counterNumber - codexUpgrade2Costs;

        codex.addEventListener("mouseover", cursorBackgroundColor);
        codex.addEventListener("mouseout", cursorBackgroundColor);

        codexUpgrade2ShopContainer.style.display = "none";
        codexUpgrade2ShopContainer.style.display = "none";

        clearAllCodexIntervals();

        let codexToRemove = codexCounter;
        let codexCountSaved = codexCounter;

        while (codexToRemove > 0 && codexContainer.firstChild) {
        codexContainer.removeChild(codexContainer.firstChild);
        codexToRemove--;
        codexCounter--;
        meowsPerSecCounter = meowsPerSecCounter - codexUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (codexToRemove > 0 && codexContainer2.firstChild) {
        codexContainer2.removeChild(codexContainer2.firstChild);
        codexToRemove--;
        codexCounter--;
        meowsPerSecCounter = meowsPerSecCounter - codexUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (codexCountSaved > 0) {
        codexCounter++;
        codexCountSaved--;
        let newCodexUpgrade2 = document.createElement("img");
        newCodexUpgrade2.src = "codexUpgrade2.gif";
        newCodexUpgrade2.classList.add("cursor");
        codexInterval = setInterval(function() {
                counterNumber += codexUpgrade2Speed;
            }, 1000);
        codexIntervals.push(codexInterval);
        meowsPerSecCounter = meowsPerSecCounter + codexUpgrade2Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

        if (codexCounter > 8) {
        codexContainer.appendChild(newCodexUpgrade2);
        }
        else if (codexCounter <= 8) {
        codexContainer2.appendChild(newCodexUpgrade2);
        }
        }
        codexUpgrade2Exists2 = true;  
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }
        
         function buyCastle() {
            if (!anyMonsterExists) {
            
            if (armor.name != castle.name) {
                shopWarning.innerHTML = "Not enough armor";
            }

            else {
    
            if (armorCounter < 16) {
            shopWarning.innerHTML = "Not enough armor";
           }
           
           else if (castleCounter >= 16) {
            shopWarning.innerHTML = "Castle limit reached";
           }

           else {
           
            clearAllArmorIntervals();

            let armorToRemove = 16;

            if (castle.name == "grey") {

            while (armorToRemove > 0 && armorContainer.firstChild) {
            armorContainer.removeChild(armorContainer.firstChild);
            armorToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - armorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (armorToRemove > 0 && armorContainer2.firstChild) {
            armorContainer2.removeChild(armorContainer2.firstChild);
            armorToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - armorSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           castleCounter++;
           shopWarning.innerHTML = "";
           armorCounter = armorCounter - 16;
           let newCastle = document.createElement("img");
           newCastle.src = "castle.gif";
           newCastle.classList.add("cursor");
           
           if (castleCounter > 8) {
            castleContainer.appendChild(newCastle);
           }
           else if (castleCounter <= 8) {
            castleContainer2.appendChild(newCastle);
           }
           castleInterval = setInterval(function() {
                counterNumber += castleSpeed;
            }, 1000);
           castleIntervals.push(codexInterval);
           meowsPerSecCounter = meowsPerSecCounter + castleSpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           shopWarning.innerHTML = "";
           }

           if (castle.name == "pink") {

            while (armorToRemove > 0 && armorContainer.firstChild) {
            armorContainer.removeChild(armorContainer.firstChild);
            armorToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - armorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (armorToRemove > 0 && armorContainer2.firstChild) {
            armorContainer2.removeChild(armorContainer2.firstChild);
            armorToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - armorUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            castleCounter++;
            shopWarning.innerHTML = "";
            armorCounter = armorCounter - 16;
            let newCastleUpgrade1 = document.createElement("img");
            newCastleUpgrade1.src = "castleUpgrade1.gif";
            newCastleUpgrade1.classList.add("cursor");

            if (castleCounter > 8) {
            castleContainer.appendChild(newCastleUpgrade1);
            }
            else if (castleCounter <= 8) {
            castleContainer2.appendChild(newCastleUpgrade1);
            }
            castleInterval = setInterval(function() {
                counterNumber += castleUpgrade1Speed;
            }, 1000);
            castleIntervals.push(castleInterval);
            meowsPerSecCounter = meowsPerSecCounter + castleUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }

            if (castle.name == "blue") {

            while (armorToRemove > 0 && armorContainer.firstChild) {
            armorContainer.removeChild(armorContainer.firstChild);
            armorToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - armorUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (armorToRemove > 0 && armorContainer2.firstChild) {
            armorContainer2.removeChild(armorContainer2.firstChild);
            armorToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - armorUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            castleCounter++;
            shopWarning.innerHTML = "";
            armorCounter = armorCounter - 16;
            let newCastleUpgrade2 = document.createElement("img");
            newCastleUpgrade2.src = "castleUpgrade2.gif";
            newCastleUpgrade2.classList.add("cursor");

            if (castleCounter > 8) {
            castleContainer.appendChild(newCastleUpgrade2);
            }
            else if (castleCounter <= 8) {
            castleContainer2.appendChild(newCastleUpgrade2);
            }
            castleInterval = setInterval(function() {
                counterNumber += castleUpgrade2Speed;
            }, 1000);
            castleIntervals.push(castleInterval);
            meowsPerSecCounter = meowsPerSecCounter + castleUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }
        }
        }
        }

        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }
         }

         function buyCastleUpgrade1() {
            if (!anyMonsterExists) {

            if (counterNumber < castleUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            castle.src = "castleUpgrade1.gif";
            castleArmor.src = "armorUpgrade1.gif";
            castle.id = "castleUpgrade1Shop";
            castleLabel.id = "castleUpgrade1LabelShop";
            castleLabel.innerHTML = "Buy Castle (16x";
            castle.name = "pink";

            counterNumber = counterNumber - castleUpgrade1Costs;

            castle.addEventListener("mouseover", cursorBackgroundColor);
            castle.addEventListener("mouseout", cursorBackgroundColor);

            castleUpgrade1ShopContainer.style.display = "none";
            castleUpgrade1ShopContainer.style.display = "none";

            clearAllCastleIntervals();

            let castleToRemove = castleCounter;
            let castleCountSaved = castleCounter;

            while (castleToRemove > 0 && castleContainer.firstChild) {
            castleContainer.removeChild(castleContainer.firstChild);
            castleToRemove--;
            castleCounter--;
            meowsPerSecCounter = meowsPerSecCounter - castleSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (castleToRemove > 0 && castleContainer2.firstChild) {
            castleContainer2.removeChild(castleContainer2.firstChild);
            castleToRemove--;
            castleCounter--;
            meowsPerSecCounter = meowsPerSecCounter - castleSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (castleCountSaved > 0) {
            castleCounter++;
            castleCountSaved--;
            let newCastleUpgrade1 = document.createElement("img");
            newCastleUpgrade1.src = "castleUpgrade1.gif";
            newCastleUpgrade1.classList.add("cursor");
            castleInterval = setInterval(function() {
                    counterNumber += castleUpgrade1Speed;
                }, 1000);
            castleIntervals.push(castleInterval);
            meowsPerSecCounter = meowsPerSecCounter + castleUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (castleCounter > 8) {
            castleContainer.appendChild(newCastleUpgrade1);
            }
            else if (castleCounter <= 8) {
            castleContainer2.appendChild(newCastleUpgrade1);
            }
            }
            castleUpgrade1Exists2 = true;  
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyCastleUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < castleUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else if (!castleUpgrade1Exists2) {
                    shopWarning.innerHTML = "Incorrect upgrade order";
                }

        else {
        castle.src = "castleUpgrade2.gif";
        castleArmor.src = "armorUpgrade2.gif";
        castle.id = "castleUpgrade2Shop";
        castleLabel.id = "castleUpgrade2LabelShop";
        castleLabel.innerHTML = "Buy Castle (16x";
        castle.name = "blue";

        counterNumber = counterNumber - castleUpgrade2Costs;

        castle.addEventListener("mouseover", cursorBackgroundColor);
        castle.addEventListener("mouseout", cursorBackgroundColor);

        castleUpgrade2ShopContainer.style.display = "none";
        castleUpgrade2ShopContainer.style.display = "none";

        clearAllCastleIntervals();

        let castleToRemove = castleCounter;
        let castleCountSaved = castleCounter;

        while (castleToRemove > 0 && castleContainer.firstChild) {
        castleContainer.removeChild(castleContainer.firstChild);
        castleToRemove--;
        castleCounter--;
        meowsPerSecCounter = meowsPerSecCounter - castleUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (castleToRemove > 0 && castleContainer2.firstChild) {
        castleContainer2.removeChild(castleContainer2.firstChild);
        castleToRemove--;
        castleCounter--;
        meowsPerSecCounter = meowsPerSecCounter - castleUpgrade1Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
        }

        while (castleCountSaved > 0) {
        castleCounter++;
        castleCountSaved--;
        let newCastleUpgrade2 = document.createElement("img");
        newCastleUpgrade2.src = "castleUpgrade2.gif";
        newCastleUpgrade2.classList.add("cursor");
        castleInterval = setInterval(function() {
                counterNumber += castleUpgrade2Speed;
            }, 1000);
        castleIntervals.push(castleInterval);
        meowsPerSecCounter = meowsPerSecCounter + castleUpgrade2Speed;
        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

        if (castleCounter > 8) {
        castleContainer.appendChild(newCastleUpgrade2);
        }
        else if (castleCounter <= 8) {
        castleContainer2.appendChild(newCastleUpgrade2);
        }
        }
        castleUpgrade2Exists2 = true;  
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyCrown() {
            if (!anyMonsterExists) {

            if (crown.id == "crown") {
            if (counterNumber < crownCosts) {
            shopWarning.innerHTML = "Not enough meows";
            }

            if (crownCounter >= 16) {
            shopWarning.innerHTML = "Crown limit reached";
            }

            else if (counterNumber >= crownCosts && crownCounter < 16) {
            crownCounter++;
            shopWarning.innerHTML = "";
            counterNumber = counterNumber - crownCosts;
            newCrown = document.createElement("img");
            newCrown.src = "crown.gif";
            newCrown.classList.add("cursor");

            if (crownCounter > 8) {
            crownContainer.appendChild(newCrown);
            }
            else if (crownCounter <= 8) {
            crownContainer2.appendChild(newCrown);
            }

            crownInterval = setInterval(function() {
                counterNumber +=crownSpeed;
            }, 1000);
            crownIntervals.push(crownInterval);
            meowsPerSecCounter = meowsPerSecCounter + crownSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
            } 

            if (crown.id == "crownUpgrade1Shop") {
            if (counterNumber < crownUpgraded1Costs) {
            shopWarning.innerHTML = "Not enough meows";
           }
           
           if (crownCounter >= 16) {
            shopWarning.innerHTML = "Crown limit reached";
           }

           else if (counterNumber >= crownUpgraded1Costs && crownCounter < 16) {
           crownCounter++;
           shopWarning.innerHTML = "";
           counterNumber = counterNumber - crownUpgraded1Costs;
           newCrownUpgrade1 = document.createElement("img");
           newCrownUpgrade1.src = "crownUpgrade1.gif";
           newCrownUpgrade1.classList.add("cursor");
           
           if (crownCounter > 8) {
           crownContainer.appendChild(newCrownUpgrade1);
           }
           else if (crownCounter <= 8) {
            crownContainer2.appendChild(newCrownUpgrade1);
           }

           crownInterval = setInterval(function() {
                counterNumber += crownUpgrade1Speed;
            }, 1000);
           crownIntervals.push(crownInterval);
           meowsPerSecCounter = meowsPerSecCounter + crownUpgrade1Speed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           }   
          }

          if (crown.id == "crownUpgrade2Shop") {
            if (counterNumber < crownUpgraded2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }
            
            if (crownCounter >= 16) {
                shopWarning.innerHTML = "Crown limit reached";
            }

            else if (counterNumber >= crownUpgraded2Costs && crownCounter < 16) {
                crownCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - crownUpgraded2Costs;
                let newCrownUpgrade2 = document.createElement("img");
                newCrownUpgrade2.src = "crownUpgrade2.gif";
                newCrownUpgrade2.classList.add("cursor");
                
                if (crownCounter > 8) {
                    crownContainer.appendChild(newCrownUpgrade2);
                }
                else if (crownCounter <= 8) {
                    crownContainer2.appendChild(newCrownUpgrade2);
                }

                let crownInterval = setInterval(function() {
                    counterNumber += crownUpgrade2Speed;
                }, 1000);
                crownIntervals.push(crownInterval);
                meowsPerSecCounter = meowsPerSecCounter + crownUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
        }
    }

            else if (anyMonsterExists) {
                monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyCrownUpgrade1() {
            if (!anyMonsterExists) {

            if (counterNumber < crownUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
            crown.src = "crownUpgrade1.gif";
            crown.id = "crownUpgrade1Shop";
            crownLabel.id = "crownUpgrade1LabelShop";
            crownLabel.innerHTML = "Buy Crown(10B)";
            crown.name = "pink";

            counterNumber = counterNumber - crownUpgrade1Costs;

            crown.addEventListener("mouseover", cursorBackgroundColor);
            crown.addEventListener("mouseout", cursorBackgroundColor);

            crownUpgrade1ShopContainer.style.display = "none";
            crownUpgrade1ShopContainer.style.display = "none";

            clearAllCrownIntervals();

            let crownsToRemove = crownCounter;
            let crownsCountSaved = crownCounter;

            while (crownsToRemove > 0 && crownContainer.firstChild) {
            crownContainer.removeChild(crownContainer.firstChild);
            crownsToRemove--;
            crownCounter--;
            meowsPerSecCounter = meowsPerSecCounter - crownSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (crownsToRemove > 0 && crownContainer2.firstChild) {
            crownContainer2.removeChild(crownContainer2.firstChild);
            crownsToRemove--;
            crownCounter--;
            meowsPerSecCounter = meowsPerSecCounter - crownSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (crownsCountSaved > 0) {
            crownCounter++;
            crownsCountSaved--;
            let newCrownUpgrade1 = document.createElement("img");
            newCrownUpgrade1.src = "crownUpgrade1.gif";
            newCrownUpgrade1.classList.add("cursor");
            crownInterval = setInterval(function() {
                counterNumber += crownUpgrade1Speed;
            }, 1000);
            crownIntervals.push(crownInterval);
            meowsPerSecCounter = meowsPerSecCounter + crownUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

            if (crownCounter > 8) {
            crownContainer.appendChild(newCrownUpgrade1);
            }
            else if (crownCounter <= 8) {
            crownContainer2.appendChild(newCrownUpgrade1);
            }
            }
            crownUpgrade1Exists2 = true;
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyCrownUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < crownUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else if (!crownUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }

        else {
            crown.src = "crownUpgrade2.gif";
            crown.id = "crownUpgrade2Shop";
            crownLabel.id = "crownUpgrade2LabelShop";
            crownLabel.innerHTML = "Buy Crown(100B)";
            crown.name = "blue";

            counterNumber = counterNumber - crownUpgrade2Costs;

            crown.addEventListener("mouseover", cursorBackgroundColor);
            crown.addEventListener("mouseout", cursorBackgroundColor);

            crownUpgrade2ShopContainer.style.display = "none";

            clearAllCrownIntervals();

            let crownsToRemove = crownCounter;
            let crownsCountSaved = crownCounter;

            while (crownsToRemove > 0 && crownContainer.firstChild) {
                crownContainer.removeChild(crownContainer.firstChild);
                crownsToRemove--;
                crownCounter--;
                meowsPerSecCounter = meowsPerSecCounter - crownUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (crownsToRemove > 0 && crownContainer2.firstChild) {
                crownContainer2.removeChild(crownContainer2.firstChild);
                crownsToRemove--;
                crownCounter--;
                meowsPerSecCounter = meowsPerSecCounter - crownUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (crownsCountSaved > 0) {
                crownCounter++;
                crownsCountSaved--;
                let newCrownUpgrade2 = document.createElement("img");
                newCrownUpgrade2.src = "crownUpgrade2.gif";
                newCrownUpgrade2.classList.add("cursor");
                crownInterval = setInterval(function() {
                    counterNumber += crownUpgrade2Speed;
                }, 1000);
                crownIntervals.push(crownInterval);
                meowsPerSecCounter = meowsPerSecCounter + crownUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (crownCounter > 8) {
                    crownContainer.appendChild(newCrownUpgrade2);
                }
                else if (crownCounter <= 8) {
                    crownContainer2.appendChild(newCrownUpgrade2);
                }
            }
            crownUpgrade2Exists2 = true;
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buySceptre() {
            if (!anyMonsterExists) {

            if (sceptre.id == "sceptre") {
            if (counterNumber < sceptreCosts) {
            shopWarning.innerHTML = "Not enough meows";
            }

            if (sceptreCounter >= 16) {
            shopWarning.innerHTML = "Sceptre limit reached";
            }

            else if (counterNumber >= sceptreCosts && sceptreCounter < 16) {
            sceptreCounter++;
            shopWarning.innerHTML = "";
            counterNumber = counterNumber - sceptreCosts;
            newSceptre = document.createElement("img");
            newSceptre.src = "sceptre.gif";
            newSceptre.classList.add("cursor");

            if (sceptreCounter > 8) {
            sceptreContainer.appendChild(newSceptre);
            }
            else if (sceptreCounter <= 8) {
            sceptreContainer2.appendChild(newSceptre);
            }

            sceptreInterval = setInterval(function() {
                counterNumber +=sceptreSpeed;
            }, 1000);
            sceptreIntervals.push(sceptreInterval);
            meowsPerSecCounter = meowsPerSecCounter + sceptreSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
            } 

            if (sceptre.id == "sceptreUpgrade1Shop") {
            if (counterNumber < sceptreUpgraded1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            if (sceptreCounter >= 16) {
                shopWarning.innerHTML = "Sceptre limit reached";
            }

            else if (counterNumber >= sceptreUpgraded1Costs && sceptreCounter < 16) {
                sceptreCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - sceptreUpgraded1Costs;
                newSceptreUpgrade1 = document.createElement("img");
                newSceptreUpgrade1.src = "sceptreUpgrade1.gif";
                newSceptreUpgrade1.classList.add("cursor");

                if (sceptreCounter > 8) {
                    sceptreContainer.appendChild(newSceptreUpgrade1);
                }
                else if (sceptreCounter <= 8) {
                    sceptreContainer2.appendChild(newSceptreUpgrade1);
                }

                sceptreInterval = setInterval(function () {
                    counterNumber += sceptreUpgrade1Speed;
                }, 1000);
                sceptreIntervals.push(sceptreInterval);
                meowsPerSecCounter = meowsPerSecCounter + sceptreUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
        }

        if (sceptre.id == "sceptreUpgrade2Shop") {
            if (counterNumber < sceptreUpgraded2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            if (sceptreCounter >= 16) {
                shopWarning.innerHTML = "Sceptre limit reached";
            }

            else if (counterNumber >= sceptreUpgraded2Costs && sceptreCounter < 16) {
                sceptreCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - sceptreUpgraded2Costs;
                let newSceptreUpgrade2 = document.createElement("img");
                newSceptreUpgrade2.src = "sceptreUpgrade2.gif";
                newSceptreUpgrade2.classList.add("cursor");

                if (sceptreCounter > 8) {
                    sceptreContainer.appendChild(newSceptreUpgrade2);
                }
                else if (sceptreCounter <= 8) {
                    sceptreContainer2.appendChild(newSceptreUpgrade2);
                }

                let sceptreInterval = setInterval(function() {
                    counterNumber += sceptreUpgrade2Speed;
                }, 1000);
                sceptreIntervals.push(sceptreInterval);
                meowsPerSecCounter = meowsPerSecCounter + sceptreUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
        }
    }
            else if (anyMonsterExists) {
                monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buySceptreUpgrade1() {
            if (!anyMonsterExists) {

            if (counterNumber < sceptreUpgrade1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            }

            else {
                sceptre.src = "sceptreUpgrade1.gif";
                sceptre.id = "sceptreUpgrade1Shop";
                sceptreLabel.id = "sceptreUpgrade1LabelShop";
                sceptreLabel.innerHTML = "Buy Sceptre(50B)";
                sceptre.name = "pink";

                counterNumber = counterNumber - sceptreUpgrade1Costs;

                sceptre.addEventListener("mouseover", cursorBackgroundColor);
                sceptre.addEventListener("mouseout", cursorBackgroundColor);

                sceptreUpgrade1ShopContainer.style.display = "none";
                sceptreUpgrade1ShopContainer.style.display = "none";

                clearAllSceptreIntervals();

                let sceptresToRemove = sceptreCounter;
                let sceptresCountSaved = sceptreCounter;

                while (sceptresToRemove > 0 && sceptreContainer.firstChild) {
                    sceptreContainer.removeChild(sceptreContainer.firstChild);
                    sceptresToRemove--;
                    sceptreCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - sceptreSpeed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (sceptresToRemove > 0 && sceptreContainer2.firstChild) {
                    sceptreContainer2.removeChild(sceptreContainer2.firstChild);
                    sceptresToRemove--;
                    sceptreCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - sceptreSpeed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (sceptresCountSaved > 0) {
                    sceptreCounter++;
                    sceptresCountSaved--;
                    let newSceptreUpgrade1 = document.createElement("img");
                    newSceptreUpgrade1.src = "sceptreUpgrade1.gif";
                    newSceptreUpgrade1.classList.add("cursor");
                    sceptreInterval = setInterval(function () {
                        counterNumber += sceptreUpgrade1Speed;
                    }, 1000);
                    sceptreIntervals.push(sceptreInterval);
                    meowsPerSecCounter = meowsPerSecCounter + sceptreUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                    if (sceptreCounter > 8) {
                        sceptreContainer.appendChild(newSceptreUpgrade1);
                    }
                    else if (sceptreCounter <= 8) {
                        sceptreContainer2.appendChild(newSceptreUpgrade1);
                    }
                }
                sceptreUpgrade1Exists2 = true;
            }
            }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buySceptreUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < sceptreUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        }

        else if (!sceptreUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }

        else {
            sceptre.src = "sceptreUpgrade2.gif";
            sceptre.id = "sceptreUpgrade2Shop";
            sceptreLabel.id = "sceptreUpgrade2LabelShop";
            sceptreLabel.innerHTML = "Buy Sceptre(500B)";
            sceptre.name = "blue";

            counterNumber = counterNumber - sceptreUpgrade2Costs;

            sceptre.addEventListener("mouseover", cursorBackgroundColor);
            sceptre.addEventListener("mouseout", cursorBackgroundColor);

            sceptreUpgrade2ShopContainer.style.display = "none";

            clearAllSceptreIntervals();

            let sceptresToRemove = sceptreCounter;
            let sceptresCountSaved = sceptreCounter;

            while (sceptresToRemove > 0 && sceptreContainer.firstChild) {
                sceptreContainer.removeChild(sceptreContainer.firstChild);
                sceptresToRemove--;
                sceptreCounter--;
                meowsPerSecCounter = meowsPerSecCounter - sceptreUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (sceptresToRemove > 0 && sceptreContainer2.firstChild) {
                sceptreContainer2.removeChild(sceptreContainer2.firstChild);
                sceptresToRemove--;
                sceptreCounter--;
                meowsPerSecCounter = meowsPerSecCounter - sceptreUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (sceptresCountSaved > 0) {
                sceptreCounter++;
                sceptresCountSaved--;
                let newSceptreUpgrade2 = document.createElement("img");
                newSceptreUpgrade2.src = "sceptreUpgrade2.gif";
                newSceptreUpgrade2.classList.add("cursor");
                sceptreInterval = setInterval(function() {
                    counterNumber += sceptreUpgrade2Speed;
                }, 1000);
                sceptreIntervals.push(sceptreInterval);
                meowsPerSecCounter = meowsPerSecCounter + sceptreUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (sceptreCounter > 8) {
                    sceptreContainer.appendChild(newSceptreUpgrade2);
                }
                else if (sceptreCounter <= 8) {
                    sceptreContainer2.appendChild(newSceptreUpgrade2);
                }
            }
            sceptreUpgrade2Exists2 = true;
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyAcademy() {
            if (!anyMonsterExists) {

            if (crown.name != academy.name) {
                shopWarning.innerHTML = "Not enough crowns";
            }

            else {

                if (crownCounter < 16) {
                    shopWarning.innerHTML = "Not enough crowns";
                }
                
                else if (academyCounter >= 16) {
                    shopWarning.innerHTML = "Academy limit reached";
                }

                

                else {

                    let crownToRemove = 16;

                    clearAllCrownIntervals();


                    if (academy.name == "grey") {

                        while (crownToRemove > 0 && crownContainer.firstChild) {
                            crownContainer.removeChild(crownContainer.firstChild);
                            crownToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - crownSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (crownToRemove > 0 && crownContainer2.firstChild) {
                            crownContainer2.removeChild(crownContainer2.firstChild);
                            crownToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - crownSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                        
                        academyCounter++;
                        shopWarning.innerHTML = "";
                        crownCounter = crownCounter - 16;
                        let newAcademy = document.createElement("img");
                        newAcademy.src = "academy.gif";
                        newAcademy.classList.add("cursor");

                        
                        if (academyCounter > 8) {
                            academyContainer.appendChild(newAcademy);
                        }
                        else if (academyCounter <= 8) {
                            academyContainer2.appendChild(newAcademy);
                        }


                        academyInterval = setInterval(function() {
                            counterNumber += academySpeed;
                        }, 1000);
                        academyIntervals.push(academyInterval);
                        meowsPerSecCounter = meowsPerSecCounter + academySpeed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        shopWarning.innerHTML = ""; 
                    }

            if (academy.name == "pink") {

            while (crownToRemove > 0 && crownContainer.firstChild) {
                crownContainer.removeChild(crownContainer.firstChild);
                crownToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - crownUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (crownToRemove > 0 && crownContainer2.firstChild) {
                crownContainer2.removeChild(crownContainer2.firstChild);
                crownToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - crownUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            academyCounter++;
            shopWarning.innerHTML = "";
            crownCounter = crownCounter - 16;
            let newAcademyUpgrade1 = document.createElement("img");
            newAcademyUpgrade1.src = "academyUpgrade1.gif";
            newAcademyUpgrade1.classList.add("cursor");

            if (academyCounter > 8) {
                academyContainer.appendChild(newAcademyUpgrade1);
            } else if (academyCounter <= 8) {
                academyContainer2.appendChild(newAcademyUpgrade1);
            }
            academyInterval = setInterval(function() {
                counterNumber += academyUpgrade1Speed;         
            }, 1000);
            academyIntervals.push(academyInterval);
            meowsPerSecCounter = meowsPerSecCounter + academyUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }

            if (academy.name == "blue") {

            while (crownToRemove > 0 && crownContainer.firstChild) {
                crownContainer.removeChild(crownContainer.firstChild);
                crownToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - crownUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (crownToRemove > 0 && crownContainer2.firstChild) {
                crownContainer2.removeChild(crownContainer2.firstChild);
                crownToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - crownUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            academyCounter++;
            shopWarning.innerHTML = "";
            crownCounter = crownCounter - 16;
            let newAcademyUpgrade2 = document.createElement("img");
            newAcademyUpgrade2.src = "academyUpgrade2.gif";
            newAcademyUpgrade2.classList.add("cursor");

            if (academyCounter > 8) {
                academyContainer.appendChild(newAcademyUpgrade2);
            } else if (academyCounter <= 8) {
                academyContainer2.appendChild(newAcademyUpgrade2);
            }
            academyInterval = setInterval(function() {
                counterNumber += academyUpgrade2Speed;         
            }, 1000);
            academyIntervals.push(academyInterval);
            meowsPerSecCounter = meowsPerSecCounter + academyUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }
        }
        }
    }

            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
    }

        function buyAcademyUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < academyUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } else {
            academy.src = "academyUpgrade1.gif";
            academyCrown.src = "crownUpgrade1.gif";
            academy.id = "academyUpgrade1Shop";
            academyLabel.id = "academyUpgrade1LabelShop";
            academyLabel.innerHTML = "Buy Academy (16x";
            academy.name = "pink"; 

            counterNumber = counterNumber - academyUpgrade1Costs;

            academy.addEventListener("mouseover", cursorBackgroundColor);
            academy.addEventListener("mouseout", cursorBackgroundColor);

            academyUpgrade1ShopContainer.style.display = "none";
            academyUpgrade1ShopContainer.style.display = "none";

            clearAllAcademyIntervals();

            let academyToRemove = academyCounter;
            let academyCountSaved = academyCounter;

            while (academyToRemove > 0 && academyContainer.firstChild) {
                academyContainer.removeChild(academyContainer.firstChild);
                academyToRemove--;
                academyCounter--;
                meowsPerSecCounter = meowsPerSecCounter - academySpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (academyToRemove > 0 && academyContainer2.firstChild) {
                academyContainer2.removeChild(academyContainer2.firstChild);
                academyToRemove--;
                academyCounter--;
                meowsPerSecCounter = meowsPerSecCounter - academySpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (academyCountSaved > 0) {
                academyCounter++;
                academyCountSaved--;
                let newAcademyUpgrade1 = document.createElement("img");
                newAcademyUpgrade1.src = "academyUpgrade1.gif";
                newAcademyUpgrade1.classList.add("cursor");
                academyInterval = setInterval(function() {
                    counterNumber += academyUpgrade1Speed;
                }, 1000);
                academyIntervals.push(academyInterval);
                meowsPerSecCounter = meowsPerSecCounter + academyUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (academyCounter > 8) {
                    academyContainer.appendChild(newAcademyUpgrade1);
                } else if (academyCounter <= 8) {
                    academyContainer2.appendChild(newAcademyUpgrade1);
                }
            }
            academyUpgrade1Exists2 = true;  
        }
        }

        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyAcademyUpgrade2() {
               if (!anyMonsterExists) {

        if (counterNumber < academyUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } 
        
        else if (!academyUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }
        
        else {
            academy.src = "academyUpgrade2.gif";
            academyCrown.src = "crownUpgrade2.gif";
            academy.id = "academyUpgrade2Shop";
            academyLabel.id = "academyUpgrade2LabelShop";
            academyLabel.innerHTML = "Buy Academy (16x";
            academy.name = "blue"; 

            counterNumber = counterNumber - academyUpgrade2Costs;

            academy.addEventListener("mouseover", cursorBackgroundColor);
            academy.addEventListener("mouseout", cursorBackgroundColor);

            academyUpgrade2ShopContainer.style.display = "none";
            academyUpgrade2ShopContainer.style.display = "none";

            clearAllAcademyIntervals();

            let academyToRemove = academyCounter;
            let academyCountSaved = academyCounter;

            while (academyToRemove > 0 && academyContainer.firstChild) {
                academyContainer.removeChild(academyContainer.firstChild);
                academyToRemove--;
                academyCounter--;
                meowsPerSecCounter = meowsPerSecCounter - academyUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (academyToRemove > 0 && academyContainer2.firstChild) {
                academyContainer2.removeChild(academyContainer2.firstChild);
                academyToRemove--;
                academyCounter--;
                meowsPerSecCounter = meowsPerSecCounter - academyUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (academyCountSaved > 0) {
                academyCounter++;
                academyCountSaved--;
                let newAcademyUpgrade2 = document.createElement("img");
                newAcademyUpgrade2.src = "academyUpgrade2.gif";
                newAcademyUpgrade2.classList.add("cursor");
                academyInterval = setInterval(function() {
                    counterNumber += academyUpgrade2Speed;
                }, 1000);
                academyIntervals.push(academyInterval);
                meowsPerSecCounter = meowsPerSecCounter + academyUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (academyCounter > 8) {
                    academyContainer.appendChild(newAcademyUpgrade2);
                } else if (academyCounter <= 8) {
                    academyContainer2.appendChild(newAcademyUpgrade2);
                }
            }
            academyUpgrade2Exists2 = true;  
        }
        }
        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyKingdom() {
            if (!anyMonsterExists) {
            
            if (sceptre.name != kingdom.name) {
                shopWarning.innerHTML = "Not enough sceptres";
            }

            else {
    
            if (sceptreCounter < 16) {
            shopWarning.innerHTML = "Not enough sceptres";
           }
           
           else if (kingdomCounter >= 16) {
            shopWarning.innerHTML = "Kingdom limit reached";
           }

           else {
           
            clearAllSceptreIntervals();

            let sceptreToRemove = 16;

            if (kingdom.name == "grey") {

            while (sceptreToRemove > 0 && sceptreContainer.firstChild) {
            sceptreContainer.removeChild(sceptreContainer.firstChild);
            sceptreToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - sceptreSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (sceptreToRemove > 0 && sceptreContainer2.firstChild) {
            sceptreContainer2.removeChild(sceptreContainer2.firstChild);
            sceptreToRemove--;
            meowsPerSecCounter = meowsPerSecCounter - sceptreSpeed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
            
           kingdomCounter++;
           shopWarning.innerHTML = "";
           sceptreCounter = sceptreCounter - 16;
           let newKingdom = document.createElement("img");
           newKingdom.src = "kingdom.gif";
           newKingdom.classList.add("cursor");
           
           if (kingdomCounter > 8) {
            kingdomContainer.appendChild(newKingdom);
           }
           else if (kingdomCounter <= 8) {
            kingdomContainer2.appendChild(newKingdom);
           }
           kingdomInterval = setInterval(function() {
                counterNumber += kingdomSpeed;
            }, 1000);
           kingdomIntervals.push(kingdomInterval);
           meowsPerSecCounter = meowsPerSecCounter + kingdomSpeed;
           meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
           shopWarning.innerHTML = "";
           }

           if (kingdom.name == "pink") {

            while (sceptreToRemove > 0 && sceptreContainer.firstChild) {
                sceptreContainer.removeChild(sceptreContainer.firstChild);
                sceptreToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - sceptreUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (sceptreToRemove > 0 && sceptreContainer2.firstChild) {
                sceptreContainer2.removeChild(sceptreContainer2.firstChild);
                sceptreToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - sceptreUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            kingdomCounter++;
            shopWarning.innerHTML = "";
            sceptreCounter = sceptreCounter - 16;
            let newKingdomUpgrade1 = document.createElement("img");
            newKingdomUpgrade1.src = "kingdomUpgrade1.gif";
            newKingdomUpgrade1.classList.add("cursor");

            if (kingdomCounter > 8) {
                kingdomContainer.appendChild(newKingdomUpgrade1);
            } else if (kingdomCounter <= 8) {
                kingdomContainer2.appendChild(newKingdomUpgrade1);
            }
            kingdomInterval = setInterval(function() {
                counterNumber += kingdomUpgrade1Speed;         
            }, 1000);
            kingdomIntervals.push(kingdomInterval);
            meowsPerSecCounter = meowsPerSecCounter + kingdomUpgrade1Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }

            if (kingdom.name == "blue") {

            while (sceptreToRemove > 0 && sceptreContainer.firstChild) {
                sceptreContainer.removeChild(sceptreContainer.firstChild);
                sceptreToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - sceptreUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (sceptreToRemove > 0 && sceptreContainer2.firstChild) {
                sceptreContainer2.removeChild(sceptreContainer2.firstChild);
                sceptreToRemove--;
                meowsPerSecCounter = meowsPerSecCounter - sceptreUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            kingdomCounter++;
            shopWarning.innerHTML = "";
            sceptreCounter = sceptreCounter - 16;
            let newKingdomUpgrade2 = document.createElement("img");
            newKingdomUpgrade2.src = "kingdomUpgrade2.gif";
            newKingdomUpgrade2.classList.add("cursor");

            if (kingdomCounter > 8) {
                kingdomContainer.appendChild(newKingdomUpgrade2);
            } else if (kingdomCounter <= 8) {
                kingdomContainer2.appendChild(newKingdomUpgrade2);
            }
            kingdomInterval = setInterval(function() {
                counterNumber += kingdomUpgrade2Speed;         
            }, 1000);
            kingdomIntervals.push(kingdomInterval);
            meowsPerSecCounter = meowsPerSecCounter + kingdomUpgrade2Speed;
            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            shopWarning.innerHTML = "";
            }
        }
    }
}
            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }
        }

        function buyKingdomUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < kingdomUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } else {
            kingdom.src = "kingdomUpgrade1.gif";
            kingdomSceptre.src = "sceptreUpgrade1.gif";
            kingdom.id = "kingdomUpgrade1Shop";
            kingdomLabel.id = "kingdomUpgrade1LabelShop";
            kingdomLabel.innerHTML = "Buy Kingdom (16x";
            kingdom.name = "pink"; 

            counterNumber = counterNumber - kingdomUpgrade1Costs;

            kingdom.addEventListener("mouseover", cursorBackgroundColor);
            kingdom.addEventListener("mouseout", cursorBackgroundColor);

            kingdomUpgrade1ShopContainer.style.display = "none";
            kingdomUpgrade1ShopContainer.style.display = "none";

            clearAllKingdomIntervals();

            let kingdomToRemove = kingdomCounter;
            let kingdomCountSaved = kingdomCounter;

            while (kingdomToRemove > 0 && kingdomContainer.firstChild) {
                kingdomContainer.removeChild(kingdomContainer.firstChild);
                kingdomToRemove--;
                kingdomCounter--;
                meowsPerSecCounter = meowsPerSecCounter - kingdomSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (kingdomToRemove > 0 && kingdomContainer2.firstChild) {
                kingdomContainer2.removeChild(kingdomContainer2.firstChild);
                kingdomToRemove--;
                kingdomCounter--;
                meowsPerSecCounter = meowsPerSecCounter - kingdomSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (kingdomCountSaved > 0) {
                kingdomCounter++;
                kingdomCountSaved--;
                let newKingdomUpgrade1 = document.createElement("img");
                newKingdomUpgrade1.src = "kingdomUpgrade1.gif";
                newKingdomUpgrade1.classList.add("cursor");
                kingdomInterval = setInterval(function() {
                    counterNumber += kingdomUpgrade1Speed;
                }, 1000);
                kingdomIntervals.push(kingdomInterval);
                meowsPerSecCounter = meowsPerSecCounter + kingdomUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (kingdomCounter > 8) {
                    kingdomContainer.appendChild(newKingdomUpgrade1);
                } else if (kingdomCounter <= 8) {
                    kingdomContainer2.appendChild(newKingdomUpgrade1);
                }
            }
            kingdomUpgrade1Exists2 = true;  
        }
        }
        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }
        }

        function buyKingdomUpgrade2() {
            if (!anyMonsterExists) {

        if (counterNumber < kingdomUpgrade2Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } 
        
        else if (!kingdomUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }
        
        else {
            kingdom.src = "kingdomUpgrade2.gif";
            kingdomSceptre.src = "sceptreUpgrade2.gif";
            kingdom.id = "kingdomUpgrade2Shop";
            kingdomLabel.id = "kingdomUpgrade2LabelShop";
            kingdomLabel.innerHTML = "Buy Kingdom (16x";
            kingdom.name = "blue"; 

            counterNumber = counterNumber - kingdomUpgrade2Costs;

            kingdom.addEventListener("mouseover", cursorBackgroundColor);
            kingdom.addEventListener("mouseout", cursorBackgroundColor);

            kingdomUpgrade2ShopContainer.style.display = "none";
            kingdomUpgrade2ShopContainer.style.display = "none";

            clearAllKingdomIntervals();

            let kingdomToRemove = kingdomCounter;
            let kingdomCountSaved = kingdomCounter;

            while (kingdomToRemove > 0 && kingdomContainer.firstChild) {
                kingdomContainer.removeChild(kingdomContainer.firstChild);
                kingdomToRemove--;
                kingdomCounter--;
                meowsPerSecCounter = meowsPerSecCounter - kingdomUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (kingdomToRemove > 0 && kingdomContainer2.firstChild) {
                kingdomContainer2.removeChild(kingdomContainer2.firstChild);
                kingdomToRemove--;
                kingdomCounter--;
                meowsPerSecCounter = meowsPerSecCounter - kingdomUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (kingdomCountSaved > 0) {
                kingdomCounter++;
                kingdomCountSaved--;
                let newKingdomUpgrade2 = document.createElement("img");
                newKingdomUpgrade2.src = "kingdomUpgrade2.gif";
                newKingdomUpgrade2.classList.add("cursor");
                kingdomInterval = setInterval(function() {
                    counterNumber += kingdomUpgrade2Speed;
                }, 1000);
                kingdomIntervals.push(kingdomInterval);
                meowsPerSecCounter = meowsPerSecCounter + kingdomUpgrade2Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (kingdomCounter > 8) {
                    kingdomContainer.appendChild(newKingdomUpgrade2);
                } else if (kingdomCounter <= 8) {
                    kingdomContainer2.appendChild(newKingdomUpgrade2);
                }
            }
            kingdomUpgrade2Exists2 = true;  
        }
        }
        else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
         }           
        }

        function buyDevil() {
            if (!anyMonsterExists) {

        if (devil.id == "devil") {
            if (counterNumber < devilCosts) {
                shopWarning.innerHTML = "Not enough meows";
            }

            if (devilCounter >= 16) {
                shopWarning.innerHTML = "Devil limit reached";
            }

            else if (counterNumber >= devilCosts && devilCounter < 16) {
                devilCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - devilCosts;
                newDevil = document.createElement("img");
                newDevil.src = "devil.gif";
                newDevil.classList.add("cursor");

                if (devilCounter > 8) {
                    devilContainer.appendChild(newDevil);
                } else if (devilCounter <= 8) {
                    devilContainer2.appendChild(newDevil);
                }

                devilInterval = setInterval(function() {
                    counterNumber += devilSpeed;
                }, 1000);
                devilIntervals.push(devilInterval);
                meowsPerSecCounter = meowsPerSecCounter + devilSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
        }

                if (devil.id == "devilUpgrade1Shop") {
            if (counterNumber < devilUpgraded1Costs) {
                shopWarning.innerHTML = "Not enough meows";
            } else if (devilCounter >= 16) {
                shopWarning.innerHTML = "Devil limit reached";
            } else if (counterNumber >= devilUpgraded1Costs && devilCounter < 16) {
                devilCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - devilUpgraded1Costs;
                let newDevilUpgrade1 = document.createElement("img");
                newDevilUpgrade1.src = "devilUpgrade1.gif";
                newDevilUpgrade1.classList.add("cursor");

                if (devilCounter > 8) {
                    devilContainer.appendChild(newDevilUpgrade1);
                } else if (devilCounter <= 8) {
                    devilContainer2.appendChild(newDevilUpgrade1);
                }

                let devilInterval = setInterval(function() {
                    counterNumber += devilUpgrade1Speed;
                }, 1000);
                devilIntervals.push(devilInterval);
                meowsPerSecCounter = meowsPerSecCounter + devilUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }
        }

        if (devil.id == "devilUpgrade2Shop") {
                if (counterNumber < devilUpgraded2Costs) {
                    shopWarning.innerHTML = "Not enough meows";
                } else if (devilCounter >= 16) {
                    shopWarning.innerHTML = "Devil limit reached";
                } else if (counterNumber >= devilUpgraded2Costs && devilCounter < 16) {
                    devilCounter++;
                    shopWarning.innerHTML = "";
                    counterNumber = counterNumber - devilUpgraded2Costs;
                    let newDevilUpgrade2 = document.createElement("img");
                    newDevilUpgrade2.src = "devilUpgrade2.gif";
                    newDevilUpgrade2.classList.add("cursor");

                    if (devilCounter > 8) {
                        devilContainer.appendChild(newDevilUpgrade2);
                    } else if (devilCounter <= 8) {
                        devilContainer2.appendChild(newDevilUpgrade2);
                    }

                    let devilInterval = setInterval(function() {
                        counterNumber += devilUpgrade2Speed;
                    }, 1000);
                    devilIntervals.push(devilInterval);
                    meowsPerSecCounter = meowsPerSecCounter + devilUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }
            }
        }
                else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }  
                }

        function buyDevilUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < devilUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } else {
            devil.src = "devilUpgrade1.gif";
            devil.id = "devilUpgrade1Shop";
            devilLabel.id = "devilUpgrade1LabelShop";
            devilLabel.innerHTML = "Buy Devil(100T)";
            devil.name = "pink";

            counterNumber = counterNumber - devilUpgrade1Costs;

            devil.addEventListener("mouseover", cursorBackgroundColor);
            devil.addEventListener("mouseout", cursorBackgroundColor);

            devilUpgrade1ShopContainer.style.display = "none";
            devilUpgrade1ShopContainer.style.display = "none";

            clearAllDevilIntervals();

            let devilsToRemove = devilCounter;
            let devilsCountSaved = devilCounter;

            while (devilsToRemove > 0 && devilContainer.firstChild) {
                devilContainer.removeChild(devilContainer.firstChild);
                devilsToRemove--;
                devilCounter--;
                meowsPerSecCounter = meowsPerSecCounter - devilSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (devilsToRemove > 0 && devilContainer2.firstChild) {
                devilContainer2.removeChild(devilContainer2.firstChild);
                devilsToRemove--;
                devilCounter--;
                meowsPerSecCounter = meowsPerSecCounter - devilSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (devilsCountSaved > 0) {
                devilCounter++;
                devilsCountSaved--;
                let newDevilUpgrade1 = document.createElement("img");
                newDevilUpgrade1.src = "devilUpgrade1.gif";
                newDevilUpgrade1.classList.add("cursor");
                devilInterval = setInterval(function() {
                    counterNumber += devilUpgrade1Speed;
                }, 1000);
                devilIntervals.push(devilInterval);
                meowsPerSecCounter = meowsPerSecCounter + devilUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (devilCounter > 8) {
                    devilContainer.appendChild(newDevilUpgrade1);
                } else if (devilCounter <= 8) {
                    devilContainer2.appendChild(newDevilUpgrade1);
                }
            }
            devilUpgrade1Exists2 = true;
        }

        } else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyDevilUpgrade2() {
            if (!anyMonsterExists) {

            if (counterNumber < devilUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            } 
            
            else if (!devilUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }
            
            else {
                devil.src = "devilUpgrade2.gif";
                devil.id = "devilUpgrade2Shop";
                devilLabel.id = "devilUpgrade2LabelShop";
                devilLabel.innerHTML = "Buy Devil(1000T)";
                devil.name = "blue";

                counterNumber = counterNumber - devilUpgrade2Costs;

                devil.addEventListener("mouseover", cursorBackgroundColor);
                devil.addEventListener("mouseout", cursorBackgroundColor);

                devilUpgrade2ShopContainer.style.display = "none";
                devilUpgrade2ShopContainer.style.display = "none";

                clearAllDevilIntervals();

                let devilsToRemove = devilCounter;
                let devilsCountSaved = devilCounter;

                while (devilsToRemove > 0 && devilContainer.firstChild) {
                    devilContainer.removeChild(devilContainer.firstChild);
                    devilsToRemove--;
                    devilCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - devilUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (devilsToRemove > 0 && devilContainer2.firstChild) {
                    devilContainer2.removeChild(devilContainer2.firstChild);
                    devilsToRemove--;
                    devilCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - devilUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (devilsCountSaved > 0) {
                    devilCounter++;
                    devilsCountSaved--;
                    let newDevilUpgrade2 = document.createElement("img");
                    newDevilUpgrade2.src = "devilUpgrade2.gif";
                    newDevilUpgrade2.classList.add("cursor");
                    devilInterval = setInterval(function() {
                        counterNumber += devilUpgrade2Speed;
                    }, 1000);
                    devilIntervals.push(devilInterval);
                    meowsPerSecCounter = meowsPerSecCounter + devilUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                    if (devilCounter > 8) {
                        devilContainer.appendChild(newDevilUpgrade2);
                    } else if (devilCounter <= 8) {
                        devilContainer2.appendChild(newDevilUpgrade2);
                    }
                }
                devilUpgrade2Exists2 = true;
            }

            } else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }         
        }
        
        function buyChains() {
            if (!anyMonsterExists) {

        if (chains.id == "chains") {
            if (counterNumber < chainsCosts) {
                shopWarning.innerHTML = "Not enough meows";
            }

            if (chainsCounter >= 16) {
                shopWarning.innerHTML = "Chains limit reached";
            }

            else if (counterNumber >= chainsCosts && chainsCounter < 16) {
                chainsCounter++;
                shopWarning.innerHTML = "";
                counterNumber = counterNumber - chainsCosts;
                newChains = document.createElement("img");
                newChains.src = "chains.gif";
                newChains.classList.add("cursor");

                if (chainsCounter > 8) {
                    chainsContainer.appendChild(newChains);
                } else if (chainsCounter <= 8) {
                    chainsContainer2.appendChild(newChains);
                }

                chainsInterval = setInterval(function() {
                    counterNumber += chainsSpeed;
                }, 1000);
                chainsIntervals.push(chainsInterval);
                meowsPerSecCounter = meowsPerSecCounter + chainsSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }   
        }

                    if (chains.id == "chainsUpgrade1Shop") {
                if (counterNumber < chainsUpgraded1Costs) {
                    shopWarning.innerHTML = "Not enough meows";
                } else if (chainsCounter >= 16) {
                    shopWarning.innerHTML = "Chains limit reached";
                } else if (counterNumber >= chainsUpgraded1Costs && chainsCounter < 16) {
                    chainsCounter++;
                    shopWarning.innerHTML = "";
                    counterNumber = counterNumber - chainsUpgraded1Costs;
                    let newChainsUpgrade1 = document.createElement("img");
                    newChainsUpgrade1.src = "chainsUpgrade1.gif";
                    newChainsUpgrade1.classList.add("cursor");

                    if (chainsCounter > 8) {
                        chainsContainer.appendChild(newChainsUpgrade1);
                    } else if (chainsCounter <= 8) {
                        chainsContainer2.appendChild(newChainsUpgrade1);
                    }

                    let chainsInterval = setInterval(function() {
                        counterNumber += chainsUpgrade1Speed;
                    }, 1000);
                    chainsIntervals.push(chainsInterval);
                    meowsPerSecCounter = meowsPerSecCounter + chainsUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }
            }

            if (chains.id == "chainsUpgrade2Shop") {
                if (counterNumber < chainsUpgraded2Costs) {
                    shopWarning.innerHTML = "Not enough meows";
                } else if (chainsCounter >= 16) {
                    shopWarning.innerHTML = "Chains limit reached";
                } else if (counterNumber >= chainsUpgraded2Costs && chainsCounter < 16) {
                    chainsCounter++;
                    shopWarning.innerHTML = "";
                    counterNumber = counterNumber - chainsUpgraded2Costs;
                    let newChainsUpgrade2 = document.createElement("img");
                    newChainsUpgrade2.src = "chainsUpgrade2.gif";
                    newChainsUpgrade2.classList.add("cursor");

                    if (chainsCounter > 8) {
                        chainsContainer.appendChild(newChainsUpgrade2);
                    } else if (chainsCounter <= 8) {
                        chainsContainer2.appendChild(newChainsUpgrade2);
                    }

                    let chainsInterval = setInterval(function() {
                        counterNumber += chainsUpgrade2Speed;
                    }, 1000);
                    chainsIntervals.push(chainsInterval);
                    meowsPerSecCounter = meowsPerSecCounter + chainsUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }
            }
        } 
        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyChainsUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < chainsUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } else {
            chains.src = "chainsUpgrade1.gif";
            chains.id = "chainsUpgrade1Shop";
            chainsLabel.id = "chainsUpgrade1LabelShop";
            chainsLabel.innerHTML = "Buy Chains(500T)";
            chains.name = "pink";

            counterNumber = counterNumber - chainsUpgrade1Costs;

            chains.addEventListener("mouseover", cursorBackgroundColor);
            chains.addEventListener("mouseout", cursorBackgroundColor);

            chainsUpgrade1ShopContainer.style.display = "none";
            chainsUpgrade1ShopContainer.style.display = "none";

            clearAllChainsIntervals();

            let chainsToRemove = chainsCounter;
            let chainsCountSaved = chainsCounter;

            while (chainsToRemove > 0 && chainsContainer.firstChild) {
                chainsContainer.removeChild(chainsContainer.firstChild);
                chainsToRemove--;
                chainsCounter--;
                meowsPerSecCounter = meowsPerSecCounter - chainsSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (chainsToRemove > 0 && chainsContainer2.firstChild) {
                chainsContainer2.removeChild(chainsContainer2.firstChild);
                chainsToRemove--;
                chainsCounter--;
                meowsPerSecCounter = meowsPerSecCounter - chainsSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (chainsCountSaved > 0) {
                chainsCounter++;
                chainsCountSaved--;
                let newChainsUpgrade1 = document.createElement("img");
                newChainsUpgrade1.src = "chainsUpgrade1.gif";
                newChainsUpgrade1.classList.add("cursor");
                chainsInterval = setInterval(function() {
                    counterNumber += chainsUpgrade1Speed;
                }, 1000);
                chainsIntervals.push(chainsInterval);
                meowsPerSecCounter = meowsPerSecCounter + chainsUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (chainsCounter > 8) {
                    chainsContainer.appendChild(newChainsUpgrade1);
                } else if (chainsCounter <= 8) {
                    chainsContainer2.appendChild(newChainsUpgrade1);
                }
            }
            chainsUpgrade1Exists2 = true;
        }

        } else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyChainsUpgrade2() {
            if (!anyMonsterExists) {

            if (counterNumber < chainsUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            } 
            
            else if (!chainsUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }
            
            else {
                chains.src = "chainsUpgrade2.gif";
                chains.id = "chainsUpgrade2Shop";
                chainsLabel.id = "chainsUpgrade2LabelShop";
                chainsLabel.innerHTML = "Buy Chains(5000T)";
                chains.name = "blue";

                counterNumber = counterNumber - chainsUpgrade2Costs;

                chains.addEventListener("mouseover", cursorBackgroundColor);
                chains.addEventListener("mouseout", cursorBackgroundColor);

                chainsUpgrade2ShopContainer.style.display = "none";
                chainsUpgrade2ShopContainer.style.display = "none";

                clearAllChainsIntervals();

                let chainsToRemove = chainsCounter;
                let chainsCountSaved = chainsCounter;

                while (chainsToRemove > 0 && chainsContainer.firstChild) {
                    chainsContainer.removeChild(chainsContainer.firstChild);
                    chainsToRemove--;
                    chainsCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - chainsUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (chainsToRemove > 0 && chainsContainer2.firstChild) {
                    chainsContainer2.removeChild(chainsContainer2.firstChild);
                    chainsToRemove--;
                    chainsCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - chainsUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (chainsCountSaved > 0) {
                    chainsCounter++;
                    chainsCountSaved--;
                    let newChainsUpgrade2 = document.createElement("img");
                    newChainsUpgrade2.src = "chainsUpgrade2.gif";
                    newChainsUpgrade2.classList.add("cursor");
                    chainsInterval = setInterval(function() {
                        counterNumber += chainsUpgrade2Speed;
                    }, 1000);
                    chainsIntervals.push(chainsInterval);
                    meowsPerSecCounter = meowsPerSecCounter + chainsUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                    if (chainsCounter > 8) {
                        chainsContainer.appendChild(newChainsUpgrade2);
                    } else if (chainsCounter <= 8) {
                        chainsContainer2.appendChild(newChainsUpgrade2);
                    }
                }
                chainsUpgrade2Exists2 = true;
            }

            } else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyCerberus() {
            if (!anyMonsterExists) {

            if (devil.name != cerberus.name) {
                shopWarning.innerHTML = "Not enough devils";
            }

            else {

                if (devilCounter < 16) {
                    shopWarning.innerHTML = "Not enough devils";
                }
                
                else if (cerberusCounter >= 16) {
                    shopWarning.innerHTML = "Cerberus limit reached";
                }

                else {

                    let devilToRemove = 16;

                    clearAllDevilIntervals();

                    if (cerberus.name == "grey") {

                        while (devilToRemove > 0 && devilContainer.firstChild) {
                            devilContainer.removeChild(devilContainer.firstChild);
                            devilToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - devilSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (devilToRemove > 0 && devilContainer2.firstChild) {
                            devilContainer2.removeChild(devilContainer2.firstChild);
                            devilToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - devilSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                        
                        cerberusCounter++;
                        shopWarning.innerHTML = "";
                        devilCounter = devilCounter - 16;
                        let newCerberus = document.createElement("img");
                        newCerberus.src = "cerberus.gif";
                        newCerberus.classList.add("cursor");

                        if (cerberusCounter > 8) {
                            cerberusContainer.appendChild(newCerberus);
                        }
                        else if (cerberusCounter <= 8) {
                            cerberusContainer2.appendChild(newCerberus);
                        }

                        cerberusInterval = setInterval(function() {
                            counterNumber += cerberusSpeed;
                        }, 1000);
                        cerberusIntervals.push(cerberusInterval);
                        meowsPerSecCounter = meowsPerSecCounter + cerberusSpeed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        shopWarning.innerHTML = ""; 
                    }

                    if (cerberus.name == "pink") {

                        while (devilToRemove > 0 && devilContainer.firstChild) {
                            devilContainer.removeChild(devilContainer.firstChild);
                            devilToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - devilUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (devilToRemove > 0 && devilContainer2.firstChild) {
                            devilContainer2.removeChild(devilContainer2.firstChild);
                            devilToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - devilUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        cerberusCounter++;
                        shopWarning.innerHTML = "";
                        devilCounter = devilCounter - 16;
                        let newCerberusUpgrade1 = document.createElement("img");
                        newCerberusUpgrade1.src = "cerberusUpgrade1.gif";
                        newCerberusUpgrade1.classList.add("cursor");

                        if (cerberusCounter > 8) {
                            cerberusContainer.appendChild(newCerberusUpgrade1);
                        } else if (cerberusCounter <= 8) {
                            cerberusContainer2.appendChild(newCerberusUpgrade1);
                        }
                        cerberusInterval = setInterval(function() {
                            counterNumber += cerberusUpgrade1Speed;         
                        }, 1000);
                        cerberusIntervals.push(cerberusInterval);
                        meowsPerSecCounter = meowsPerSecCounter + cerberusUpgrade1Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        shopWarning.innerHTML = "";
                        }

                        if (cerberus.name == "blue") {

                        while (devilToRemove > 0 && devilContainer.firstChild) {
                            devilContainer.removeChild(devilContainer.firstChild);
                            devilToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - devilUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (devilToRemove > 0 && devilContainer2.firstChild) {
                            devilContainer2.removeChild(devilContainer2.firstChild);
                            devilToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - devilUpgrade2Speed; 
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        cerberusCounter++;
                        shopWarning.innerHTML = "";
                        devilCounter = devilCounter - 16;
                        let newCerberusUpgrade2 = document.createElement("img");
                        newCerberusUpgrade2.src = "cerberusUpgrade2.gif";
                        newCerberusUpgrade2.classList.add("cursor");

                        if (cerberusCounter > 8) {
                            cerberusContainer.appendChild(newCerberusUpgrade2);
                        } else if (cerberusCounter <= 8) {
                            cerberusContainer2.appendChild(newCerberusUpgrade2);
                        }
                        cerberusInterval = setInterval(function() {
                            counterNumber += cerberusUpgrade2Speed;
                        }, 1000);
                        cerberusIntervals.push(cerberusInterval);
                        meowsPerSecCounter = meowsPerSecCounter + cerberusUpgrade2Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        shopWarning.innerHTML = "";
                        }

                }
            }
            }
            else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyCerberusUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < cerberusUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } else {
            cerberus.src = "cerberusUpgrade1.gif";
            cerberusDevil.src = "devilUpgrade1.gif";
            cerberus.id = "cerberusUpgrade1Shop";
            cerberusLabel.id = "cerberusUpgrade1LabelShop";
            cerberusLabel.innerHTML = "Buy Cerberus (16x";
            cerberus.name = "pink"; 

            counterNumber = counterNumber - cerberusUpgrade1Costs;

            cerberus.addEventListener("mouseover", cursorBackgroundColor);
            cerberus.addEventListener("mouseout", cursorBackgroundColor);

            cerberusUpgrade1ShopContainer.style.display = "none";
            cerberusUpgrade1ShopContainer.style.display = "none";

            clearAllCerberusIntervals();

            let cerberusToRemove = cerberusCounter;
            let cerberusCountSaved = cerberusCounter;

            while (cerberusToRemove > 0 && cerberusContainer.firstChild) {
                cerberusContainer.removeChild(cerberusContainer.firstChild);
                cerberusToRemove--;
                cerberusCounter--;
                meowsPerSecCounter = meowsPerSecCounter - cerberusSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cerberusToRemove > 0 && cerberusContainer2.firstChild) {
                cerberusContainer2.removeChild(cerberusContainer2.firstChild);
                cerberusToRemove--;
                cerberusCounter--;
                meowsPerSecCounter = meowsPerSecCounter - cerberusSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (cerberusCountSaved > 0) {
                cerberusCounter++;
                cerberusCountSaved--;
                let newCerberusUpgrade1 = document.createElement("img");
                newCerberusUpgrade1.src = "cerberusUpgrade1.gif";
                newCerberusUpgrade1.classList.add("cursor");
                cerberusInterval = setInterval(function() {
                    counterNumber += cerberusUpgrade1Speed;
                }, 1000);
                cerberusIntervals.push(cerberusInterval);
                meowsPerSecCounter = meowsPerSecCounter + cerberusUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (cerberusCounter > 8) {
                    cerberusContainer.appendChild(newCerberusUpgrade1);
                } else if (cerberusCounter <= 8) {
                    cerberusContainer2.appendChild(newCerberusUpgrade1);
                }
            }
            cerberusUpgrade1Exists2 = true;  
        }
        }

        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyCerberusUpgrade2() {
            if (!anyMonsterExists) {

            if (counterNumber < cerberusUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            } 
            
            else if (!cerberusUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }
            
            else {
                cerberus.src = "cerberusUpgrade2.gif";
                cerberusDevil.src = "devilUpgrade2.gif";
                cerberus.id = "cerberusUpgrade2Shop";
                cerberusLabel.id = "cerberusUpgrade2LabelShop";
                cerberusLabel.innerHTML = "Buy Cerberus (16x";
                cerberus.name = "blue"; 

                counterNumber = counterNumber - cerberusUpgrade2Costs;

                cerberus.addEventListener("mouseover", cursorBackgroundColor);
                cerberus.addEventListener("mouseout", cursorBackgroundColor);

                cerberusUpgrade2ShopContainer.style.display = "none";
                cerberusUpgrade2ShopContainer.style.display = "none";

                clearAllCerberusIntervals();

                let cerberusToRemove = cerberusCounter;
                let cerberusCountSaved = cerberusCounter;

                while (cerberusToRemove > 0 && cerberusContainer.firstChild) {
                    cerberusContainer.removeChild(cerberusContainer.firstChild);
                    cerberusToRemove--;
                    cerberusCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - cerberusUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (cerberusToRemove > 0 && cerberusContainer2.firstChild) {
                    cerberusContainer2.removeChild(cerberusContainer2.firstChild);
                    cerberusToRemove--;
                    cerberusCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - cerberusUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (cerberusCountSaved > 0) {
                    cerberusCounter++;
                    cerberusCountSaved--;
                    let newCerberusUpgrade2 = document.createElement("img");
                    newCerberusUpgrade2.src = "cerberusUpgrade2.gif";
                    newCerberusUpgrade2.classList.add("cursor");
                    cerberusInterval = setInterval(function() {
                        counterNumber += cerberusUpgrade2Speed;
                    }, 1000);
                    cerberusIntervals.push(cerberusInterval);
                    meowsPerSecCounter = meowsPerSecCounter + cerberusUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                    if (cerberusCounter > 8) {
                        cerberusContainer.appendChild(newCerberusUpgrade2);
                    } else if (cerberusCounter <= 8) {
                        cerberusContainer2.appendChild(newCerberusUpgrade2);
                    }
                }
                cerberusUpgrade2Exists = true;  
            }
            } else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyGatesOfHell() {
            if (!anyMonsterExists) {

            if (chains.name != gatesOfHell.name) {
                shopWarning.innerHTML = "Not enough chains";
            } else {

                if (chainsCounter < 16) {
                    shopWarning.innerHTML = "Not enough chains";
                } else if (gatesOfHellCounter >= 16) {
                    shopWarning.innerHTML = "Gates of hell limit reached";
                } else {

                    let chainsToRemove = 16;

                    clearAllChainsIntervals();

                    if (gatesOfHell.name == "grey") {

                        while (chainsToRemove > 0 && chainsContainer.firstChild) {
                            chainsContainer.removeChild(chainsContainer.firstChild);
                            chainsToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - chainsSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (chainsToRemove > 0 && chainsContainer2.firstChild) {
                            chainsContainer2.removeChild(chainsContainer2.firstChild);
                            chainsToRemove--;
                            meowsPerSecCounter = meowsPerSecCounter - chainsSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        gatesOfHellCounter++;
                        shopWarning.innerHTML = "";
                        chainsCounter = chainsCounter - 16;
                        let newGatesOfHell = document.createElement("img");
                        newGatesOfHell.src = "gatesOfHell.gif";
                        newGatesOfHell.classList.add("cursor");

                        if (gatesOfHellCounter > 8) {
                            gatesOfHellContainer.appendChild(newGatesOfHell);
                        } else if (gatesOfHellCounter <= 8) {
                            gatesOfHellContainer2.appendChild(newGatesOfHell);
                        }

                        gatesOfHellInterval = setInterval(function() {
                            counterNumber += gatesOfHellSpeed;
                        }, 1000);
                        gatesOfHellIntervals.push(gatesOfHellInterval);
                        meowsPerSecCounter = meowsPerSecCounter + gatesOfHellSpeed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        shopWarning.innerHTML = ""; 
                    }

                    if (gatesOfHell.name == "pink") {

                    while (chainsToRemove > 0 && chainsContainer.firstChild) {
                        chainsContainer.removeChild(chainsContainer.firstChild);
                        chainsToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - chainsUpgrade1Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    while (chainsToRemove > 0 && chainsContainer2.firstChild) {
                        chainsContainer2.removeChild(chainsContainer2.firstChild);
                        chainsToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - chainsUpgrade1Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    gatesOfHellCounter++;
                    shopWarning.innerHTML = "";
                    chainsCounter = chainsCounter - 16;
                    let newGatesOfHellUpgrade1 = document.createElement("img");
                    newGatesOfHellUpgrade1.src = "gatesOfHellUpgrade1.gif";
                    newGatesOfHellUpgrade1.classList.add("cursor");

                    if (gatesOfHellCounter > 8) {
                        gatesOfHellContainer.appendChild(newGatesOfHellUpgrade1);
                    } else if (gatesOfHellCounter <= 8) {
                        gatesOfHellContainer2.appendChild(newGatesOfHellUpgrade1);
                    }
                    gatesOfHellInterval = setInterval(function() {
                        counterNumber += gatesOfHellUpgrade1Speed;         
                    }, 1000);
                    gatesOfHellIntervals.push(gatesOfHellInterval);
                    meowsPerSecCounter = meowsPerSecCounter + gatesOfHellUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    shopWarning.innerHTML = "";
                    }

                    if (gatesOfHell.name == "blue") {

                    while (chainsToRemove > 0 && chainsContainer.firstChild) {
                        chainsContainer.removeChild(chainsContainer.firstChild);
                        chainsToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - chainsUpgrade2Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    while (chainsToRemove > 0 && chainsContainer2.firstChild) {
                        chainsContainer2.removeChild(chainsContainer2.firstChild);
                        chainsToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - chainsUpgrade2Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    gatesOfHellCounter++;
                    shopWarning.innerHTML = "";
                    chainsCounter = chainsCounter - 16;
                    let newGatesOfHellUpgrade2 = document.createElement("img");
                    newGatesOfHellUpgrade2.src = "gatesOfHellUpgrade2.gif";
                    newGatesOfHellUpgrade2.classList.add("cursor");

                    if (gatesOfHellCounter > 8) {
                        gatesOfHellContainer.appendChild(newGatesOfHellUpgrade2);
                    } else if (gatesOfHellCounter <= 8) {
                        gatesOfHellContainer2.appendChild(newGatesOfHellUpgrade2);
                    }

                    gatesOfHellInterval = setInterval(function() {
                        counterNumber += gatesOfHellUpgrade2Speed;         
                    }, 1000);
                    gatesOfHellIntervals.push(gatesOfHellInterval);
                    meowsPerSecCounter = meowsPerSecCounter + gatesOfHellUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    shopWarning.innerHTML = "";
                    }
                }
            }
            } else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyGatesOfHellUpgrade1() {
            if (!anyMonsterExists) {

        if (counterNumber < gatesOfHellUpgrade1Costs) {
            shopWarning.innerHTML = "Not enough meows";
        } else {
            gatesOfHell.src = "gatesOfHellUpgrade1.gif";
            gatesOfHellChains.src = "chainsUpgrade1.gif";
            gatesOfHell.id = "gatesOfHellUpgrade1Shop";
            gatesOfHellLabel.id = "gatesOfHellUpgrade1LabelShop";
            gatesOfHellLabel.innerHTML = "Buy Gates of Hell (16x";
            gatesOfHell.name = "pink"; 

            counterNumber = counterNumber - gatesOfHellUpgrade1Costs;

            gatesOfHell.addEventListener("mouseover", cursorBackgroundColor);
            gatesOfHell.addEventListener("mouseout", cursorBackgroundColor);

            gatesOfHellUpgrade1ShopContainer.style.display = "none";
            gatesOfHellUpgrade1ShopContainer.style.display = "none";

            clearAllGatesOfHellIntervals();

            let gatesOfHellToRemove = gatesOfHellCounter;
            let gatesOfHellCountSaved = gatesOfHellCounter;

            while (gatesOfHellToRemove > 0 && gatesOfHellContainer.firstChild) {
                gatesOfHellContainer.removeChild(gatesOfHellContainer.firstChild);
                gatesOfHellToRemove--;
                gatesOfHellCounter--;
                meowsPerSecCounter = meowsPerSecCounter - gatesOfHellSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (gatesOfHellToRemove > 0 && gatesOfHellContainer2.firstChild) {
                gatesOfHellContainer2.removeChild(gatesOfHellContainer2.firstChild);
                gatesOfHellToRemove--;
                gatesOfHellCounter--;
                meowsPerSecCounter = meowsPerSecCounter - gatesOfHellSpeed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
            }

            while (gatesOfHellCountSaved > 0) {
                gatesOfHellCounter++;
                gatesOfHellCountSaved--;
                let newGatesOfHellUpgrade1 = document.createElement("img");
                newGatesOfHellUpgrade1.src = "gatesOfHellUpgrade1.gif";
                newGatesOfHellUpgrade1.classList.add("cursor");
                gatesOfHellInterval = setInterval(function() {
                    counterNumber += gatesOfHellUpgrade1Speed;
                }, 1000);
                gatesOfHellIntervals.push(gatesOfHellInterval);
                meowsPerSecCounter = meowsPerSecCounter + gatesOfHellUpgrade1Speed;
                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                if (gatesOfHellCounter > 8) {
                    gatesOfHellContainer.appendChild(newGatesOfHellUpgrade1);
                } else if (gatesOfHellCounter <= 8) {
                    gatesOfHellContainer2.appendChild(newGatesOfHellUpgrade1);
                }
            }
            gatesOfHellUpgrade1Exists2 = true;  
        }
        }
        else if (anyMonsterExists) {
        monsterWarning.innerHTML = "There is a monster!";
        }
        }

        function buyGatesOfHellUpgrade2() {
            if (!anyMonsterExists) {

            if (counterNumber < gatesOfHellUpgrade2Costs) {
                shopWarning.innerHTML = "Not enough meows";
            } 
            
            else if (!gatesOfHellUpgrade1Exists2) {
            shopWarning.innerHTML = "Incorrect upgrade order";
        }
            else {
                gatesOfHell.src = "gatesOfHellUpgrade2.gif";
                gatesOfHellChains.src = "chainsUpgrade2.gif";
                gatesOfHell.id = "gatesOfHellUpgrade2Shop";
                gatesOfHellLabel.id = "gatesOfHellUpgrade2LabelShop";
                gatesOfHellLabel.innerHTML = "Buy Gates of Hell (16x";
                gatesOfHell.name = "blue"; 

                counterNumber = counterNumber - gatesOfHellUpgrade2Costs;

                gatesOfHell.addEventListener("mouseover", cursorBackgroundColor);
                gatesOfHell.addEventListener("mouseout", cursorBackgroundColor);

                gatesOfHellUpgrade2ShopContainer.style.display = "none";
                gatesOfHellUpgrade2ShopContainer.style.display = "none";

                clearAllGatesOfHellIntervals();

                let gatesOfHellToRemove = gatesOfHellCounter;
                let gatesOfHellCountSaved = gatesOfHellCounter;

                while (gatesOfHellToRemove > 0 && gatesOfHellContainer.firstChild) {
                    gatesOfHellContainer.removeChild(gatesOfHellContainer.firstChild);
                    gatesOfHellToRemove--;
                    gatesOfHellCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - gatesOfHellUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (gatesOfHellToRemove > 0 && gatesOfHellContainer2.firstChild) {
                    gatesOfHellContainer2.removeChild(gatesOfHellContainer2.firstChild);
                    gatesOfHellToRemove--;
                    gatesOfHellCounter--;
                    meowsPerSecCounter = meowsPerSecCounter - gatesOfHellUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                }

                while (gatesOfHellCountSaved > 0) {
                    gatesOfHellCounter++;
                    gatesOfHellCountSaved--;
                    let newGatesOfHellUpgrade2 = document.createElement("img");
                    newGatesOfHellUpgrade2.src = "gatesOfHellUpgrade2.gif";
                    newGatesOfHellUpgrade2.classList.add("cursor");
                    gatesOfHellInterval = setInterval(function() {
                        counterNumber += gatesOfHellUpgrade2Speed;
                    }, 1000);
                    gatesOfHellIntervals.push(gatesOfHellInterval);
                    meowsPerSecCounter = meowsPerSecCounter + gatesOfHellUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                    if (gatesOfHellCounter > 8) {
                        gatesOfHellContainer.appendChild(newGatesOfHellUpgrade2);
                    } else if (gatesOfHellCounter <= 8) {
                        gatesOfHellContainer2.appendChild(newGatesOfHellUpgrade2);
                    }
                }
                gatesOfHellUpgrade2Exists = true;  
            }
            } else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyAngel() {
                if (!anyMonsterExists) {

                    if (angel.id == "angel") {
                        if (counterNumber < angelCosts) {
                            shopWarning.innerHTML = "Not enough meows";
                        }

                        if (angelCounter >= 16) {
                            shopWarning.innerHTML = "Angel limit reached";
                        } else if (counterNumber >= angelCosts && angelCounter < 16) {
                            angelCounter++;
                            shopWarning.innerHTML = "";
                            counterNumber = counterNumber - angelCosts;
                            let newAngel = document.createElement("img");
                            newAngel.src = "angel.gif";
                            newAngel.classList.add("cursor");

                            if (angelCounter > 8) {
                                angelContainer.appendChild(newAngel);
                            } else if (angelCounter <= 8) {
                                angelContainer2.appendChild(newAngel);
                            }

                            let angelInterval = setInterval(function() {
                                counterNumber += angelSpeed;
                            }, 1000);
                            angelIntervals.push(angelInterval);
                            meowsPerSecCounter = meowsPerSecCounter + angelSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                    }

                    if (angel.id == "angelUpgrade1Shop") {
                        if (counterNumber < angelUpgraded1Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (angelCounter >= 16) {
                            shopWarning.innerHTML = "Angel limit reached";
                        } else if (counterNumber >= angelUpgraded1Costs && angelCounter < 16) {
                            angelCounter++;
                            shopWarning.innerHTML = "";
                            counterNumber = counterNumber - angelUpgraded1Costs;
                            let newAngelUpgrade1 = document.createElement("img");
                            newAngelUpgrade1.src = "angelUpgrade1.gif";
                            newAngelUpgrade1.classList.add("cursor");

                            if (angelCounter > 8) {
                                angelContainer.appendChild(newAngelUpgrade1);
                            } else if (angelCounter <= 8) {
                                angelContainer2.appendChild(newAngelUpgrade1);
                            }

                            let angelInterval = setInterval(function() {
                                counterNumber += angelUpgrade1Speed;
                            }, 1000);
                            angelIntervals.push(angelInterval);
                            meowsPerSecCounter = meowsPerSecCounter + angelUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                    }

                    if (angel.id == "angelUpgrade2Shop") {
                        if (counterNumber < angelUpgraded2Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (angelCounter >= 16) {
                            shopWarning.innerHTML = "Angel limit reached";
                        } else if (counterNumber >= angelUpgraded2Costs && angelCounter < 16) {
                            angelCounter++;
                            shopWarning.innerHTML = "";
                            counterNumber = counterNumber - angelUpgraded2Costs;
                            let newAngelUpgrade2 = document.createElement("img");
                            newAngelUpgrade2.src = "angelUpgrade2.gif";
                            newAngelUpgrade2.classList.add("cursor");

                            if (angelCounter > 8) {
                                angelContainer.appendChild(newAngelUpgrade2);
                            } else if (angelCounter <= 8) {
                                angelContainer2.appendChild(newAngelUpgrade2);
                            }

                            let angelInterval = setInterval(function() {
                                counterNumber += angelUpgrade2Speed;
                            }, 1000);
                            angelIntervals.push(angelInterval);
                            meowsPerSecCounter = meowsPerSecCounter + angelUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyAngelUpgrade1() {
                if (!anyMonsterExists) {

                    if (counterNumber < angelUpgrade1Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else {
                        angel.src = "angelUpgrade1.gif";
                        angel.id = "angelUpgrade1Shop";
                        angelLabel.id = "angelUpgrade1LabelShop";
                        angelLabel.innerHTML = "Buy Angel(100T)";
                        angel.name = "pink";

                        counterNumber = counterNumber - angelUpgrade1Costs;

                        angel.addEventListener("mouseover", cursorBackgroundColor);
                        angel.addEventListener("mouseout", cursorBackgroundColor);

                        angelUpgrade1ShopContainer.style.display = "none";
                        angelUpgrade1ShopContainer.style.display = "none";

                        clearAllAngelIntervals();

                        let angelsToRemove = angelCounter;
                        let angelsCountSaved = angelCounter;

                        while (angelsToRemove > 0 && angelContainer.firstChild) {
                            angelContainer.removeChild(angelContainer.firstChild);
                            angelsToRemove--;
                            angelCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - angelSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (angelsToRemove > 0 && angelContainer2.firstChild) {
                            angelContainer2.removeChild(angelContainer2.firstChild);
                            angelsToRemove--;
                            angelCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - angelSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (angelsCountSaved > 0) {
                            angelCounter++;
                            angelsCountSaved--;
                            let newAngelUpgrade1 = document.createElement("img");
                            newAngelUpgrade1.src = "angelUpgrade1.gif";
                            newAngelUpgrade1.classList.add("cursor");
                            angelInterval = setInterval(function() {
                                counterNumber += angelUpgrade1Speed;
                            }, 1000);
                            angelIntervals.push(angelInterval);
                            meowsPerSecCounter = meowsPerSecCounter + angelUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (angelCounter > 8) {
                                angelContainer.appendChild(newAngelUpgrade1);
                            } else if (angelCounter <= 8) {
                                angelContainer2.appendChild(newAngelUpgrade1);
                            }
                        }
                        angelUpgrade1Exists2 = true;
                    }

                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyAngelUpgrade2() {
                if (!anyMonsterExists) {

                    if (counterNumber < angelUpgrade2Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else if (!angelUpgrade1Exists2) {
                        shopWarning.innerHTML = "Incorrect upgrade order";
                    } else {
                        angel.src = "angelUpgrade2.gif";
                        angel.id = "angelUpgrade2Shop";
                        angelLabel.id = "angelUpgrade2LabelShop";
                        angelLabel.innerHTML = "Buy Angel(1000T)";
                        angel.name = "blue";

                        counterNumber = counterNumber - angelUpgrade2Costs;

                        angel.addEventListener("mouseover", cursorBackgroundColor);
                        angel.addEventListener("mouseout", cursorBackgroundColor);

                        angelUpgrade2ShopContainer.style.display = "none";
                        angelUpgrade2ShopContainer.style.display = "none";

                        clearAllAngelIntervals();

                        let angelsToRemove = angelCounter;
                        let angelsCountSaved = angelCounter;

                        while (angelsToRemove > 0 && angelContainer.firstChild) {
                            angelContainer.removeChild(angelContainer.firstChild);
                            angelsToRemove--;
                            angelCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - angelUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (angelsToRemove > 0 && angelContainer2.firstChild) {
                            angelContainer2.removeChild(angelContainer2.firstChild);
                            angelsToRemove--;
                            angelCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - angelUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (angelsCountSaved > 0) {
                            angelCounter++;
                            angelsCountSaved--;
                            let newAngelUpgrade2 = document.createElement("img");
                            newAngelUpgrade2.src = "angelUpgrade2.gif";
                            newAngelUpgrade2.classList.add("cursor");
                            angelInterval = setInterval(function() {
                                counterNumber += angelUpgrade2Speed;
                            }, 1000);
                            angelIntervals.push(angelInterval);
                            meowsPerSecCounter = meowsPerSecCounter + angelUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (angelCounter > 8) {
                                angelContainer.appendChild(newAngelUpgrade2);
                            } else if (angelCounter <= 8) {
                                angelContainer2.appendChild(newAngelUpgrade2);
                            }
                        }
                        angelUpgrade2Exists2 = true;
                    }

                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyHalo() {
                if (!anyMonsterExists) {

                    if (halo.id == "halo") {
                        if (counterNumber < haloCosts) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (haloCounter >= 16) {
                            shopWarning.innerHTML = "Halo limit reached";
                        } else if (counterNumber >= haloCosts && haloCounter < 16) {
                            haloCounter++;
                            shopWarning.innerHTML = "";
                            counterNumber -= haloCosts;
                            let newHalo = document.createElement("img");
                            newHalo.src = "halo.gif";
                            newHalo.classList.add("cursor");

                            if (haloCounter > 8) {
                                haloContainer.appendChild(newHalo);
                            } else if (haloCounter <= 8) {
                                haloContainer2.appendChild(newHalo);
                            }

                            let haloInterval = setInterval(function() {
                                counterNumber += haloSpeed;
                            }, 1000);
                            haloIntervals.push(haloInterval);
                            meowsPerSecCounter += haloSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }   
                    }

                    if (halo.id == "haloUpgrade1Shop") {
                        if (counterNumber < haloUpgraded1Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (haloCounter >= 16) {
                            shopWarning.innerHTML = "Halo limit reached";
                        } else if (counterNumber >= haloUpgraded1Costs && haloCounter < 16) {
                            haloCounter++;
                            shopWarning.innerHTML = "";
                            counterNumber -= haloUpgraded1Costs;
                            let newHaloUpgrade1 = document.createElement("img");
                            newHaloUpgrade1.src = "haloUpgrade1.gif";
                            newHaloUpgrade1.classList.add("cursor");

                            if (haloCounter > 8) {
                                haloContainer.appendChild(newHaloUpgrade1);
                            } else if (haloCounter <= 8) {
                                haloContainer2.appendChild(newHaloUpgrade1);
                            }

                            let haloInterval = setInterval(function() {
                                counterNumber += haloUpgrade1Speed;
                            }, 1000);
                            haloIntervals.push(haloInterval);
                            meowsPerSecCounter += haloUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                    }

                    if (halo.id == "haloUpgrade2Shop") {
                        if (counterNumber < haloUpgraded2Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (haloCounter >= 16) {
                            shopWarning.innerHTML = "Halo limit reached";
                        } else if (counterNumber >= haloUpgraded2Costs && haloCounter < 16) {
                            haloCounter++;
                            shopWarning.innerHTML = "";
                            counterNumber -= haloUpgraded2Costs;
                            let newHaloUpgrade2 = document.createElement("img");
                            newHaloUpgrade2.src = "haloUpgrade2.gif";
                            newHaloUpgrade2.classList.add("cursor");

                            if (haloCounter > 8) {
                                haloContainer.appendChild(newHaloUpgrade2);
                            } else if (haloCounter <= 8) {
                                haloContainer2.appendChild(newHaloUpgrade2);
                            }

                            let haloInterval = setInterval(function() {
                                counterNumber += haloUpgrade2Speed;
                            }, 1000);
                            haloIntervals.push(haloInterval);
                            meowsPerSecCounter += haloUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }
                    }

                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyHaloUpgrade1() {
                if (!anyMonsterExists) {

                    if (counterNumber < haloUpgrade1Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else {
                        halo.src = "haloUpgrade1.gif";
                        halo.id = "haloUpgrade1Shop";
                        haloLabel.id = "haloUpgrade1LabelShop";
                        haloLabel.innerHTML = "Buy Halo(500T)";
                        halo.name = "pink";

                        counterNumber -= haloUpgrade1Costs;

                        halo.addEventListener("mouseover", cursorBackgroundColor);
                        halo.addEventListener("mouseout", cursorBackgroundColor);

                        haloUpgrade1ShopContainer.style.display = "none";

                        clearAllHaloIntervals();

                        let halosToRemove = haloCounter;
                        let haloCountSaved = haloCounter;

                        while (halosToRemove > 0 && haloContainer.firstChild) {
                            haloContainer.removeChild(haloContainer.firstChild);
                            halosToRemove--;
                            haloCounter--;
                            meowsPerSecCounter -= haloSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (halosToRemove > 0 && haloContainer2.firstChild) {
                            haloContainer2.removeChild(haloContainer2.firstChild);
                            halosToRemove--;
                            haloCounter--;
                            meowsPerSecCounter -= haloSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (haloCountSaved > 0) {
                            haloCounter++;
                            haloCountSaved--;
                            let newHaloUpgrade1 = document.createElement("img");
                            newHaloUpgrade1.src = "haloUpgrade1.gif";
                            newHaloUpgrade1.classList.add("cursor");
                            let haloInterval = setInterval(function() {
                                counterNumber += haloUpgrade1Speed;
                            }, 1000);
                            haloIntervals.push(haloInterval);
                            meowsPerSecCounter += haloUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (haloCounter > 8) {
                                haloContainer.appendChild(newHaloUpgrade1);
                            } else if (haloCounter <= 8) {
                                haloContainer2.appendChild(newHaloUpgrade1);
                            }
                        }
                        haloUpgrade1Exists2 = true;
                    }

                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyHaloUpgrade2() {
                if (!anyMonsterExists) {

                    if (counterNumber < haloUpgrade2Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else if (!haloUpgrade1Exists2) {
                        shopWarning.innerHTML = "Incorrect upgrade order";
                    } else {
                        halo.src = "haloUpgrade2.gif";
                        halo.id = "haloUpgrade2Shop";
                        haloLabel.id = "haloUpgrade2LabelShop";
                        haloLabel.innerHTML = "Buy Halo(5000T)";
                        halo.name = "blue";

                        counterNumber -= haloUpgrade2Costs;

                        halo.addEventListener("mouseover", cursorBackgroundColor);
                        halo.addEventListener("mouseout", cursorBackgroundColor);

                        haloUpgrade2ShopContainer.style.display = "none";

                        clearAllHaloIntervals();

                        let halosToRemove = haloCounter;
                        let haloCountSaved = haloCounter;

                        while (halosToRemove > 0 && haloContainer.firstChild) {
                            haloContainer.removeChild(haloContainer.firstChild);
                            halosToRemove--;
                            haloCounter--;
                            meowsPerSecCounter -= haloUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (halosToRemove > 0 && haloContainer2.firstChild) {
                            haloContainer2.removeChild(haloContainer2.firstChild);
                            halosToRemove--;
                            haloCounter--;
                            meowsPerSecCounter -= haloUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (haloCountSaved > 0) {
                            haloCounter++;
                            haloCountSaved--;
                            let newHaloUpgrade2 = document.createElement("img");
                            newHaloUpgrade2.src = "haloUpgrade2.gif";
                            newHaloUpgrade2.classList.add("cursor");
                            let haloInterval = setInterval(function() {
                                counterNumber += haloUpgrade2Speed;
                            }, 1000);
                            haloIntervals.push(haloInterval);
                            meowsPerSecCounter += haloUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (haloCounter > 8) {
                                haloContainer.appendChild(newHaloUpgrade2);
                            } else if (haloCounter <= 8) {
                                haloContainer2.appendChild(newHaloUpgrade2);
                            }
                        }
                        haloUpgrade2Exists2 = true;
                    }

                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyVision() {
    if (!anyMonsterExists) {

        if (angel.name != vision.name) {
            shopWarning.innerHTML = "Not enough angels";
        } else {
            if (angelCounter < 16) {
                shopWarning.innerHTML = "Not enough angels";
            } else if (visionCounter >= 16) {
                shopWarning.innerHTML = "Vision limit reached";
            } else {
                let angelToRemove = 16;

                clearAllAngelIntervals();

                if (vision.name == "grey") {
                    while (angelToRemove > 0 && angelContainer.firstChild) {
                        angelContainer.removeChild(angelContainer.firstChild);
                        angelToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - angelSpeed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    while (angelToRemove > 0 && angelContainer2.firstChild) {
                        angelContainer2.removeChild(angelContainer2.firstChild);
                        angelToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - angelSpeed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    visionCounter++;
                    shopWarning.innerHTML = "";
                    angelCounter = angelCounter - 16;
                    let newVision = document.createElement("img");
                    newVision.src = "vision.gif";
                    newVision.classList.add("cursor");

                    if (visionCounter > 8) {
                        visionContainer.appendChild(newVision);
                    } else if (visionCounter <= 8) {
                        visionContainer2.appendChild(newVision);
                    }

                    visionInterval = setInterval(function() {
                        counterNumber += visionSpeed;
                    }, 1000);
                    visionIntervals.push(visionInterval);
                    meowsPerSecCounter = meowsPerSecCounter + visionSpeed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    shopWarning.innerHTML = "";
                }

                if (vision.name == "pink") {
                    while (angelToRemove > 0 && angelContainer.firstChild) {
                        angelContainer.removeChild(angelContainer.firstChild);
                        angelToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - angelUpgrade1Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    while (angelToRemove > 0 && angelContainer2.firstChild) {
                        angelContainer2.removeChild(angelContainer2.firstChild);
                        angelToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - angelUpgrade1Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    visionCounter++;
                    shopWarning.innerHTML = "";
                    angelCounter = angelCounter - 16;
                    let newVisionUpgrade1 = document.createElement("img");
                    newVisionUpgrade1.src = "visionUpgrade1.gif";
                    newVisionUpgrade1.classList.add("cursor");

                    if (visionCounter > 8) {
                        visionContainer.appendChild(newVisionUpgrade1);
                    } else if (visionCounter <= 8) {
                        visionContainer2.appendChild(newVisionUpgrade1);
                    }
                    visionInterval = setInterval(function() {
                        counterNumber += visionUpgrade1Speed;
                    }, 1000);
                    visionIntervals.push(visionInterval);
                    meowsPerSecCounter = meowsPerSecCounter + visionUpgrade1Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    shopWarning.innerHTML = "";
                }

                if (vision.name == "blue") {
                    while (angelToRemove > 0 && angelContainer.firstChild) {
                        angelContainer.removeChild(angelContainer.firstChild);
                        angelToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - angelUpgrade2Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    while (angelToRemove > 0 && angelContainer2.firstChild) {
                        angelContainer2.removeChild(angelContainer2.firstChild);
                        angelToRemove--;
                        meowsPerSecCounter = meowsPerSecCounter - angelUpgrade2Speed;
                        meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    }

                    visionCounter++;
                    shopWarning.innerHTML = "";
                    angelCounter = angelCounter - 16;
                    let newVisionUpgrade2 = document.createElement("img");
                    newVisionUpgrade2.src = "visionUpgrade2.gif";
                    newVisionUpgrade2.classList.add("cursor");

                    if (visionCounter > 8) {
                        visionContainer.appendChild(newVisionUpgrade2);
                    } else if (visionCounter <= 8) {
                        visionContainer2.appendChild(newVisionUpgrade2);
                    }
                    visionInterval = setInterval(function() {
                        counterNumber += visionUpgrade2Speed;
                    }, 1000);
                    visionIntervals.push(visionInterval);
                    meowsPerSecCounter = meowsPerSecCounter + visionUpgrade2Speed;
                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                    shopWarning.innerHTML = "";
                }
            }
        } 
    }
    else if (anyMonsterExists) {
            monsterWarning.innerHTML = "There is a monster!";
        }
    }
     
                function buyVisionUpgrade1() {
                if (!anyMonsterExists) {

                    if (counterNumber < visionUpgrade1Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else {
                        vision.src = "visionUpgrade1.gif";
                        visionAngel.src = "angelUpgrade1.gif";
                        vision.id = "visionUpgrade1Shop";
                        visionLabel.id = "visionUpgrade1LabelShop";
                        visionLabel.innerHTML = "Buy Vision (16x";
                        vision.name = "pink"; 

                        counterNumber = counterNumber - visionUpgrade1Costs;

                        vision.addEventListener("mouseover", cursorBackgroundColor);
                        vision.addEventListener("mouseout", cursorBackgroundColor);

                        visionUpgrade1ShopContainer.style.display = "none";

                        clearAllVisionIntervals();

                        let visionToRemove = visionCounter;
                        let visionCountSaved = visionCounter;

                        while (visionToRemove > 0 && visionContainer.firstChild) {
                            visionContainer.removeChild(visionContainer.firstChild);
                            visionToRemove--;
                            visionCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - visionSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (visionToRemove > 0 && visionContainer2.firstChild) {
                            visionContainer2.removeChild(visionContainer2.firstChild);
                            visionToRemove--;
                            visionCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - visionSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (visionCountSaved > 0) {
                            visionCounter++;
                            visionCountSaved--;
                            let newVisionUpgrade1 = document.createElement("img");
                            newVisionUpgrade1.src = "visionUpgrade1.gif";
                            newVisionUpgrade1.classList.add("cursor");
                            visionInterval = setInterval(function() {
                                counterNumber += visionUpgrade1Speed;
                            }, 1000);
                            visionIntervals.push(visionInterval);
                            meowsPerSecCounter = meowsPerSecCounter + visionUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (visionCounter > 8) {
                                visionContainer.appendChild(newVisionUpgrade1);
                            } else if (visionCounter <= 8) {
                                visionContainer2.appendChild(newVisionUpgrade1);
                            }
                        }
                        visionUpgrade1Exists2 = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyVisionUpgrade2() {
                if (!anyMonsterExists) {

                    if (counterNumber < visionUpgrade2Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else if (!visionUpgrade1Exists2) {
                        shopWarning.innerHTML = "Incorrect upgrade order";
                    } else {
                        vision.src = "visionUpgrade2.gif";
                        visionAngel.src = "angelUpgrade2.gif";
                        vision.id = "visionUpgrade2Shop";
                        visionLabel.id = "visionUpgrade2LabelShop";
                        visionLabel.innerHTML = "Buy Vision (16x";
                        vision.name = "blue"; 

                        counterNumber = counterNumber - visionUpgrade2Costs;

                        vision.addEventListener("mouseover", cursorBackgroundColor);
                        vision.addEventListener("mouseout", cursorBackgroundColor);

                        visionUpgrade2ShopContainer.style.display = "none";

                        clearAllVisionIntervals();

                        let visionToRemove = visionCounter;
                        let visionCountSaved = visionCounter;

                        while (visionToRemove > 0 && visionContainer.firstChild) {
                            visionContainer.removeChild(visionContainer.firstChild);
                            visionToRemove--;
                            visionCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - visionUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (visionToRemove > 0 && visionContainer2.firstChild) {
                            visionContainer2.removeChild(visionContainer2.firstChild);
                            visionToRemove--;
                            visionCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - visionUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (visionCountSaved > 0) {
                            visionCounter++;
                            visionCountSaved--;
                            let newVisionUpgrade2 = document.createElement("img");
                            newVisionUpgrade2.src = "visionUpgrade2.gif";
                            newVisionUpgrade2.classList.add("cursor");
                            visionInterval = setInterval(function() {
                                counterNumber += visionUpgrade2Speed;
                            }, 1000);
                            visionIntervals.push(visionInterval);
                            meowsPerSecCounter = meowsPerSecCounter + visionUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (visionCounter > 8) {
                                visionContainer.appendChild(newVisionUpgrade2);
                            } else if (visionCounter <= 8) {
                                visionContainer2.appendChild(newVisionUpgrade2);
                            }
                        }
                        visionUpgrade2Exists = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyGatesOfHeaven() {
                if (!anyMonsterExists) {

                    if (halo.name != gatesOfHeaven.name) {
                        shopWarning.innerHTML = "Not enough halos";
                    } else {

                        if (haloCounter < 16) {
                            shopWarning.innerHTML = "Not enough halos";
                        } else if (gatesOfHeavenCounter >= 16) {
                            shopWarning.innerHTML = "Gates of Heaven limit reached";
                        } else {

                            let halosToRemove = 16;

                            clearAllHaloIntervals();

                            if (gatesOfHeaven.name == "grey") {

                                while (halosToRemove > 0 && haloContainer.firstChild) {
                                    haloContainer.removeChild(haloContainer.firstChild);
                                    halosToRemove--;
                                    meowsPerSecCounter = meowsPerSecCounter - haloSpeed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                while (halosToRemove > 0 && haloContainer2.firstChild) {
                                    haloContainer2.removeChild(haloContainer2.firstChild);
                                    halosToRemove--;
                                    meowsPerSecCounter = meowsPerSecCounter - haloSpeed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                gatesOfHeavenCounter++;
                                shopWarning.innerHTML = "";
                                haloCounter = haloCounter - 16;
                                let newGatesOfHeaven = document.createElement("img");
                                newGatesOfHeaven.src = "gatesOfHeaven.gif";
                                newGatesOfHeaven.classList.add("cursor");

                                if (gatesOfHeavenCounter > 8) {
                                    gatesOfHeavenContainer.appendChild(newGatesOfHeaven);
                                } else if (gatesOfHeavenCounter <= 8) {
                                    gatesOfHeavenContainer2.appendChild(newGatesOfHeaven);
                                }

                                gatesOfHeavenInterval = setInterval(function() {
                                    counterNumber += gatesOfHeavenSpeed;
                                }, 1000);
                                gatesOfHeavenIntervals.push(gatesOfHeavenInterval);
                                meowsPerSecCounter = meowsPerSecCounter + gatesOfHeavenSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                shopWarning.innerHTML = ""; 
                            }

                            if (gatesOfHeaven.name == "pink") {

                                while (halosToRemove > 0 && haloContainer.firstChild) {
                                    haloContainer.removeChild(haloContainer.firstChild);
                                    halosToRemove--;
                                    meowsPerSecCounter = meowsPerSecCounter - haloUpgrade1Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                while (halosToRemove > 0 && haloContainer2.firstChild) {
                                    haloContainer2.removeChild(haloContainer2.firstChild);
                                    halosToRemove--;
                                    meowsPerSecCounter = meowsPerSecCounter - haloUpgrade1Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                gatesOfHeavenCounter++;
                                shopWarning.innerHTML = "";
                                haloCounter = haloCounter - 16;
                                let newGatesOfHeavenUpgrade1 = document.createElement("img");
                                newGatesOfHeavenUpgrade1.src = "gatesOfHeavenUpgrade1.gif";
                                newGatesOfHeavenUpgrade1.classList.add("cursor");

                                if (gatesOfHeavenCounter > 8) {
                                    gatesOfHeavenContainer.appendChild(newGatesOfHeavenUpgrade1);
                                } else if (gatesOfHeavenCounter <= 8) {
                                    gatesOfHeavenContainer2.appendChild(newGatesOfHeavenUpgrade1);
                                }
                                gatesOfHeavenInterval = setInterval(function() {
                                    counterNumber += gatesOfHeavenUpgrade1Speed;         
                                }, 1000);
                                gatesOfHeavenIntervals.push(gatesOfHeavenInterval);
                                meowsPerSecCounter = meowsPerSecCounter + gatesOfHeavenUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                shopWarning.innerHTML = "";
                            }

                            if (gatesOfHeaven.name == "blue") {

                                while (halosToRemove > 0 && haloContainer.firstChild) {
                                    haloContainer.removeChild(haloContainer.firstChild);
                                    halosToRemove--;
                                    meowsPerSecCounter = meowsPerSecCounter - haloUpgrade2Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                while (halosToRemove > 0 && haloContainer2.firstChild) {
                                    haloContainer2.removeChild(haloContainer2.firstChild);
                                    halosToRemove--;
                                    meowsPerSecCounter = meowsPerSecCounter - haloUpgrade2Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                gatesOfHeavenCounter++;
                                shopWarning.innerHTML = "";
                                haloCounter = haloCounter - 16;
                                let newGatesOfHeavenUpgrade2 = document.createElement("img");
                                newGatesOfHeavenUpgrade2.src = "gatesOfHeavenUpgrade2.gif";
                                newGatesOfHeavenUpgrade2.classList.add("cursor");

                                if (gatesOfHeavenCounter > 8) {
                                    gatesOfHeavenContainer.appendChild(newGatesOfHeavenUpgrade2);
                                } else if (gatesOfHeavenCounter <= 8) {
                                    gatesOfHeavenContainer2.appendChild(newGatesOfHeavenUpgrade2);
                                }

                                gatesOfHeavenInterval = setInterval(function() {
                                    counterNumber += gatesOfHeavenUpgrade2Speed;         
                                }, 1000);
                                gatesOfHeavenIntervals.push(gatesOfHeavenInterval);
                                meowsPerSecCounter = meowsPerSecCounter + gatesOfHeavenUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                shopWarning.innerHTML = "";
                            }
                        }
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyGatesOfHeavenUpgrade1() {
                if (!anyMonsterExists) {

                    if (counterNumber < gatesOfHeavenUpgrade1Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else {
                        gatesOfHeaven.src = "gatesOfHeavenUpgrade1.gif";
                        gatesOfHeavenHalo.src = "haloUpgrade1.gif";
                        gatesOfHeaven.id = "gatesOfHeavenUpgrade1Shop";
                        gatesOfHeavenLabel.id = "gatesOfHeavenUpgrade1LabelShop";
                        gatesOfHeavenLabel.innerHTML = "Buy Gates of Heaven (16x";
                        gatesOfHeaven.name = "pink"; 

                        counterNumber = counterNumber - gatesOfHeavenUpgrade1Costs;

                        gatesOfHeaven.addEventListener("mouseover", cursorBackgroundColor);
                        gatesOfHeaven.addEventListener("mouseout", cursorBackgroundColor);

                        gatesOfHeavenUpgrade1ShopContainer.style.display = "none";
                        gatesOfHeavenUpgrade1ShopContainer.style.display = "none";

                        clearAllGatesOfHeavenIntervals();

                        let gatesOfHeavenToRemove = gatesOfHeavenCounter;
                        let gatesOfHeavenCountSaved = gatesOfHeavenCounter;

                        while (gatesOfHeavenToRemove > 0 && gatesOfHeavenContainer.firstChild) {
                            gatesOfHeavenContainer.removeChild(gatesOfHeavenContainer.firstChild);
                            gatesOfHeavenToRemove--;
                            gatesOfHeavenCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - gatesOfHeavenSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (gatesOfHeavenToRemove > 0 && gatesOfHeavenContainer2.firstChild) {
                            gatesOfHeavenContainer2.removeChild(gatesOfHeavenContainer2.firstChild);
                            gatesOfHeavenToRemove--;
                            gatesOfHeavenCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - gatesOfHeavenSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (gatesOfHeavenCountSaved > 0) {
                            gatesOfHeavenCounter++;
                            gatesOfHeavenCountSaved--;
                            let newGatesOfHeavenUpgrade1 = document.createElement("img");
                            newGatesOfHeavenUpgrade1.src = "gatesOfHeavenUpgrade1.gif";
                            newGatesOfHeavenUpgrade1.classList.add("cursor");
                            gatesOfHeavenInterval = setInterval(function() {
                                counterNumber += gatesOfHeavenUpgrade1Speed;
                            }, 1000);
                            gatesOfHeavenIntervals.push(gatesOfHeavenInterval);
                            meowsPerSecCounter = meowsPerSecCounter + gatesOfHeavenUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (gatesOfHeavenCounter > 8) {
                                gatesOfHeavenContainer.appendChild(newGatesOfHeavenUpgrade1);
                            } else if (gatesOfHeavenCounter <= 8) {
                                gatesOfHeavenContainer2.appendChild(newGatesOfHeavenUpgrade1);
                            }
                        }
                        gatesOfHeavenUpgrade1Exists2 = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyGatesOfHeavenUpgrade2() {
                if (!anyMonsterExists) {

                    if (counterNumber < gatesOfHeavenUpgrade2Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else if (!gatesOfHeavenUpgrade1Exists2) {
                        shopWarning.innerHTML = "Incorrect upgrade order";
                    } else {
                        gatesOfHeaven.src = "gatesOfHeavenUpgrade2.gif";
                        gatesOfHeavenHalo.src = "haloUpgrade2.gif";
                        gatesOfHeaven.id = "gatesOfHeavenUpgrade2Shop";
                        gatesOfHeavenLabel.id = "gatesOfHeavenUpgrade2LabelShop";
                        gatesOfHeavenLabel.innerHTML = "Buy Gates of Heaven (16x";
                        gatesOfHeaven.name = "blue"; 

                        counterNumber = counterNumber - gatesOfHeavenUpgrade2Costs;

                        gatesOfHeaven.addEventListener("mouseover", cursorBackgroundColor);
                        gatesOfHeaven.addEventListener("mouseout", cursorBackgroundColor);

                        gatesOfHeavenUpgrade2ShopContainer.style.display = "none";
                        gatesOfHeavenUpgrade2ShopContainer.style.display = "none";

                        clearAllGatesOfHeavenIntervals();

                        let gatesOfHeavenToRemove = gatesOfHeavenCounter;
                        let gatesOfHeavenCountSaved = gatesOfHeavenCounter;

                        while (gatesOfHeavenToRemove > 0 && gatesOfHeavenContainer.firstChild) {
                            gatesOfHeavenContainer.removeChild(gatesOfHeavenContainer.firstChild);
                            gatesOfHeavenToRemove--;
                            gatesOfHeavenCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - gatesOfHeavenUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (gatesOfHeavenToRemove > 0 && gatesOfHeavenContainer2.firstChild) {
                            gatesOfHeavenContainer2.removeChild(gatesOfHeavenContainer2.firstChild);
                            gatesOfHeavenToRemove--;
                            gatesOfHeavenCounter--;
                            meowsPerSecCounter = meowsPerSecCounter - gatesOfHeavenUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (gatesOfHeavenCountSaved > 0) {
                            gatesOfHeavenCounter++;
                            gatesOfHeavenCountSaved--;
                            let newGatesOfHeavenUpgrade2 = document.createElement("img");
                            newGatesOfHeavenUpgrade2.src = "gatesOfHeavenUpgrade2.gif";
                            newGatesOfHeavenUpgrade2.classList.add("cursor");
                            gatesOfHeavenInterval = setInterval(function() {
                                counterNumber += gatesOfHeavenUpgrade2Speed;
                            }, 1000);
                            gatesOfHeavenIntervals.push(gatesOfHeavenInterval);
                            meowsPerSecCounter = meowsPerSecCounter + gatesOfHeavenUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (gatesOfHeavenCounter > 8) {
                                gatesOfHeavenContainer.appendChild(newGatesOfHeavenUpgrade2);
                            } else if (gatesOfHeavenCounter <= 8) {
                                gatesOfHeavenContainer2.appendChild(newGatesOfHeavenUpgrade2);
                            }
                        }
                        gatesOfHeavenUpgrade2Exists = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyRocket() {
                    if (!anyMonsterExists) {

                        if (rocket.id == "rocket") {
                            if (counterNumber < rocketCosts) {
                                shopWarning.innerHTML = "Not enough meows";
                            }

                            if (rocketCounter >= 16) {
                                shopWarning.innerHTML = "Rocket limit reached";
                            } else if (counterNumber >= rocketCosts && rocketCounter < 16) {
                                rocketCounter++;
                                shopWarning.innerHTML = "";
                                counterNumber -= rocketCosts;
                                let newRocket = document.createElement("img");
                                newRocket.src = "rocket.gif";
                                newRocket.classList.add("cursor");

                                if (rocketCounter > 8) {
                                    rocketContainer.appendChild(newRocket);
                                } else if (rocketCounter <= 8) {
                                    rocketContainer2.appendChild(newRocket);
                                }

                                let rocketInterval = setInterval(function() {
                                    counterNumber += rocketSpeed;
                                }, 1000);
                                rocketIntervals.push(rocketInterval);
                                meowsPerSecCounter += rocketSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }
                        }

                        if (rocket.id == "rocketUpgrade1Shop") {
                            if (counterNumber < rocketUpgraded1Costs) {
                                shopWarning.innerHTML = "Not enough meows";
                            } else if (rocketCounter >= 16) {
                                shopWarning.innerHTML = "Rocket limit reached";
                            } else if (counterNumber >= rocketUpgraded1Costs && rocketCounter < 16) {
                                rocketCounter++;
                                shopWarning.innerHTML = "";
                                counterNumber -= rocketUpgraded1Costs;
                                let newRocketUpgrade1 = document.createElement("img");
                                newRocketUpgrade1.src = "rocketUpgrade1.gif";
                                newRocketUpgrade1.classList.add("cursor");

                                if (rocketCounter > 8) {
                                    rocketContainer.appendChild(newRocketUpgrade1);
                                } else if (rocketCounter <= 8) {
                                    rocketContainer2.appendChild(newRocketUpgrade1);
                                }

                                let rocketInterval = setInterval(function() {
                                    counterNumber += rocketUpgrade1Speed;
                                }, 1000);
                                rocketIntervals.push(rocketInterval);
                                meowsPerSecCounter += rocketUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }
                        }

                        if (rocket.id == "rocketUpgrade2Shop") {
                            if (counterNumber < rocketUpgraded2Costs) {
                                shopWarning.innerHTML = "Not enough meows";
                            } else if (rocketCounter >= 16) {
                                shopWarning.innerHTML = "Rocket limit reached";
                            } else if (counterNumber >= rocketUpgraded2Costs && rocketCounter < 16) {
                                rocketCounter++;
                                shopWarning.innerHTML = "";
                                counterNumber -= rocketUpgraded2Costs;
                                let newRocketUpgrade2 = document.createElement("img");
                                newRocketUpgrade2.src = "rocketUpgrade2.gif";
                                newRocketUpgrade2.classList.add("cursor");

                                if (rocketCounter > 8) {
                                    rocketContainer.appendChild(newRocketUpgrade2);
                                } else if (rocketCounter <= 8) {
                                    rocketContainer2.appendChild(newRocketUpgrade2);
                                }

                                let rocketInterval = setInterval(function() {
                                    counterNumber += rocketUpgrade2Speed;
                                }, 1000);
                                rocketIntervals.push(rocketInterval);
                                meowsPerSecCounter += rocketUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }
                        }
                    } else if (anyMonsterExists) {
                        monsterWarning.innerHTML = "There is a monster!";
                    }
                }

                function buyRocketUpgrade1() {
                    if (!anyMonsterExists) {

                        if (counterNumber < rocketUpgrade1Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else {
                            rocket.src = "rocketUpgrade1.gif";
                            rocket.id = "rocketUpgrade1Shop";
                            rocketLabel.id = "rocketUpgrade1LabelShop";
                            rocketLabel.innerHTML = "Buy Rocket(1000000T)";
                            rocket.name = "pink";

                            counterNumber -= rocketUpgrade1Costs;

                            rocket.addEventListener("mouseover", cursorBackgroundColor);
                            rocket.addEventListener("mouseout", cursorBackgroundColor);

                            rocketUpgrade1ShopContainer.style.display = "none";
                            rocketUpgrade1ShopContainer.style.display = "none";

                            clearAllRocketIntervals();

                            let rocketsToRemove = rocketCounter;
                            let rocketsCountSaved = rocketCounter;

                            while (rocketsToRemove > 0 && rocketContainer.firstChild) {
                                rocketContainer.removeChild(rocketContainer.firstChild);
                                rocketsToRemove--;
                                rocketCounter--;
                                meowsPerSecCounter -= rocketSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketsToRemove > 0 && rocketContainer2.firstChild) {
                                rocketContainer2.removeChild(rocketContainer2.firstChild);
                                rocketsToRemove--;
                                rocketCounter--;
                                meowsPerSecCounter -= rocketSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketsCountSaved > 0) {
                                rocketCounter++;
                                rocketsCountSaved--;
                                let newRocketUpgrade1 = document.createElement("img");
                                newRocketUpgrade1.src = "rocketUpgrade1.gif";
                                newRocketUpgrade1.classList.add("cursor");
                                rocketInterval = setInterval(function() {
                                    counterNumber += rocketUpgrade1Speed;
                                }, 1000);
                                rocketIntervals.push(rocketInterval);
                                meowsPerSecCounter += rocketUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                                if (rocketCounter > 8) {
                                    rocketContainer.appendChild(newRocketUpgrade1);
                                } else if (rocketCounter <= 8) {
                                    rocketContainer2.appendChild(newRocketUpgrade1);
                                }
                            }
                            rocketUpgrade1Exists2 = true;
                        }

                    } else if (anyMonsterExists) {
                        monsterWarning.innerHTML = "There is a monster!";
                    }
                }

                function buyRocketUpgrade2() {
                    if (!anyMonsterExists) {

                        if (counterNumber < rocketUpgrade2Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (!rocketUpgrade1Exists2) {
                            shopWarning.innerHTML = "Incorrect upgrade order";
                        } else {
                            rocket.src = "rocketUpgrade2.gif";
                            rocket.id = "rocketUpgrade2Shop";
                            rocketLabel.id = "rocketUpgrade2LabelShop";
                            rocketLabel.innerHTML = "Buy Rocket(10000000T)";
                            rocket.name = "blue";

                            counterNumber -= rocketUpgrade2Costs;

                            rocket.addEventListener("mouseover", cursorBackgroundColor);
                            rocket.addEventListener("mouseout", cursorBackgroundColor);

                            rocketUpgrade2ShopContainer.style.display = "none";
                            rocketUpgrade2ShopContainer.style.display = "none";

                            clearAllRocketIntervals();

                            let rocketsToRemove = rocketCounter;
                            let rocketsCountSaved = rocketCounter;

                            while (rocketsToRemove > 0 && rocketContainer.firstChild) {
                                rocketContainer.removeChild(rocketContainer.firstChild);
                                rocketsToRemove--;
                                rocketCounter--;
                                meowsPerSecCounter -= rocketUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketsToRemove > 0 && rocketContainer2.firstChild) {
                                rocketContainer2.removeChild(rocketContainer2.firstChild);
                                rocketsToRemove--;
                                rocketCounter--;
                                meowsPerSecCounter -= rocketUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketsCountSaved > 0) {
                                rocketCounter++;
                                rocketsCountSaved--;
                                let newRocketUpgrade2 = document.createElement("img");
                                newRocketUpgrade2.src = "rocketUpgrade2.gif";
                                newRocketUpgrade2.classList.add("cursor");
                                rocketInterval = setInterval(function() {
                                    counterNumber += rocketUpgrade2Speed;
                                }, 1000);
                                rocketIntervals.push(rocketInterval);
                                meowsPerSecCounter += rocketUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                                if (rocketCounter > 8) {
                                    rocketContainer.appendChild(newRocketUpgrade2);
                                } else if (rocketCounter <= 8) {
                                    rocketContainer2.appendChild(newRocketUpgrade2);
                                }
                            }
                            rocketUpgrade2Exists2 = true;
                        }

                    } else if (anyMonsterExists) {
                        monsterWarning.innerHTML = "There is a monster!";
                    }
                }

                function buySatellite() {
                    if (!anyMonsterExists) {

                        if (satellite.id == "satellite") {
                            if (counterNumber < satelliteCosts) {
                                shopWarning.innerHTML = "Not enough meows";
                            }

                            if (satelliteCounter >= 16) {
                                shopWarning.innerHTML = "Satellite limit reached";
                            } else if (counterNumber >= satelliteCosts && satelliteCounter < 16) {
                                satelliteCounter++;
                                shopWarning.innerHTML = "";
                                counterNumber -= satelliteCosts;
                                let newSatellite = document.createElement("img");
                                newSatellite.src = "satellite.gif";
                                newSatellite.classList.add("cursor");

                                if (satelliteCounter > 8) {
                                    satelliteContainer.appendChild(newSatellite);
                                } else if (satelliteCounter <= 8) {
                                    satelliteContainer2.appendChild(newSatellite);
                                }

                                let satelliteInterval = setInterval(function() {
                                    counterNumber += satelliteSpeed;
                                }, 1000);
                                satelliteIntervals.push(satelliteInterval);
                                meowsPerSecCounter += satelliteSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }
                        }

                        if (satellite.id == "satelliteUpgrade1Shop") {
                            if (counterNumber < satelliteUpgraded1Costs) {
                                shopWarning.innerHTML = "Not enough meows";
                            } else if (satelliteCounter >= 16) {
                                shopWarning.innerHTML = "Satellite limit reached";
                            } else if (counterNumber >= satelliteUpgraded1Costs && satelliteCounter < 16) {
                                satelliteCounter++;
                                shopWarning.innerHTML = "";
                                counterNumber -= satelliteUpgraded1Costs;
                                let newSatelliteUpgrade1 = document.createElement("img");
                                newSatelliteUpgrade1.src = "satelliteUpgrade1.gif";
                                newSatelliteUpgrade1.classList.add("cursor");

                                if (satelliteCounter > 8) {
                                    satelliteContainer.appendChild(newSatelliteUpgrade1);
                                } else if (satelliteCounter <= 8) {
                                    satelliteContainer2.appendChild(newSatelliteUpgrade1);
                                }

                                let satelliteInterval = setInterval(function() {
                                    counterNumber += satelliteUpgrade1Speed;
                                }, 1000);
                                satelliteIntervals.push(satelliteInterval);
                                meowsPerSecCounter += satelliteUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }
                        }

                        if (satellite.id == "satelliteUpgrade2Shop") {
                            if (counterNumber < satelliteUpgraded2Costs) {
                                shopWarning.innerHTML = "Not enough meows";
                            } else if (satelliteCounter >= 16) {
                                shopWarning.innerHTML = "Satellite limit reached";
                            } else if (counterNumber >= satelliteUpgraded2Costs && satelliteCounter < 16) {
                                satelliteCounter++;
                                shopWarning.innerHTML = "";
                                counterNumber -= satelliteUpgraded2Costs;
                                let newSatelliteUpgrade2 = document.createElement("img");
                                newSatelliteUpgrade2.src = "satelliteUpgrade2.gif";
                                newSatelliteUpgrade2.classList.add("cursor");

                                if (satelliteCounter > 8) {
                                    satelliteContainer.appendChild(newSatelliteUpgrade2);
                                } else if (satelliteCounter <= 8) {
                                    satelliteContainer2.appendChild(newSatelliteUpgrade2);
                                }

                                let satelliteInterval = setInterval(function() {
                                    counterNumber += satelliteUpgrade2Speed;
                                }, 1000);
                                satelliteIntervals.push(satelliteInterval);
                                meowsPerSecCounter += satelliteUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }
                        }
                    } else if (anyMonsterExists) {
                        monsterWarning.innerHTML = "There is a monster!";
                    }
                }

                function buySatelliteUpgrade1() {
                    if (!anyMonsterExists) {

                        if (counterNumber < satelliteUpgrade1Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else {
                            satellite.src = "satelliteUpgrade1.gif";
                            satellite.id = "satelliteUpgrade1Shop";
                            satelliteLabel.id = "satelliteUpgrade1LabelShop";
                            satelliteLabel.innerHTML = "Buy Satellite(5000000T)";
                            satellite.name = "pink";

                            counterNumber -= satelliteUpgrade1Costs;

                            satellite.addEventListener("mouseover", cursorBackgroundColor);
                            satellite.addEventListener("mouseout", cursorBackgroundColor);

                            satelliteUpgrade1ShopContainer.style.display = "none";
                            satelliteUpgrade1ShopContainer.style.display = "none";

                            clearAllSatelliteIntervals();

                            let satellitesToRemove = satelliteCounter;
                            let satellitesCountSaved = satelliteCounter;

                            while (satellitesToRemove > 0 && satelliteContainer.firstChild) {
                                satelliteContainer.removeChild(satelliteContainer.firstChild);
                                satellitesToRemove--;
                                satelliteCounter--;
                                meowsPerSecCounter -= satelliteSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (satellitesToRemove > 0 && satelliteContainer2.firstChild) {
                                satelliteContainer2.removeChild(satelliteContainer2.firstChild);
                                satellitesToRemove--;
                                satelliteCounter--;
                                meowsPerSecCounter -= satelliteSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (satellitesCountSaved > 0) {
                                satelliteCounter++;
                                satellitesCountSaved--;
                                let newSatelliteUpgrade1 = document.createElement("img");
                                newSatelliteUpgrade1.src = "satelliteUpgrade1.gif";
                                newSatelliteUpgrade1.classList.add("cursor");
                                let satelliteInterval = setInterval(function() {
                                    counterNumber += satelliteUpgrade1Speed;
                                }, 1000);
                                satelliteIntervals.push(satelliteInterval);
                                meowsPerSecCounter += satelliteUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                                if (satelliteCounter > 8) {
                                    satelliteContainer.appendChild(newSatelliteUpgrade1);
                                } else if (satelliteCounter <= 8) {
                                    satelliteContainer2.appendChild(newSatelliteUpgrade1);
                                }
                            }
                            satelliteUpgrade1Exists2 = true;
                        }

                    } else if (anyMonsterExists) {
                        monsterWarning.innerHTML = "There is a monster!";
                    }
                }

                function buySatelliteUpgrade2() {
                    if (!anyMonsterExists) {

                        if (counterNumber < satelliteUpgrade2Costs) {
                            shopWarning.innerHTML = "Not enough meows";
                        } else if (!satelliteUpgrade1Exists2) {
                            shopWarning.innerHTML = "Incorrect upgrade order";
                        } else {
                            satellite.src = "satelliteUpgrade2.gif";
                            satellite.id = "satelliteUpgrade2Shop";
                            satelliteLabel.id = "satelliteUpgrade2LabelShop";
                            satelliteLabel.innerHTML = "Buy Satellite(50000000T)";
                            satellite.name = "blue";

                            counterNumber -= satelliteUpgrade2Costs;

                            satellite.addEventListener("mouseover", cursorBackgroundColor);
                            satellite.addEventListener("mouseout", cursorBackgroundColor);

                            satelliteUpgrade2ShopContainer.style.display = "none";
                            satelliteUpgrade2ShopContainer.style.display = "none";

                            clearAllSatelliteIntervals();

                            let satellitesToRemove = satelliteCounter;
                            let satellitesCountSaved = satelliteCounter;

                            while (satellitesToRemove > 0 && satelliteContainer.firstChild) {
                                satelliteContainer.removeChild(satelliteContainer.firstChild);
                                satellitesToRemove--;
                                satelliteCounter--;
                                meowsPerSecCounter -= satelliteUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (satellitesToRemove > 0 && satelliteContainer2.firstChild) {
                                satelliteContainer2.removeChild(satelliteContainer2.firstChild);
                                satellitesToRemove--;
                                satelliteCounter--;
                                meowsPerSecCounter -= satelliteUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (satellitesCountSaved > 0) {
                                satelliteCounter++;
                                satellitesCountSaved--;
                                let newSatelliteUpgrade2 = document.createElement("img");
                                newSatelliteUpgrade2.src = "satelliteUpgrade2.gif";
                                newSatelliteUpgrade2.classList.add("cursor");
                                let satelliteInterval = setInterval(function() {
                                    counterNumber += satelliteUpgrade2Speed;
                                }, 1000);
                                satelliteIntervals.push(satelliteInterval);
                                meowsPerSecCounter += satelliteUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                                if (satelliteCounter > 8) {
                                    satelliteContainer.appendChild(newSatelliteUpgrade2);
                                } else if (satelliteCounter <= 8) {
                                    satelliteContainer2.appendChild(newSatelliteUpgrade2);
                                }
                            }
                            satelliteUpgrade2Exists2 = true;
                        }

                    } else if (anyMonsterExists) {
                        monsterWarning.innerHTML = "There is a monster!";
                    }
                }

                function buyMoon() {
    if (!anyMonsterExists) {

                if (rocket.name != moon.name) {
                    shopWarning.innerHTML = "Not enough rockets";
                } else {
                    if (rocketCounter < 16) {
                        shopWarning.innerHTML = "Not enough rockets";
                    } else if (moonCounter >= 16) {
                        shopWarning.innerHTML = "Moon limit reached";
                    } else {
                        let rocketToRemove = 16;

                        clearAllRocketIntervals();

                        if (moon.name == "grey") {
                            while (rocketToRemove > 0 && rocketContainer.firstChild) {
                                rocketContainer.removeChild(rocketContainer.firstChild);
                                rocketToRemove--;
                                meowsPerSecCounter -= rocketSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketToRemove > 0 && rocketContainer2.firstChild) {
                                rocketContainer2.removeChild(rocketContainer2.firstChild);
                                rocketToRemove--;
                                meowsPerSecCounter -= rocketSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            moonCounter++;
                            shopWarning.innerHTML = "";
                            rocketCounter -= 16;
                            let newMoon = document.createElement("img");
                            newMoon.src = "moon.gif";
                            newMoon.classList.add("cursor");

                            if (moonCounter > 8) {
                                moonContainer.appendChild(newMoon);
                            } else if (moonCounter <= 8) {
                                moonContainer2.appendChild(newMoon);
                            }

                            moonInterval = setInterval(function() {
                                counterNumber += moonSpeed;
                            }, 1000);
                            moonIntervals.push(moonInterval);
                            meowsPerSecCounter += moonSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            shopWarning.innerHTML = "";
                        }

                        if (moon.name == "pink") {
                            while (rocketToRemove > 0 && rocketContainer.firstChild) {
                                rocketContainer.removeChild(rocketContainer.firstChild);
                                rocketToRemove--;
                                meowsPerSecCounter -= rocketUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketToRemove > 0 && rocketContainer2.firstChild) {
                                rocketContainer2.removeChild(rocketContainer2.firstChild);
                                rocketToRemove--;
                                meowsPerSecCounter -= rocketUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            moonCounter++;
                            shopWarning.innerHTML = "";
                            rocketCounter -= 16;
                            let newMoonUpgrade1 = document.createElement("img");
                            newMoonUpgrade1.src = "moonUpgrade1.gif";
                            newMoonUpgrade1.classList.add("cursor");

                            if (moonCounter > 8) {
                                moonContainer.appendChild(newMoonUpgrade1);
                            } else if (moonCounter <= 8) {
                                moonContainer2.appendChild(newMoonUpgrade1);
                            }
                            moonInterval = setInterval(function() {
                                counterNumber += moonUpgrade1Speed;
                            }, 1000);
                            moonIntervals.push(moonInterval);
                            meowsPerSecCounter += moonUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            shopWarning.innerHTML = "";
                        }

                        if (moon.name == "blue") {
                            while (rocketToRemove > 0 && rocketContainer.firstChild) {
                                rocketContainer.removeChild(rocketContainer.firstChild);
                                rocketToRemove--;
                                meowsPerSecCounter -= rocketUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            while (rocketToRemove > 0 && rocketContainer2.firstChild) {
                                rocketContainer2.removeChild(rocketContainer2.firstChild);
                                rocketToRemove--;
                                meowsPerSecCounter -= rocketUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            }

                            moonCounter++;
                            shopWarning.innerHTML = "";
                            rocketCounter -= 16;
                            let newMoonUpgrade2 = document.createElement("img");
                            newMoonUpgrade2.src = "moonUpgrade2.gif";
                            newMoonUpgrade2.classList.add("cursor");

                            if (moonCounter > 8) {
                                moonContainer.appendChild(newMoonUpgrade2);
                            } else if (moonCounter <= 8) {
                                moonContainer2.appendChild(newMoonUpgrade2);
                            }
                            moonInterval = setInterval(function() {
                                counterNumber += moonUpgrade2Speed;
                            }, 1000);
                            moonIntervals.push(moonInterval);
                            meowsPerSecCounter += moonUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                            shopWarning.innerHTML = "";
                        }
                    }
                } 
            } else if (anyMonsterExists) {
                monsterWarning.innerHTML = "There is a monster!";
            }
        }

        function buyMoonUpgrade1() {
                if (!anyMonsterExists) {

                    if (counterNumber < moonUpgrade1Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else {
                        moon.src = "moonUpgrade1.gif";
                        moonRocket.src = "rocketUpgrade1.gif";
                        moon.id = "moonUpgrade1Shop";
                        moonLabel.id = "moonUpgrade1LabelShop";
                        moonLabel.innerHTML = "Buy Moon (16x";
                        moon.name = "pink"; 

                        counterNumber -= moonUpgrade1Costs;

                        moon.addEventListener("mouseover", cursorBackgroundColor);
                        moon.addEventListener("mouseout", cursorBackgroundColor);

                        moonUpgrade1ShopContainer.style.display = "none";

                        clearAllMoonIntervals();

                        let moonToRemove = moonCounter;
                        let moonCountSaved = moonCounter;

                        while (moonToRemove > 0 && moonContainer.firstChild) {
                            moonContainer.removeChild(moonContainer.firstChild);
                            moonToRemove--;
                            moonCounter--;
                            meowsPerSecCounter -= moonSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (moonToRemove > 0 && moonContainer2.firstChild) {
                            moonContainer2.removeChild(moonContainer2.firstChild);
                            moonToRemove--;
                            moonCounter--;
                            meowsPerSecCounter -= moonSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (moonCountSaved > 0) {
                            moonCounter++;
                            moonCountSaved--;
                            let newMoonUpgrade1 = document.createElement("img");
                            newMoonUpgrade1.src = "moonUpgrade1.gif";
                            newMoonUpgrade1.classList.add("cursor");
                            moonInterval = setInterval(function() {
                                counterNumber += moonUpgrade1Speed;
                            }, 1000);
                            moonIntervals.push(moonInterval);
                            meowsPerSecCounter += moonUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (moonCounter > 8) {
                                moonContainer.appendChild(newMoonUpgrade1);
                            } else if (moonCounter <= 8) {
                                moonContainer2.appendChild(newMoonUpgrade1);
                            }
                        }
                        moonUpgrade1Exists2 = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyMoonUpgrade2() {
                if (!anyMonsterExists) {

                    if (counterNumber < moonUpgrade2Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else if (!moonUpgrade1Exists2) {
                        shopWarning.innerHTML = "Incorrect upgrade order";
                    } else {
                        moon.src = "moonUpgrade2.gif";
                        moonRocket.src = "rocketUpgrade2.gif"
                        moon.id = "moonUpgrade2Shop";
                        moonLabel.id = "moonUpgrade2LabelShop";
                        moonLabel.innerHTML = "Buy Moon (16x";
                        moon.name = "blue"; 

                        counterNumber -= moonUpgrade2Costs;

                        moon.addEventListener("mouseover", cursorBackgroundColor);
                        moon.addEventListener("mouseout", cursorBackgroundColor);

                        moonUpgrade2ShopContainer.style.display = "none";

                        clearAllMoonIntervals();

                        let moonToRemove = moonCounter;
                        let moonCountSaved = moonCounter;

                        while (moonToRemove > 0 && moonContainer.firstChild) {
                            moonContainer.removeChild(moonContainer.firstChild);
                            moonToRemove--;
                            moonCounter--;
                            meowsPerSecCounter -= moonUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (moonToRemove > 0 && moonContainer2.firstChild) {
                            moonContainer2.removeChild(moonContainer2.firstChild);
                            moonToRemove--;
                            moonCounter--;
                            meowsPerSecCounter -= moonUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (moonCountSaved > 0) {
                            moonCounter++;
                            moonCountSaved--;
                            let newMoonUpgrade2 = document.createElement("img");
                            newMoonUpgrade2.src = "moonUpgrade2.gif";
                            newMoonUpgrade2.classList.add("cursor");
                            moonInterval = setInterval(function() {
                                counterNumber += moonUpgrade2Speed;
                            }, 1000);
                            moonIntervals.push(moonInterval);
                            meowsPerSecCounter += moonUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (moonCounter > 8) {
                                moonContainer.appendChild(newMoonUpgrade2);
                            } else if (moonCounter <= 8) {
                                moonContainer2.appendChild(newMoonUpgrade2);
                            }
                        }
                        moonUpgrade2Exists = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyNebulosa() {
                if (!anyMonsterExists) {

                    if (satellite.name != nebulosa.name) {
                        shopWarning.innerHTML = "Not enough satellites";
                    } else {
                        if (satelliteCounter < 16) {
                            shopWarning.innerHTML = "Not enough satellites";
                        } else if (nebulosaCounter >= 16) {
                            shopWarning.innerHTML = "Nebulosa limit reached";
                        } else {
                            let satelliteToRemove = 16;

                            clearAllSatelliteIntervals();

                            if (nebulosa.name == "grey") {
                                while (satelliteToRemove > 0 && satelliteContainer.firstChild) {
                                    satelliteContainer.removeChild(satelliteContainer.firstChild);
                                    satelliteToRemove--;
                                    meowsPerSecCounter -= satelliteSpeed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                while (satelliteToRemove > 0 && satelliteContainer2.firstChild) {
                                    satelliteContainer2.removeChild(satelliteContainer2.firstChild);
                                    satelliteToRemove--;
                                    meowsPerSecCounter -= satelliteSpeed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                nebulosaCounter++;
                                shopWarning.innerHTML = "";
                                satelliteCounter -= 16;
                                let newNebulosa = document.createElement("img");
                                newNebulosa.src = "nebulosa.gif";
                                newNebulosa.classList.add("cursor");

                                if (nebulosaCounter > 8) {
                                    nebulosaContainer.appendChild(newNebulosa);
                                } else if (nebulosaCounter <= 8) {
                                    nebulosaContainer2.appendChild(newNebulosa);
                                }

                                nebulosaInterval = setInterval(function() {
                                    counterNumber += nebulosaSpeed;
                                }, 1000);
                                nebulosaIntervals.push(nebulosaInterval);
                                meowsPerSecCounter += nebulosaSpeed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                shopWarning.innerHTML = "";
                            }

                            if (nebulosa.name == "pink") {
                                while (satelliteToRemove > 0 && satelliteContainer.firstChild) {
                                    satelliteContainer.removeChild(satelliteContainer.firstChild);
                                    satelliteToRemove--;
                                    meowsPerSecCounter -= satelliteUpgrade1Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                while (satelliteToRemove > 0 && satelliteContainer2.firstChild) {
                                    satelliteContainer2.removeChild(satelliteContainer2.firstChild);
                                    satelliteToRemove--;
                                    meowsPerSecCounter -= satelliteUpgrade1Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                nebulosaCounter++;
                                shopWarning.innerHTML = "";
                                satelliteCounter -= 16;
                                let newNebulosaUpgrade1 = document.createElement("img");
                                newNebulosaUpgrade1.src = "nebulosaUpgrade1.gif";
                                newNebulosaUpgrade1.classList.add("cursor");

                                if (nebulosaCounter > 8) {
                                    nebulosaContainer.appendChild(newNebulosaUpgrade1);
                                } else if (nebulosaCounter <= 8) {
                                    nebulosaContainer2.appendChild(newNebulosaUpgrade1);
                                }
                                nebulosaInterval = setInterval(function() {
                                    counterNumber += nebulosaUpgrade1Speed;
                                }, 1000);
                                nebulosaIntervals.push(nebulosaInterval);
                                meowsPerSecCounter += nebulosaUpgrade1Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                shopWarning.innerHTML = "";
                            }

                            if (nebulosa.name == "blue") {
                                while (satelliteToRemove > 0 && satelliteContainer.firstChild) {
                                    satelliteContainer.removeChild(satelliteContainer.firstChild);
                                    satelliteToRemove--;
                                    meowsPerSecCounter -= satelliteUpgrade2Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                while (satelliteToRemove > 0 && satelliteContainer2.firstChild) {
                                    satelliteContainer2.removeChild(satelliteContainer2.firstChild);
                                    satelliteToRemove--;
                                    meowsPerSecCounter -= satelliteUpgrade2Speed;
                                    meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                }

                                nebulosaCounter++;
                                shopWarning.innerHTML = "";
                                satelliteCounter -= 16;
                                let newNebulosaUpgrade2 = document.createElement("img");
                                newNebulosaUpgrade2.src = "nebulosaUpgrade2.gif";
                                newNebulosaUpgrade2.classList.add("cursor");

                                if (nebulosaCounter > 8) {
                                    nebulosaContainer.appendChild(newNebulosaUpgrade2);
                                } else if (nebulosaCounter <= 8) {
                                    nebulosaContainer2.appendChild(newNebulosaUpgrade2);
                                }
                                nebulosaInterval = setInterval(function() {
                                    counterNumber += nebulosaUpgrade2Speed;
                                }, 1000);
                                nebulosaIntervals.push(nebulosaInterval);
                                meowsPerSecCounter += nebulosaUpgrade2Speed;
                                meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                                shopWarning.innerHTML = "";
                            }
                        }
                    } 
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyNebulosaUpgrade1() {
                if (!anyMonsterExists) {

                    if (counterNumber < nebulosaUpgrade1Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else {
                        nebulosa.src = "nebulosaUpgrade1.gif";
                        nebulosaSatellite.src = "satelliteUpgrade1.gif"
                        nebulosa.id = "nebulosaUpgrade1Shop";
                        nebulosaLabel.id = "nebulosaUpgrade1LabelShop";
                        nebulosaLabel.innerHTML = "Buy Nebulosa (16x";
                        nebulosa.name = "pink"; 

                        counterNumber -= nebulosaUpgrade1Costs;

                        nebulosa.addEventListener("mouseover", cursorBackgroundColor);
                        nebulosa.addEventListener("mouseout", cursorBackgroundColor);

                        nebulosaUpgrade1ShopContainer.style.display = "none";

                        clearAllNebulosaIntervals();

                        let nebulosaToRemove = nebulosaCounter;
                        let nebulosaCountSaved = nebulosaCounter;

                        while (nebulosaToRemove > 0 && nebulosaContainer.firstChild) {
                            nebulosaContainer.removeChild(nebulosaContainer.firstChild);
                            nebulosaToRemove--;
                            nebulosaCounter--;
                            meowsPerSecCounter -= nebulosaSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (nebulosaToRemove > 0 && nebulosaContainer2.firstChild) {
                            nebulosaContainer2.removeChild(nebulosaContainer2.firstChild);
                            nebulosaToRemove--;
                            nebulosaCounter--;
                            meowsPerSecCounter -= nebulosaSpeed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (nebulosaCountSaved > 0) {
                            nebulosaCounter++;
                            nebulosaCountSaved--;
                            let newNebulosaUpgrade1 = document.createElement("img");
                            newNebulosaUpgrade1.src = "nebulosaUpgrade1.gif";
                            newNebulosaUpgrade1.classList.add("cursor");
                            nebulosaInterval = setInterval(function() {
                                counterNumber += nebulosaUpgrade1Speed;
                            }, 1000);
                            nebulosaIntervals.push(nebulosaInterval);
                            meowsPerSecCounter += nebulosaUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (nebulosaCounter > 8) {
                                nebulosaContainer.appendChild(newNebulosaUpgrade1);
                            } else if (nebulosaCounter <= 8) {
                                nebulosaContainer2.appendChild(newNebulosaUpgrade1);
                            }
                        }
                        nebulosaUpgrade1Exists2 = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

            function buyNebulosaUpgrade2() {
                if (!anyMonsterExists) {

                    if (counterNumber < nebulosaUpgrade2Costs) {
                        shopWarning.innerHTML = "Not enough meows";
                    } else if (!nebulosaUpgrade1Exists2) {
                        shopWarning.innerHTML = "Incorrect upgrade order";
                    } else {
                        nebulosa.src = "nebulosaUpgrade2.gif";
                        nebulosaSatellite.src = "satelliteUpgrade2.gif"
                        nebulosa.id = "nebulosaUpgrade2Shop";
                        nebulosaLabel.id = "nebulosaUpgrade2LabelShop";
                        nebulosaLabel.innerHTML = "Buy Nebulosa (16x";
                        nebulosa.name = "blue"; 

                        counterNumber -= nebulosaUpgrade2Costs;

                        nebulosa.addEventListener("mouseover", cursorBackgroundColor);
                        nebulosa.addEventListener("mouseout", cursorBackgroundColor);

                        nebulosaUpgrade2ShopContainer.style.display = "none";

                        clearAllNebulosaIntervals();

                        let nebulosaToRemove = nebulosaCounter;
                        let nebulosaCountSaved = nebulosaCounter;

                        while (nebulosaToRemove > 0 && nebulosaContainer.firstChild) {
                            nebulosaContainer.removeChild(nebulosaContainer.firstChild);
                            nebulosaToRemove--;
                            nebulosaCounter--;
                            meowsPerSecCounter -= nebulosaUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (nebulosaToRemove > 0 && nebulosaContainer2.firstChild) {
                            nebulosaContainer2.removeChild(nebulosaContainer2.firstChild);
                            nebulosaToRemove--;
                            nebulosaCounter--;
                            meowsPerSecCounter -= nebulosaUpgrade1Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);
                        }

                        while (nebulosaCountSaved > 0) {
                            nebulosaCounter++;
                            nebulosaCountSaved--;
                            let newNebulosaUpgrade2 = document.createElement("img");
                            newNebulosaUpgrade2.src = "nebulosaUpgrade2.gif";
                            newNebulosaUpgrade2.classList.add("cursor");
                            nebulosaInterval = setInterval(function() {
                                counterNumber += nebulosaUpgrade2Speed;
                            }, 1000);
                            nebulosaIntervals.push(nebulosaInterval);
                            meowsPerSecCounter += nebulosaUpgrade2Speed;
                            meowsPerSec.innerHTML = "Meows/second: " + meowsPerSecCounter.toFixed(1);

                            if (nebulosaCounter > 8) {
                                nebulosaContainer.appendChild(newNebulosaUpgrade2);
                            } else if (nebulosaCounter <= 8) {
                                nebulosaContainer2.appendChild(newNebulosaUpgrade2);
                            }
                        }
                        nebulosaUpgrade2Exists = true;  
                    }
                } else if (anyMonsterExists) {
                    monsterWarning.innerHTML = "There is a monster!";
                }
            }

        function clearAllCursorIntervals() {
            cursorIntervals.forEach(intervalId => clearInterval(intervalId));
            cursorIntervals = []; 
        }

        function clearAllScratcherIntervals() {
            scratcherIntervals.forEach(intervalId => clearInterval(intervalId));
            scratcherIntervals = []; 
        }

        function clearAllCatToyIntervals() {
            catToyIntervals.forEach(intervalId => clearInterval(intervalId));
            catToyIntervals = []; 
        }

        function clearAllCatSnacksIntervals() {
            catSnacksIntervals.forEach(intervalId => clearInterval(intervalId));
            catSnacksIntervals = []; 
        }

        function clearAllSwordIntervals() {
            swordIntervals.forEach(intervalId => clearInterval(intervalId));
            swordIntervals = []; 
        }

        function clearAllArmorIntervals() {
            armorIntervals.forEach(intervalId => clearInterval(intervalId));
            armorIntervals = []; 
        }

        function clearAllCodexIntervals() {
            codexIntervals.forEach(intervalId => clearInterval(intervalId));
            codexIntervals = []; 
        }

        function clearAllCastleIntervals() {
            castleIntervals.forEach(intervalId => clearInterval(intervalId));
            castleIntervals = []; 
        }

        function clearAllCrownIntervals() {
            crownIntervals.forEach(intervalId => clearInterval(intervalId));
            crownIntervals = []; 
        }

        function clearAllSceptreIntervals() {
            sceptreIntervals.forEach(intervalId => clearInterval(intervalId));
            sceptreIntervals = []; 
        }

        function clearAllAcademyIntervals() {
            academyIntervals.forEach(intervalId => clearInterval(intervalId));
            academyIntervals = []; 
        }

        function clearAllKingdomIntervals() {
            kingdomIntervals.forEach(intervalId => clearInterval(intervalId));
            kingdomIntervals = []; 
        }

        function clearAllDevilIntervals() {
            devilIntervals.forEach(intervalId => clearInterval(intervalId));
            devilIntervals = []; 
        }

        function clearAllChainsIntervals() {
            chainsIntervals.forEach(intervalId => clearInterval(intervalId));
            chainsIntervals = []; 
        }

        function clearAllCerberusIntervals() {
            cerberusIntervals.forEach(intervalId => clearInterval(intervalId));
            cerberusIntervals = []; 
        }

        function clearAllGatesOfHellIntervals() {
            gatesOfHellIntervals.forEach(intervalId => clearInterval(intervalId));
            gatesOfHellIntervals = []; 
        }

        function clearAllAngelIntervals() {
            angelIntervals.forEach(intervalId => clearInterval(intervalId));
            angelIntervals = [];
        }

        function clearAllHaloIntervals() {
            haloIntervals.forEach(intervalId => clearInterval(intervalId));
            haloIntervals = [];
        }

        function clearAllVisionIntervals() {
            visionIntervals.forEach(intervalId => clearInterval(intervalId));
            visionIntervals = [];
        }

        function clearAllGatesOfHeavenIntervals() {
            gatesOfHeavenIntervals.forEach(intervalId => clearInterval(intervalId));
            gatesOfHeavenIntervals = []; 
        }

        function clearAllRocketIntervals() {
            rocketIntervals.forEach(intervalId => clearInterval(intervalId));
            rocketIntervals = []; 
        }

        function clearAllSatelliteIntervals() {
            satelliteIntervals.forEach(intervalId => clearInterval(intervalId));
            satelliteIntervals = [];
        }

        function clearAllMoonIntervals() {
            moonIntervals.forEach(intervalId => clearInterval(intervalId));
            moonIntervals = [];
        }

        function clearAllNebulosaIntervals() {
            nebulosaIntervals.forEach(intervalId => clearInterval(intervalId));
            nebulosaIntervals = [];
        }

        function clearGameInterval() {
            clearInterval(gameInterval);
            
            if (gameCounterStored === null || gameCounter < gameCounterStored) {
            localStorage.setItem("gameCounterSaved", gameCounter);
            localStorage.setItem("nameSaved", name);
            }
        }

        function evolution1Clear () {

            cursorShopContainer.removeChild(cursor);
            cursorShopContainer.removeChild(cursorLabel);
            scratcherShopContainer.removeChild(scratcher);
            scratcherShopContainer.removeChild(scratcherLabel);

            cursorUpgrade1Container.removeChild(cursorUpgrade1);
            cursorUpgrade1Container.removeChild(cursorUpgrade1Label);
            cursorUpgrade2Container.removeChild(cursorUpgrade2);
            cursorUpgrade2Container.removeChild(cursorUpgrade2Label);

            scratcherUpgrade1Container.removeChild(scratcherUpgrade1);
            scratcherUpgrade1Container.removeChild(scratcherUpgrade1Label);
            scratcherUpgrade2Container.removeChild(scratcherUpgrade2);
            scratcherUpgrade2Container.removeChild(scratcherUpgrade2Label);

            catToyShopContainer.removeChild(catToy);
            catToyShopContainer.removeChild(catToyLabel);
            catToyShopContainer.removeChild(catToyCursor);
            catToyShopContainer.removeChild(catToyLabel2);

            catToyUpgrade1ShopContainer.removeChild(catToyUpgrade1);
            catToyUpgrade1ShopContainer.removeChild(catToyUpgrade1Label);
            catToyUpgrade2ShopContainer.removeChild(catToyUpgrade2);
            catToyUpgrade2ShopContainer.removeChild(catToyUpgrade2Label);

            catSnacksShopContainer.removeChild(catSnacks);
            catSnacksShopContainer.removeChild(catSnacksLabel);
            catSnacksShopContainer.removeChild(catSnacksScratcher);
            catSnacksShopContainer.removeChild(catSnacksLabel2);

            catSnacksUpgrade1ShopContainer.removeChild(catSnacksUpgrade1);
            catSnacksUpgrade1ShopContainer.removeChild(catSnacksUpgrade1Label);
            catSnacksUpgrade2ShopContainer.removeChild(catSnacksUpgrade2);
            catSnacksUpgrade2ShopContainer.removeChild(catSnacksUpgrade2Label);

            let cursorsToRemove1 = 16;

            while (cursorsToRemove1 > 0 && cursorContainer.firstChild) {
            cursorContainer.removeChild(cursorContainer.firstChild);
            cursorsToRemove1--;
            }

            while (cursorsToRemove1 > 0 && cursorContainer2.firstChild) {
            cursorContainer2.removeChild(cursorContainer2.firstChild);
            cursorsToRemove1--;
            }
            
            let scratchersToRemove1 = 16;

            while (scratchersToRemove1 > 0 && scratcherContainer.firstChild) {
            scratcherContainer.removeChild(scratcherContainer.firstChild);
            scratchersToRemove1--;
            }

            while (scratchersToRemove1 > 0 && scratcherContainer2.firstChild) {
            scratcherContainer2.removeChild(scratcherContainer2.firstChild);
            scratchersToRemove1--;
            }

            let catToysToRemove1 = 16;

            while (catToysToRemove1 > 0 && catToyContainer.firstChild) {
            catToyContainer.removeChild(catToyContainer.firstChild);
            catToysToRemove1--;
            }

            while (catToysToRemove1 > 0 && catToyContainer2.firstChild) {
            catToyContainer2.removeChild(catToyContainer2.firstChild);
            catToysToRemove1--;
            }

            let catSnacksToRemove1 = 16;

            while (catSnacksToRemove1 > 0 && catSnacksContainer.firstChild) {
            catSnacksContainer.removeChild(catSnacksContainer.firstChild);
            catSnacksToRemove1--;
            }

            while (catSnacksToRemove1 > 0 && catSnacksContainer2.firstChild) {
            catSnacksContainer2.removeChild(catSnacksContainer2.firstChild);
            catSnacksToRemove1--;
            }
        }

        function evolution2Clear() {

        swordShopContainer.removeChild(sword);
        swordShopContainer.removeChild(swordLabel);
        armorShopContainer.removeChild(armor);
        armorShopContainer.removeChild(armorLabel);

        swordUpgrade1ShopContainer.removeChild(swordUpgrade1);
        swordUpgrade1ShopContainer.removeChild(swordUpgrade1Label);
        swordUpgrade2ShopContainer.removeChild(swordUpgrade2);
        swordUpgrade2ShopContainer.removeChild(swordUpgrade2Label);

        armorUpgrade1ShopContainer.removeChild(armorUpgrade1);
        armorUpgrade1ShopContainer.removeChild(armorUpgrade1Label);
        armorUpgrade2ShopContainer.removeChild(armorUpgrade2);
        armorUpgrade2ShopContainer.removeChild(armorUpgrade2Label);

        codexShopContainer.removeChild(codex);
        codexShopContainer.removeChild(codexLabel);
        codexShopContainer.removeChild(codexSword);
        codexShopContainer.removeChild(codexLabel2);

        codexUpgrade1ShopContainer.removeChild(codexUpgrade1);
        codexUpgrade1ShopContainer.removeChild(codexUpgrade1Label);
        codexUpgrade2ShopContainer.removeChild(codexUpgrade2);
        codexUpgrade2ShopContainer.removeChild(codexUpgrade2Label);

        castleShopContainer.removeChild(castle);
        castleShopContainer.removeChild(castleLabel);
        castleShopContainer.removeChild(castleArmor);
        castleShopContainer.removeChild(castleLabel2);

        castleUpgrade1ShopContainer.removeChild(castleUpgrade1);
        castleUpgrade1ShopContainer.removeChild(castleUpgrade1Label);
        castleUpgrade2ShopContainer.removeChild(castleUpgrade2);
        castleUpgrade2ShopContainer.removeChild(castleUpgrade2Label);

        let cursorsToRemove1 = 16;

        while (cursorsToRemove1 > 0 && swordContainer.firstChild) {
        swordContainer.removeChild(swordContainer.firstChild);
        cursorsToRemove1--;
        }

        while (cursorsToRemove1 > 0 && swordContainer2.firstChild) {
        swordContainer2.removeChild(swordContainer2.firstChild);
        cursorsToRemove1--;
        }

        let scratchersToRemove1 = 16;

        while (scratchersToRemove1 > 0 && armorContainer.firstChild) {
        armorContainer.removeChild(armorContainer.firstChild);
        scratchersToRemove1--;
        }

        while (scratchersToRemove1 > 0 && armorContainer2.firstChild) {
        armorContainer2.removeChild(armorContainer2.firstChild);
        scratchersToRemove1--;
        }

        let catToysToRemove1 = 16;

        while (catToysToRemove1 > 0 && codexContainer.firstChild) {
        codexContainer.removeChild(codexContainer.firstChild);
        catToysToRemove1--;
        }

        while (catToysToRemove1 > 0 && codexContainer2.firstChild) {
        codexContainer2.removeChild(codexContainer2.firstChild);
        catToysToRemove1--;
        }

        let catSnacksToRemove1 = 16;

        while (catSnacksToRemove1 > 0 && castleContainer.firstChild) {
        castleContainer.removeChild(castleContainer.firstChild);
        catSnacksToRemove1--;
        }

        while (catSnacksToRemove1 > 0 && castleContainer2.firstChild) {
        castleContainer2.removeChild(castleContainer2.firstChild);
        catSnacksToRemove1--;
        }
        }

        function evolution3Clear() {
            crownShopContainer.removeChild(crown);
            crownShopContainer.removeChild(crownLabel);
            sceptreShopContainer.removeChild(sceptre);
            sceptreShopContainer.removeChild(sceptreLabel);

            crownUpgrade1ShopContainer.removeChild(crownUpgrade1);
            crownUpgrade1ShopContainer.removeChild(crownUpgrade1Label);
            crownUpgrade2ShopContainer.removeChild(crownUpgrade2);
            crownUpgrade2ShopContainer.removeChild(crownUpgrade2Label);

            sceptreUpgrade1ShopContainer.removeChild(sceptreUpgrade1);
            sceptreUpgrade1ShopContainer.removeChild(sceptreUpgrade1Label);
            sceptreUpgrade2ShopContainer.removeChild(sceptreUpgrade2);
            sceptreUpgrade2ShopContainer.removeChild(sceptreUpgrade2Label);

            academyShopContainer.removeChild(academy);
            academyShopContainer.removeChild(academyLabel);
            academyShopContainer.removeChild(academyCrown);
            academyShopContainer.removeChild(academyLabel2);

            academyUpgrade1ShopContainer.removeChild(academyUpgrade1);
            academyUpgrade1ShopContainer.removeChild(academyUpgrade1Label);
            academyUpgrade2ShopContainer.removeChild(academyUpgrade2);
            academyUpgrade2ShopContainer.removeChild(academyUpgrade2Label);

            kingdomShopContainer.removeChild(kingdom);
            kingdomShopContainer.removeChild(kingdomLabel);
            kingdomShopContainer.removeChild(kingdomSceptre);
            kingdomShopContainer.removeChild(kingdomLabel2);

            kingdomUpgrade1ShopContainer.removeChild(kingdomUpgrade1);
            kingdomUpgrade1ShopContainer.removeChild(kingdomUpgrade1Label);
            kingdomUpgrade2ShopContainer.removeChild(kingdomUpgrade2);
            kingdomUpgrade2ShopContainer.removeChild(kingdomUpgrade2Label);

            let cursorsToRemove1 = 16;

            while (cursorsToRemove1 > 0 && crownContainer.firstChild) {
                crownContainer.removeChild(crownContainer.firstChild);
                cursorsToRemove1--;
            }

            while (cursorsToRemove1 > 0 && crownContainer2.firstChild) {
                crownContainer2.removeChild(crownContainer2.firstChild);
                cursorsToRemove1--;
            }

            let scratchersToRemove1 = 16;

            while (scratchersToRemove1 > 0 && sceptreContainer.firstChild) {
                sceptreContainer.removeChild(sceptreContainer.firstChild);
                scratchersToRemove1--;
            }

            while (scratchersToRemove1 > 0 && sceptreContainer2.firstChild) {
                sceptreContainer2.removeChild(sceptreContainer2.firstChild);
                scratchersToRemove1--;
            }

            let catToysToRemove1 = 16;

            while (catToysToRemove1 > 0 && academyContainer.firstChild) {
                academyContainer.removeChild(academyContainer.firstChild);
                catToysToRemove1--;
            }

            while (catToysToRemove1 > 0 && academyContainer2.firstChild) {
                academyContainer2.removeChild(academyContainer2.firstChild);
                catToysToRemove1--;
            }

            let catSnacksToRemove1 = 16;

            while (catSnacksToRemove1 > 0 && kingdomContainer.firstChild) {
                kingdomContainer.removeChild(kingdomContainer.firstChild);
                catSnacksToRemove1--;
            }

            while (catSnacksToRemove1 > 0 && kingdomContainer2.firstChild) {
                kingdomContainer2.removeChild(kingdomContainer2.firstChild);
                catSnacksToRemove1--;
            }
        }

        function evolutionAlienClear() {
            if (evolutionHellExists){
                devilShopContainer.removeChild(devil);
                devilShopContainer.removeChild(devilLabel);
                chainsShopContainer.removeChild(chains);
                chainsShopContainer.removeChild(chainsLabel);

                devilUpgrade1ShopContainer.removeChild(devilUpgrade1);
                devilUpgrade1ShopContainer.removeChild(devilUpgrade1Label);
                devilUpgrade2ShopContainer.removeChild(devilUpgrade2);
                devilUpgrade2ShopContainer.removeChild(devilUpgrade2Label);

                chainsUpgrade1ShopContainer.removeChild(chainsUpgrade1);
                chainsUpgrade1ShopContainer.removeChild(chainsUpgrade1Label);
                chainsUpgrade2ShopContainer.removeChild(chainsUpgrade2);
                chainsUpgrade2ShopContainer.removeChild(chainsUpgrade2Label);

                cerberusShopContainer.removeChild(cerberus);
                cerberusShopContainer.removeChild(cerberusLabel);
                cerberusShopContainer.removeChild(cerberusDevil);
                cerberusShopContainer.removeChild(cerberusLabel2);

                cerberusUpgrade1ShopContainer.removeChild(cerberusUpgrade1);
                cerberusUpgrade1ShopContainer.removeChild(cerberusUpgrade1Label);
                cerberusUpgrade2ShopContainer.removeChild(cerberusUpgrade2);
                cerberusUpgrade2ShopContainer.removeChild(cerberusUpgrade2Label);

                gatesOfHellShopContainer.removeChild(gatesOfHell);
                gatesOfHellShopContainer.removeChild(gatesOfHellLabel);
                gatesOfHellShopContainer.removeChild(gatesOfHellChains);
                gatesOfHellShopContainer.removeChild(gatesOfHellLabel2);

                gatesOfHellUpgrade1ShopContainer.removeChild(gatesOfHellUpgrade1);
                gatesOfHellUpgrade1ShopContainer.removeChild(gatesOfHellUpgrade1Label);
                gatesOfHellUpgrade2ShopContainer.removeChild(gatesOfHellUpgrade2);
                gatesOfHellUpgrade2ShopContainer.removeChild(gatesOfHellUpgrade2Label);

                let cursorsToRemove1 = 16;

                while (cursorsToRemove1 > 0 && devilContainer.firstChild) {
                    devilContainer.removeChild(devilContainer.firstChild);
                    cursorsToRemove1--;
                }

                while (cursorsToRemove1 > 0 && devilContainer2.firstChild) {
                    devilContainer2.removeChild(devilContainer2.firstChild);
                    cursorsToRemove1--;
                }

                let scratchersToRemove1 = 16;

                while (scratchersToRemove1 > 0 && chainsContainer.firstChild) {
                    chainsContainer.removeChild(chainsContainer.firstChild);
                    scratchersToRemove1--;
                }

                while (scratchersToRemove1 > 0 && chainsContainer2.firstChild) {
                    chainsContainer2.removeChild(chainsContainer2.firstChild);
                    scratchersToRemove1--;
                }

                let catToysToRemove1 = 16;

                while (catToysToRemove1 > 0 && cerberusContainer.firstChild) {
                    cerberusContainer.removeChild(cerberusContainer.firstChild);
                    catToysToRemove1--;
                }

                while (catToysToRemove1 > 0 && cerberusContainer2.firstChild) {
                    cerberusContainer2.removeChild(cerberusContainer2.firstChild);
                    catToysToRemove1--;
                }

                let catSnacksToRemove1 = 16;

                while (catSnacksToRemove1 > 0 && gatesOfHellContainer.firstChild) {
                    gatesOfHellContainer.removeChild(gatesOfHellContainer.firstChild);
                    catSnacksToRemove1--;
                }

                while (catSnacksToRemove1 > 0 && gatesOfHellContainer2.firstChild) {
                    gatesOfHellContainer2.removeChild(gatesOfHellContainer2.firstChild);
                    catSnacksToRemove1--;
                }
            }

            else if (evolutionHeavenExists) {
                angelShopContainer.removeChild(angel);
                angelShopContainer.removeChild(angelLabel);
                haloShopContainer.removeChild(halo);
                haloShopContainer.removeChild(haloLabel);

                angelUpgrade1ShopContainer.removeChild(angelUpgrade1);
                angelUpgrade1ShopContainer.removeChild(angelUpgrade1Label);
                angelUpgrade2ShopContainer.removeChild(angelUpgrade2);
                angelUpgrade2ShopContainer.removeChild(angelUpgrade2Label);

                haloUpgrade1ShopContainer.removeChild(haloUpgrade1);
                haloUpgrade1ShopContainer.removeChild(haloUpgrade1Label);
                haloUpgrade2ShopContainer.removeChild(haloUpgrade2);
                haloUpgrade2ShopContainer.removeChild(haloUpgrade2Label);

                visionShopContainer.removeChild(vision);
                visionShopContainer.removeChild(visionLabel);
                visionShopContainer.removeChild(visionAngel);
                visionShopContainer.removeChild(visionLabel2);

                visionUpgrade1ShopContainer.removeChild(visionUpgrade1);
                visionUpgrade1ShopContainer.removeChild(visionUpgrade1Label);
                visionUpgrade2ShopContainer.removeChild(visionUpgrade2);
                visionUpgrade2ShopContainer.removeChild(visionUpgrade2Label);

                gatesOfHeavenShopContainer.removeChild(gatesOfHeaven);
                gatesOfHeavenShopContainer.removeChild(gatesOfHeavenLabel);
                gatesOfHeavenShopContainer.removeChild(gatesOfHeavenHalo);
                gatesOfHeavenShopContainer.removeChild(gatesOfHeavenLabel2);

                gatesOfHeavenUpgrade1ShopContainer.removeChild(gatesOfHeavenUpgrade1);
                gatesOfHeavenUpgrade1ShopContainer.removeChild(gatesOfHeavenUpgrade1Label);
                gatesOfHeavenUpgrade2ShopContainer.removeChild(gatesOfHeavenUpgrade2);
                gatesOfHeavenUpgrade2ShopContainer.removeChild(gatesOfHeavenUpgrade2Label);

                let cursorsToRemove1 = 16;

                while (cursorsToRemove1 > 0 && angelContainer.firstChild) {
                    angelContainer.removeChild(angelContainer.firstChild);
                    cursorsToRemove1--;
                }

                while (cursorsToRemove1 > 0 && angelContainer2.firstChild) {
                    angelContainer2.removeChild(angelContainer2.firstChild);
                    cursorsToRemove1--;
                }

                let scratchersToRemove1 = 16;

                while (scratchersToRemove1 > 0 && haloContainer.firstChild) {
                    haloContainer.removeChild(haloContainer.firstChild);
                    scratchersToRemove1--;
                }

                while (scratchersToRemove1 > 0 && haloContainer2.firstChild) {
                    haloContainer2.removeChild(haloContainer2.firstChild);
                    scratchersToRemove1--;
                }

                let catToysToRemove1 = 16;

                while (catToysToRemove1 > 0 && visionContainer.firstChild) {
                    visionContainer.removeChild(visionContainer.firstChild);
                    catToysToRemove1--;
                }

                while (catToysToRemove1 > 0 && visionContainer2.firstChild) {
                    visionContainer2.removeChild(visionContainer2.firstChild);
                    catToysToRemove1--;
                }

                let catSnacksToRemove1 = 16;

                while (catSnacksToRemove1 > 0 && gatesOfHeavenContainer.firstChild) {
                    gatesOfHeavenContainer.removeChild(gatesOfHeavenContainer.firstChild);
                    catSnacksToRemove1--;
                }

                while (catSnacksToRemove1 > 0 && gatesOfHeavenContainer2.firstChild) {
                    gatesOfHeavenContainer2.removeChild(gatesOfHeavenContainer2.firstChild);
                    catSnacksToRemove1--;
                }
            }
        }

        function addToProgress() {

            let sacrifice = enterBox.value;

            if(sacrifice < 0) {
                alert("The gods are displeased with your offerings");
                return;
            }

            if (parseInt(sacrifice) > counterNumber) {
                shopWarning.innerHTML = "Not enough meows to sacrifice";
            }
            else {
            ascensionProgress.value += parseInt(sacrifice);
            ascensionProgressSaved += parseInt(sacrifice);
            alert("The Gods are pleased with your offerings");
            counterNumber = counterNumber - parseInt(sacrifice);
            counter.innerHTML = counterNumber + " meows";
            } 
        }

        function heaven() {
            nameBoxContainer1.removeChild(greyBox1);
            nameBoxContainer2.removeChild(greyBox2);
            nameBoxContainer3.removeChild(heavenButton);
            nameBoxContainer3.removeChild(hellButton);

            ascensionProgressHeader.innerHTML = "YOU ARE A CAT GOD";
            setTimeout(() => {
            ascensionProgressHeader.innerHTML = "Evolution Progress:";
            }, 5000);

            kitten.src = "catGod.gif";

            evolutionHeavenExists = true;

        }

        function hell() {
            nameBoxContainer1.removeChild(greyBox1);
            nameBoxContainer2.removeChild(greyBox2);
            nameBoxContainer3.removeChild(heavenButton);
            nameBoxContainer3.removeChild(hellButton);

            ascensionProgressHeader.innerHTML = "YOU ARE A CAT DEVIL";
            setTimeout(() => {
            ascensionProgressHeader.innerHTML = "Evolution Progress:";
            }, 5000);

            kitten.src = "catDevil.gif";

            evolutionHellExists = true;
        }
        }
        
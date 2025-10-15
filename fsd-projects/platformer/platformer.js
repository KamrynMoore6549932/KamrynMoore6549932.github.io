$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300 , 600 , 100, 11);
createPlatform(900 , 200 , 100, 12);
createPlatform(200 , 500 , 100, 12);
createPlatform(400 , 400 , 100, 12);
createPlatform(700 , 300 , 100, 11);
createPlatform(1000 , 300 , 100, 11);
createPlatform(1100 , 200 , 100, 11);
createPlatform(1300 , 200 , 100, 11);
    // TODO 3 - Create Collectables
createCollectable('steve', 1050, 250);
createCollectable('diamond', 250, 450);
createCollectable('max' , 1350, 150);
    
    // TODO 4 - Create Cannons
 createCannon("bottom", 1200, 1000);
 createCannon("left", 300, 1000);
 createCannon("top", 650, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

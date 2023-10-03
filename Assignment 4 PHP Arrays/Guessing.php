<!DOCTYPE html>

<html>
    <head>
        <title>The Guessing Game 18f27e33</title>
        <h1>
            Guessing Game
        </h1>

    </head>

    <body>
    
    <p>
    <?php 
        if (! isset($_GET['guess'])){
            echo("Missing guess parameter");
        }
        elseif(! is_numeric($_GET['guess'])){
            echo("Your guess is not a number");
        }
        elseif($_GET['guess'] < 23) {
            echo("Your guess is too low");}
        elseif($_GET['guess'] > 24){
            echo("Your guess is too high");
        }
        else{
            echo("Congratulations - You are right");
        }
    ?>
    </p>


    </body>
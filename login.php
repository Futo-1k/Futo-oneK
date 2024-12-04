<?php 
//Form Validation
if (isset($_POST['submit'])) {
    echo htmlspecialchars($_POST['email']);
    echo htmlspecialchars($_POST['password']);
  }


?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css\login.css">
  <title>Log in</title>
</head>
<body>
<div>
<h1>Login</h1>
<form action="login.php" method="post">
<label for="email">Email:</label>
<input type="text" name="email" id="email" placeholder="Enter your email address" required> <br>
<label for="password">Password:</label>
<input type="text" name="password" id="password" placeholder="Enter your password" maxlength="8" required> <br>
<input type="submit" value="submit" class="submit" name="submit">

</form>

</div>
</body>
</html>



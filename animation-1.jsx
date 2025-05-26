<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poison</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=Marcellus+SC&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Hedvig Letters Sans', sans-serif;
        }
        
        .header-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-family: 'Marcellus SC', serif;
            font-size: 60px;
            color: #000000;
            text-decoration: none;
        }
        
        .nav-menu {
            display: flex;
            gap: 40px;
        }
        
        .nav-menu a {
            font-size: 24px;
            color: #000000;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        
        .nav-menu a:hover {
            opacity: 0.7;
        }
        
        .icon-buttons {
            display: flex;
            gap: 20px;
        }
        
        .icon-buttons a {
            font-size: 24px;
            color: #000000;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        
        .icon-buttons a:hover {
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <a href="/" class="logo">Poison</a>
            
            <nav class="nav-menu">
                <a href="#">Man</a>
                <a href="#">Woman</a>
                <a href="#">Accessories</a>
                <a href="#">Contact</a>
            </nav>
            
            <div class="icon-buttons">
                <a href="#">♥</a>
                <a href="#">🛒</a>
                <a href="#">🔍</a>
            </div>
        </div>
    </header>
</body>
</html>
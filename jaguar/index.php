<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JAGUAR MS</title>
    <link rel="stylesheet" href="css/swiper.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <script src="js/jquery-1.8.3.min.js"></script>	
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/swiper.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/header.js"></script>
    <script src="js/visual.js"></script>
    <script src="js/product.js"></script>
    <script src="js/instagram.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/community.js"></script>
    <script src="js/kakaomap.js"></script>
    <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f1ccd586d1934398f69e6c0fd5ac727a"></script>
</head>
<body>
    <!--skipnavi-->
    <ul id="skipNavi">
        <li><a href="#gnb">주메뉴 바로가기</a></li>
        <li><a href=".main">본문 바로가기</a></li>
        <li><a href="#footer">하단메뉴 바로가기</a></li>
    </ul>
    <!--common-->
    <?php include 'php/pageNav.php'; ?>
    <?php include 'php/header.php'; ?>

    <!--main-start-->
    <div class="contentWrap">

        <?php include 'php/contentWrap/visual.php'; ?>
        <?php include 'php/contentWrap/intro.php'; ?>
        <?php include 'php/contentWrap/product.php'; ?>
        <?php include 'php/contentWrap/service.php'; ?>
        <?php include 'php/contentWrap/news.php'; ?>
        <?php include 'php/contentWrap/community.php'; ?>
        <?php include 'php/contentWrap/location.php'; ?>

    </div>
    <!--main-end-->

    <?php include 'php/footer.php'; ?>
</body>
</html>
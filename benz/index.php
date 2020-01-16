<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BENZ</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="https://kit.fontawesome.com/604e7d54b3.js"></script>
    <script src="js/common.js"></script>
    <script src="js/header.js"></script>
    <script src="js/visual.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/service.js"></script>
    <script src="js/community.js"></script>
    <script src="js/mercedes_me.js"></script>
    <script src="js/magazine.js"></script>
</head>
<body>
    <!--header-->
    <?php include 'php/header.php'; ?>

    <!--wrapper-start-->
    <div class="wrapper">
        <!--visual-->
        <?php include 'php/wrapper/visual_video.php'; ?>
        <?php include 'php/wrapper/visual_title.php'; ?>
        <!--service-->
        <?php include 'php/wrapper/service_special.php'; ?>
        <?php include 'php/wrapper/service_customer.php'; ?>
        <!--community-->
        <?php include 'php/wrapper/community_membership.php'; ?>
        <?php include 'php/wrapper/community_advertisement.php'; ?>
        <!--overview-->
        <?php include 'php/wrapper/overview_news.php'; ?>
        <!--magazine-->
        <?php include 'php/wrapper/magazine.php'; ?>
        <!--mercedesme-->
        <?php include 'php/wrapper/mercedes_me.php'; ?>
    </div>
    <!--wrapper-end-->
    
    <!--footer-->
    <?php include 'php/footer.php'; ?>
</body>
</html>
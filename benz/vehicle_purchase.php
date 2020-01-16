<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vehicle_purchase</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="https://kit.fontawesome.com/604e7d54b3.js"></script>
    <script src="js/common.js"></script>
    <script src="js/header.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/vehicle_purchase.js"></script>
</head>
<body>
    <!--header-->
    <?php include 'php/header.php'; ?>

    <!--wrapper-start-->
    <div class="wrapper">
        <!--sub-page-vehicle-purchase-start-->
        <?php include 'php/wrapper/vehicle_purchase/sub_page_top.php'; ?>
        <?php include 'php/wrapper/vehicle_purchase/vehicle_purchase_con1.php'; ?>
        <?php include 'php/wrapper/vehicle_purchase/vehicle_purchase_con2.php'; ?>
        <?php include 'php/wrapper/vehicle_purchase/vehicle_purchase_con3.php'; ?>
        <!--sub-page-vehicle-purchase-end-->

        <!--sub-page-bottom-start-->
        <?php include 'php/wrapper/sub_page/sub_page_bottom.php'; ?>
        <!--sub-page-bottom-end-->
    </div>
    <!--wrapper-end-->    
    <!--footer-->
    <?php include 'php/footer.php'; ?>
</body>
</html>
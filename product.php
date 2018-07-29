<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
<!-- Theme CSS -->
<link rel="stylesheet" href="css/bootstrap.css">
<!-- Main CSS -->
<link rel="stylesheet" href="css/style.css">
<!-- Elements CSS -->
<link rel="stylesheet" href="css/elements.css">
<!-- Theme Color -->
<link rel="stylesheet" href="css/theme-color.css" type="text/css" >
   <style type="text/css">
        
/* Tabs panel */
.tabbable-panel {
  border:1px solid #eee;
  padding: 10px;
}

/* Default mode */
.tabbable-line > .nav-tabs {
  border: none;
  margin: 0px;
}
.tabbable-line > .nav-tabs > li {
  margin-right: 2px;
}
.tabbable-line > .nav-tabs > li > a {
  border: 0;
  margin-right: 0;
  color: #737373;
}
.tabbable-line > .nav-tabs > li > a > i {
  color: #a6a6a6;
}
.tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {
  border-bottom: 4px solid #fbcdcf;
}
.tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {
  border: 0;
  background: none !important;
  color: #333333;
}
.tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {
  color: #a6a6a6;
}
.tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {
  margin-top: 0px;
}
.tabbable-line > .nav-tabs > li.active {
  border-bottom: 4px solid #f3565d;
  position: relative;
}
.tabbable-line > .nav-tabs > li.active > a {
  border: 0;
  color: #333333;
}
.tabbable-line > .nav-tabs > li.active > a > i {
  color: #404040;
}
.tabbable-line > .tab-content {
  margin-top: -3px;
  background-color: #fff;
  border: 0;
  border-top: 1px solid #eee;
  padding: 15px 0;
}
.portlet .tabbable-line > .tab-content {
  padding-bottom: 0;
}

/* Below tabs mode */

.tabbable-line.tabs-below > .nav-tabs > li {
  border-top: 4px solid transparent;
}
.tabbable-line.tabs-below > .nav-tabs > li > a {
  margin-top: 0;
}
.tabbable-line.tabs-below > .nav-tabs > li:hover {
  border-bottom: 0;
  border-top: 4px solid #fbcdcf;
}
.tabbable-line.tabs-below > .nav-tabs > li.active {
  margin-bottom: -2px;
  border-bottom: 0;
  border-top: 4px solid #f3565d;
}
.tabbable-line.tabs-below > .tab-content {
  margin-top: -10px;
  border-top: 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}
    </style>
  
</head>
<body>
<!--======= Page Wrapper  =======-->
<div class="page-wrapper">
  <!--======= Logo, Main Navigation, Search and Side navigation button=======-->
  <?php include 'header_button.php'; ?>
   <!--======= Page Title & Breadcrumbs =======-->
  <div class="page-title-container parallax" data-stellar-background-ratio="1.5">
    <div class="page-title">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
        <!-- Title Left -->
          <div class="col-md-8">
            <h1 class="entry-title fleft">Carousel</h1>
          </div>
          <!-- Breadcrumbs Right -->
          
        </div>
      </div>
    </div>
  </div>
   <!--=======second=======-->
    <div class="second" style="padding: 10px 0px 0px;">
      <div class="container">

        <!-- row 1 -->
        <div class="row">
            
          <div class="col-md-12 text-center">
           
  
            <ol class="owl-breadcrumb triangle custom-icons">
      <li><a href="#0">Home</a></li>
      <li><a href="#0">Gallery</a></li>
      <li class="current"><em>Web</em></li>
      <li><em>Project</em></li>
    </ol>
          </div>
        </div>
      </div>
    </div>
  <!-- Carousel Slider wt loading bar  -->
  <div class="second">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="carousel-sliderL1 owl-carousel">
            <div class="item"><img src="img/1.jpg" alt=""></div>
            <div class="item"><img src="img/2.jpg" alt=""></div>
            <div class="item"><img src="img/3.jpg" alt=""></div>
          </div>
        </div>
         <div class="col-md-6">
          <h2 class="text-success text-center">Jbl Speaker</h2>

			<hr>

        </div>
      </div>
    </div>
  </div>
   <div class="container">
    <div class="row">
		<div class="col-md-12">
			<h3>Tab Example by Yoat themes</h3>

			<div class="tabbable-panel">
				<div class="tabbable-line">
					<ul class="nav nav-tabs ">
						<li class="active">
							<a href="#tab_default_1" data-toggle="tab">
							Tab 1 </a>
						</li>
						<li>
							<a href="#tab_default_2" data-toggle="tab">
							Tab 2 </a>
						</li>
						<li>
							<a href="#tab_default_3" data-toggle="tab">
							Tab 3 </a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="tab_default_1">
							<p>
								I'm in Tab 1.
							</p>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							</p>
							<p>
								<a class="btn btn-success" href="#" target="_blank">
								Submit
								</a>
							</p>
						</div>
						<div class="tab-pane" id="tab_default_2">
							<p>
							 I'm in Tab 2.
							</p>
							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							</p>
							<p>
								<a class="btn btn-warning" href="#" target="_blank">
								Submit
								</a>
							</p>
						</div>
						<div class="tab-pane" id="tab_default_3">
							<p>
							 I'm in Tab 3.
							</p>
							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							</p>
							<p>
								<a class="btn btn-info" href="#" target="_blank">
								Submit
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>
		</div>
<?php 
include 'footer.php';

?>


</div>
<?php 
include 'navbar.php';

?>
<!-- BEGIN: CORE PLUGINS -->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script>
<script type="text/javascript" src="js/jquery.easing.js"></script>
<script type="text/javascript" src="js/modernizr.js"></script>
<script type="text/javascript" src="js/jquery-waypoint.js"></script>
<!-- END: CORE PLUGINS -->
<!-- BEGIN: LAYOUT PLUGINS -->
<script type="text/javascript" src="js/plugins/jquery.sticky.js"></script>
<script type="text/javascript" src="js/plugins/sticky-sidebar.js"></script>
<script type="text/javascript" src="js/plugins/owlmenu.js"></script>
<script type="text/javascript" src="js/plugins/parallax.js"></script>
<script type="text/javascript" src="js/plugins/owl.carousel.js"></script>
<!-- END: LAYOUT PLUGINS -->
<!-- BEGIN: THEME SCRIPTS -->
<script type="text/javascript" src="js/elements/search-and-side-navigation.js"></script>
<!-- END: THEME SCRIPTS -->
<!--==============================Style Switcher =================================-->

</body>
</html>


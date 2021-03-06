<?php

/**
 * The header for our theme.
 *
 * @package QOD_Starter_Theme
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site container">
		<a class="skip-link screen-reader-text" href="#content"><?php echo esc_html('Skip to content'); ?></a>
		<header id="masthead" class="site-header" role="banner">	
		<div class="site-branding">
				<a href="<?= get_home_url(); ?>">
					<img class="main-logo" src="<?= get_template_directory_uri() ?>/assets/qod-logo.svg">
				</a>
				<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
				<!-- <p class="site-description"><?php bloginfo('description'); ?></p> -->
			</div><!-- .site-branding -->
		</header><!-- #masthead -->
		<div id="content" class="site-content">
			<div class="content-with-quotes">
				<div class="quote-icon"><i class="fas fa-quote-left"></i></div>
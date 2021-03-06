<?php

/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>
<div class="quote-icon"><i class="fas fa-quote-right"></i></div>
</div><!-- #content -->
</div>

<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-info">
		<nav id="site-navigation" class="main-navigation toggled" role="navigation">
			<?php wp_nav_menu(array('theme_location' => 'primary', 'menu_id' => 'primary-menu')); ?>
		</nav><!-- #site-navigation -->
		<p>Brought to you by <a href="http://www.redacademy.com/">I.E. Doornbosch</a></p>
	</div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
<?php

/**
 * The main template file.
 *
 * @package QOD_Starter_Theme
 */
get_header(); ?>
<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<div class="content-with-quotes">
		<div class="quote-icon"><i class="fas fa-quote-left"></i></div>
			<div class="home-content">
				<?php if (have_posts()) : ?>

					<?php /* Start the Loop */ ?>
					<?php while (have_posts()) : the_post(); ?>

						<?php get_template_part('template-parts/content'); ?>

					<?php endwhile; ?>

				<?php else : ?>

					<?php get_template_part('template-parts/content', 'none'); ?>

				<?php endif; ?>
			</div>
			<div class="quote-icon"><i class="fas fa-quote-right"></i></div>
				</div>
	</main><!-- #main -->
</div><!-- #primary -->
<?php get_footer(); ?>
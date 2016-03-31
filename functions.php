<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

        
if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css' );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css' );

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css' );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css' );

// END ENQUEUE PARENT ACTION


function child_theme_js() {
    wp_enqueue_script( 'sawin_js', get_stylesheet_directory_uri() . '/js/sawin.js', array( 'jquery', 'appstack-main' ), '1.0', true );
    wp_register_script('recaptcha_api', 'https://www.google.com/recaptcha/api.js');
	wp_enqueue_script('recaptcha_api');
}


add_action('wp_enqueue_scripts', 'child_theme_js');

function send_mail_for_form( $cf7_posted_data ) {
    $wpcf7 = WPCF7_ContactForm::get_current();
    if ( $wpcf7->id() == 596 ) {
            $wpcf7->skip_mail = false;
    }
    return $cf7_posted_data;
}
add_filter('wpcf7_posted_data', 'send_mail_for_form');
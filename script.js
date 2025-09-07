// Email form handling
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // For now, just show an alert. Later, integrate with email service
    alert('Thank you for subscribing! We\'ll notify you when the book is available.');
    
    // Track conversion in Google Analytics
    gtag('event', 'email_signup', {
        'event_category': 'engagement',
        'event_label': 'newsletter_signup'
    });
    
    // Clear the form
    this.reset();
});

// Notify button handling
document.getElementById('notify-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Track clicks on external links (for future Amazon links)
function trackAmazonClick() {
    gtag('event', 'amazon_click', {
        'event_category': 'outbound',
        'event_label': 'amazon_book_link'
    });
}
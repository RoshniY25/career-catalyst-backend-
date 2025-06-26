FROM php:8.2-apache

# Enable Apache mod_rewrite (optional, useful for frameworks)
RUN a2enmod rewrite

# Copy project files into Apache server directory
COPY . /var/www/html/

# Set permissions (good practice)
RUN chown -R www-data:www-data /var/www/html/

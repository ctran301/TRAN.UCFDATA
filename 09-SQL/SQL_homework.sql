#1a
USE sakila;

SELECT first_name, last_name FROM actor;

#1b
SELECT concat(first_name," ", last_name) AS "Actor Name"
FROM actor;

#2a
SELECT actor_id, first_name, last_name FROM actor 
WHERE first_name = 'Joe';

#2b 
SELECT last_name FROM actor
WHERE last_name LIKE '%GEN%';

#2c
SELECT last_name, first_name FROM actor
WHERE last_name LIKE '%LI%'
ORDER BY last_name, first_name;

#2d
SELECT country_id, country from country
WHERE country IN ('Afghanistan','Bangladesh', 'China');

#3a
ALTER TABLE actor
ADD COLUMN middle_name VARCHAR(45);

#3b
ALTER TABLE actor
MODIFY middle_name BLOB;

#3c
ALTER TABLE actor
DROP COLUMN middle_name;

#4a
SELECT last_name, COUNT(last_name) as 'Count of Last Name'
FROM actor
GROUP BY last_name;

#4b
SELECT last_name, COUNT(last_name) as 'Count of Last Name'
FROM actor
GROUP BY last_name
HAVING COUNT (last_name) >=2;

#4c
UPDATE actor
SET first_name = 'Harpo'
WHERE first_name = 'GROUCHO' AND  last_name = 'WILLIAMS';

#4d
UPDATE actor
SET first_name = CASE
WHEN first_name = 'HARPO'
THEN 'GROUCHO'
ELSE  'MUCHO GROUCHO'
END
WHERE actor_id = 172;

#5a
SHOW CREATE TABLE sakila.address;

#6a
SELECT first_name, last_name, address
FROM staff s
INNER JOIN address a
ON s.address_id = a.address_id;

#6b
SELECT first_name, last_name, SUM(amount)
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id
GROUP BY p.staff_id
ORDER BY last_name ASC;

#6c
SELECT title, COUNT(actor_id)
FROM film f
INNER JOIN film_actor fa
ON f.film_id = fa.film_id
GROUP BY title;

#6d
SELECT title, COUNT(inventory_id)
FROM film f
INNER JOIN inventory i 
ON f.film_id = i.film_id
WHERE title = "Hunchback Impossible";

#6e
SELECT last_name, first_name, SUM(amount)
FROM payment p 
INNER JOIN customer c 
ON p.customer_id = c.customer_id
GROUP BY p.customer_id
ORDER BY last_name ASC;
#7a
SELECT title FROM film
WHERE language_id IN 
	(SELECT language_id
    FROM language
    WHERE name = 'English')
AND (title LIKE'K%') OR (TITLE LIKE 'Q%');
#7b
SELECT last_name, first_name
FROM actor
WHERE film_id in 

SELECT first_name, last_name FROM actor
WHERE actor_id IN (
	SELECT actor_id FROM film_actor 
    WHERE film_id = (
		SELECT film_id FROM film 
        WHERE title = "Alone Trip"));
	
	
-- 7c. 
SELECT c.first_name, c.last_name, c.email
FROM customer AS c
INNER JOIN address AS a
    ON c.address_id = a.address_id
INNER JOIN city AS cy
    ON a.city_id = cy.city_id
INNER JOIN country AS co
    ON cy.country_id = co.country_id
WHERE co.country = "Canada";


-- 7d. 
SELECT title
FROM film
WHERE film_id IN (

    SELECT film_id
    FROM film_category
    WHERE category_id = (

        SELECT category_id
        FROM category
        WHERE name = "Family"
        )
    );


-- 7e. 
SELECT f.title, COUNT(f.title) AS rent_count
FROM rental AS r
INNER JOIN inventory AS i
    ON r.inventory_id = i.inventory_id
INNER JOIN film AS f
    ON i.film_id = f.film_id
GROUP BY f.title
ORDER BY rent_count DESC;


-- 7f.
SELECT a.address, cy.city, co.country, SUM(p.amount) AS total_revenue
FROM store AS s
INNER JOIN address AS a
    ON s.address_id = a.address_id
INNER JOIN customer AS c
    ON s.store_id=c.store_id
INNER JOIN payment AS p
    ON p.customer_id = c.customer_id
INNER JOIN city AS cy
    ON cy.city_id = a.city_id
INNER JOIN country AS co
    ON co.country_id = cy.country_id
GROUP BY a.address, cy.city, co.country;


-- 7g. Write a query to display for each store its store ID, city, and country.
SELECT s.store_id, a.address, cy.city, co.country
FROM store AS s
INNER JOIN address AS a
    ON s.address_id = a.address_id
INNER JOIN city AS cy
    ON cy.city_id = a.city_id
INNER JOIN country AS co
    ON co.country_id = cy.country_id;


-- 7h. 
SELECT c.name, SUM(p.amount) AS gross_revenue
FROM category AS c
INNER JOIN film_category AS fc
    ON c.category_id = fc.category_id
INNER JOIN inventory AS i
    ON fc.film_id = i.film_id
INNER JOIN rental AS r
    ON i.inventory_id = r.inventory_id
INNER JOIN payment AS p
    ON r.rental_id = p.rental_id
GROUP BY name
ORDER BY gross_revenue DESC
LIMIT 5;


-- 8a. In your new role as an executive, you would like to have an easy way of viewing the Top five genres by gross revenue. Use the solution from the problem above to create a view. If you haven't solved 7h, you can substitute another query to create a view.
CREATE VIEW top5_genre_gross_revenue AS
SELECT c.name, SUM(p.amount) AS gross_revenue
FROM category AS c
INNER JOIN film_category AS fc
    ON c.category_id = fc.category_id
INNER JOIN inventory AS i
    ON fc.film_id = i.film_id
INNER JOIN rental AS r
    ON i.inventory_id = r.inventory_id
INNER JOIN payment AS p
    ON r.rental_id = p.rental_id
GROUP BY name
ORDER BY gross_revenue DESC
LIMIT 5;


-- 8b. 
SELECT * FROM top5_genre_gross_revenue;


-- 8c. 
DROP VIEW IF EXISTS top5_genre_gross_revenue;
 
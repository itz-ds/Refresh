CREATE DATABASE refresh_practice;
USE refresh_practice;

CREATE TABLE authors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);

CREATE TABLE reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(150),
  category ENUM('game','book','movie'),
  rating INT,
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO authors (name) VALUES ('Arun'), ('Meena'), ('Ravi');

INSERT INTO reviews (title, category, rating, author_id) VALUES
('Elden Ring', 'game', 5, 1),
('Dune', 'book', 4, 1),
('Inception', 'movie', 5, 2),
('Hades', 'game', 4, 2),
('Gone Girl', 'book', 3, 2),
('Tenet', 'movie', 3, 1),
('Celeste', 'game', 5, 1);

select * from reviews
where rating >= 4;

select count(category) as no_of_reviews, category
from reviews group by category;

select * from reviews
inner join authors
on reviews.auther_id = authors.id;

select reviews.title, reviews.category, reviews.rating, authors.name
from reviews
inner join authors on reviews.author_id = authors.id;

select author_id, avg(rating) as avgRating
from reviews
group by author_id
having avgRating >= 4;

select authors.name, avg(reviews.rating) as avg_rating
from reviews
inner join authors on reviews.author_id = authors.id
group by authors.name
having avg(reviews.rating) >=4;

select * from authors
left join reviews
on authors.id = reviews.author_id
where reviews.author_id is null;
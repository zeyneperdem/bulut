<?php
// Veritabanı bağlantısı için ayarlar
$host = 'localhost'; // Veritabanı sunucusu
$dbname = 'bookarchive'; // Veritabanı adı
$username = 'root'; // MySQL kullanıcı adı
$password = ''; // MySQL şifresi (varsa)

try {
    // PDO ile veritabanına bağlanma
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Hata raporlamayı etkinleştirme
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Veritabanı bağlantısı başarısız: " . $e->getMessage());
}

// Yorum gönderildiyse işlemi yap
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit_review'])) {
    $user = htmlspecialchars($_POST['username']); // Kullanıcı adı
    $review_text = htmlspecialchars($_POST['review-text']); // Yorum metni

    // Yorum verisini veritabanına ekleme
    $stmt = $pdo->prepare("INSERT INTO reviews (username, review_text) VALUES (:username, :review_text)");
    $stmt->bindParam(':username', $user);
    $stmt->bindParam(':review_text', $review_text);
    $stmt->execute();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intermezzo - Book Detail</title>
  <link rel="stylesheet" href="intermezzo.css">
</head>
<body>

    <header>
    <h1>bookarchive</h1>
    <nav>
      <ul>
        <li><a href="x.html">home</a></li>
        <li><a href="profile.html">profile</a></li>
      </ul>
    </nav>
  </header>

  <section id="book-detail">
    <div class="book-container">
      <div class="book-image">
        <img src="images/int.jpg" alt="Book Cover">
      </div>
      <div class="book-info">
        <h2>Intermezzo</h2>
        <p class="author">author: Sally Rooney</p>
        <p class="published">published: 2024</p>
        <p class="description">
            An exquisitely moving story about grief, love, and family—but especially love—from the global phenomenon Sally Rooney. 
        </p>
      </div>
    </div>
  </section>

  <section id="user-reviews">
    <h3>User Reviews</h3>
    <div class="reviews-container">
      <?php
        // Yorumları veritabanından çekme
        $stmt = $pdo->query("SELECT username, review_text, created_at FROM reviews ORDER BY created_at DESC");
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<div class='review'>";
            echo "<p class='review-author'><strong>" . htmlspecialchars($row['username']) . ":</strong></p>";
            echo "<p class='review-text'>" . nl2br(htmlspecialchars($row['review_text'])) . "</p>";
            echo "<p class='review-date'>" . $row['created_at'] . "</p>";
            echo "</div>";
        }
      ?>
    </div>

    <div class="review-form">
      <h4>Add a Review</h4>
      <form method="POST" action="">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="review-text">Your Review:</label>
        <textarea id="review-text" name="review-text" rows="4" required></textarea>

        <button type="submit" name="submit_review" class="btn-primary">Submit Review</button>
      </form>
    </div>
  </section>

</body>
</html>

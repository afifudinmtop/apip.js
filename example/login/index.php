<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

    <title>Prototype</title>

    <!-- Favicons -->
    <link href="../assets/img/favicon.png" rel="icon" />
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet"
    />

    <!-- bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

    <!-- apip -->
    <script src="../assets/apip.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone"></script>

    <!-- Template Main CSS File -->
    <link href="../assets/css/style.css?<?= time() ?>" rel="stylesheet" />
    <link href="./style.css?<?= time() ?>" rel="stylesheet" />
  </head>

  <body>
    <div id="root" class="mx-auto"></div>

    <script
      src="./header/header.js?<?= time() ?>"
      type="text/babel"
    ></script>

    <script
      src="./title/title.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./form/form_create.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./form/form_password.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./form/form_remember.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./form/form_submit.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./form/form_username.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./form/form.js?<?= time() ?>"
      type="text/babel"
    ></script>
    
    <script
      src="./main.js?<?= time() ?>"
      type="text/babel"
    ></script>

    <script
      src="./app.js?<?= time() ?>"
      type="text/babel"
    ></script>
  </body>
</html>

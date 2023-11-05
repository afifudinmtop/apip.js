/** @jsx apip.createElement */
function Form() {
  return (
    <form
      class="row g-3 needs-validation"
      enctype="application/x-www-form-urlencoded"
      action="./API/login.php"
      method="post"
    >
      <Form_username />
      <Form_password />
      <Form_remember />
      <Form_submit />
      <Form_create />
    </form>
  );
}

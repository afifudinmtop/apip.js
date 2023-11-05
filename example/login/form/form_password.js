/** @jsx apip.createElement */
function Form_password() {
  return (
    <div class="col-12">
      <label for="yourPassword" class="form-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        class="form-control"
        id="yourPassword"
        required
      />
      <div class="invalid-feedback">Please enter your password!</div>
    </div>
  );
}

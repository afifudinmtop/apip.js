/** @jsx apip.createElement */
function Form_username() {
  return (
    <div class="col-12">
      <label for="yourUsername" class="form-label">
        Username
      </label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">
          @
        </span>
        <input
          type="text"
          name="username"
          class="form-control"
          id="yourUsername"
          required
        />
        <div class="invalid-feedback">Please enter your username.</div>
      </div>
    </div>
  );
}

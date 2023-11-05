/** @jsx apip.createElement */
function Form_remember() {
  return (
    <div class="col-12">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name="remember"
          value="true"
          id="rememberMe"
        />
        <label class="form-check-label" for="rememberMe">
          Remember me
        </label>
      </div>
    </div>
  );
}

/** @jsx apip.createElement */
function Form_create() {
  return (
    <div class="col-12">
      <p class="small mb-0" onclick={tes}>
        Don't have account? <a href="#">Create an account</a>
      </p>
    </div>
  );
}

function tes() {
  console.log("ok");
}

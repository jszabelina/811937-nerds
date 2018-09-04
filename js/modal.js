<script>
  var write = document.querySelector("write-us-button");
  var modal = document.querySelector("modal");
  var close = document.querySelector("modal-close");

  write.addEventListener("click", function (evt) {
  evt.preventDefoult();
  modal.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
  evt.preventDefoult();
  modal.classList.remove("modal-show");
});
</script>

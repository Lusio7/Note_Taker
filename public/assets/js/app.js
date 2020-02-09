// SAVE NOTE BUTTON ON-CLICK EVENT
const $submitBtn = $(".submit");

const submitClick = function (event) {
  event.preventDefault();

  // Get note info from the form
  var newNote = {
    title: $(".note-title").val().trim(),
    note: $(".note-textarea").val().trim(),
  };
  console.log(newNote)
  // POST the note to "/api.notes"
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: newNote
  }).then(function(data) {
    // Alert user when note has been saved
    if (data) {
      alert("Note has been saved!");
    }

    // Clear the form after submitting
    $(".title-content").val("");
    $(".note-content").val("");

    // call shownotes
    showNotes();
  }
  );
};
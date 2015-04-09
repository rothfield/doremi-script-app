function enableTab(id) {
		var el = document.getElementById("z" + id);
		el.onkeydown = function(e) {
				if (e.keyCode === 9) { // tab was pressed
						// get caret position/selection
						var val = this.value,
						start = this.selectionStart,
						end = this.selectionEnd;


						// put caret at right position again
						this.selectionStart = this.selectionEnd = start + 1;

						// prevent the focus lose
						return false;
				}
		}
}
		// or http://jsfiddle.net/adamadam123/bTUWa/5/
function jquery_stuff() {
		jQuery("#btn").on('click', function() {
				var caretPos = document.getElementById("txt").selectionStart;
				var textAreaTxt = jQuery("#txt").val();
				var txtToAdd = "stuff";
				jQuery("#txt").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
		});
}

